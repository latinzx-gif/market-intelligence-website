import type { Metadata } from "next";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Methodology | DataClaw",
  description: "How DataClaw converts signals, reports, and strategic insights into Thailand-ready market intelligence.",
};

const workflow = [
  {
    title: "1. Signal Intake",
    body: "Collect shelf, commerce, regulation, platform, and consumer-behavior signals from raw source folders before any publishing decision.",
  },
  {
    title: "2. Report Dossier",
    body: "Turn signals into structured dossiers with market context, competitive map, Thailand implication, and business action.",
  },
  {
    title: "3. Strategic Synthesis",
    body: "Cluster multiple reports into executive insights and collections so the website reads like market intelligence, not a document dump.",
  },
  {
    title: "4. Public Gate",
    body: "Only canonical REPORT-### files and approved Strategic Insight files are routable. QC, supervised drafts, and reformatted working files stay internal.",
  },
];

const roles = [
  {
    owner: "Gemini CLI",
    scope: "Bulk dossier drafting, evidence expansion, first-pass formatting, and supervised report generation.",
  },
  {
    owner: "Team Agents",
    scope: "Manifest audit, leakage checks, competitor-style content strategy, collection design, QA, and publish readiness.",
  },
  {
    owner: "Website Publisher",
    scope: "Canonical routing, sitemap, public navigation, collection pages, and build/deploy verification.",
  },
];

export default function MethodologyPage() {
  return (
    <main>
      <Nav />

      <header className="section detailHero" style={{ paddingBottom: "2rem" }}>
        <span className="eyebrow">Editorial Operating System</span>
        <h1 className="editorial-heading" style={{ fontSize: "4rem", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          Methodology
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "780px" }}>
          DataClaw separates research production from public publishing. The website exposes executive-ready intelligence;
          internal agents keep the larger dossier pipeline organized, audited, and safe.
        </p>
      </header>

      <section className="section">
        <div className="grid-12">
          <article className="premium-card" style={{ gridColumn: "span 7", padding: "2.5rem" }}>
            <span className="eyebrow">Publishing Workflow</span>
            <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
              {workflow.map((step) => (
                <div key={step.title} style={{ padding: "1.25rem", borderRadius: "18px", background: "var(--bg-secondary)", border: "1px solid var(--muted)" }}>
                  <h2 className="editorial-heading" style={{ fontSize: "1.25rem", marginBottom: "0.45rem" }}>{step.title}</h2>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="premium-card" style={{ gridColumn: "span 5", padding: "2.5rem" }}>
            <span className="eyebrow">Agent Division</span>
            <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
              {roles.map((role) => (
                <div key={role.owner} style={{ borderBottom: "1px solid var(--muted)", paddingBottom: "1rem" }}>
                  <h2 className="editorial-heading" style={{ fontSize: "1.2rem", marginBottom: "0.35rem" }}>{role.owner}</h2>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{role.scope}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
