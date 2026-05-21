import type { ContentItem } from "../../lib/content";

type VisualTemplate =
  | "packaging-comparison"
  | "positioning-matrix"
  | "retail-shelf-analysis"
  | "pricing-comparison"
  | "trend-signal"
  | "claim-mapping";

type InsightVisualProps = {
  item?: Pick<
    ContentItem,
    | "title"
    | "summary"
    | "coverImage"
    | "imageAlt"
    | "visualTemplate"
    | "visualLabel"
    | "primarySignal"
    | "secondarySignal"
    | "evidenceNote"
    | "shareFormat"
  >;
  template?: string;
  title?: string;
  label?: string;
  primarySignal?: string;
  secondarySignal?: string;
  evidenceNote?: string;
  className?: string;
};

function getTemplate(value?: string): VisualTemplate {
  const allowed: VisualTemplate[] = [
    "packaging-comparison",
    "positioning-matrix",
    "retail-shelf-analysis",
    "pricing-comparison",
    "trend-signal",
    "claim-mapping",
  ];

  return allowed.includes(value as VisualTemplate) ? (value as VisualTemplate) : "trend-signal";
}

function TemplateArt({ template }: { template: VisualTemplate }) {
  if (template === "packaging-comparison") {
    return (
      <div className="visualPackCompare" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (template === "positioning-matrix") {
    return (
      <div className="visualMatrix" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    );
  }

  if (template === "retail-shelf-analysis") {
    return (
      <div className="visualShelf" aria-hidden="true">
        <span>
          <i />
          <i />
          <i />
        </span>
        <span>
          <i />
          <i />
          <i />
        </span>
        <span>
          <i />
          <i />
          <i />
        </span>
      </div>
    );
  }

  if (template === "pricing-comparison") {
    return (
      <div className="visualPricing" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (template === "claim-mapping") {
    return (
      <div className="visualClaims" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="visualTrend" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function InsightVisual({
  item,
  template,
  title,
  label,
  primarySignal,
  secondarySignal,
  evidenceNote,
  className,
}: InsightVisualProps) {
  const resolvedTemplate = getTemplate(template ?? item?.visualTemplate);
  const resolvedTitle = title ?? item?.title ?? "Insight Visual";
  const resolvedLabel = label ?? item?.visualLabel ?? resolvedTemplate.replace(/-/g, " ");
  const resolvedPrimary = primarySignal ?? item?.primarySignal ?? "Strategic pattern";
  const resolvedSecondary = secondarySignal ?? item?.secondarySignal ?? "Opportunity signal";
  const resolvedEvidence = evidenceNote ?? item?.evidenceNote ?? "Public-safe evidence summary";
  const image = item?.coverImage;

  return (
    <div className={`insightVisual ${className ?? ""}`} data-template={resolvedTemplate}>
      {image ? (
        <img src={image} alt={item?.imageAlt ?? resolvedTitle} className="insightVisualImage" />
      ) : (
        <TemplateArt template={resolvedTemplate} />
      )}
      <div className="insightVisualCopy">
        <span>{resolvedLabel}</span>
        <strong>{resolvedTitle}</strong>
        <p>{resolvedPrimary}</p>
      </div>
      <div className="insightVisualFooter">
        <span>{resolvedSecondary}</span>
        <span>{resolvedEvidence}</span>
      </div>
    </div>
  );
}
