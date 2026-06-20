import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Cpu, Recycle, Database, Cable, Building2, ShieldCheck, GraduationCap, Globe2, Award } from "lucide-react";
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
  { icon: Leaf, title: "Sustainability Consultancy", desc: "GHG accounting, ISO 14064, ESG reporting & SGX climate disclosure guidance." },
  { icon: Recycle, title: "Circular Economy Advisory", desc: "Asset lifecycle, waste reduction and resource optimisation strategy." },
  { icon: Cpu, title: "Sustainability Applications", desc: "Custom GHG trackers, ESG dashboards and carbon accounting platforms." },
  { icon: Database, title: "IT Asset Management", desc: "Deployment, lifecycle tracking and EDI — through a circular economy lens." },
  { icon: Building2, title: "Data Centre Services", desc: "Infrastructure delivery, fit-out PM, commissioning and operations." },
  { icon: Cable, title: "Electrical & M&E Works", desc: "Structured cabling, electrical infrastructure, plumbing and facilities." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,oklch(0.5_0.2_300/0.5),transparent_50%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.14_200/0.5),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Singapore · ASEAN-ready · Est. 2026
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Bridging <span className="text-gradient-brand">Technology</span> &{" "}
              <span className="text-gradient-brand">Sustainability</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Zelvra Group is a Singapore consultancy built on a simple belief:
              technology and sustainability are not competing priorities — they are
              the same solution expressed differently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <InfinityMark className="w-full" />
          </div>
        </div>

        {/* badges strip */}
        <div className="relative border-t border-white/10 bg-black/20">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-5 text-center text-xs font-medium uppercase tracking-widest text-white/60 sm:grid-cols-4">
            <div>SGX Climate Reporting</div>
            <div>ISO 14064</div>
            <div>GHG Protocol</div>
            <div>MAS Green Finance</div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Who we are</div>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-navy sm:text-3xl">
            A Singapore-based strategic advisory at the intersection of
            sustainability, circular economy and enterprise technology — serving
            MNCs, SMEs and government agencies across ASEAN.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</div>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Six service lines, one operating philosophy</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Year 1 services delivered from Singapore with regional capability.
                Each line is framed through a circular economy lens.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              All services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Why Zelvra</div>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Senior delivery experience across IT, energy and ESG
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded by a senior practitioner with 20+ years across sustainability,
                IT infrastructure, petrochemicals, logistics and HSSE governance — and
                an Executive MSc in Sustainability Management from NTU Singapore.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Read the founding story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, title: "NTU MSc", body: "Executive MSc in Sustainability Management" },
                { icon: Award, title: "20+ years", body: "Cross-industry senior leadership" },
                { icon: ShieldCheck, title: "ISO 14064", body: "Standards-aligned advisory" },
                { icon: Globe2, title: "ASEAN", body: "Built for regional regulatory tempo" },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <Icon className="h-6 w-6 text-primary" />
                  <div className="mt-3 font-display text-base font-semibold text-navy">{title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-10 text-center text-navy-foreground sm:p-16">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,oklch(0.5_0.2_300/0.6),transparent_50%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.14_200/0.6),transparent_50%)]" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Ready to make sustainability operational?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/75">
                Tell us about your reporting deadlines, asset programmes or net-zero
                ambitions. We respond within one business day.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02]"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
