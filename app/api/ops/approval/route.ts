import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const APPROVAL_DIR = "/tmp/dataclaw/APPROVALS";

function safeSlug(slug: string) {
  return /^REPORT-\d{3}$/.test(slug) ? slug : "";
}

function safeDecision(decision: string) {
  return decision === "approve" || decision === "reject" ? decision : "";
}

export async function POST(req: Request) {
  if (process.env.DATACLAW_ENABLE_OPS !== "true") {
    return Response.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const slug = typeof (body as any)?.slug === "string" ? (body as any).slug : "";
  const decision = typeof (body as any)?.decision === "string" ? (body as any).decision : "";
  const note = typeof (body as any)?.note === "string" ? (body as any).note : "";

  const safe = safeSlug(slug);
  const dec = safeDecision(decision);
  if (!safe || !dec) {
    return Response.json({ ok: false, error: "Invalid slug/decision" }, { status: 400 });
  }

  fs.mkdirSync(APPROVAL_DIR, { recursive: true });
  const stamp = new Date().toISOString();
  const out = [
    `# Approval: ${safe}`,
    ``,
    `Timestamp: ${stamp}`,
    `Decision: ${dec.toUpperCase()}`,
    note ? `Note: ${note}` : `Note:`,
    ``,
  ].join("\n");

  fs.writeFileSync(path.join(APPROVAL_DIR, `${safe}.md`), out, "utf8");
  return Response.json({ ok: true });
}
