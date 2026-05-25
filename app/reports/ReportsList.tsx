import React from 'react';
import { getCollection } from '../../lib/content';
import Link from 'next/link';

export default function ReportsList() {
  const reports = getCollection("Reports")
    .filter((r) => r.slug.startsWith("REPORT-"))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return (
    <div className="reportsGrid">
      {reports.map((report) => (
        <Link key={report.slug} href={`/reports/${report.slug}`} className="reportCardLink">
          <article className="premium-card reportCard">
            <div className="reportCardCover">
              <span className="reportCardNumber">DC</span>
            </div>

            <div className="reportCardBody">
              <div className="reportCardMetaRow">
                <span className="eyebrow reportCardDate">{report.publishDate}</span>
                <span className="reportCardMetaLabel">Intelligence Report</span>
              </div>

              <h3 className="editorial-heading reportCardTitle">{report.title}</h3>

              <p className="reportCardSummary">
                {report.summary}
              </p>

              <div className="reportCardTags">
                {report.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="reportCardTag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
