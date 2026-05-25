import { Metadata } from "next";
import Nav from "../components/Nav";
import ReportsList from "./ReportsList";

export const metadata: Metadata = {
  title: "Intelligence Reports | DataClaw",
  description:
    "DataClaw reports for practical AI, research, and operator decisions. Ground your strategy in verified market signals.",
  openGraph: {
    title: "Reports | DataClaw",
    description:
      "DataClaw reports for practical AI, research, and operator decisions.",
  },
};

const faqs = [
  {
    question: "Is this a software setup service?",
    answer: "No. It is a practical decision guide and starter kit.",
  },
  {
    question: "Does it include automation builds?",
    answer: "No. Automation can be scoped separately after the workflow is clear.",
  },
  {
    question: "Do I need every tool in the stack?",
    answer: "No. The report helps you decide what to use now and what to delay.",
  },
];

export default function ReportsPage() {
  return (
    <main>
      <Nav />
      <section className="section detailHero">
        <div>
          <span className="eyebrow">Intelligence Repository</span>
          <h1>Market Reports</h1>
          <p>Access in-depth intelligence on Thailand's student focus and functional beverage markets.</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span>Active Research</span>
          <h2>Available Intelligence Reports</h2>
        </div>
        <ReportsList />
      </section>

      <section className="section splitSection">
        <div className="sectionHeader">
          <span>Featured Toolkit</span>
          <h2>DataClaw Starter Kit</h2>
          <p>AI Stack for Solo Founder Thailand.</p>
        </div>
        <article className="portfolioCard">
          <div className="portfolioVisual">
            <span>KIT</span>
          </div>
          <div>
            <div className="tags">
              <span>Early Access</span>
              <span>790 THB</span>
            </div>
            <h3>DataClaw Starter Kit</h3>
            <p>A practical decision guide and starter kit for solo founders.</p>
            <a href="/early-access" className="detailLink">
              Join Validation Round
            </a>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span>FAQ</span>
          <h2>Clear scope before purchase.</h2>
        </div>
        <div className="insightGrid">
          {faqs.map((item) => (
            <article className="insightCard compactCard" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section detailCta">
        <div>
          <span className="eyebrow">Custom Research</span>
          <h2>Need a specific category map?</h2>
          <p>We build custom intelligence reports for FMCG and retail innovators.</p>
        </div>
        <a className="primaryBtn" href="/early-access">
          Contact Analyst
        </a>
      </section>
    </main>
  );
}
