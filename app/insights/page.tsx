import React from 'react';
import Nav from '../../components/Nav';

const insights = [
  {
    title: "The DHA Saturation: From Premium to Table Stakes",
    pattern: "Commoditization of Cognitive Claims",
    summary: "DHA has shifted from a premium differentiator to a category expectation in Thailand's kids milk market, forcing brands into multi-nutrient stack wars.",
    confidence: "Very High",
    signals: ["SIG-015", "SIG-018", "SIG-022"],
    reports: ["REPORT-001"]
  },
  {
    title: "The Savory Pivot in Night-Time Functional",
    pattern: "Chronobiotic Flavor Mapping",
    summary: "Students are rejecting sweet profiles for late-night study sessions, driving a 40% uptick in savory botanical broths and hojicha bases as perceived healthier sleep aids.",
    confidence: "Medium",
    signals: ["SIG-038", "SIG-040", "SIG-041"],
    reports: ["REPORT-005"]
  },
  {
    title: "Texture as a Functional Benefit",
    pattern: "Format Innovation",
    summary: "The transition from liquid energy shots to high-protein chewy snacks is bridging the psychological gap between indulgence and functional performance.",
    confidence: "High",
    signals: ["SIG-042", "SIG-045"],
    reports: ["REPORT-004"]
  }
];

export default function InsightsPage() {
   return (
     <main>
       <Nav />
       <header style={{ borderBottom: '1px solid var(--muted)', paddingBottom: '3rem', marginBottom: '3rem' }}>
         <span className="eyebrow" style={{ color: 'var(--accent)' }}>Synthesized Intelligence</span>
         <h1 className="editorial-heading" style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Market Insights</h1>
         <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
           Pattern recognition across multiple signals. These are the validated market realities shaping the 2026 consumer landscape.
         </p>
       </header>

       <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
         {insights.map((insight, idx) => (
           <article key={idx} className="premium-card" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'center' }}>
             <div>
               <span className="eyebrow">Identified Pattern: {insight.pattern}</span>
               <h2 className="editorial-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>{insight.title}</h2>
               <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                 {insight.summary}
               </p>
               <a href={`/reports/${insight.reports[0]}`} className="btn-primary">Read Connected Report</a>
             </div>
             <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--muted)' }}>
               <span className="eyebrow" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Evidence Matrix</span>
               
               <div style={{ marginBottom: '1.5rem' }}>
                 <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Confidence Score</span>
                 <span className="statusPill" style={{ background: 'white', border: '1px solid var(--muted)', color: 'var(--text-primary)' }}>{insight.confidence}</span>
               </div>

               <div style={{ marginBottom: '1.5rem' }}>
                 <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.75rem' }}>Supporting Signals</span>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                   {insight.signals.map(sig => <span key={sig} className="statusPill mini" style={{ background: 'white', border: '1px solid var(--muted)', color: 'var(--accent)' }}>{sig}</span>)}
                 </div>
               </div>

               <div>
                 <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.75rem' }}>Primary Report</span>
                 <span className="statusPill mini" style={{ background: 'var(--text-primary)', color: 'white', border: 'none' }}>{insight.reports[0]}</span>
               </div>
             </div>
           </article>
         ))}
       </div>
     </main>
   );
}
