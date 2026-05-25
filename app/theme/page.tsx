import React from 'react';
import Nav from '../../components/Nav';

const themes = [
  {
    title: "Student Focus & Cognitive",
    description: "Intelligence mapping the $400M Thai student functional market, spanning from early childhood DHA to university-level nootropics.",
    metrics: { signals: 124, activeReports: 2, sources: 8 },
    reports: ["REPORT-001", "REPORT-002"]
  },
  {
    title: "Functional Wellness & Gut-Brain",
    description: "The integration of somatic health and mental performance, tracking psychobiotics and mood-altering nutritional profiles.",
    metrics: { signals: 86, activeReports: 1, sources: 5 },
    reports: ["REPORT-003"]
  },
  {
    title: "Next-Gen Retail Formats",
    description: "Structural shifts in how functional benefits are packaged, priced, and merchandised at convenience level. Focus on texture and form factor.",
    metrics: { signals: 91, activeReports: 1, sources: 12 },
    reports: ["REPORT-004"]
  }
];

export default function ThemesPage() {
  return (
     <main>
       <Nav />
       <header style={{ borderBottom: '1px solid var(--muted)', paddingBottom: '3rem', marginBottom: '3rem' }}>
         <span className="eyebrow" style={{ color: 'var(--accent)' }}>Strategic Clusters</span>
         <h1 className="editorial-heading" style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Theme Explorer</h1>
         <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
           Macro-narratives combining multiple reports and hundreds of signals into actionable category views.
         </p>
       </header>

       <div className="grid-12">
         {themes.map((theme, idx) => (
            <div key={idx} style={{ gridColumn: 'span 12' }}>
              <article className="premium-card" style={{ padding: '0', display: 'flex', overflow: 'hidden' }}>
                <div style={{ flex: '1.5', padding: '4rem', borderRight: '1px solid var(--muted)' }}>
                   <h2 className="editorial-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{theme.title}</h2>
                   <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '500px', lineHeight: 1.6 }}>{theme.description}</p>
                   <div style={{ display: 'flex', gap: '3rem' }}>
                      <div>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{theme.metrics.signals}</span>
                        <span className="eyebrow" style={{ marginTop: '0.5rem' }}>Signals</span>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{theme.metrics.activeReports}</span>
                        <span className="eyebrow" style={{ marginTop: '0.5rem' }}>Reports</span>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{theme.metrics.sources}</span>
                        <span className="eyebrow" style={{ marginTop: '0.5rem' }}>Sources</span>
                      </div>
                   </div>
                </div>
                <div style={{ flex: '1', background: 'var(--bg-secondary)', padding: '4rem' }}>
                   <span className="eyebrow" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Connected Reports</span>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     {theme.reports.map(rep => (
                       <a key={rep} href={`/reports/${rep}`} className="premium-card" style={{ padding: '1.5rem', border: '1px solid var(--muted)', boxShadow: 'none', background: 'white' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>{rep.replace('REPORT-', 'Intelligence Brief #')}</span>
                          <span style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)' }}>View Intelligence &rarr;</span>
                       </a>
                     ))}
                   </div>
                </div>
              </article>
            </div>
         ))}
       </div>
     </main>
  );
}
