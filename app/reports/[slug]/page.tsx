import { notFound } from "next/navigation";
import { getCollection, getContentItem, isCanonicalReportSlug } from "../../../lib/content";
import Nav from "../../../components/Nav";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ReportBlock = { type: "paragraph" | "bullet"; text: string };
type ReportSection = { id: string; title: string; blocks: ReportBlock[] };
type CompetitorRow = { tier: string; positioning: string; products: string; price: string; target: string };

function toId(title: string, fallbackIndex: number) {
  const normalized = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return normalized || `section-${fallbackIndex + 1}`;
}

function parseBodySections(body: string): ReportSection[] {
  const content = body
    .split("## Appendix")[0]
    .split(/\r?\n/)
    .filter((line) => !line.startsWith("# DataClaw Intelligence Report"))
    .filter((line) => !line.startsWith("## Cover"));

  const sections: ReportSection[] = [];
  let current: ReportSection | null = null;

  for (const rawLine of content) {
    const line = rawLine.trim();
    if (!line || line === "---") continue;
    if (line.startsWith("**Title:**") || line.startsWith("**Subtitle:**") || line.startsWith("**Version:**") || line.startsWith("**Date:**")) continue;

    if (line.startsWith("## ")) {
      const title = line.replace(/^##\s+/, "").trim();
      current = { id: toId(title, sections.length), title, blocks: [] };
      sections.push(current);
      continue;
    }

    if (!current) continue;

    if (line.startsWith("- ")) {
      current.blocks.push({ type: "bullet", text: line.replace(/^- /, "").trim() });
      continue;
    }

    if (line.startsWith("### ")) {
      current.blocks.push({ type: "bullet", text: line.replace(/^###\s+/, "").trim() });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      current.blocks.push({ type: "bullet", text: line.replace(/^\d+\.\s+/, "").trim() });
      continue;
    }

    current.blocks.push({ type: "paragraph", text: line });
  }

  return sections.filter((section) => section.blocks.length > 0);
}

function stripMarkdown(text: string) {
  return text.replace(/\*\*/g, "").trim();
}

function splitLabel(text: string) {
  const match = text.match(/^([^:]+):\s*(.+)$/);
  if (!match) return { title: "", value: stripMarkdown(text) };
  return { title: stripMarkdown(match[1]), value: stripMarkdown(match[2]) };
}

function parseCompetitorRows(blocks: ReportBlock[]): CompetitorRow[] {
  const rows: CompetitorRow[] = [];
  let current: CompetitorRow | null = null;

  for (const block of blocks) {
    const text = stripMarkdown(block.text);
    if (/^Tier\s+\d+:/i.test(text)) {
      if (current) rows.push(current);
      current = { tier: text, positioning: "", products: "", price: "", target: "" };
      continue;
    }
    if (!current) continue;

    if (text.startsWith("Positioning:")) current.positioning = text.replace("Positioning:", "").trim();
    if (text.startsWith("Key Products:")) current.products = text.replace("Key Products:", "").trim();
    if (text.startsWith("Price Point:")) current.price = text.replace("Price Point:", "").trim();
    if (text.startsWith("Target:")) current.target = text.replace("Target:", "").trim();
  }
  if (current) rows.push(current);
  return rows;
}

function sectionMeta(section: ReportSection, index: number) {
  const labels = ["Consumer Signal", "Competitor", "Marketing", "Strategy", "Insight"];
  const category = labels[index % labels.length];
  const signalCount = section.blocks.filter((b) => b.type === "bullet").length || 1;
  const confidence = signalCount >= 3 ? "High" : "Medium";
  return { category, signalCount, confidence };
}

export function generateStaticParams() {
  return getCollection("Reports")
    .filter((item) => isCanonicalReportSlug(item.slug))
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Reports", slug);
  if (!item) return {};
  return { title: `${item.title} | DataClaw`, description: item.summary };
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Reports", slug);
  if (!item) notFound();

  const sections = parseBodySections(item.body);

  return (
    <main className="reportLayoutV2">
      <Nav />

      <header className="reportV2Hero">
        <p className="reportV2Kicker">DataClaw Intelligence</p>
        <h1 className="editorial-heading reportV2HeroTitle">{item.title}</h1>
        <p className="reportV2HeroSubtitle">{item.summary}</p>
        <div className="reportV2Bento">
          <div className="reportV2BentoCard">
            <span>Primary Signal</span>
            <p>{item.primarySignal || "Verified through retail scanning."}</p>
          </div>
          <div className="reportV2BentoCard">
            <span>Secondary Signal</span>
            <p>{item.secondarySignal || "Cross-referenced via social sentiment."}</p>
          </div>
          <div className="reportV2BentoCard">
            <span>Evidence Note</span>
            <p>{item.evidenceNote || "Validated internally."}</p>
          </div>
          <div className="reportV2BentoCard">
            <span>Confidence</span>
            <p>{item.takeaway || "Evidence-backed recommendation available in full report."}</p>
          </div>
        </div>
      </header>

      <article className="reportV2Sections">
        {sections.map((section, index) => {
          const paragraphs = section.blocks.filter((block) => block.type === "paragraph");
          const bullets = section.blocks.filter((block) => block.type === "bullet");
          const heroStatement = paragraphs[0]?.text || bullets[0]?.text || section.title;
          const subtitle = paragraphs[1]?.text || item.summary;
          const evidence = bullets[0]?.text || paragraphs[paragraphs.length - 1]?.text || heroStatement;
          const meta = sectionMeta(section, index);
          const competitorRows = section.title.toLowerCase().includes("competitive")
            ? parseCompetitorRows(section.blocks)
            : [];

          return (
            <section id={section.id} key={section.id} className="reportV2SectionCard">
              <div className="reportV2SectionHeader">
                <span className="reportV2SectionNumber">Section {index + 1}</span>
                <span className="reportV2SectionCategory">{meta.category}</span>
                <h2 className="editorial-heading reportV2SectionTitle">{section.title}</h2>
                <p className="reportV2SectionSubtitle">{stripMarkdown(subtitle)}</p>
                <div className="reportV2MetaRow">
                  <span>Signals {meta.signalCount}</span>
                  <span className="reportV2Confidence">{meta.confidence} Confidence</span>
                </div>
              </div>

              <blockquote className="reportV2HeroStatement">“{stripMarkdown(heroStatement)}”</blockquote>

              {competitorRows.length > 0 ? (
                <div className="reportV2MatrixWrap">
                  <table className="reportV2Matrix">
                    <thead>
                      <tr>
                        <th>Tier</th>
                        <th>Positioning</th>
                        <th>Key Products</th>
                        <th>Price</th>
                        <th>Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorRows.map((row) => (
                        <tr key={row.tier}>
                          <td>{row.tier}</td>
                          <td>{row.positioning}</td>
                          <td>{row.products}</td>
                          <td>{row.price}</td>
                          <td>{row.target}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="reportV2InsightGrid">
                  {bullets.slice(0, 4).map((bullet, bulletIndex) => {
                    const parsed = splitLabel(bullet.text);
                    return (
                      <article key={`${section.id}-insight-${bulletIndex}`} className="reportV2InsightCard">
                        <h3>{parsed.title || `Insight ${bulletIndex + 1}`}</h3>
                        <p>{parsed.value}</p>
                        <div>
                          <span>Supporting Evidence</span>
                          <p>{stripMarkdown(evidence)}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              <div className="reportV2EvidenceBlock">
                <h3>Evidence</h3>
                <blockquote>{stripMarkdown(evidence)}</blockquote>
              </div>

              <div className="reportV2SummaryBox">
                <h3>Summary</h3>
                <p>{stripMarkdown(paragraphs[paragraphs.length - 1]?.text || item.takeaway || section.title)}</p>
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
}
