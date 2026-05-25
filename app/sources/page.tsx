import React from 'react';
import Nav from '../../components/Nav';

const sources = [
  { origin: "Thai FDA Notification List", type: "Regulatory", confidence: "Absolute", count: 45, usage: ["REPORT-001", "REPORT-003"] },
  { origin: "7-Eleven Thailand (BKK Audit)", type: "Retail", confidence: "High", count: 112, usage: ["REPORT-001", "REPORT-004"] },
  { origin: "Pantip (Student/Education Boards)", type: "Social Sentiment", confidence: "Medium", count: 83, usage: ["REPORT-002", "REPORT-005"] },
  { origin: "Lotus's eCommerce Data", type: "Retail Online", confidence: "High", count: 56, usage: ["REPORT-001"] },
  { origin: "Sappe / Tofusan Quarterly Filings", type: "Corporate", confidence: "Absolute", count: 24, usage: ["REPORT-005"] }
];

export default function SourcesPage() {
   return (
     <main>
       <Nav />
       <header style={{ borderBottom: '1px solid var(--muted)', paddingBottom: '3rem', marginBottom: '3rem' }}>
         <span className="eyebrow" style={{ color: 'var(--accent)' }}>Verification Layer</span>
         <h1 className="editorial-heading" style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Source Library</h1>
         <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
           Transparency is our mandate. Review the origins, confidence scores, and aggregate signal counts driving our market intelligence.
         </p>
       </header>

       <div className="premium-card" style={{ padding: 0, overflow: 'hidden' }}>
         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
           <thead>
             <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--muted)' }}>
               <th style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Origin</th>
               <th style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</th>
               <th style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Confidence</th>
               <th style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Signals Extracted</th>
               <th style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Report Usage</th>
             </tr>
           </thead>
           <tbody>
             {sources.map((src, idx) => (
               <tr key={idx} style={{ borderBottom: '1px solid var(--muted)', transition: 'background 0.2s' }}>
                 <td style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.125rem' }}>{src.origin}</td>
                 <td style={{ padding: '1.5rem' }}>
                    <span className="statusPill mini" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--muted)' }}>{src.type}</span>
                 </td>
                 <td style={{ padding: '1.5rem' }}>
                   <span className="statusPill mini" style={{ 
                      borderColor: src.confidence === 'Medium' ? '#F59E0B' : 'var(--accent)', 
                      color: src.confidence === 'Medium' ? '#F59E0B' : 'var(--accent)',
                      background: 'transparent'
                   }}>
                     {src.confidence}
                   </span>
                 </td>
                 <td style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '1.125rem', color: 'var(--text-primary)' }}>{src.count}</td>
                 <td style={{ padding: '1.5rem' }}>
                   <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                     {src.usage.map(rep => <span key={rep} className="statusPill mini" style={{ background: 'var(--text-primary)', color: 'white', border: 'none' }}>{rep}</span>)}
                   </div>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </main>
   )
}
