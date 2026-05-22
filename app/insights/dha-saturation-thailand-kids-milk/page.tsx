import Image from "next/image";

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

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="sectionHeader">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function EvidenceCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <article className="evidenceCard">
      <div className="evidenceVisual">
         <Image src={image} alt={title} width={300} height={132} />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
}

export default function DHASaturationPage() {
  return (
    <main>
      <Nav />

      {/* Hero Section */}
      <section className="section detailHero">
        <div>
          <span className="eyebrow">Market Intelligence Case Study</span>
          <h1>The DHA Saturation</h1>
          <p>
            Decoding Brain Development Claims in Thailand's Kids Milk. How a premium 
            differentiator became the category baseline—and what comes next for cognitive positioning.
          </p>
          <div className="ctaRow">
            <span className="statusPill" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
              Framework available soon
            </span>
          </div>
        </div>
        <div className="detailTakeaway">
          <span>Core Question</span>
          <strong>How has DHA become a mandatory "table stakes" ingredient, and how are brands differentiating now?</strong>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section">
        <div className="insightVisual">
           <Image 
            src="/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg" 
            alt="DHA Saturation Hero" 
            className="insightVisualImage"
            fill
            priority
           />
        </div>
      </section>

      {/* Section 1: Why This Matters */}
      <section className="section splitSection">
        <SectionHeader 
          eyebrow="Market Context" 
          title="Why This Matters" 
          text="DHA has moved from a premium 'gold' differentiator to a category-wide requirement for entry into the Thai kids milk market."
        />
        <div className="metricStrip">
           <article>
              <span>Saturation</span>
              <h3>90%+ Penetration</h3>
              <p>Presence across premium UHT and powder segments.</p>
           </article>
           <article>
              <span>Strategy</span>
              <h3>Multi-Nutrient Stacks</h3>
              <p>Shift from solo DHA to complex cognitive stacks.</p>
           </article>
        </div>
      </section>

      <section className="section">
         <Image src="/images/insights/dha-saturation-thailand-kids-milk/shelf-change-segments.svg" alt="Shelf segment growth" width={1180} height={500} />
      </section>

      {/* Section 2: Evidence */}
      <section className="section evidenceSection">
        <SectionHeader 
          eyebrow="Brand Analysis" 
          title="The Ingredient Stack War" 
          text="Top brands are layering proprietary complexes over the DHA baseline to preserve premium status."
        />
        <div className="evidenceGrid">
          <EvidenceCard title="Enfagrow A+ MindPro" subtitle="MFGM + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="Hi-Q 1 Plus Super Gold" subtitle="Prebio ProteQ + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="S-26 Gold Pro" subtitle="Alpha-Sphingomyelin + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="Bear Brand Omega" subtitle="Omega 3-6-9 + DHA" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
          <EvidenceCard title="Ovaltine Smart" subtitle="DHA + Vitamin B12" image="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg" />
        </div>
      </section>

      {/* Section 3: Market Evolution */}
      <section className="section">
        <SectionHeader eyebrow="Timeline" title="The Journey to Saturation" />
        <Image src="/images/insights/dha-saturation-thailand-kids-milk/positioning-evolution.svg" alt="Positioning Evolution" width={1180} height={500} />
      </section>

      {/* Section 4: Signals */}
      <section className="section">
        <SectionHeader eyebrow="Intelligence Signals" title="What Comes Next?" />
        <div className="detailGrid">
          <div className="detailCard">
            <span>Current</span>
            <p>100mg+ DHA per serving is the new baseline for student-tier milk.</p>
          </div>
          <div className="detailCard">
            <span>Emerging</span>
            <p>MFGM (Milk Fat Globule Membrane) becoming the gold standard differentiator.</p>
          </div>
          <div className="detailCard">
            <span>Weak</span>
            <p>"Focus" and "Calm" benefits emerging vs. pure "Smart/IQ" claims.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Research Questions */}
      <section className="section narrativeSection">
        <div className="narrativeCard">
           <SectionHeader eyebrow="Deep Dive" title="Open Research Questions" />
           <ul className="cleanList">
             <li>Is "Brain Development" still a primary conversion driver for Gen Alpha parents?</li>
             <li>Which secondary nutrients effectively support the DHA story on shelf?</li>
             <li>How are discount brands leveraging "DHA" to compete with premium tiers?</li>
           </ul>
        </div>
      </section>

       {/* Section 6: Related Research */}
       <section className="section detailCta">
        <div>
          <span className="eyebrow">Further Reading</span>
          <h2>Explore Ingredient Intelligence</h2>
          <p>Deep dive into the DataClaw Ingredient Intelligence MOC.</p>
        </div>
        <a className="primaryBtn" href="/ingredients">
          View MOC
        </a>
      </section>

      {/* Feedback Analytics Section */}
      <section className="section">
        <div className="formCard">
          <h3>Was this research useful?</h3>
          <div className="ctaRow">
            <button className="secondaryBtn">Useful</button>
            <button className="ghostBtn">Needs improvement</button>
          </div>
          <div className="formField" style={{ marginTop: '16px' }}>
            <label>Suggest next topic</label>
            <input type="text" placeholder="e.g. Immunity claims in snacks" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>DataClaw AI</strong>
          <span>© 2026 Practical Market Intelligence</span>
        </div>
        <div className="footerLinks">
          <a href="/insights">Insights</a>
          <a href="/reports">Reports</a>
          <a href="/services">Services</a>
        </div>
      </footer>
    </main>
  );
}
