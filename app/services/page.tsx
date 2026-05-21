export const metadata = {
  title: "Services",
  description:
    "DataClaw services for AI automation, market intelligence research, and AI content operations.",
  openGraph: {
    title: "Services | DataClaw",
    description:
      "DataClaw services for AI automation, market intelligence research, and AI content operations.",
  },
};

const services = [
  {
    title: "AI Automation System",
    problem:
      "Manual work is scattered across spreadsheets, messages, files, and repeated follow-ups.",
    deliverables:
      "Workflow map, SOP, prototype flow, tool recommendation, and handover guide.",
    price: "Starting at 8,000 THB",
  },
  {
    title: "Market Intelligence Research",
    problem:
      "Market information is scattered and hard to turn into a clear business decision.",
    deliverables:
      "Competitor scan, claim analysis, pricing review, positioning map, and recommendation summary.",
    price: "Starting at 10,000 THB",
  },
  {
    title: "AI Content Operations",
    problem:
      "Content ideas, drafts, reviews, and publishing routines are inconsistent.",
    deliverables:
      "Prompt system, content workflow, editorial SOP, calendar template, and QA checklist.",
    price: "Starting at 7,000 THB",
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

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <section className="section detailHero">
        <div>
          <span className="eyebrow">Services</span>
          <h1>Practical systems for lean operators.</h1>
          <p>
            DataClaw helps solo founders, freelancers, AI operators, and small
            business owners turn repeated work into clearer systems and decisions.
          </p>
        </div>
      </section>

      <section className="section insightGrid pageGrid">
        {services.map((item) => (
          <article className="serviceCard" key={item.title}>
            <h3>{item.title}</h3>
            <strong>Problem</strong>
            <p>{item.problem}</p>
            <strong>Deliverables</strong>
            <p>{item.deliverables}</p>
            <strong>{item.price}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
