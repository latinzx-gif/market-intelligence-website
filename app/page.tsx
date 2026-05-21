const insights = [
  {
    title: "AI Stack for Solo Founders",
    category: "AI Systems",
    summary: "A practical view of which tools to start with, which to delay, and how to keep monthly costs controlled.",
    date: "2026-05-21",
    readTime: "4 min",
  },
  {
    title: "Why You Should Not Automate Too Early",
    category: "Operations",
    summary: "Automation works best after the workflow is repeated, understood, and worth maintaining.",
    date: "2026-05-21",
    readTime: "3 min",
  },
  {
    title: "From Research to Sellable Digital Products",
    category: "Productization",
    summary: "How structured research can become reports, templates, checklists, and service offers.",
    date: "2026-05-21",
    readTime: "5 min",
  },
];

const services = [
  {
    title: "AI Automation System",
    problem: "Manual work is scattered across spreadsheets, messages, files, and repeated follow-ups.",
    deliverables: "Workflow map, SOP, prototype flow, tool recommendation, and handover guide.",
    price: "Starting at 8,000 THB",
  },
  {
    title: "Market Intelligence Research",
    problem: "Market information is scattered and hard to turn into a clear business decision.",
    deliverables: "Competitor scan, claim analysis, pricing review, positioning map, and recommendation summary.",
    price: "Starting at 10,000 THB",
  },
  {
    title: "AI Content Operations",
    problem: "Content ideas, drafts, reviews, and publishing routines are inconsistent.",
    deliverables: "Prompt system, content workflow, editorial SOP, calendar template, and QA checklist.",
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

function InsightCard({ item }: { item: (typeof insights)[number] }) {
  return (
    <article className="insightCard compactCard">
      <div className="insightMeta">
        <span>{item.category}</span>
        <span>{item.readTime}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <small>{item.date}</small>
    </article>
  );
}

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  return (
    <article className="serviceCard">
      <h3>{item.title}</h3>
      <p>{item.problem}</p>
      <strong>Deliverables</strong>
      <p>{item.deliverables}</p>
      <strong>{item.price}</strong>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />

      <section className="hero section">
        <div className="heroCopy">
          <div className="eyebrow">DataClaw</div>
          <h1>Turn Signals Into Decisions.</h1>
          <p>
            Practical AI, market intelligence, and operating systems for solo founders
            and business operators.
          </p>
          <div className="ctaRow">
            <a href="/insights" className="primaryBtn">
              Explore Insights
            </a>
            <a href="/early-access" className="secondaryBtn">
              Join Early Access
            </a>
          </div>
        </div>
        <div className="heroPanel">
          <div className="panelHeader">
            <span>Research</span>
            <span>Intelligence</span>
            <span>Systems</span>
          </div>
          <div className="intelligenceMap">
            <span>Signals</span>
            <span>Research</span>
            <span>Decision Support</span>
            <span>Operating Systems</span>
          </div>
        </div>
      </section>

      <section className="section insightsSection">
        <div className="sectionHeader">
          <span>Latest Insights</span>
          <h2>Clear notes for practical operators.</h2>
        </div>
        <div className="insightGrid">
          {insights.map((item) => (
            <InsightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="sectionHeader">
          <span>Reports</span>
          <h2>Product #001 is in early access.</h2>
          <p>A lean decision guide for choosing an AI stack under 3,000 THB/month.</p>
        </div>
        <article className="portfolioCard">
          <div className="portfolioVisual">
            <span>01</span>
          </div>
          <div>
            <div className="tags">
              <span>Early Access</span>
              <span>790 THB</span>
            </div>
            <h3>DataClaw Starter Kit</h3>
            <p>AI Stack for Solo Founder Thailand.</p>
            <a href="/reports" className="detailLink">
              View Report
            </a>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span>Services</span>
          <h2>Three ways to work with DataClaw.</h2>
        </div>
        <div className="insightGrid">
          {services.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section detailCta">
        <div>
          <span className="eyebrow">Early Access</span>
          <h2>Help shape DataClaw.</h2>
        </div>
        <a className="primaryBtn" href="/early-access">
          Join Early Access
        </a>
      </section>
    </main>
  );
}
