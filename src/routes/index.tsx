import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Cpu, Recycle, Database, Cable, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { InfinityMark } from "@/components/InfinityMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zelvra Group — Bridging Technology & Sustainability" },
      { name: "description", content: "Singapore advisory at the intersection of ESG, circular economy and enterprise technology. Built for ASEAN markets." },
      { property: "og:title", content: "Zelvra Group — Bridging Technology & Sustainability" },
      { property: "og:description", content: "Singapore advisory at the intersection of ESG, circular economy and enterprise technology." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Leaf, title: "Sustainability Consultancy", desc: "GHG accounting, ISO 14064, ESG reporting & SGX climate disclosure." },
  { icon: Recycle, title: "Circular Economy Advisory", desc: "Asset lifecycle, waste reduction and resource optimisation strategy." },
  { icon: Cpu, title: "Sustainability Applications", desc: "Custom GHG trackers, ESG dashboards and carbon accounting platforms." },
  { icon: Database, title: "IT Asset Management", desc: "Deployment, lifecycle tracking and EDI — through a circular lens." },
  { icon: Building2, title: "Data Centre Services", desc: "Infrastructure delivery, fit-out PM, commissioning and operations." },
  { icon: Cable, title: "Electrical & M&E Works", desc: "Structured cabling, electrical infra, plumbing and facilities." },
];

const credentials = [
  "Executive MSc Sustainability Management, NTU Singapore",
  "20+ years cross-industry leadership",
  "SGX Climate & ISO 14064 fluency",
  "GHG Protocol & MAS Green Finance aligned",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Singapore · ASEAN-ready · Est. 2026
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Bridging <span className="text-gradient-brand">Technology</span> &{" "}
              <span className="text-gradient-brand">Sustainability</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Zelvra Group is a Singapore advisory built on a simple belief: technology and
              sustainability are not competing priorities — they are the same solution
              expressed differently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-5 py-3 text-sm font-medium hover:bg-surface"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 text-xs text-muted-foreground sm:grid-cols-4">
              {["SGX Climate", "ISO 14064", "GHG Protocol", "MAS Green Finance"].map((b) => (
                <div key={b} className="rounded-md border border-border/60 bg-surface/30 px-3 py-2 text-center">
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-20 blur-3xl" />
            <InfinityMark className="w-full" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-primary">What we do</div>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Six service lines, one operating philosophy</h2>
            </div>
            <Link to="/services" className="text-sm text-primary hover:underline">
              All services →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow-cyan)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-primary">Why Zelvra</div>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Senior delivery experience across IT, energy and ESG
            </h2>
            <p className="mt-4 text-muted-foreground">
              Founded by a senior practitioner with 20+ years across sustainability,
              IT infrastructure, petrochemicals, logistics and HSSE governance — and
              an Executive MSc in Sustainability Management from NTU Singapore.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
              Read the founding story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="space-y-3">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 text-center sm:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-80" />
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to make sustainability operational?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Tell us about your reporting deadlines, asset programmes or net-zero ambitions.
            We respond within one business day.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
