import { Link } from "react-router-dom";
import { Leaf, Recycle, Cpu, Database, Building2, Cable, Network, Truck, ArrowRight } from "lucide-react";

const loopStages = [
  {
    n: "01", stage: "Assess", hue: "oklch(0.72 0.19 202)",
    services: [
      {
        icon: Leaf,
        title: "Sustainability Consultancy",
        desc: "Regulatory-grade advisory for Singapore and ASEAN climate frameworks.",
        points: ["GHG accounting & ISO 14064", "ESG reporting frameworks", "SGX climate disclosure guidance", "Carbon footprint assessment"],
      },
    ],
  },
  {
    n: "02", stage: "Optimise", hue: "oklch(0.60 0.24 252)",
    services: [
      {
        icon: Recycle,
        title: "Circular Economy Advisory",
        desc: "Embed circularity into procurement, operations and strategy.",
        points: ["IT & physical asset lifecycle", "Waste reduction frameworks", "Resource optimisation strategies", "End-of-life asset planning"],
      },
      {
        icon: Database,
        title: "IT Asset Management",
        desc: "Structured ITAM through a circular economy and Scope 3 lens.",
        points: ["Asset deployment & tracking", "EDI implementation", "Inventory digitisation", "Circular economy integration"],
      },
      {
        icon: Building2,
        title: "Data Centre Services",
        desc: "End-to-end infrastructure delivery and commissioning.",
        points: ["Infrastructure delivery", "Fit-out project management", "Commissioning", "Operations readiness"],
      },
      {
        icon: Cable,
        title: "Electrical and M&E Works",
        desc: "Physical infrastructure delivery for facilities and data centre environments.",
        points: ["Structured cabling", "Electrical infrastructure", "Plumbing coordination", "Facilities management"],
      },
    ],
  },
  {
    n: "03", stage: "Report", hue: "oklch(0.45 0.30 295)",
    services: [
      {
        icon: Cpu,
        title: "Sustainability Application Development",
        desc: "Purpose-built digital tools for ESG measurement and reporting.",
        points: ["Custom GHG tracking tools", "ESG dashboards", "Carbon accounting platforms", "Sustainability reporting systems"],
      },
    ],
  },
];

const year2 = [
  { icon: Network, title: "IT Managed Services",      desc: "Service delivery management, SLA governance and IT operations support — activated as the Zelvra pipeline develops in Year 2." },
  { icon: Truck,   title: "Supply Chain & Logistics", desc: "Warehouse digitisation, logistics optimisation, HSSE governance frameworks and cross-functional stakeholder management." },
];

