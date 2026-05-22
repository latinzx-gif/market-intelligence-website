import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Short practical insights on AI systems, market intelligence, and operator workflows from DataClaw.",
  openGraph: {
    title: "Insights | DataClaw",
    description:
      "Short practical insights on AI systems, market intelligence, and operator workflows.",
  },
};

const insights = [
  {
    title: "The DHA Saturation",
    category: "Market Intelligence",
    summary:
      "Decoding Brain Development Claims in Thailand's Kids Milk. DHA has shifted from premium differentiator to category expectation. This research asset explores how repeated brain-development claims are reshaping positioning, ingredient stacks, and market differentiation in Thailand's kids milk category.",
    date: "2026-05-22",
    readTime: "6 min",
    href: "/insights/dha-saturation-thailand-kids-milk",
  },
  {
    title: "AI Stack for Solo Founders",
    category: "AI Systems",
    summary:
      "A practical view of which tools to start with, which to delay, and how to keep monthly costs controlled.",
    date: "2026-05-21",
    readTime: "4 min",
  },
  {
    title: "Why You Should Not Automate Too Early",
    category: "Operations",
    summary:
      "Automation works best after the workflow is repeated, understood, and worth maintaining.",
    date: "2026-05-21",
    readTime: "3 min",
  },
  {
    title: "From Research to Sellable Digital Products",
    category: "Productization",
    summary:
      "How structured research can become reports, templates, checklists, and service offers.",
    date: "2026-05-21",
    readTime: "5 min",
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

export default function InsightsPage() {
  return (
    <main>
      <Nav />
      <section className="section detailHero">
        <div>
          <span className="eyebrow">Insights</span>
          <h1>Practical notes for better operating decisions.</h1>
          <p>
            Short DataClaw insights for solo founders, freelancers, AI operators,
            and small business teams in Thailand.
          </p>
        </div>
      </section>

      <section className="section insightGrid pageGrid">
        {insights.map((item) => (
          <a key={item.title} href={item.href || "#"}>
            <article className="insightCard compactCard">
              <div className="insightMeta">
                <span>{item.category}</span>
                <span>{item.readTime}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.date}</small>
            </article>
          </a>
        ))}
      </section>
    </main>
  );
}
