export const metadata = {
  title: "Early Access",
  description:
    "Request early access to the DataClaw Starter Kit and help shape practical intelligence products for operators.",
  openGraph: {
    title: "Early Access | DataClaw",
    description:
      "Request early access to the DataClaw Starter Kit and help shape practical intelligence products for operators.",
  },
};

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

export default function EarlyAccessPage() {
  return (
    <main>
      <Nav />
      <section className="section splitSection">
        <div>
          <div className="sectionHeader">
            <span>Early Access</span>
            <h1>Help shape DataClaw.</h1>
            <p>
              We are testing practical intelligence products for solo founders and
              operators.
            </p>
            <p>No signup required. Manual reply within 72 hours.</p>
          </div>
          <article className="detailCard">
            <h3>Why Join</h3>
            <ul className="cleanList">
              <li>Get early access to the DataClaw Starter Kit for 790 THB.</li>
              <li>Influence product direction before the public version launches.</li>
              <li>Receive future updates as the system improves.</li>
            </ul>
          </article>
          <article className="detailCard">
            <h3>Inside DataClaw Starter Kit</h3>
            <ul className="cleanList">
              <li>Executive Summary</li>
              <li>Stack Recommendation</li>
              <li>30 Day Plan</li>
              <li>Reading: 25-40 mins</li>
            </ul>
          </article>
          <article className="detailCard">
            <h3>Who This Is For</h3>
            <ul className="cleanList">
              <li>Solo Founder</li>
              <li>Freelancer</li>
              <li>AI Operator</li>
              <li>Small Business</li>
            </ul>
          </article>
          <article className="detailCard">
            <h3>Expectation</h3>
            <p>
              This is not consulting. This is not done-for-you. This is a
              practical starter system for turning signals into decisions.
            </p>
          </article>
        </div>
        <form className="formCard">
          <div className="formField">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>
          <div className="formField">
            <label htmlFor="role">Role</label>
            <input id="role" name="role" type="text" />
          </div>
          <div className="formField">
            <label htmlFor="struggle">Current challenge</label>
            <textarea id="struggle" name="struggle" rows={5} />
          </div>
          <div className="formField">
            <label htmlFor="email">Email optional</label>
            <input id="email" name="email" type="email" />
          </div>
          <button className="primaryBtn" type="button">
            Join Validation Round
          </button>
          <p>
            Interested? Tell us what you&apos;re building.
          </p>
          <p>
            No form? Comment: STACK or contact via{" "}
            <a href="https://fastwork.co/user/dataclaw.ai/data-analyst-22490814">
              Fastwork
            </a>
            .
          </p>
        </form>
      </section>
    </main>
  );
}
