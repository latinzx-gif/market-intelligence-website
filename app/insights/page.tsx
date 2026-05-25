import Nav from "../../components/Nav";
import { getCollection, isStrategicInsight } from "../../lib/content";

export default function InsightsPage() {
  const insights = getCollection("Insights")
    .filter((item) => isStrategicInsight(item))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.publishDate.localeCompare(a.publishDate);
    });

  return (
    <main>
      <Nav />

      <header className="section detailHero" style={{ paddingBottom: "2rem" }}>
        <span className="eyebrow">Synthesized Intelligence</span>
        <h1 className="editorial-heading" style={{ fontSize: "4rem", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          Strategic Insights
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "720px" }}>
          A premium layer of pattern recognition across reports, signals, and market shifts. These briefs are designed to
          surface what matters commercially before the reader dives into the full report library.
        </p>
      </header>

      <section className="section">
        <div className="grid-12">
          {insights.map((insight, index) => (
            <a key={insight.slug} href={`/insights/${insight.slug}`} style={{ gridColumn: index < 2 ? "span 6" : "span 4" }}>
              <article className="premium-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
                  <span className="eyebrow" style={{ margin: 0 }}>{insight.category || insight.tags[1]}</span>
                  <span className="statusPill mini" style={{ background: "transparent", border: "1px solid var(--muted)", color: "var(--text-secondary)" }}>
                    {insight.confidence || "Validated"}
                  </span>
                </div>
                <h2 className="editorial-heading" style={{ fontSize: index < 2 ? "2rem" : "1.35rem", lineHeight: 1.14 }}>{insight.title}</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.96rem", lineHeight: 1.6 }}>{insight.summary}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {insight.signals?.slice(0, 3).map((signal) => (
                    <span key={signal} className="statusPill mini" style={{ background: "var(--bg-secondary)", color: "var(--accent)", border: "1px solid var(--muted)" }}>
                      {signal}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "auto", borderTop: "1px solid var(--muted)", paddingTop: "1rem" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
                    {insight.relatedReports?.join(" • ") || insight.readTime || "Strategic Brief"}
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
