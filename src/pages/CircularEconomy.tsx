import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* Infinite Loop direction — philosophy first, the loop as protagonist */

const loopStages = [
  { n: "01", stage: "Assess",     hue: "oklch(0.72 0.19 202)", body: "Understand the baseline. Map GHG flows, identify circular gaps, and establish regulatory exposure across Scope 1, 2 and 3." },
  { n: "02", stage: "Optimise",   hue: "oklch(0.60 0.24 252)", body: "Reduce and improve. Circular procurement decisions, ITAM discipline, infrastructure efficiency and supplier engagement." },
  { n: "03", stage: "Regenerate", hue: "oklch(0.52 0.27 278)", body: "Close material loops. Structured end-of-life programmes, certified data sanitisation, verified material recovery and redeployment." },
  { n: "04", stage: "Report",     hue: "oklch(0.45 0.30 295)", body: "Communicate transformation. Standards-aligned ESG disclosure, custom dashboards and audit-ready GHG accounts." },
];

const pillars = [
  { n: "01", title: "Design out waste",       body: "Embed circular thinking at procurement, architecture and contract stages — not after assets reach end of life." },
  { n: "02", title: "Keep materials in use",  body: "Maximise the useful life of IT assets, M&E infrastructure and operational equipment through refurbishment, redeployment and resale." },
  { n: "03", title: "Regenerate systems",     body: "Close the loop with structured end-of-life programmes, certified data sanitisation and verified material recovery." },
];

const applications = [
  { title: "IT Asset Management",        body: "Lifecycle tracking and end-of-life planning that recovers value and reduces Scope 3 exposure." },
  { title: "Sustainability Consultancy", body: "GHG accounting that includes upstream and downstream flows, not just operational emissions." },
  { title: "Data Centre Services",       body: "Designs that prioritise modularity, refurbishment and energy-efficient cooling architectures." },
  { title: "Applications",              body: "Dashboards that surface circular KPIs — reuse rate, material recovery, embodied carbon — alongside reporting metrics." },
];

export default function CircularEconomy() {
  return (
    <>
      {/* ── HERO (Infinite Loop: mark as protagonist) ─────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: [
            "radial-gradient(ellipse 50% 60% at 90% 20%, oklch(0.45 0.30 295 / 0.25) 0%, transparent 100%)",
            "radial-gradient(ellipse 40% 50% at 10% 80%, oklch(0.72 0.19 202 / 0.18) 0%, transparent 100%)",
            "linear-gradient(160deg, oklch(0.11 0.06 262) 0%, oklch(0.09 0.04 262) 100%)",
          ].join(","),
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="label-tag mb-4">Circular Economy</p>
              <h1 className="text-4xl text-white sm:text-[3.25rem] leading-[1.06]">
                A continuous loop of{" "}
                <span className="text-gradient-brand">value, not waste</span>
              </h1>
              <p className="mt-6 max-w-lg text-[1.0625rem] leading-[1.75] text-white/50">
                Circular economy is not a side service — it is the operating philosophy behind every Zelvra engagement. As Singapore's SGX climate reporting mandate, MAS green finance taxonomy, and Green Plan 2030 targets reshape business requirements, circular thinking has moved from optional to essential.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px">
                Discuss your circular roadmap <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative flex items-center justify-center">
              <div aria-hidden className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-20" style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }} />
              <div className="w-full max-w-sm">
                <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO (Infinite Loop: centered editorial) ─── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.04 262)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mx-auto font-display text-[1.5rem] font-semibold leading-[1.4] tracking-[-0.02em] text-white/80 sm:text-[1.875rem]">
            "Circular economy is not a disposal problem. It is a{" "}
            <span className="text-gradient-animated">design problem</span> — and it is solved by thinking across the whole asset lifecycle from the very first procurement decision, not the last."
          </p>
        </div>
      </section>

      {/* ── THE LOOP (Infinite Loop: 4 stages full) ──────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="label-tag mb-3">The framework</p>
            <h2 className="text-3xl text-white sm:text-4xl">The Zelvra Loop</h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-white/45">Every engagement follows the same regenerative path — and every path returns to the beginning.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {loopStages.map(({ n, stage, hue, body }) => (
              <div
                key={stage}
                className="relative rounded-xl border border-white/[0.08] p-7 transition-all duration-200 hover:border-white/[0.18]"
                style={{ background: "oklch(0.12 0.048 262)" }}
              >
                <div className="mb-5">
                  <span className="font-mono text-[0.5625rem] font-bold tracking-[0.2em] text-white/25">{n}</span>
                  <div className="mt-2 font-display text-xl font-bold" style={{ color: hue }}>{stage}</div>
                </div>
                <div className="h-px w-8 mb-5" style={{ background: hue }} />
                <p className="text-[0.8125rem] leading-relaxed text-white/50">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PRINCIPLES ─────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.045 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="label-tag mb-3">The framework</p>
          <h2 className="mb-10 text-2xl text-white sm:text-3xl">Three circular principles</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="group rounded-xl border border-white/[0.08] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.18]"
                style={{ background: "oklch(0.13 0.05 265)" }}
              >
                <span className="font-display text-4xl font-bold text-gradient-brand">{p.n}</span>
                <h3 className="mt-4 text-[0.9375rem] font-bold text-white/90">{p.title}</h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/45">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN PRACTICE ──────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="label-tag mb-3">In practice</p>
          <h2 className="mb-10 text-2xl text-white sm:text-3xl">How it shows up in our work</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-white/[0.08] p-6" style={{ background: "oklch(0.12 0.048 262)" }}>
                <h4 className="text-[0.875rem] font-bold text-white/80">{title}</h4>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/45">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110">
              Discuss your circular roadmap <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
