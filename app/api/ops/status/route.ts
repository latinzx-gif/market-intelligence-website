import { execSync } from "node:child_process";
import fs from "node:fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ROOT = "/Users/jakarinosk/Documents/DataClaw 2026";
const REPORTS_DIR = `${ROOT}/market-intelligence-website/Website_Content/Reports`;
const STATUS_FILE = `/tmp/dataclaw/GEMINI_HOURLY_STATUS.md`;
const LOG_FILE = "/tmp/gemini-supervised.log";
const SESSION = "gemini-supervised";
const REPORT_TITLE_FALLBACK = "Unknown Report";
const APPROVAL_DIR = `/tmp/dataclaw/APPROVALS`;

function run(cmd: string) {
  try {
    return execSync(cmd, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function readFile(path: string) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch {
    return "";
  }
}

function latestFile(pattern: RegExp) {
  try {
    const files = fs
      .readdirSync(REPORTS_DIR)
      .filter((name) => pattern.test(name))
      .map((name) => {
        const stat = fs.statSync(`${REPORTS_DIR}/${name}`);
        return { name, mtimeMs: stat.mtimeMs };
      })
      .sort((a, b) => b.mtimeMs - a.mtimeMs);
    return files[0]?.name || "";
  } catch {
    return "";
  }
}

function extractReportSlug(processList: string, pane: string, logTail: string) {
  const merged = `${processList}\n${pane}\n${logTail}`;
  const match = merged.match(/REPORT-\d{3}/);
  return match?.[0] || "";
}

function extractModel(processList: string) {
  const match = processList.match(/--model\s+([^\s]+)/);
  return match?.[1] || "auto";
}

function inferStep(pane: string, logTail: string) {
  const text = `${pane}\n${logTail}`.toLowerCase();
  if (text.includes("retrieve") || text.includes("source trace") || text.includes("evidence")) return "Retrieval";
  if (text.includes("analysis")) return "Analysis";
  if (text.includes("format") || text.includes("markdown")) return "Formatting";
  if (text.includes("qc") || text.includes("quality")) return "Quality Check";
  if (text.includes("done.") || text.includes("output:")) return "Completed";
  return "Queued";
}

function readReportTitle(slug: string) {
  if (!slug) return REPORT_TITLE_FALLBACK;
  const path = `${REPORTS_DIR}/${slug}.md`;
  const raw = readFile(path);
  const title = raw.match(/^title:\s*"(.+)"$/m)?.[1];
  return title || REPORT_TITLE_FALLBACK;
}

function readQcStatus(qcFile: string) {
  if (!qcFile) return "";
  const raw = readFile(`${REPORTS_DIR}/${qcFile}`);
  const status = raw.match(/^Status:\s*(.+)$/m)?.[1];
  return status || "";
}

function readApproval(slug: string) {
  if (!slug) return { decision: "", note: "", timestamp: "" };
  const raw = readFile(`${APPROVAL_DIR}/${slug}.md`);
  const timestamp = raw.match(/^Timestamp:\s*(.+)$/m)?.[1] || "";
  const decision = raw.match(/^Decision:\s*(.+)$/m)?.[1] || "";
  const note = raw.match(/^Note:\s*(.*)$/m)?.[1] || "";
  return { decision, note, timestamp };
}

export async function GET() {
  if (process.env.DATACLAW_ENABLE_OPS !== "true") {
    return Response.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  const tmuxSession = run(`tmux ls 2>/dev/null | rg "^${SESSION}:" || true`);
  const processList = run(`ps -ef | rg 'run_gemini_supervised_report.sh|gemini --skip-trust --model' | rg -v rg || true`);
  const pane = run(`tmux capture-pane -pt ${SESSION} -S -80 2>/dev/null | tail -n 80 || true`);
  const hourly = readFile(STATUS_FILE);
  const logTail = run(`tail -n 80 ${LOG_FILE} 2>/dev/null || true`);
  const latestSupervised = latestFile(/-SUPERVISED\.md$/);
  const latestQc = latestFile(/-QC\.md$/);
  const activeReportSlug = extractReportSlug(processList, pane, logTail);
  const activeModel = extractModel(processList);
  const activeStep = inferStep(pane, logTail);
  const activeTitle = readReportTitle(activeReportSlug);
  const qcStatus = readQcStatus(latestQc);
  const approval = readApproval(activeReportSlug);

  const pipeline = [
    { stage: "Intake", status: "done" },
    { stage: "Research", status: activeStep === "Retrieval" ? "in_progress" : "done" },
    { stage: "Writer", status: activeStep === "Analysis" ? "in_progress" : activeStep === "Queued" ? "pending" : "done" },
    { stage: "Review", status: activeStep === "Quality Check" ? "in_progress" : qcStatus ? "done" : "pending" },
    { stage: "Editor", status: activeStep === "Formatting" ? "in_progress" : activeStep === "Completed" ? "done" : "pending" },
    { stage: "Publisher", status: activeStep === "Completed" ? "in_progress" : "pending" },
  ];

  const kanban = [
    { agent: "Intake Agent", lane: "Done", task: "Scope locked", topic: activeTitle },
    { agent: "Research Agent", lane: activeStep === "Retrieval" ? "In Progress" : "Done", task: "Collect evidence lines", topic: activeTitle },
    { agent: "Writer Agent", lane: activeStep === "Analysis" ? "In Progress" : "Queued", task: "Draft structured report", topic: activeTitle },
    { agent: "Review Agent", lane: activeStep === "Quality Check" ? "In Progress" : qcStatus ? "Done" : "Queued", task: "Risk and evidence validation", topic: activeTitle },
    { agent: "Editor Agent", lane: activeStep === "Formatting" ? "In Progress" : "Queued", task: "Executive formatting polish", topic: activeTitle },
    { agent: "Publisher Agent", lane: activeStep === "Completed" ? "In Progress" : "Queued", task: "Prepare publish artifact", topic: activeTitle },
  ];

  return Response.json({
    now: new Date().toISOString(),
    sessionActive: Boolean(tmuxSession),
    tmuxSession,
    processActive: Boolean(processList),
    processList,
    pane,
    logTail,
    latestSupervised,
    latestQc,
    activeReportSlug,
    activeTitle,
    activeModel,
    activeStep,
    qcStatus,
    approval,
    pipeline,
    kanban,
    hourly,
  });
}
