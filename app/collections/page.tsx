import type { Metadata } from "next";
import Nav from "../../components/Nav";
import { getCollection } from "../../lib/content";

export const metadata: Metadata = {
  title: "Strategic Collections | DataClaw",
  description: "Executive intelligence collections linking DataClaw reports, insights, and Thailand market actions.",
};

export default function CollectionsPage() {
  const collections = getCollection("Collections");

  return (
    <main>
      <Nav />

      <header className="section detailHero" style={{ paddingBottom: "2rem" }}>
        <span className="eyebrow">Executive Intelligence Map</span>
        <h1 className="editorial-heading" style={{ fontSize: "4rem", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          Strategic Collections
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "760px" }}>
          The CB Insights-style layer for DataClaw: grouped theses that turn many reports into market narratives,
          commercial decisions, and Thailand-ready opportunity zones.
        </p>
      </header>

      <section className="section">
        <div className="grid-12">
          {collections.map((collection, index) => (
            <a
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              style={{ gridColumn: index < 2 ? "span 6" : "span 4" }}
            >
              <article className="premium-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
                  <span className="eyebrow" style={{ margin: 0 }}>{collection.category || "Market Thesis"}</span>
                  <span className="statusPill mini" style={{ background: "transparent", border: "1px solid var(--muted)", color: "var(--text-secondary)" }}>
                    {collection.confidence || "Validated"}
                  </span>
                </div>
                <h2 className="editorial-heading" style={{ fontSize: index < 2 ? "2rem" : "1.35rem", lineHeight: 1.14 }}>
                  {collection.title}
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.96rem", lineHeight: 1.6 }}>{collection.summary}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {collection.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="statusPill mini" style={{ background: "var(--bg-secondary)", color: "var(--accent)", border: "1px solid var(--muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "auto", borderTop: "1px solid var(--muted)", paddingTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
                    {collection.relatedReports?.length || 0} reports
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                    {collection.relatedInsights?.length || 0} insights
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
