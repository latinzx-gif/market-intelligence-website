import Image from "next/image";
import Link from "next/link";
import { metadata } from "./metadata";

export { metadata };

// JSON-LD Schemas for SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The DHA Saturation: Decoding Brain Development Claims in Thailand's Kids Milk",
  "description": "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
  "image": [
    "https://dataclaw.ai/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg"
  ],
  "datePublished": "2026-05-22T20:11:31+07:00",
  "dateModified": "2026-05-22T20:11:31+07:00",
  "author": [
    {
      "@type": "Person",
      "name": "Jakarin Rojanaputthi",
      "url": "https://dataclaw.ai"
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "DataClaw AI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dataclaw.ai/favicon.svg"
    }
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dataclaw.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Insights",
      "item": "https://dataclaw.ai/insights"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "DHA Saturation in Thailand Kids Milk",
      "item": "https://dataclaw.ai/insights/dha-saturation-thailand-kids-milk"
    }
  ]
};

function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand" aria-label="DataClaw Home">
        <span>DC</span>
        DataClaw
      </Link>
      <div className="navLinks">
        <Link href="/insights">Insights</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/services">Services</Link>
        <Link href="/early-access">Early Access</Link>
      </div>
    </nav>
  );
}

function Breadcrumb() {
  return (
    <div
      className="breadcrumb"
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        fontSize: "13px",
        color: "var(--muted)",
        marginBottom: "20px",
        fontWeight: 750,
      }}
    >
      <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
      <span>/</span>
      <Link href="/insights" style={{ color: "var(--muted)" }}>Insights</Link>
      <span>/</span>
      <span style={{ color: "var(--navy)" }}>DHA Saturation</span>
    </div>
  );
}

function VisualWrapper({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
      <div style={{
        position: "relative",
        width: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow)",
        background: "#0A192F",
      }}>
        {children}
      </div>
      <figcaption style={{ fontSize: "13px", color: "var(--muted)", fontStyle: "italic", textAlign: "center", fontWeight: 650 }}>
        {caption}
      </figcaption>
    </figure>
  );
}

const brandsData = [
  {
    name: "Enfagrow A+ MindPro",
    stack: "MFGM + DHA",
    positioning: "Premium Brain Development",
    desc: "Market leader in high-tier powders. Positioned heavily around cognitive speed, memory, and emotional intelligence (EQ) powered by Milk Fat Globule Membrane.",
  },
  {
    name: "Hi-Q 1 Plus Super Gold",
    stack: "Prebio ProteQ + DHA",
    positioning: "Immunity-Driven Cognition",
    desc: "Premium segment pioneer. Focuses on DHA stacked with patented HMOs and synbiotics, linking a healthy gut and immune defense with intellectual growth.",
  },
  {
    name: "S-26 Gold Pro",
    stack: "Alpha-Sphingomyelin + DHA",
    positioning: "Neural Connectivity Speed",
    desc: "Highly scientific positioning. Highlights the role of Sphingomyelin in myelin sheath development, communicating fast brain connections and cognitive agility.",
  },
  {
    name: "Bear Brand Omega",
    stack: "Omega 3-6-9 + DHA",
    positioning: "Mainstream Cognitive Baseline",
    desc: "Popular mid-tier brand in Thailand. Focuses on affordability while checking the cognitive box with active Omega fatty acids and baseline DHA.",
  },
  {
    name: "Foremost Omega Smart",
    stack: "Sphingomyelin + DHA",
    positioning: "Active Learning & Play",
    desc: "Dominant UHT brand on convenience store shelves. Stacks DHA with Sphingomyelin and Choline, targeting everyday physical energy and mental focus.",
  },
  {
    name: "Ovaltine Smart",
    stack: "DHA + Vitamin B12",
    positioning: "Study Readiness & Energy",
    desc: "Sub-brand of the chocolate-malt staple. Targets school-aged children with energy and recall claims, mapping closely to study hours and exam times.",
  },
];

