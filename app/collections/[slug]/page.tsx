import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { getCollection, getContentItem } from "../../../lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type CollectionSection = {
  title: string;
  lines: string[];
};

function parseSections(body: string): CollectionSection[] {
  const sections: CollectionSection[] = [];
  let current: CollectionSection | null = null;

  for (const rawLine of body.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("# ")) continue;

    if (line.startsWith("## ")) {
      current = { title: line.replace(/^##\s+/, "").trim(), lines: [] };
      sections.push(current);
      continue;
    }

    if (current) current.lines.push(line);
  }

  return sections.filter((section) => section.lines.length > 0);
}

function clean(line: string) {
  return line.replace(/^- /, "").replace(/\*\*/g, "").trim();
}

export function generateStaticParams() {
  return getCollection("Collections").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Collections", slug);
  if (!item) return {};
  return { title: `${item.title} | DataClaw`, description: item.summary };
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Collections", slug);
  if (!item) notFound();

  const sections = parseSections(item.body);
  const reports = item.relatedReports ?? [];
  const insights = item.relatedInsights ?? [];

  return (
    <main>
      <Nav />

      <header className="section detailHero" style={{ maxWidth: "980px" }}>
        <span className="eyebrow">{item.category || "Strategic Collection"}</span>
        <h1 className="editorial-heading" style={{ fontSize: "3.8rem", marginBottom: "1rem", lineHeight: 1.04 }}>
          {item.title}
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", maxWidth: "760px" }}>{item.summary}</p>
        <div className="metricsRow" style={{ marginTop: "2rem" }}>
          <div className="metricBlock">
            <span className="val">{reports.length}</span>
            <span className="label">Reports</span>
          </div>
          <div className="metricBlock">
            <span className="val">{insights.length}</span>
            <span className="label">Insights</span>
          </div>
          <div className="metricBlock">
            <span className="val">{item.signals?.length || 0}</span>
            <span className="label">Signals</span>
          </div>
          <div className="metricBlock">
            <span className="val">{item.confidence || "High"}</span>
            <span className="label">Confidence</span>
          </div>
        </div>
      </header>

      <section className="section" style={{ display: "grid", gridTemplateColumns: "1.35fr 0.65fr", gap: "2rem", alignItems: "start" }}>
        <article className="premium-card" style={{ padding: "2.5rem" }}>
          {item.takeaway ? (
            <blockquote className="reportV2HeroStatement" style={{ marginTop: 0 }}>{item.takeaway}</blockquote>
          ) : null}

          {sections.map((section) => (
            <section key={section.title} style={{ marginBottom: "2rem" }}>
              <h2 className="editorial-heading" style={{ fontSize: "1.9rem", marginBottom: "0.8rem" }}>{section.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {section.lines.map((line) => (
                  line.startsWith("- ") ? (
                    <div key={line} style={{ padding: "1rem 1.1rem", borderRadius: "14px", background: "var(--bg-secondary)", border: "1px solid var(--muted)", color: "var(--text-secondary)" }}>
                      {clean(line)}
                    </div>
                  ) : (
                    <p key={line} style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{clean(line)}</p>
                  )
                ))}
              </div>
            </section>
          ))}
        </article>

        <aside className="premium-card" style={{ padding: "2rem", position: "sticky", top: "1.5rem" }}>
          <span className="eyebrow" style={{ marginBottom: "1rem" }}>Linked Intelligence</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Reports</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {reports.map((report) => (
                  <a key={report} href={`/reports/${report}`} className="statusPill mini" style={{ background: "var(--bg-secondary)", color: "var(--accent)", border: "1px solid var(--muted)" }}>
                    {report}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Insights</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {insights.map((insight) => (
                  <a key={insight} href={`/insights/${insight}`} className="statusPill mini" style={{ background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--muted)" }}>
                    {insight}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Signals</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {item.signals?.map((signal) => (
                  <span key={signal} className="statusPill mini" style={{ background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--muted)" }}>
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
