import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Zelvra Group" },
      { name: "description", content: "Thought leadership on ESG, ISO 14064, GHG accounting and circular economy frameworks for Singapore and ASEAN businesses." },
      { property: "og:title", content: "Insights — Zelvra Group" },
      { property: "og:description", content: "ESG, ISO 14064, GHG accounting and circular economy insights." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const posts = [
  { tag: "ISO 14064", title: "What ISO 14064 actually means for Singapore businesses", excerpt: "A practical primer on the international GHG quantification and reporting standard — and where to start.", date: "Coming soon" },
  { tag: "GHG Accounting", title: "GHG accounting basics: Scope 1, 2 and the Scope 3 question", excerpt: "Understanding what you're measuring before choosing tools, software or consultants.", date: "Coming soon" },
  { tag: "Circular Economy", title: "Circular economy for SMEs: starting without a sustainability team", excerpt: "A lean framework to build circular practices into existing operations and procurement.", date: "Coming soon" },
  { tag: "SGX Climate", title: "SGX mandatory climate reporting: a readiness checklist", excerpt: "What listed and pre-listed companies should have in place before the next reporting cycle.", date: "Coming soon" },
  { tag: "IT Asset Management", title: "ITAM as a circular discipline, not an inventory exercise", excerpt: "Reframing IT asset management around value retention and Scope 3 reduction.", date: "Coming soon" },
];

function Insights() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-xs font-medium uppercase tracking-widest text-primary">Insights</div>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        Thinking on <span className="text-gradient-brand">ESG, technology & circularity</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Short, practical articles for sustainability, technology and operations
        leaders navigating Singapore and ASEAN regulatory change.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{p.tag}</span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {p.date}
              </span>
            </div>
            <h2 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface/40 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Insights articles are being prepared at launch. Subscribe via the contact
          form to be notified when each piece is published.
        </p>
      </div>
    </div>
  );
}
