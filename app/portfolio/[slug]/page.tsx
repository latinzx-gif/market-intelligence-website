import { notFound } from "next/navigation";
import { getCollection, getContentItem, type ContentItem } from "../../../lib/content";
import { InsightVisual } from "../../components/InsightVisual";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const evidenceLabels: Array<[keyof ContentItem, string]> = [
  ["packagingComparisons", "Packaging Comparisons"],
  ["retailShelfIntelligence", "Retail Shelf Intelligence"],
  ["claimMapping", "Claim Mapping"],
  ["positioningVisuals", "Positioning Visuals"],
  ["pricingComparisons", "Pricing Comparisons"],
];

const evidenceTemplates: Record<string, string> = {
  "Packaging Comparisons": "packaging-comparison",
  "Retail Shelf Intelligence": "retail-shelf-analysis",
  "Claim Mapping": "claim-mapping",
  "Positioning Visuals": "positioning-matrix",
  "Pricing Comparisons": "pricing-comparison",
};

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.slice(0, 4).map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function cleanBody(body: string) {
  return body
    .split("## Source / REF")[0]
    .replace(/^#+\s+/gm, "")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function generateStaticParams() {
  return getCollection("Portfolio").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Portfolio", slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      images: ["/og-image.svg"],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("Portfolio", slug);
  if (!item) notFound();

  const metrics = [
    ["SKUs analyzed", item.skusAnalyzed],
    ["Categories tracked", item.categoriesTracked],
    ["Retail observations", item.retailObservations],
    ["Intelligence workflows", item.intelligenceWorkflows],
  ].filter((metric): metric is [string, string] => Boolean(metric[1]));

  const details = [
    ["Problem", item.problem],
    ["Research Scope", item.researchScope],
    ["Output", item.output],
    ["Business Value", item.businessValue],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));

  const evidence = evidenceLabels
    .map(([key, label]) => [label, item[key]] as [string, string | undefined])
    .filter((entry): entry is [string, string] => Boolean(entry[1]));

  const body = cleanBody(item.body);

  return (
    <main>
      <nav className="nav detailNav">
        <a className="brand" href="/" aria-label="AI Market Intelligence Home">
          <span>AI</span>
          Market Intelligence
        </a>
        <div className="navLinks">
          <a href="/#services">Services</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#insights">Insights</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className="detailHero section">
        <div>
          <div className="eyebrow">Evidence-driven portfolio page</div>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <Tags tags={item.tags} />
        </div>
        <aside className="detailTakeaway">
          <span>Strategic Takeaway</span>
          <strong>{item.takeaway}</strong>
        </aside>
      </section>

      <section className="section metricStrip">
        {metrics.map(([label, value], index) => (
          <article key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{label}</h3>
            <p>{value}</p>
          </article>
        ))}
      </section>

      <section className="section detailGrid">
        {details.map(([label, value]) => (
          <article key={label} className="detailCard">
            <span>{label}</span>
            <p>{value}</p>
          </article>
        ))}
      </section>

      <section className="section evidenceSection">
        <div className="sectionHeader">
          <span>Visual Evidence System</span>
          <h2>Proof objects that make the recommendation easier to trust.</h2>
        </div>
        <div className="evidenceGrid">
          {evidence.map(([label, value]) => (
            <article className="evidenceCard" key={label}>
              <InsightVisual
                template={evidenceTemplates[label]}
                title={label}
                label="Evidence Module"
                primarySignal={value}
                secondarySignal="Portfolio-safe"
                evidenceNote="From Website_Content"
                className="evidenceInsightVisual"
              />
              <h3>{label}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section narrativeSection">
        <div className="sectionHeader">
          <span>Public Summary</span>
          <h2>Portfolio-safe narrative from the approved publishing layer.</h2>
        </div>
        <div className="narrativeCard">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section detailCta">
        <div>
          <span className="eyebrow">Next Step</span>
          <h2>Need this type of intelligence for your category?</h2>
        </div>
        <a className="primaryBtn" href="/#contact">
          Send Research Brief
        </a>
      </section>
    </main>
  );
}
