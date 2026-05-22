import type { Metadata } from "next";
import { getSiteUrl } from "../../../lib/site";

export const metadata: Metadata = {
  title: "DHA Saturation in Thailand Kids Milk Market | DataClaw Insights",
  description: "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
  openGraph: {
    title: "DHA Saturation in Thailand Kids Milk Market | DataClaw Insights",
    description: "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
    type: "article",
    url: `${getSiteUrl()}/insights/dha-saturation-thailand-kids-milk`,
    images: [
      {
        url: "/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg",
        width: 1200,
        height: 675,
        alt: "The DHA Saturation: Decoding Brain Development Claims in Thailand's Kids Milk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHA Saturation in Thailand Kids Milk Market | DataClaw Insights",
    description: "Analysis of DHA market saturation in Thailand's kids milk category. Discover how top brands like Enfagrow and S-26 are evolving cognitive claims beyond DHA.",
    images: ["/images/insights/dha-saturation-thailand-kids-milk/hero-dha-shelf.svg"],
  },
};
