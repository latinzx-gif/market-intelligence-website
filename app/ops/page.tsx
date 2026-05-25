"use client";

import { useEffect, useState } from "react";
import Nav from "../../components/Nav";

const OPS_ENABLED = process.env.NEXT_PUBLIC_DATACLAW_ENABLE_OPS === "true";

type OpsStatus = {
  now: string;
  sessionActive: boolean;
  tmuxSession: string;
  processActive: boolean;
  processList: string;
  pane: string;
  logTail: string;
  latestSupervised: string;
  latestQc: string;
  activeReportSlug: string;
  activeTitle: string;
  activeModel: string;
  activeStep: string;
  qcStatus: string;
  approval: { decision: string; note: string; timestamp: string };
  pipeline: Array<{ stage: string; status: string }>;
  kanban: Array<{ agent: string; lane: string; task: string; topic: string }>;
  hourly: string;
};

export default function OpsPage() {
  const [data, setData] = useState<OpsStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!OPS_ENABLED) {
      setLoading(false);
      return;
    }

    let stop = false;
    const load = async () => {
      try {
        const res = await fetch("/api/ops/status", { cache: "no-store" });
        const json = (await res.json()) as OpsStatus;
        if (!stop) setData(json);
      } finally {
        if (!stop) setLoading(false);
      }
    };
    load();
    const id = setInterval(load, 5000);
    return () => {
      stop = true;
      clearInterval(id);
    };
  }, []);

  return (
    <main>
      <Nav />
      <section className="section">
        <div className="sectionHeader reportsSectionHeader">
          <h1 className="editorial-heading reportsSectionTitle">Ops Dashboard</h1>
        </div>
        <p className="opsSubline">
          {OPS_ENABLED ? "Real-time status refreshes every 5 seconds." : "Internal operations are disabled on the public site."}
        </p>
      </section>

      {!OPS_ENABLED && (
        <section className="section">
          <article className="premium-card">
            <h3 className="opsCardTitle">Restricted Surface</h3>
            <p>Enable DATACLAW_ENABLE_OPS and NEXT_PUBLIC_DATACLAW_ENABLE_OPS only in a private operations deployment.</p>
          </article>
        </section>
      )}

      {loading && <p>Loading status...</p>}

      {data && (
        <section className="opsGrid">
          <article className="premium-card">
            <h3 className="opsCardTitle">Runtime</h3>
            <p><strong>Last Refresh:</strong> {data.now}</p>
            <p><strong>tmux Session:</strong> {data.sessionActive ? "Active" : "Inactive"}</p>
            <p><strong>Gemini Process:</strong> {data.processActive ? "Running" : "Stopped"}</p>
            <p><strong>Current Report:</strong> {data.activeTitle}</p>
            <p><strong>Current Slug:</strong> {data.activeReportSlug || "-"}</p>
            <p><strong>Current Step:</strong> {data.activeStep}</p>
            <p><strong>Model:</strong> {data.activeModel}</p>
            <p><strong>QC Status:</strong> {data.qcStatus || "-"}</p>
            <p><strong>Approval:</strong> {data.approval?.decision || "-"}</p>
            <p><strong>Latest Output:</strong> {data.latestSupervised || "-"}</p>
            <p><strong>Latest QC:</strong> {data.latestQc || "-"}</p>

            <div className="opsApproveBox">
              <input
                className="opsInput"
                placeholder="Approval note (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <div className="opsBtnRow">
                <button
                  className="opsBtn opsBtnPrimary"
                  disabled={saving || !data.activeReportSlug}
                  onClick={async () => {
                    setSaving(true);
                    try {
                      await fetch("/api/ops/approval", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ slug: data.activeReportSlug, decision: "approve", note }),
                      });
                      setNote("");
                    } finally {
                      setSaving(false);
                    }
                  }}
                >
                  Approve
                </button>
                <button
                  className="opsBtn"
                  disabled={saving || !data.activeReportSlug}
                  onClick={async () => {
                    setSaving(true);
                    try {
                      await fetch("/api/ops/approval", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ slug: data.activeReportSlug, decision: "reject", note }),
                      });
                      setNote("");
                    } finally {
                      setSaving(false);
                    }
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </article>

          <article className="premium-card opsSpan2">
            <h3 className="opsCardTitle">Pipeline</h3>
            <div className="pipeRow">
              {(data.pipeline ?? []).map((p) => (
                <div key={p.stage} className={`pipeStep pipe-${p.status}`}>
                  <span>{p.stage}</span>
                  <small>{p.status.replace("_", " ")}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card opsSpan2">
            <h3 className="opsCardTitle">Kanban</h3>
            <div className="kanbanGrid">
              {["Queued", "In Progress", "Done"].map((lane) => (
                <div key={lane} className="kanbanLane">
                  <h4>{lane}</h4>
                  {(data.kanban ?? [])
                    .filter((card) => card.lane === lane)
                    .map((card) => (
                      <div key={`${lane}-${card.agent}`} className="kanbanCard">
                        <strong>{card.agent}</strong>
                        <p>{card.task}</p>
                        <small>{card.topic}</small>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card">
            <h3 className="opsCardTitle">Current Step</h3>
            <pre className="opsPre">{data.pane || "No active tmux pane output."}</pre>
          </article>

          <article className="premium-card">
            <h3 className="opsCardTitle">Process List</h3>
            <pre className="opsPre">{data.processList || "No active process."}</pre>
          </article>

          <article className="premium-card">
            <h3 className="opsCardTitle">Live Log Tail</h3>
            <pre className="opsPre">{data.logTail || "No log yet."}</pre>
          </article>

          <article className="premium-card opsSpan2">
            <h3 className="opsCardTitle">Hourly Summary</h3>
            <pre className="opsPre">{data.hourly || "No hourly summary file found."}</pre>
          </article>
        </section>
      )}
    </main>
  );
}
