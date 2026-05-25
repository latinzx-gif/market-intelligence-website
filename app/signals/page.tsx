import Nav from "../../components/Nav";
import { getCollection, getContentItem, isCanonicalReportSlug } from "../../lib/content";
import { visualSpecs } from "../../lib/visual-specs";

export default function SignalsPage() {
  const reports = getCollection("Reports").filter((item) => isCanonicalReportSlug(item.slug));
  const specs = visualSpecs
    .map((spec) => ({
      ...spec,
      report: getContentItem("Reports", spec.reportSlug),
    }))
    .filter((item) => item.report && reports.some((report) => report.slug === item.reportSlug));

  return (
    <main>
      <Nav />
      <header className="section detailHero" style={{ paddingBottom: "2rem" }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Visual Briefing Layer</span>
        <h1 className="editorial-heading" style={{ fontSize: "4rem", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          Graph & Visual Candidates
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "720px" }}>
          A premium shortlist of reports that justify strong chart treatments, with recommended layouts, metrics, and the
          commercial point each visual should make.
        </p>
      </header>

      <section className="section">
        <div className="grid-12">
          {specs.map((spec, index) => (
            <article id={spec.slug} key={spec.slug} className="premium-card" style={{ gridColumn: "span 12", padding: "2rem", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "2rem", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="statusPill mini" style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--muted)" }}>
                    {spec.chartType}
                  </span>
                  <a href={`/reports/${spec.reportSlug}`} className="eyebrow" style={{ margin: 0 }}>
                    {spec.reportSlug}
                  </a>
                </div>
                <h2 className="editorial-heading" style={{ fontSize: index < 2 ? "2.2rem" : "1.8rem", lineHeight: 1.1, marginBottom: "0.75rem" }}>
                  {spec.title}
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1rem" }}>
                  {spec.insight}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1rem" }}>
                  {spec.supportingMetrics.map((metric) => (
                    <span key={metric} className="statusPill mini" style={{ background: "transparent", color: "var(--accent)", border: "1px solid var(--muted)" }}>
                      {metric}
                    </span>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: "0.4rem" }}>Section</span>
                    <p style={{ margin: 0, color: "var(--text-secondary)" }}>{spec.section}</p>
                  </div>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: "0.4rem" }}>X-Axis</span>
                    <p style={{ margin: 0, color: "var(--text-secondary)" }}>{spec.xAxis || "Narrative axis"}</p>
                  </div>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: "0.4rem" }}>Y-Axis</span>
                    <p style={{ margin: 0, color: "var(--text-secondary)" }}>{spec.yAxis || "Commercial intensity"}</p>
                  </div>
                </div>
              </div>

              <div style={{ background: "linear-gradient(180deg, rgba(187,109,61,0.08), rgba(11,18,32,0.03))", border: "1px solid var(--muted)", borderRadius: "18px", padding: "1.5rem" }}>
                <span className="eyebrow" style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>Recommended Layout</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{spec.layout}</h3>
                {spec.series ? (
                  <div style={{ marginBottom: "1rem" }}>
                    <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Series</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {spec.series.map((series) => (
                        <span key={series} className="statusPill mini" style={{ background: "white", color: "var(--text-primary)", border: "1px solid var(--muted)" }}>
                          {series}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Connected Report</span>
                  <strong style={{ lineHeight: 1.4 }}>{spec.report?.title}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