export default function Services() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background: [
            "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.45 0.30 295 / 0.22) 0%, transparent 70%)",
            "oklch(0.09 0.04 262)",
          ].join(","),
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <p className="label-tag mb-5 inline-block">Services</p>
          <h1 className="font-display text-[2.75rem] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
            Six lines of practice,<br className="hidden sm:block" />{" "}
            <span className="text-gradient-animated">one continuous loop.</span>
          </h1>
          <div
            className="mx-auto mt-7 h-px w-36"
            style={{ background: "linear-gradient(90deg, transparent, #6B21C8, #06C9E8, transparent)" }}
          />
          <p className="mx-auto mt-7 max-w-xl text-[1.0625rem] leading-[1.8] text-white/50">
            Every service maps to a stage of The Zelvra Loop — from baseline assessment through optimisation to certified disclosure.
          </p>
        </div>
      </section>

      {/* ── LOOP STAGE NODES ──────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 w-20">
              <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full" />
            </div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-white/30">The Zelvra Loop · Each service has a stage</p>
          </div>

          <div className="relative flex flex-col items-stretch gap-8 sm:flex-row sm:items-start sm:gap-0">
            {loopStages.map(({ n, stage, hue }, i) => (
              <div key={stage} className="relative flex flex-1 flex-col items-center text-center">
                {i < loopStages.length - 1 && (
                  <div
                    className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] sm:block"
                    style={{ background: `linear-gradient(90deg, ${hue}55, oklch(0.52 0.27 278 / 0.4))` }}
                  />
                )}
                <div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2"
                  style={{ borderColor: hue, background: `${hue}14`, boxShadow: `0 0 24px ${hue}35` }}
                >
                  <span className="font-mono text-[0.6875rem] font-bold tracking-wider" style={{ color: hue }}>{n}</span>
                </div>
                {i < loopStages.length - 1 && <div className="my-1 text-white/20 sm:hidden">↓</div>}
                <div className="mt-5 px-2">
                  <div className="font-display text-base font-bold" style={{ color: hue }}>{stage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BY STAGE ─────────────────────────────── */}
      {loopStages.map(({ n, stage, hue, services }, si) => (
        <section
          key={stage}
          className="border-t border-white/[0.08]"
          style={{ background: si % 2 === 0 ? "oklch(0.10 0.04 262)" : "oklch(0.09 0.04 262)" }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            {/* Stage label row */}
            <div className="mb-14 flex items-center gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-[0.6875rem] font-mono font-bold"
                style={{ borderColor: hue, color: hue, background: `${hue}14` }}
              >
                {n}
              </div>
              <div>
                <div className="text-[0.625rem] font-bold uppercase tracking-[0.22em] text-white/30">Loop Stage</div>
                <div className="text-[1rem] font-bold" style={{ color: hue }}>{stage}</div>
              </div>
              <div className="ml-4 h-px flex-1" style={{ background: `linear-gradient(90deg, ${hue}40, transparent)` }} />
            </div>

            {/* Alternating service rows */}
            <div className="divide-y divide-white/[0.06]">
              {services.map(({ icon: Icon, title, desc, points }, i) => (
                <div
                  key={title}
                  className={`grid items-center gap-12 py-16 first:pt-0 last:pb-0 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Text side */}
                  <div>
                    <h2 className="font-display text-[1.5rem] font-bold leading-snug text-white sm:text-[1.875rem]">{title}</h2>
                    <p className="mt-4 text-[1rem] leading-[1.75] text-white/50">{desc}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {points.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border px-3.5 py-1.5 text-[0.75rem] font-semibold"
                          style={{ borderColor: `${hue}40`, color: hue, background: `${hue}0d` }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className="flex items-center justify-center">
                    <div
                      className="flex h-40 w-40 items-center justify-center rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${hue}20 0%, ${hue}06 60%, transparent 100%)`,
                        boxShadow: `0 0 60px ${hue}25`,
                        border: `1px solid ${hue}25`,
                      }}
                    >
                      <Icon className="h-16 w-16 opacity-60" style={{ color: hue }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── YEAR 2 ────────────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="label-tag mb-4 inline-block">Year 2</p>
          <h2 className="font-display text-[1.75rem] font-bold text-white sm:text-[2.25rem]">
            Two more lines, when the loop is ready.
          </h2>
          <div
            className="mx-auto mt-5 h-px w-28"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.45 0.30 295 / 0.6), transparent)" }}
          />
          <p className="mx-auto mt-6 max-w-lg text-[0.9375rem] leading-[1.8] text-white/40">
            Available on enquiry as Zelvra's pipeline matures into Year 2.
          </p>
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            {year2.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-white/[0.08] p-7 text-left"
                style={{ background: "oklch(0.12 0.048 262)" }}
              >
                <Icon className="mb-4 h-6 w-6 text-white/30" />
                <h3 className="font-display text-[0.9375rem] font-bold text-white/70">{title}</h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/35">{desc}</p>
                <div className="mt-4 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/25">On enquiry</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.07 0.035 262)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-[1.75rem] font-bold text-white sm:text-[2.25rem]">
            Not sure where you fit in the loop?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.9375rem] text-white/40">
            Send us a brief — we'll scope the right starting point and respond within one business day.
          </p>
          <div className="relative mt-10 inline-block">
            <div
              aria-hidden
              className="absolute inset-0 rounded-lg"
              style={{ animation: "pulse-ring 2.6s ease-out infinite", background: "oklch(0.50 0.26 292 / 0.28)" }}
            />
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2.5 rounded-lg bg-gradient-brand px-8 py-4 text-[0.9375rem] font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
