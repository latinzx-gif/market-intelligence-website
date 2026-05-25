import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { getCollection, getContentItem, isStrategicInsight } from "../../../lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type InsightSection = {
  title: string;
  lines: string[];
};

function parseSections(body: string): InsightSection[] {
  const lines = body.split(/\r?\n/);
  const sections: InsightSection[] = [];
  let current: InsightSection | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("# ")) continue;

    if (line.startsWith("## ")) {
      current = { title: line.replace(/^##\s+/, "").trim(), lines: [] };
      sections.push(current);
      continue;
    }

    if (!current) continue;
    current.lines.push(line);
  }

  return sections.filter((section) => section.lines.length > 0);
}

function toParagraph(lines: string[]) {
  return lines
    .filter((line) => !line.startsWith("- "))
    .join(" ")
    .trim();
}

export function generateStaticParams() {
  return getCollection("Insights")
    .filter((item) => isStrategicInsight(item))
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Insights", slug);
  if (!item) return {};
  return { title: `${item.title} | DataClaw`, description: item.summary };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Insights", slug);
  if (!item || !isStrategicInsight(item)) notFound();

  const sections = parseSections(item.body);

  return (
    <main>
      <Nav />

      <header className="section detailHero" style={{ maxWidth: "980px" }}>
        <span className="eyebrow">{item.category || "Strategic Insight"}</span>
        <h1 className="editorial-heading" style={{ fontSize: "3.8rem", marginBottom: "1rem", lineHeight: 1.04 }}>
          {item.title}
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", maxWidth: "720px" }}>{item.summary}</p>
        <div className="metricsRow" style={{ marginTop: "2rem" }}>
          <div className="metricBlock">
            <span className="val">{item.signals?.length || 0}</span>
            <span className="label">Signals</span>
          </div>
          <div className="metricBlock">
            <span className="val">{item.relatedReports?.length || 0}</span>
            <span className="label">Linked Reports</span>
          </div>
          <div className="metricBlock">
            <span className="val">{item.confidence || "High"}</span>
            <span className="label">Confidence</span>
          </div>
          <div className="metricBlock">
            <span className="val">{item.readTime || "4 min read"}</span>
            <span className="label">Reading Time</span>
          </div>
        </div>
      </header>

      <section className="section" style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: "2rem", alignItems: "start" }}>
        <article className="premium-card" style={{ padding: "2.5rem" }}>
          {sections.map((section) => (
            <section key={section.title} style={{ marginBottom: "2rem" }}>
              <h2 className="editorial-heading" style={{ fontSize: "1.9rem", marginBottom: "0.8rem" }}>{section.title}</h2>
              {toParagraph(section.lines) ? (
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: section.lines.some((line) => line.startsWith("- ")) ? "1rem" : 0 }}>
                  {toParagraph(section.lines)}
                </p>
              ) : null}
              {section.lines.some((line) => line.startsWith("- ")) ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {section.lines
                    .filter((line) => line.startsWith("- "))
                    .map((line) => (
                      <div key={line} style={{ padding: "1rem 1.1rem", borderRadius: "14px", background: "var(--bg-secondary)", border: "1px solid var(--muted)", color: "var(--text-secondary)" }}>
                        {line.replace(/^- /, "")}
                      </div>
                    ))}
                </div>
              ) : null}
            </section>
          ))}
        </article>

        <aside className="premium-card" style={{ padding: "2rem", position: "sticky", top: "1.5rem" }}>
          <span className="eyebrow" style={{ marginBottom: "1rem" }}>Evidence Matrix</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Primary Signal</span>
              <strong style={{ lineHeight: 1.4 }}>{item.primarySignal || item.summary}</strong>
            </div>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Secondary Signal</span>
              <p style={{ color: "var(--text-secondary)", margin: 0 }}>{item.secondarySignal || item.evidenceNote}</p>
            </div>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Connected Reports</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {item.relatedReports?.map((report) => (
                  <a key={report} href={`/reports/${report}`} className="statusPill mini" style={{ background: "var(--bg-secondary)", color: "var(--accent)", border: "1px solid var(--muted)" }}>
                    {report}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Supporting Signals</span>
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
