import { Metadata } from "next";
import Nav from "../../components/Nav";
import ReportsList from "./ReportsList";
import { getCollection } from "../../lib/content";

export const metadata: Metadata = {
  title: "Intelligence Reports | DataClaw",
  description: "DataClaw Premium Intelligence Reports.",
};

export default function ReportsPage() {
  const reports = getCollection("Reports")
    .filter((report) => report.slug.startsWith("REPORT-"))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
  const latestReport = reports[0];

  return (
    <main>
      <Nav />

      <section className="section detailHero reportsHero">
        <div className="reportsHeroInner">
          <span className="eyebrow reportsHeroEyebrow">Intelligence Repository</span>
          <h1 className="editorial-heading reportsHeroTitle">Research & Reports</h1>
          <p className="reportsHeroSummary">
            Deep-dive category maps, trend verifications, and structural market shifts. Our reports are built from raw, verifiable signals—not assumptions.
          </p>
        </div>
      </section>

      {latestReport && (
        <section className="section reportsFeaturedSection">
          <a href={`/reports/${latestReport.slug}`} className="reportsFeaturedLink">
            <article className="premium-card reportsFeaturedCard">
              <div className="reportsFeaturedVisual">
                <div className="visualPackCompare reportsFeaturedGraphic">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="reportsFeaturedContent">
                <span className="eyebrow">Latest Report</span>
                <h2 className="editorial-heading reportsFeaturedTitle">{latestReport.title}</h2>
                <p className="reportsFeaturedSummary">{latestReport.summary}</p>

                <div className="reportsFeaturedMeta">
                  <span className="statusPill">{latestReport.publishDate}</span>
                  <span className="statusPill reportsFeaturedMetaSecondary">{latestReport.slug}</span>
                </div>
              </div>
            </article>
          </a>
        </section>
      )}

      <section className="section">
        <div className="sectionHeader reportsSectionHeader">
          <h2 className="editorial-heading reportsSectionTitle">All Reports</h2>
        </div>
        <ReportsList />
      </section>
    </main>
  );
}
