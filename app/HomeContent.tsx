import Nav from "../components/Nav";
import { getCollection, isCanonicalReportSlug, isStrategicInsight } from "../lib/content";
import { visualSpecs } from "../lib/visual-specs";

export default function HomeContent() {
  const reports = getCollection("Reports").filter((item) => isCanonicalReportSlug(item.slug));
  const insights = getCollection("Insights").filter((item) => isStrategicInsight(item));

  const featuredReports = reports.filter((item) => item.featured).slice(0, 4);
  const strategicBriefs = insights.filter((item) => item.featured).slice(0, 6);
  const visualReports = visualSpecs
    .map((spec) => {
      const report = reports.find((item) => item.slug === spec.reportSlug);
      if (!report) return null;
      return { report, spec };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 6);

  return (
    <main>
      <Nav />

      <section className="section detailHero" style={{ maxWidth: "1120px", marginTop: "2rem" }}>
        <span className="eyebrow">DataClaw Intelligence Platform</span>
        <h1 style={{ fontSize: "4rem", marginBottom: "1.5rem", lineHeight: 1.02 }}>
          Premium Market Intelligence
          <br />
          for Thailand&apos;s Next Growth Signals.
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "720px", color: "var(--text-secondary)" }}>
          A curated intelligence surface for executives, category teams, and operators. We separate flagship reports,
          strategic syntheses, and visual-ready market shifts so the website reads like an editorial product, not a file dump.
        </p>

        <div className="metricsRow">
          <div className="metricBlock">
            <span className="val">{reports.length}</span>
            <span className="label">Canonical Reports</span>
          </div>
          <div className="metricBlock">
            <span className="val">{insights.length}</span>
            <span className="label">Strategic Insights</span>
          </div>
          <div className="metricBlock">
            <span className="val">{featuredReports.length}</span>
            <span className="label">Featured Briefs</span>
          </div>
          <div className="metricBlock">
            <span className="val">{visualReports.length}</span>
            <span className="label">Visual-Ready Reports</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <span>Flagship Editorial</span>
            <h2>Featured Reports</h2>
          </div>
          <a href="/reports" className="btn-primary" style={{ padding: "0.5rem 1rem" }}>
            View Report Library
          </a>
        </div>
        <div className="grid-12">
          {featuredReports.map((item, index) => (
            <a key={item.slug} href={`/reports/${item.slug}`} style={{ gridColumn: index === 0 ? "span 6" : "span 3" }}>
              <article className="premium-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
                  <span className="statusPill mini" style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--muted)" }}>
                    {item.slug}
                  </span>
                  <span className="eyebrow" style={{ margin: 0 }}>{item.publishDate}</span>
                </div>
                <h3 style={{ fontSize: index === 0 ? "1.9rem" : "1.2rem", lineHeight: 1.12 }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{item.summary}</p>
                <div style={{ marginTop: "auto", borderTop: "1px solid var(--muted)", paddingTop: "1rem" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.visualLabel || "Premium Intelligence"}
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <span>Synthesized Intelligence</span>
            <h2>Strategic Briefs</h2>
          </div>
          <a href="/insights" className="btn-primary" style={{ padding: "0.5rem 1rem" }}>
            Explore Insights
          </a>
        </div>
        <div className="grid-12">
          {strategicBriefs.map((item) => (
            <a key={item.slug} href={`/insights/${item.slug}`} style={{ gridColumn: "span 4" }}>
              <article className="premium-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <span className="eyebrow" style={{ margin: 0 }}>{item.category || item.tags[1]}</span>
                  <span className="statusPill mini" style={{ background: "transparent", border: "1px solid var(--muted)", color: "var(--text-secondary)" }}>
                    {item.confidence || "Validated"}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", lineHeight: 1.18 }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem" }}>{item.summary}</p>
                <div style={{ marginTop: "auto", borderTop: "1px solid var(--muted)", paddingTop: "1rem" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600 }}>
                    {item.relatedReports?.join(" • ") || "Strategic Insight"}
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span>Visual Layer</span>
          <h2>Data Visual Candidates</h2>
        </div>
        <div className="grid-12">
          {visualReports.map(({ report, spec }) => (
            <a key={report.slug} href={`/signals#${spec.slug}`} style={{ gridColumn: "span 6" }}>
              <article className="premium-card" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1.5rem", alignItems: "stretch" }}>
                <div>
                  <span className="eyebrow">{spec.chartType}</span>
                  <h3 style={{ fontSize: "1.45rem", lineHeight: 1.14, marginBottom: "0.75rem" }}>{report.title}</h3>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{spec.insight}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <span className="statusPill mini" style={{ width: "fit-content", background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--muted)" }}>
                      {spec.supportingMetrics[0] || report.primarySignal || "Key visual signal"}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {spec.supportingMetrics[1] || report.secondarySignal || report.evidenceNote || "Structured for chart, matrix, or comparison card."}
                    </span>
                  </div>
                </div>
                <div style={{ background: "linear-gradient(180deg, rgba(187,109,61,0.08), rgba(11,18,32,0.03))", border: "1px solid var(--muted)", borderRadius: "16px", padding: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <span className="eyebrow" style={{ color: "var(--text-primary)" }}>{spec.layout}</span>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Recommended Treatment</span>
                    <strong style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>
                      {spec.chartType}
                    </strong>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
