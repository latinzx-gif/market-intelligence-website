'use client';

import React from 'react';
import Nav from '../components/Nav';

const latestIntelligence = [
  {
    title: "High-Protein \"Chewy\" Student Snacks",
    category: "Report #004",
    summary: "The functional confectionery boom and texture as a functional benefit.",
    date: "2026-05-24",
    confidence: "High (25+ Signals)",
    href: "/reports/REPORT-004",
  },
  {
    title: "Psychobiotics & Gut-Brain Axis",
    category: "Report #003",
    summary: "Mood-regulation is becoming as valuable as cognitive performance in the functional dairy sector.",
    date: "2026-05-24",
    confidence: "Medium (15+ Signals)",
    href: "/reports/REPORT-003",
  },
  {
    title: "Matcha & Plant-Based Focus RTD",
    category: "Report #002",
    summary: "Clean-label energy is replacing synthetic stimulants for high-focus tasks.",
    date: "2026-05-24",
    confidence: "High (30+ Signals)",
    href: "/reports/REPORT-002",
  }
];

const trendingSignals = [
  { id: "SIG-042", text: "7-Eleven Thailand expands chilled 'Chewy' functional snack shelf space by 15%.", trend: "Up" },
  { id: "SIG-038", text: "Pantip threads showing 300% increase in 'sleep quality' searches during exam weeks.", trend: "Up" },
  { id: "SIG-029", text: "Matcha RTD launches outpace traditional energy drinks in Q1 2026.", trend: "Up" },
  { id: "SIG-015", text: "DHA claims shifting from primary to secondary placement on premium UHT packaging.", trend: "Down" }
];

const themes = [
  { name: "Student Focus & Cognitive", count: 124 },
  { name: "Functional Night-Time", count: 86 },
  { name: "Gut-Brain Axis", count: 52 },
  { name: "Alternative Energy", count: 91 }
];

export default function HomeContent() {
  return (
    <main>
      <Nav />

      {/* Hero Section */}
      <section className="section detailHero" style={{ maxWidth: '1000px', marginTop: '2rem' }}>
        <span className="eyebrow">DataClaw Intelligence Platform</span>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Trace-Verified Market Signals.<br/>Zero Market Noise.
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', color: 'var(--text-secondary)' }}>
          The premium intelligence engine for FMCG innovators and operators in Thailand. We map the unseen shifts in consumer nutrition, wellness, and retail.
        </p>
        
        <div className="metricsRow">
          <div className="metricBlock">
            <span className="val">4</span>
            <span className="label">Active Reports</span>
          </div>
          <div className="metricBlock">
            <span className="val">9</span>
            <span className="label">Deep Insights</span>
          </div>
          <div className="metricBlock">
            <span className="val">342</span>
            <span className="label">Verified Signals</span>
          </div>
          <div className="metricBlock">
            <span className="val">18</span>
            <span className="label">Source Origins</span>
          </div>
        </div>
      </section>

      {/* Latest Intelligence (Cards) */}
      <section className="section">
        <div className="sectionHeader" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span>Executive Briefings</span>
            <h2>Latest Intelligence</h2>
          </div>
          <a href="/reports" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>View All Reports</a>
        </div>
        <div className="grid-12">
          {latestIntelligence.map((item, i) => (
            <a key={i} href={item.href} style={{ gridColumn: 'span 4' }}>
              <article className="premium-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="statusPill mini" style={{ background: '#F1F5F9', color: 'var(--text-secondary)', border: 'none' }}>{item.category}</span>
                  <span className="statusPill mini" style={{ background: 'transparent', border: '1px solid var(--muted)', color: 'var(--text-secondary)' }}>{item.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', flexGrow: 1 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{item.summary}</p>
                <div style={{ borderTop: '1px solid var(--muted)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Confidence: {item.confidence}
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* Trending Signals (Horizontal) */}
      <section className="section">
        <div className="sectionHeader">
          <span>Raw Data Feed</span>
          <h2>Trending Signals</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {trendingSignals.map((sig, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              padding: '1.5rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--muted)'
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--accent)', minWidth: '80px' }}>{sig.id}</span>
              <p style={{ margin: 0, flexGrow: 1, fontSize: '1.125rem', color: 'var(--text-primary)' }}>{sig.text}</p>
              <span className={`statusPill ${sig.trend === 'Down' ? 'down' : ''}`} style={{ 
                borderColor: sig.trend === 'Down' ? '#EF4444' : 'var(--accent)',
                color: sig.trend === 'Down' ? '#EF4444' : 'var(--accent)'
              }}>
                {sig.trend === 'Down' ? '📉 Decelerating' : '📈 Accelerating'}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a href="/signals" className="btn-primary" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--muted)' }}>Explore Signal Database</a>
        </div>
      </section>

      {/* Theme Explorer */}
      <section className="section">
        <div className="sectionHeader">
          <span>Intelligence Clusters</span>
          <h2>Theme Explorer</h2>
        </div>
        <div className="grid-12">
          {themes.map((theme, i) => (
            <div key={i} style={{ gridColumn: 'span 3' }}>
              <a href={`/theme`} className="premium-card" style={{ display: 'block', textAlign: 'center', padding: '3rem 1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{theme.name}</h3>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{theme.count} Signals</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid var(--muted)', paddingTop: '4rem', marginTop: '4rem', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-editorial)', fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '1rem' }}>DataClaw Platform</span>
          <p style={{ marginTop: '0.5rem' }}>Premium Market Intelligence.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/about">About</a>
          <a href="/sources">Methodology</a>
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
