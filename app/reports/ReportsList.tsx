import React from 'react';
import { getCollection } from '../../lib/content';

export default function ReportsList() {
  const reports = getCollection("Reports").filter(r => r.slug.startsWith("REPORT-"));

  return (
    <div className="grid-12">
      {reports.map((report) => (
        <a key={report.slug} href={`/reports/${report.slug}`} style={{ gridColumn: 'span 6' }}>
          <article className="premium-card" style={{ display: 'flex', gap: '2rem', padding: '1.5rem' }}>
            <div style={{ width: '120px', height: '160px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ fontFamily: 'var(--font-editorial)', color: 'var(--muted)', fontSize: '2rem' }}>{report.slug.replace('REPORT-', '#')}</span>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="eyebrow" style={{ margin: 0 }}>{report.publishDate}</span>
              </div>
              <h3 className="editorial-heading" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{report.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {report.summary}
              </p>
              <div className="tags" style={{ marginTop: 'auto' }}>
                {report.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={{ background: '#F1F5F9', border: '1px solid var(--muted)', color: 'var(--text-secondary)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
