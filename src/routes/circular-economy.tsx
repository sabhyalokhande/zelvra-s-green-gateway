import { createFileRoute, Link } from "@tanstack/react-router";
import { InfinityMark } from "@/components/InfinityMark";

export const Route = createFileRoute("/circular-economy")({
  head: () => ({
    meta: [
      { title: "Circular Economy — Zelvra Group" },
      { name: "description", content: "The circular economy framework Zelvra applies across every service line — from IT assets to ESG reporting." },
      { property: "og:title", content: "Circular Economy — Zelvra Group" },
      { property: "og:description", content: "The circular economy framework Zelvra applies across all service lines." },
      { property: "og:url", content: "/circular-economy" },
    ],
    links: [{ rel: "canonical", href: "/circular-economy" }],
  }),
  component: CircularEconomy,
});

const pillars = [
  { n: "01", title: "Design out waste", body: "Embed circular thinking at procurement, architecture and contract stages — not after assets reach end of life." },
  { n: "02", title: "Keep materials in use", body: "Maximise the useful life of IT assets, M&E infrastructure and operational equipment through refurbishment, redeployment and resale." },
  { n: "03", title: "Regenerate systems", body: "Close the loop with structured end-of-life programmes, certified data sanitisation and verified material recovery." },
];

function CircularEconomy() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-primary">Circular Economy</div>
            <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              A continuous loop of <span className="text-gradient-brand">value, not waste</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              Circular economy is not a side service — it is the operating philosophy
              behind every Zelvra engagement. We treat assets, data and emissions as
              flows to be optimised across their full lifecycle.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-20 blur-3xl" />
            <InfinityMark className="w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="rounded-xl border border-border bg-card p-6">
              <div className="font-display text-3xl text-gradient-brand">{p.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-surface/40 p-10">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">How it shows up in our work</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              ["IT Asset Management", "Lifecycle tracking and end-of-life planning that recovers value and reduces Scope 3 exposure."],
              ["Sustainability Consultancy", "GHG accounting that includes upstream and downstream flows, not just operational emissions."],
              ["Data Centre Services", "Designs that prioritise modularity, refurbishment and energy-efficient cooling architectures."],
              ["Applications", "Dashboards that surface circular KPIs — reuse rate, material recovery, embodied carbon — alongside reporting metrics."],
            ].map(([t, b]) => (
              <div key={t}>
                <h4 className="font-semibold">{t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground">
              Discuss your circular roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
