import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Recycle, Cpu, Database, Building2, Cable, Network, Truck, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zelvra Group" },
      { name: "description", content: "Sustainability consultancy, circular economy advisory, sustainability apps, IT asset management, data centre and M&E services." },
      { property: "og:title", content: "Services — Zelvra Group" },
      { property: "og:description", content: "Year 1 service lines and Year 2 roadmap from Zelvra Group." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const year1 = [
  { icon: Leaf, title: "Sustainability Consultancy", points: ["GHG accounting advisory", "ISO 14064 implementation support", "Carbon footprint assessment", "ESG reporting frameworks", "SGX climate disclosure guidance"] },
  { icon: Recycle, title: "Circular Economy Advisory", points: ["IT & physical asset lifecycle management", "Waste reduction frameworks", "Resource optimisation strategies", "End-of-life asset planning"] },
  { icon: Cpu, title: "Sustainability Application Development", points: ["Custom GHG tracking tools", "ESG dashboards", "Sustainability reporting platforms", "Carbon accounting applications"] },
  { icon: Database, title: "IT Asset Management", points: ["Asset deployment & tracking", "EDI implementation", "Inventory digitisation", "Framed through circular economy lens"] },
  { icon: Building2, title: "Data Centre Services", points: ["Infrastructure delivery", "Fit-out project management", "Commissioning", "Operations readiness"] },
  { icon: Cable, title: "Electrical and M&E Works", points: ["Structured cabling", "Electrical infrastructure", "Plumbing coordination", "Facilities management"] },
];

const year2 = [
  { icon: Network, title: "IT Managed Services", desc: "Service delivery management, SLA governance, IT operations support — activated as pipeline develops." },
  { icon: Truck, title: "Supply Chain & Logistics", desc: "Warehouse digitisation, logistics optimisation, HSSE governance and cross-functional stakeholder management." },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs font-medium uppercase tracking-widest text-primary">Services</div>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        Strategic counsel & delivery, <span className="text-gradient-brand">end to end</span>
      </h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Six Year 1 service lines for sustainability, technology and infrastructure
        programmes — with two further service lines coming online as our pipeline matures.
      </p>

      <h2 className="mt-16 font-display text-2xl font-semibold">Year 1 services</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {year1.map(({ icon: Icon, title, points }) => (
          <article key={title} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow-cyan)]">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mt-20 font-display text-2xl font-semibold">Coming soon · Year 2</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {year2.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="rounded-xl border border-dashed border-border bg-surface/30 p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <span className="ml-auto rounded-full border border-secondary/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-secondary-foreground/80">On enquiry</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-border bg-surface/40 p-10 text-center">
        <h3 className="font-display text-2xl font-semibold">Not sure where you fit?</h3>
        <p className="mt-2 text-muted-foreground">Send us a brief — we'll scope the right starting point.</p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground">
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