const relatedInsights = [
  {
    title: "DHA Is Becoming Table Stakes",
    category: "competitor-intelligence",
    summary: "DHA remains a useful trust cue in student cognitive nutrition, but repeated category usage makes it harder to own as a standalone differentiator.",
    link: "/insights",
  },
  {
    title: "Packaging Format Acts As Positioning Shortcut",
    category: "packaging-analysis",
    summary: "UHT boxes signal routine, bottles signal tactical support, and gold or clinical cues often communicate parent trust before shoppers read the claim.",
    link: "/insights",
  },
  {
    title: "Calm Focus Remains Underdeveloped",
    category: "opportunity-gap",
    summary: "Many cognitive nutrition products speak to energy, exam readiness, and parent confidence. Calm, non-jitter study support is less clearly owned.",
    link: "/insights",
  },
];

export default function DHASaturationPage() {
  return (
    <main>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav />

      {/* Hero Section */}
      <section className="hero section" style={{ minHeight: "auto", paddingTop: "42px", paddingBottom: "42px" }}>
        <div className="heroCopy">
          <Breadcrumb />
          <div className="eyebrow">Case Study / Long-Form Insight</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.05, marginBottom: "20px" }}>
            The DHA Saturation: Decoding Brain Development Claims in Thailand's Kids Milk
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.5, marginBottom: "28px" }}>
            How a premium differentiator became the category baseline—and what comes next for cognitive positioning in Southeast Asia's most competitive retail shelf.
          </p>
          <div className="tags" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
            <span className="statusPill" style={{ minHeight: "30px", fontSize: "12px", background: "var(--pale-blue)" }}>Market Intelligence</span>
            <span className="statusPill" style={{ minHeight: "30px", fontSize: "12px", background: "var(--pale-blue)" }}>Kids Nutrition</span>
            <span className="statusPill" style={{ minHeight: "30px", fontSize: "12px", background: "var(--pale-blue)" }}>Thailand</span>
          </div>
          
          <div className="detailTakeaway" style={{ margin: "0 0 28px 0", padding: "20px", background: "var(--pale-blue)", borderRadius: "18px", borderLeft: "4px solid var(--blue)" }}>
            <span style={{ fontSize: "11px", textTransform: "uppercase", color: "var(--blue)", fontWeight: 850, letterSpacing: "0.05em" }}>Strategic Takeaway</span>
            <p style={{ margin: "6px 0 0 0", fontSize: "15px", color: "var(--navy)", fontWeight: 700, lineHeight: 1.4 }}>
              As DHA reaches 90%+ saturation on retail shelves, brands must pivot from general brain development claims to specific ingredient stacking and targeted study occasions.
            </p>
          </div>

          <div className="ctaRow" style={{ marginTop: "0" }}>
            <a href="#download-framework" className="primaryBtn" style={{ minHeight: "44px" }}>
              Download Ingredient Stack Framework
              <span className="externalIcon" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="heroPanel" style={{ border: "none", boxShadow: "none", background: "transparent", padding: 0 }}>
          <VisualWrapper caption="Supermarket shelf depth-of-field analysis highlighting brand-specific DHA claims on packaging.">
            <Image
              src="/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg"
              alt="High-contrast photograph of a Thai supermarket milk aisle, focusing on multiple brand logos and DHA callouts on packaging."
              width={1920}
              height={1080}
              sizes="(max-width: 980px) 100vw, 45vw"
              priority={true}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </VisualWrapper>
        </div>
      </section>

      {/* Section 1: Why This Matters (The Scale of Saturation) */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="splitSection">
          <div>
            <div className="sectionHeader" style={{ marginBottom: "24px" }}>
              <span>Why This Matters</span>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.1, marginTop: "8px" }}>
                The Commoditization of Cognitive Claims
              </h2>
            </div>
            <div style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, display: "grid", gap: "16px" }}>
              <p>
                Walk down the milk aisle of any major supermarket in Bangkok—be it Big C, Lotus’s, or Gourmet Market—and you are met with an overwhelming sea of "Brain Development" and cognitive growth promises. What was once a high-tech premium claim in the early 2010s has today become the baseline expectation.
              </p>
              <p>
                DataClaw's product intelligence database shows that over <strong>90% of premium kids' milk products</strong> in Thailand carry explicit DHA claims. From mainstream brands like Foremost Omega and Bear Brand to ultra-premium tiers like Enfagrow A+ MindPro and S-26 Gold Pro, DHA is no longer a differentiator—it is a ticket to play.
              </p>
              <p>
                Because solo DHA no longer commands a premium, brands have entered a formula <strong>"stack war."</strong> Manufacturers now bundle DHA with secondary nutrients—like MFGM, Sphingomyelin, Choline, and Omega 3-6-9—to construct proprietary cognitive stories and justify higher pricing.
              </p>
            </div>
          </div>
          <div>
            <VisualWrapper caption="DataClaw saturation snapshot: Over 90% category coverage in premium UHT and powder kids milk.">
              <Image
                src="/images/insights/dha-saturation-thailand-kids-milk/saturation-snapshot.svg"
                alt="Infographic chart showing premium segment saturation of DHA claims at over 90 percent."
                width={1920}
                height={1080}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </VisualWrapper>
          </div>
        </div>
      </section>

      {/* Section 2: Formula Stacks Across Major Brands */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div className="sectionHeader" style={{ marginBottom: "38px", textAlign: "center" }}>
          <span>Visual Evidence System</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.1, marginTop: "8px" }}>
            How Top Brands Construct the Cognitive Stack
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "680px", margin: "12px auto 0", fontSize: "16px" }}>
            A comparative breakdown of how major kids milk manufacturers in Thailand bundle DHA with other key nutrients to differentiate their cognitive formulas.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", marginBottom: "48px" }} className="splitSection">
          <div>
            <VisualWrapper caption="Shelf change segment mapping: How premium brand formulas claim shelf space and buyer attention.">
              <Image
                src="/images/insights/dha-saturation-thailand-kids-milk/shelf-change-segments.svg"
                alt="Diagram representing the shelf change and positioning segments of kids milk formulas in retail spaces."
                width={1920}
                height={1080}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </VisualWrapper>
          </div>
          <div>
            <div style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, display: "grid", gap: "16px" }}>
              <h3>The Ingredient Stacking Blueprint</h3>
              <p>
                Ingredient stacking has become the standard method to capture the "academic development" purchase intent of Thai parents. By connecting DHA to an auxiliary nutrient, brands create a more complex, proprietary claim that is harder for private labels or value brands to replicate.
              </p>
              <p>
                Premium brands lean into high-science claims (like MFGM and Sphingomyelin), while mainstream options play on a holistic mix of growth, immunity, and mental agility (often relying on omega 3-6-9 stacks).
              </p>
            </div>
          </div>
        </div>

        <div className="insightGrid" style={{ marginTop: "24px" }}>
          {brandsData.map((brand) => (
            <article className="insightCard compactCard" key={brand.name} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px", minHeight: "220px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "12px" }}>
                  <span className="eyebrow" style={{ fontSize: "10px", margin: 0, textTransform: "uppercase" }}>{brand.stack}</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--blue)" }}>{brand.positioning}</span>
                </div>
                <h3 style={{ fontSize: "19px", color: "var(--navy)", margin: "0 0 10px 0", lineHeight: 1.2 }}>{brand.name}</h3>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{brand.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Market Evolution (Timeline) */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="splitSection">
          <div>
            <div className="sectionHeader" style={{ marginBottom: "24px" }}>
              <span>Category Timeline</span>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.1, marginTop: "8px" }}>
                The Journey to Saturation
              </h2>
            </div>
            <div style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, display: "grid", gap: "16px" }}>
              <p>
                The journey of DHA from a premium breakthrough to a baseline standard follows a classic category commoditization lifecycle:
              </p>
              <div style={{ display: "grid", gap: "20px", marginTop: "12px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <strong style={{ color: "var(--blue)", minWidth: "50px", fontSize: "18px" }}>2015</strong>
                  <div>
                    <h4 style={{ margin: "0 0 4px 0", color: "var(--navy)", fontSize: "16px" }}>Premium Differentiator</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>DHA is introduced as a high-margin premium additive. Early adopters associate it directly with IQ and academic excellence.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <strong style={{ color: "var(--blue)", minWidth: "50px", fontSize: "18px" }}>2018</strong>
                  <div>
                    <h4 style={{ margin: "0 0 4px 0", color: "var(--navy)", fontSize: "16px" }}>Category Baseline</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>Mainstream adoption sweeps the market. Mid-tier and discount brands incorporate DHA, neutralizing its power as a standalone claim.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <strong style={{ color: "var(--blue)", minWidth: "50px", fontSize: "18px" }}>2021</strong>
                  <div>
                    <h4 style={{ margin: "0 0 4px 0", color: "var(--navy)", fontSize: "16px" }}>The Ingredient Stack War</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>Premium brands introduce complex secondary nutrients like MFGM and Sphingomyelin, shifting the story from general brain growth to neural connectivity.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <strong style={{ color: "var(--blue)", minWidth: "50px", fontSize: "18px" }}>2024</strong>
                  <div>
                    <h4 style={{ margin: "0 0 4px 0", color: "var(--navy)", fontSize: "16px" }}>Saturation & Regulatory Pivot</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>Over 90% category coverage. High regulatory pressure from the Thai FDA on brain-related wording forces brands to pivot to usage occasions and emotional support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <VisualWrapper caption="The timeline and trajectory of cognitive claim positioning in Thailand's kids milk.">
              <Image
                src="/images/insights/dha-saturation-thailand-kids-milk/positioning-evolution.svg"
                alt="Timeline chart tracking the positioning evolution of DHA claims from 2015 to 2024."
                width={1920}
                height={1080}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </VisualWrapper>
          </div>
        </div>
      </section>

      {/* Section 4: Signals & Packaging Language */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="splitSection">
          <div>
            <VisualWrapper caption="Visual analysis of packaging design signals: Gold badges, scientific icons, and glowing neural networks.">
              <Image
                src="/images/insights/dha-saturation-thailand-kids-milk/packaging-signals.svg"
                alt="Diagram detailing the packaging cues and visual signals used to communicate cognitive benefits on kids milk cartons."
                width={1920}
                height={1080}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </VisualWrapper>
          </div>
          <div>
            <div className="sectionHeader" style={{ marginBottom: "24px" }}>
              <span>Visual Language</span>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.1, marginTop: "8px" }}>
                Packaging Cues and Design Signals
              </h2>
            </div>
            <div style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, display: "grid", gap: "16px" }}>
              <p>
                How do brands communicate complex neuroscience concepts to parents in a split-second supermarket decision? The visual language of kids' milk packaging is highly optimized:
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "12px" }}>
                <li>
                  <strong>Scientific & Medical Badging:</strong> High-end brands utilize gold, silver, and metallic shields containing text like "A+ MindPro" or "Super Gold" to project clinical authority.
                </li>
                <li>
                  <strong>Neural Connections:</strong> Graphic representation of brain cells and synapses—depicted as glowing, interconnected nodes—implicitly promises rapid neural development.
                </li>
                <li>
                  <strong>Occupational Imagery:</strong> Illustrations of young children wearing graduation caps, using binoculars, or conducting science experiments act as emotional anchors.
                </li>
                <li>
                  <strong>Milestone Highlighting:</strong> The numbers "1+" and "3+" are enlarged to ensure parents identify age-specific brain development milestones instantly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Regulatory Guardrails */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="splitSection">
          <div>
            <div className="sectionHeader" style={{ marginBottom: "24px" }}>
              <span>Regulatory Compliance</span>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.1, marginTop: "8px" }}>
                Navigating the Thai FDA Guidelines
              </h2>
            </div>
            <div style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, display: "grid", gap: "16px" }}>
              <p>
                The Thai Food and Drug Administration (FDA) maintains strict controls over advertising claims for products intended for infants and young children. Understanding these boundaries is critical for compliance:
              </p>
              <p>
                <strong>Restricted Language:</strong> Brands are forbidden from making direct claims that link formula consumption with intelligence, IQ improvement, or direct academic performance. Terms like "makes children smarter" or "guarantees brain power" will immediately fail regulatory reviews.
              </p>
              <p>
                <strong>The "Structure & Function" Loophole:</strong> Compliance teams bypass direct IQ claims by using approved scientific facts about the ingredients. Instead of saying the product improves memory, labels state that <em>"Vitamin B12 contributes to the normal functioning of the nervous system and brain."</em>
              </p>
              <p>
                <strong>Visual Workarounds:</strong> Because written claims are heavily scrutinized, brands utilize the visual signals detailed in Section 4—like neural network icons—to convey cognitive benefits without triggering warning letters.
              </p>
            </div>
          </div>
          <div>
            <VisualWrapper caption="Regulatory wording layer framework showing the strict divisions between approved structure-function language and restricted IQ claims.">
              <Image
                src="/images/insights/dha-saturation-thailand-kids-milk/regulatory-layer.svg"
                alt="Infographic showing the regulatory boundaries and approved claims wording for kids food in Thailand."
                width={1920}
                height={1080}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </VisualWrapper>
          </div>
        </div>
      </section>

      {/* Section 6: Research Questions & Future Outlook */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="splitSection">
          <div>
            <VisualWrapper caption="DataClaw research agenda: Tracking future cognitive claims, value brands, and parent anxiety triggers.">
              <Image
                src="/images/insights/dha-saturation-thailand-kids-milk/related-research.svg"
                alt="Conceptual graphic showing upcoming research themes and unresolved category questions."
                width={1920}
                height={1080}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </VisualWrapper>
          </div>
          <div>
            <div className="sectionHeader" style={{ marginBottom: "24px" }}>
              <span>Research Agenda</span>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.1, marginTop: "8px" }}>
                Unresolved Category Questions
              </h2>
            </div>
            <div style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, display: "grid", gap: "16px" }}>
              <p>
                As the kids' milk category in Thailand reaches peak DHA saturation, product developers and market research teams must track several critical questions:
              </p>
              <div style={{ display: "grid", gap: "16px", marginTop: "8px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 800 }}>Q1:</span>
                  <p style={{ margin: 0, fontSize: "15px", color: "var(--muted)" }}>
                    <strong>Is general "Brain Development" still a conversion driver for Gen Alpha parents?</strong> Or have parents become cynical of generic IQ claims, shifting their preference toward immunity, digestion, or emotional calm?
                  </p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 800 }}>Q2:</span>
                  <p style={{ margin: 0, fontSize: "15px", color: "var(--muted)" }}>
                    <strong>Which secondary nutrients effectively support the DHA story?</strong> How do consumers respond to stacks featuring Lutein (eye/screen protection) and Choline (memory) compared to exotic scientific ingredients like Sphingomyelin?
                  </p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 800 }}>Q3:</span>
                  <p style={{ margin: 0, fontSize: "15px", color: "var(--muted)" }}>
                    <strong>How are discount brands leveraging "DHA" to compete with premium tiers?</strong> Can value brands erode premium market share by displaying simple DHA icons at half the price point?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Related Insights */}
      <section className="section" style={{ borderTop: "1px solid var(--line)", paddingTop: "64px" }}>
        <div className="sectionHeader" style={{ marginBottom: "28px" }}>
          <span>Related Insights</span>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1 }}>
            More notes on kids nutrition and category positioning.
          </h2>
        </div>
        <div className="insightGrid">
          {relatedInsights.map((item) => (
            <Link href={item.link} className="insightCard compactCard" key={item.title} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px", minHeight: "200px" }}>
              <div>
                <div className="insightMeta" style={{ marginBottom: "12px" }}>
                  <span className="eyebrow" style={{ fontSize: "10px", margin: 0, textTransform: "uppercase" }}>{item.category}</span>
                </div>
                <h3 style={{ fontSize: "19px", color: "var(--navy)", margin: "0 0 10px 0", lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{item.summary}</p>
              </div>
              <small style={{ marginTop: "16px", color: "var(--blue)", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Read Insight <span aria-hidden="true">→</span>
              </small>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 8: CTA Section */}
      <section id="download-framework" className="section detailCta" style={{ marginBottom: "64px" }}>
        <div>
          <span className="eyebrow" style={{ color: "#c7d6ea" }}>Resources</span>
          <h2 style={{ color: "var(--white)" }}>Get the Ingredient Stack Framework</h2>
          <p style={{ color: "#c7d6ea", fontSize: "16px", marginTop: "8px", maxWidth: "600px" }}>
            A structured breakdown of premium vs. mainstream ingredient stacks in the Thailand kids milk market, helping developers and compliance teams plan product lifecycles.
          </p>
        </div>
        <a className="primaryBtn" href="#download-framework" style={{ background: "var(--white)", color: "var(--navy)", minWidth: "180px", justifyContent: "center" }}>
          Download PDF
        </a>
      </section>
    </main>
  );
}
