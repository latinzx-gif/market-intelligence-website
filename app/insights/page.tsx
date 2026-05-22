import { Metadata } from "next";
import InsightsContent from "./InsightsContent";

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

export default function InsightsPage() {
  return <InsightsContent />;
}
