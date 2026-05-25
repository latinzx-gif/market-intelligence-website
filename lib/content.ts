import fs from "node:fs";
import path from "node:path";

export type ContentItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  publishDate: string;
  featured: boolean;
  category?: string;
  confidence?: string;
  readTime?: string;
  relatedReports?: string[];
  signals?: string[];
  coverImage?: string;
  imageAlt?: string;
  visualTemplate?: string;
  visualLabel?: string;
  primarySignal?: string;
  secondarySignal?: string;
  evidenceNote?: string;
  shareFormat?: string;
  takeaway?: string;
  problem?: string;
  researchScope?: string;
  output?: string;
  businessValue?: string;
  skusAnalyzed?: string;
  categoriesTracked?: string;
  retailObservations?: string;
  intelligenceWorkflows?: string;
  packagingComparisons?: string;
  retailShelfIntelligence?: string;
  claimMapping?: string;
  positioningVisuals?: string;
  pricingComparisons?: string;
  icon?: string;
  body: string;
};

function resolveContentRoot() {
  const projectContentRoot = path.resolve(process.cwd(), "Website_Content");
  if (fs.existsSync(projectContentRoot)) return projectContentRoot;
  return path.resolve(process.cwd(), "..", "Website_Content");
}

const contentRoot = resolveContentRoot();
const allowedCollections = new Set(["Insights", "Portfolio", "Case_Studies", "Services", "Reports"]);

function parseScalar(value: string): string | boolean | string[] | undefined {
  const cleaned = value.trim();
  if (!cleaned) return undefined;
  if (cleaned === "true") return true;
  if (cleaned === "false") return false;
  if (cleaned.startsWith("[") && cleaned.endsWith("]")) {
    const items = [...cleaned.matchAll(/"([^"]+)"|'([^']+)'|([^,\[\]]+)/g)]
      .map((match) => match[1] ?? match[2] ?? match[3])
      .map((item) => item.trim())
      .filter(Boolean);
    return items;
  }
  return cleaned.replace(/^["']|["']$/g, "");
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  if (!raw.startsWith("---")) return { data: {}, body: raw };

  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw };

  const frontmatter = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();
  const data: Record<string, unknown> = {};
  const lines = frontmatter.split(/\r?\n/);

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (rawValue.trim()) {
      data[key] = parseScalar(rawValue);
      continue;
    }

    const values: string[] = [];
    while (i + 1 < lines.length && lines[i + 1].trim().startsWith("- ")) {
      i += 1;
      values.push(lines[i].trim().replace(/^- /, ""));
    }
    data[key] = values;
  }

  return { data, body };
}

function toTags(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function toStrings(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function toItem(filePath: string): ContentItem {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const slug = path.basename(filePath).replace(/\.md$/, "");

  return {
    slug,
    title: String(data.title ?? slug.replace(/_/g, " ")),
    summary: String(data.summary ?? ""),
    tags: toTags(data.tags),
    publishDate: String(data.publishDate ?? ""),
    featured: Boolean(data.featured),
    category: data.category ? String(data.category) : undefined,
    confidence: data.confidence ? String(data.confidence) : undefined,
    readTime: data.readTime ? String(data.readTime) : undefined,
    relatedReports: toStrings(data.relatedReports),
    signals: toStrings(data.signals),
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    visualTemplate: data.visualTemplate ? String(data.visualTemplate) : undefined,
    visualLabel: data.visualLabel ? String(data.visualLabel) : undefined,
    primarySignal: data.primarySignal ? String(data.primarySignal) : undefined,
    secondarySignal: data.secondarySignal ? String(data.secondarySignal) : undefined,
    evidenceNote: data.evidenceNote ? String(data.evidenceNote) : undefined,
    shareFormat: data.shareFormat ? String(data.shareFormat) : undefined,
    takeaway: data.takeaway ? String(data.takeaway) : undefined,
    problem: data.problem ? String(data.problem) : undefined,
    researchScope: data.researchScope ? String(data.researchScope) : undefined,
    output: data.output ? String(data.output) : undefined,
    businessValue: data.businessValue ? String(data.businessValue) : undefined,
    skusAnalyzed: data.skusAnalyzed ? String(data.skusAnalyzed) : undefined,
    categoriesTracked: data.categoriesTracked ? String(data.categoriesTracked) : undefined,
    retailObservations: data.retailObservations ? String(data.retailObservations) : undefined,
    intelligenceWorkflows: data.intelligenceWorkflows ? String(data.intelligenceWorkflows) : undefined,
    packagingComparisons: data.packagingComparisons ? String(data.packagingComparisons) : undefined,
    retailShelfIntelligence: data.retailShelfIntelligence ? String(data.retailShelfIntelligence) : undefined,
    claimMapping: data.claimMapping ? String(data.claimMapping) : undefined,
    positioningVisuals: data.positioningVisuals ? String(data.positioningVisuals) : undefined,
    pricingComparisons: data.pricingComparisons ? String(data.pricingComparisons) : undefined,
    icon: data.icon ? String(data.icon) : undefined,
    body,
  };
}

export function isCanonicalReportSlug(slug: string) {
  return /^REPORT-\d{3}$/.test(slug);
}

export function isStrategicInsight(item: ContentItem) {
  return item.tags.includes("Strategic Insight");
}

export function getCollection(collection: string): ContentItem[] {
  if (!allowedCollections.has(collection)) {
    throw new Error(`Collection "${collection}" is not public-approved.`);
  }

  const dir = path.join(contentRoot, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => toItem(path.join(dir, file)))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      const byDate = b.publishDate.localeCompare(a.publishDate);
      if (byDate !== 0) return byDate;
      return a.title.localeCompare(b.title);
    });
}

export function getPublishingStats() {
  const insights = getCollection("Insights");
  const portfolio = getCollection("Portfolio");
  const services = getCollection("Services");

  return {
    insights: insights.length,
    portfolio: portfolio.length,
    services: services.length,
  };
}

export function getContentItem(collection: string, slug: string): ContentItem | undefined {
  return getCollection(collection).find((item) => item.slug === slug);
}
