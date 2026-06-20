import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Globe2, Compass, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zelvra Group" },
      { name: "description", content: "Founded by a senior practitioner with 20+ years across sustainability, IT infrastructure and HSSE governance. NTU MSc Sustainability Management." },
      { property: "og:title", content: "About — Zelvra Group" },
      { property: "og:description", content: "Founding story, principal credentials and mission of Zelvra Group." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-xs font-medium uppercase tracking-widest text-primary">About Zelvra</div>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        A consultancy built where <span className="text-gradient-brand">technology meets sustainability</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Zelvra Group is a Singapore-incorporated advisory founded by a senior
        professional with over 20 years of cross-industry experience spanning
        sustainability management, IT infrastructure, petrochemical operations,
        logistics and HSSE governance.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {[
          { icon: GraduationCap, title: "Academic foundation", body: "Executive MSc in Sustainability Management from Nanyang Technological University (NTU), Singapore." },
          { icon: Compass, title: "Senior delivery", body: "Programme leadership across IT asset management, managed services, warehouse digitisation, ESG frameworks and C-suite stakeholder governance." },
          { icon: Globe2, title: "ASEAN posture", body: "Built from day one for Singapore and ASEAN — fluent in SGX climate, MAS green finance and regional regulatory tempo." },
          { icon: HeartHandshake, title: "Principled mandate", body: "We work with MNCs, SMEs and government agencies as equals — strategic counsel, not vendor pitch." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-6">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-border bg-surface/40 p-8 sm:p-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our mission</h2>
        <p className="mt-4 text-muted-foreground">
          To make sustainability operational — not aspirational. We translate
          regulatory frameworks, climate data and circular economy principles
          into systems, decisions and digital tools organisations can actually run.
        </p>
        <h2 className="mt-10 font-display text-2xl font-semibold sm:text-3xl">Why the infinity loop</h2>
        <p className="mt-4 text-muted-foreground">
          Our brand mark — an infinity loop built from interconnected network nodes
          — is deliberate. It references the circular economy principle: continuous
          cycles of value creation, resource optimisation and regenerative thinking.
          This is not a generic consultancy. It is a firm built on the belief that
          technology and sustainability are the same solution expressed differently.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground">
          Work with Zelvra
        </Link>
      </div>
    </div>
  );
}
