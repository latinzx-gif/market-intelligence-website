import { notFound } from "next/navigation";
import { getCollection, getContentItem } from "../../../lib/content";
import Nav from "../../../components/Nav";
import { InsightVisual } from "../../components/InsightVisual";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function cleanBody(body: string) {
  return body
    .split("## Appendix")[0]
    .replace(/^#+\s+/gm, "")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function generateStaticParams() {
  return getCollection("Reports").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Reports", slug);
  if (!item) return {};

  return {
    title: `${item.title} | DataClaw Report`,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      images: ["/og-image.svg"],
    },
  };
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Reports", slug);
  if (!item) notFound();

  const body = cleanBody(item.body);

  return (
    <main>
      <Nav />

      <section className="detailHero section">
        <div>
          <div className="eyebrow">Intelligence Report Preview</div>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <div className="tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <aside className="detailTakeaway">
          <span>Strategic Takeaway</span>
          <strong>{item.takeaway || "Evidence-backed recommendation available in full report."}</strong>
          <br />
          <span>Status</span>
          <span className="statusPill">Available Now</span>
        </aside>
      </section>

      <section className="section evidenceSection">
        <div className="sectionHeader">
          <span>Core Market Signal</span>
          <h2>Visual Evidence Module</h2>
        </div>
        <div className="evidenceGrid">
          <InsightVisual
            item={item}
            className="reportInsightVisual"
          />
          <div className="evidenceCopy">
            <h3>Visualizing the {item.visualLabel || "Market Trend"}</h3>
            <p>Our autonomous research agents identified this core signal through cross-referencing retail audits, regulatory filings, and social listening data.</p>
            <ul className="cleanList">
              <li><strong>Primary:</strong> {item.primarySignal}</li>
              <li><strong>Secondary:</strong> {item.secondarySignal}</li>
              <li><strong>Verification:</strong> {item.evidenceNote}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section narrativeSection">
        <div className="sectionHeader">
          <span>Executive Summary</span>
          <h2>Ground your strategy in verified market signals.</h2>
        </div>
        <div className="narrativeCard">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section detailCta">
        <div>
          <span className="eyebrow">Full Access</span>
          <h2>Unlock the complete intelligence package.</h2>
          <p>Get the raw signal database, retail pricing maps, and Thai FDA trace audits.</p>
        </div>
        <a className="primaryBtn" href="/early-access">
          Request Full Report
        </a>
      </section>
    </main>
  );
}
