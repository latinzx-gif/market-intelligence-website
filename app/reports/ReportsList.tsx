import React from 'react';
import { getCollection } from '../../lib/content';

export default function ReportsList() {
  const reports = getCollection("Reports");

  return (
    <div className="insightGrid pageGrid">
      {reports.map((report) => (
        <a key={report.slug} href={`/reports/${report.slug}`}>
          <article className="insightCard compactCard">
            <div className="insightMeta">
              <span>Report</span>
              <span>Full Access</span>
            </div>
            <h3>{report.title}</h3>
            <p>{report.summary || "In-depth market intelligence on Thailand's functional student market."}</p>
            <div className="tags mt-2">
              {report.tags.slice(0, 3).map(tag => (
                <span key={tag} className="statusPill mini">{tag}</span>
              ))}
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
