import React from 'react';
import Nav from '../../components/Nav';

const signals = [
  { id: "SIG-042", date: "2026-05-24", text: "7-Eleven Thailand expands chilled 'Chewy' functional snack shelf space by 15%.", trend: "Accelerating", confidence: "High", source: "Retail Audit Bangkok", reports: ["REPORT-004"] },
  { id: "SIG-038", date: "2026-05-22", text: "Pantip threads showing 300% increase in 'sleep quality' searches during exam weeks.", trend: "Accelerating", confidence: "Medium", source: "Social Listening", reports: ["REPORT-001", "REPORT-005"] },
  { id: "SIG-029", date: "2026-05-20", text: "Matcha RTD launches outpace traditional energy drinks in Q1 2026.", trend: "Accelerating", confidence: "High", source: "Market Scanner", reports: ["REPORT-002"] },
  { id: "SIG-015", date: "2026-05-18", text: "DHA claims shifting from primary to secondary placement on premium UHT packaging.", trend: "Decelerating", confidence: "High", source: "Packaging Analysis", reports: ["REPORT-001"] },
  { id: "SIG-012", date: "2026-05-15", text: "Lactobacillus paracasei PS128 filings increase by 40% in Thai FDA functional dairy applications.", trend: "Accelerating", confidence: "Absolute", source: "Regulatory Audit", reports: ["REPORT-003"] }
];

export default function SignalsPage() {
  return (
    <main>
      <Nav />
      <header style={{ borderBottom: '1px solid var(--muted)', paddingBottom: '3rem', marginBottom: '3rem' }}>
        <span className="eyebrow" style={{ color: 'var(--accent)' }}>Raw Data Feed</span>
        <h1 className="editorial-heading" style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Market Signals</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
          The unvarnished, trace-verified data points feeding our intelligence engine. Filter by confidence, source, and trend vector.
        </p>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <span className="statusPill" style={{ background: 'var(--text-primary)', color: 'white', border: 'none' }}>All Signals</span>
        <span className="statusPill" style={{ background: 'white', color: 'var(--text-primary)', border: '1px solid var(--muted)' }}>High Confidence</span>
        <span className="statusPill" style={{ background: 'white', color: 'var(--text-primary)', border: '1px solid var(--muted)' }}>Accelerating</span>
        <span className="statusPill" style={{ background: 'white', color: 'var(--text-primary)', border: '1px solid var(--muted)' }}>Retail Origins</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {signals.map(sig => (
           <article key={sig.id} className="premium-card" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '150px 1fr 200px', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">{sig.date}</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 600 }}>{sig.id}</span>
              </div>
              <div>
                <p style={{ fontSize: '1.125rem', margin: '0 0 0.5rem 0', fontWeight: 500 }}>{sig.text}</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span><strong>Source:</strong> {sig.source}</span>
                  <span><strong>Connected:</strong> {sig.reports.join(', ')}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
                 <span className="statusPill mini" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--muted)', color: 'var(--text-primary)' }}>
                   {sig.confidence} Confidence
                 </span>
                 <span className="statusPill mini" style={{ 
                    borderColor: sig.trend === 'Decelerating' ? '#EF4444' : 'var(--accent)', 
                    color: sig.trend === 'Decelerating' ? '#EF4444' : 'var(--accent)' 
                 }}>
                   {sig.trend === 'Decelerating' ? '📉' : '📈'} {sig.trend}
                 </span>
              </div>
           </article>
        ))}
      </div>
    </main>
  );
}
