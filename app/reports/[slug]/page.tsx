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
    title: `${item.title} | DataClaw`,
    description: item.summary,
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

      {/* Editorial Report Header */}
      <header style={{ borderBottom: '1px solid var(--muted)', paddingBottom: '3rem', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {item.tags.map(tag => (
            <span key={tag} className="statusPill" style={{ background: 'var(--text-primary)', color: 'white', border: 'none' }}>{tag}</span>
          ))}
          <span className="statusPill" style={{ background: 'transparent', color: 'var(--text-secondary)' }}>{item.publishDate}</span>
        </div>
        <h1 className="editorial-heading" style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px' }}>
          {item.title}
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.4 }}>
          {item.summary}
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
        {/* Sticky Sidebar / TOC */}
        <aside>
          <div style={{ position: 'sticky', top: '2rem' }}>
            <span className="eyebrow" style={{ color: 'var(--text-primary)' }}>In This Report</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 2rem 0', fontSize: '0.875rem', lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><a href="#executive-summary">Executive Summary</a></li>
              <li><a href="#market-signals">Market Signals</a></li>
              <li><a href="#visual-evidence">Visual Evidence</a></li>
              <li><a href="#strategic-takeaway">Strategic Takeaway</a></li>
            </ul>
            <a href="#" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Download PDF</a>
          </div>
        </aside>

        {/* Main Content Area */}
        <article className="narrativeCard">
          <h2 id="executive-summary" className="editorial-heading" style={{ fontSize: '2rem', borderBottom: '1px solid var(--muted)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Executive Summary</h2>
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <h2 id="market-signals" className="editorial-heading" style={{ fontSize: '2rem', borderBottom: '1px solid var(--muted)', paddingBottom: '0.5rem', marginTop: '4rem', marginBottom: '2rem' }}>Core Market Signals</h2>
          <div className="premium-card" style={{ marginBottom: '3rem', background: 'var(--bg-secondary)', border: 'none' }}>
            <ul className="cleanList">
              <li style={{ borderBottomColor: '#E2E8F0' }}><strong>Primary Origin:</strong> {item.primarySignal || 'Verified through retail scanning.'}</li>
              <li style={{ borderBottomColor: '#E2E8F0' }}><strong>Secondary Origin:</strong> {item.secondarySignal || 'Cross-referenced via social sentiment.'}</li>
              <li style={{ border: 'none' }}><strong>Confidence Note:</strong> {item.evidenceNote || 'Validated internally.'}</li>
            </ul>
          </div>

          <h2 id="visual-evidence" className="editorial-heading" style={{ fontSize: '2rem', borderBottom: '1px solid var(--muted)', paddingBottom: '0.5rem', marginTop: '4rem', marginBottom: '2rem' }}>Visual Evidence</h2>
          <div style={{ border: '1px solid var(--muted)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem' }}>
            <InsightVisual item={item} className="reportInsightVisual" />
          </div>

          <h2 id="strategic-takeaway" className="editorial-heading" style={{ fontSize: '2rem', borderBottom: '1px solid var(--muted)', paddingBottom: '0.5rem', marginTop: '4rem', marginBottom: '2rem' }}>Strategic Takeaway</h2>
          <div className="premium-card" style={{ background: 'var(--text-primary)', color: 'white' }}>
            <p style={{ fontSize: '1.5rem', margin: 0, fontWeight: 300, fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>
              "{item.takeaway || "Evidence-backed recommendation available in full report."}"
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
