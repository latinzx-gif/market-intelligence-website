export const metadata = {
  title: "Reports",
  description:
    "DataClaw reports for practical AI, research, and operator decisions.",
  openGraph: {
    title: "Reports | DataClaw",
    description:
      "DataClaw reports for practical AI, research, and operator decisions.",
  },
};

const included = [
  "Executive summary",
  "AI stack recommendation",
  "30 day action plan",
  "Cost calculator",
  "Getting started guide",
];

const preview = [
  "Executive Summary",
  "Stack Recommendation",
  "30 Day Plan",
  "Reading: 25-40 mins",
];

const audience = [
  "Solo founders choosing an AI stack",
  "Freelancers packaging repeatable work",
  "AI operators building lightweight systems",
  "Small business owners controlling tool cost",
  "Research and content operators in Thailand",
];

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
  {
    question: "Is the price fixed?",
    answer: "790 THB is the early access price for Product #001.",
  },
];

function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="/" aria-label="DataClaw Home">
        <span>DC</span>
        DataClaw
      </a>
      <div className="navLinks">
        <a href="/insights">Insights</a>
        <a href="/reports">Reports</a>
        <a href="/services">Services</a>
        <a href="/early-access">Early Access</a>
      </div>
    </nav>
  );
}

export default function ReportsPage() {
  return (
    <main>
      <Nav />
      <section className="section detailHero">
        <div>
          <span className="eyebrow">Reports</span>
          <h1>DataClaw Starter Kit</h1>
          <p>AI Stack for Solo Founder Thailand.</p>
          <div className="ctaRow">
            <span className="statusPill">Early Access</span>
            <span className="statusPill">790 THB</span>
          </div>
        </div>
      </section>

      <section className="section detailGrid pageGrid">
        <article className="detailCard">
          <h3>Inside DataClaw Starter Kit</h3>
          <ul className="cleanList">
            {preview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="detailCard">
          <h3>What Included</h3>
          <ul className="cleanList">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="detailCard">
          <h3>Who It Is For</h3>
          <ul className="cleanList">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
          <span className="eyebrow">Product #001</span>
          <h2>Join Validation Round</h2>
          <p>No signup required. Manual reply within 72 hours.</p>
        </div>
        <a className="primaryBtn" href="/early-access">
          Join Validation Round
        </a>
      </section>
    </main>
  );
}
