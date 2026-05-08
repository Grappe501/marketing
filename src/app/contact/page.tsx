import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Request a walkthrough",
  "Contact RedDirt Operating Systems: request a walkthrough, describe the race you are trying to run—static form UI (submit disabled), no backend intake or analytics.",
  { path: "/contact", ogVariant: "default" },
);

const BRING_LIST = [
  "Current campaign stack (tools + spreadsheets + owners)",
  "Email and calendar tools (and where they disagree today)",
  "Donor workflow (pledge → fulfillment → finance review)",
  "County plan (targets, surrogates, local pressure points)",
  "Compliance workflow (who owns filings, deadlines, packet prep)",
  "Volunteer / field process (how doors connect to data)",
  "Biggest bottleneck this month (one sentence is enough)",
];

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a walkthrough."
        subtitle="Tell us the race you are trying to run: timeline, geography, team shape, and the lane that is currently on fire (comms, finance, field, counties, compliance prep). This page stays intentionally static until an approved intake backend is connected."
        ctas={[
          { label: ctas.demo.label, href: ctas.demo.href, variant: "ghost" },
          { label: ctas.secondary.label, href: ctas.secondary.href, variant: "ghost" },
        ]}
      />

      <Section title="Route intent" intro="Pick the conversation shape so we can prepare the right operator map—not a generic demo script.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)", maxWidth: "72ch" }}>
          <p style={{ margin: "0 0 0.75rem" }}>
            <strong style={{ color: "var(--text)" }}>Walkthrough:</strong> you want the guided narrative first, then drill into lanes.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: "var(--text)" }}>Architecture review:</strong> you already believe the problem and want the taxonomy: lanes, features, governance posture, export/handoff language.
          </p>
        </div>
      </Section>

      <Section title="Show us the operating problem—not the vendor checklist" intro="The best conversations start with the week that is breaking: Monday brief, Friday launch, GOTV crunch, finance close, debate week. We can map that to lanes without claiming every capability is live in your deployment on day one.">
        <ContactForm />
      </Section>

      <Section title="What to bring to the demo" intro="Copy this checklist into your notes—no backend required.">
        <div className="rd-panel" style={{ padding: "1rem" }}>
          <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
            {BRING_LIST.map((item) => (
              <li key={item} style={{ marginBottom: "0.45rem" }}>
                {item}
              </li>
            ))}
          </ol>
          <p className="rd-muted" style={{ margin: "0.85rem 0 0", fontSize: "0.88rem" }}>
            Prepare a walkthrough agenda: paste the list above into email or notes—submission on this site stays disabled in the static marketing build.
          </p>
        </div>
      </Section>

      <Section title="While intake is offline" intro="This site is static marketing. Contact submission is not wired until an approved intake backend is connected.">
        <p className="rd-muted" style={{ margin: 0, maxWidth: "62ch" }}>
          Use{" "}
          <Link href={routes.demo} style={{ color: "var(--accent-2)" }}>
            Demo
          </Link>{" "}
          for the guided narrative, then reach out through whatever channel your team already trusts for vendor conversations.
        </p>
      </Section>
    </>
  );
}
