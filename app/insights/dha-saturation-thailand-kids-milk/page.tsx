import { Metadata } from "next";
import DHASaturationContent from "./DHASaturationContent";

export const metadata: Metadata = {
  title: "DHA Saturation in Thailand Kids Milk Market | DataClaw Insights",
  description:
    "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
  openGraph: {
    title: "DHA Saturation in Thailand Kids Milk Market | DataClaw Insights",
    description:
      "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
    url: "https://dataclaw.ai/insights/thailand-kids-milk-dha-saturation",
    type: "article",
    images: [
      {
        url: "/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg",
        width: 1200,
        height: 630,
        alt: "DHA Saturation Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHA Saturation in Thailand Kids Milk Market | DataClaw Insights",
    description:
      "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
    images: ["/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg"],
  },
};

export default function DHASaturationPage() {
  return <DHASaturationContent />;
}
