import { Metadata } from "next";
import Nav from "../../components/Nav";
import ReportsList from "./ReportsList";

export const metadata: Metadata = {
  title: "Intelligence Reports | DataClaw",
  description: "DataClaw Premium Intelligence Reports.",
};

export default function ReportsPage() {
  return (
    <main>
      <Nav />
      <section className="section detailHero" style={{ borderBottom: '1px solid var(--muted)', paddingBottom: '3rem' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>Intelligence Repository</span>
          <h1 className="editorial-heading" style={{ fontSize: '4.5rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Research & Reports</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Deep-dive category maps, trend verifications, and structural market shifts. Our reports are built from raw, verifiable signals—not assumptions.
          </p>
        </div>
      </section>

      {/* Featured Latest Report */}
      <section className="section" style={{ marginTop: '-2rem' }}>
        <a href="/reports/REPORT-004" style={{ display: 'block' }}>
          <article className="premium-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '0', overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="visualPackCompare" style={{ background: 'transparent', border: 'none', height: 'auto', padding: 0 }}>
                <span style={{ borderColor: 'var(--muted)' }} />
                <span style={{ borderColor: 'var(--muted)' }} />
                <span style={{ borderColor: 'var(--accent)', background: 'var(--accent)' }} />
              </div>
            </div>
            <div style={{ padding: '4rem 4rem 4rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="eyebrow">Featured Intelligence</span>
              <h2 className="editorial-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>High-Protein "Chewy" Student Snacks</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Analysis of the functional confectionery trend. Texture-rich confectionery is bridging the gap between indulgence and functional energy.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span className="statusPill">Read Time: 15 min</span>
                <span className="statusPill" style={{ background: 'white', border: '1px solid var(--muted)', color: 'var(--text-primary)' }}>Download PDF</span>
              </div>
            </div>
          </article>
        </a>
      </section>

      <section className="section">
        <div className="sectionHeader" style={{ borderBottom: '2px solid var(--text-primary)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 className="editorial-heading" style={{ fontSize: '2rem' }}>All Reports</h2>
        </div>
        <ReportsList />
      </section>
    </main>
  );
}
