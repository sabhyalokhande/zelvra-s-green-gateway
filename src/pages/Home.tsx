import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, GraduationCap, Globe2, Award, Leaf, BarChart3, Recycle, Database, Monitor, Server } from "lucide-react";
import { posts } from "@/data/posts";
import { ParticleField } from "@/components/ParticleField";
import { Marquee } from "@/components/Marquee";

const loopStages = [
  { n: "01", stage: "Assess",     hue: "oklch(0.72 0.19 202)", desc: "Map your baseline — GHG inventory, regulatory exposure and circular gaps." },
  { n: "02", stage: "Optimise",   hue: "oklch(0.60 0.24 252)", desc: "Reduce footprint through circular procurement, ITAM and infrastructure." },
  { n: "03", stage: "Regenerate", hue: "oklch(0.52 0.27 278)", desc: "Close material loops — certified lifecycle programmes and recovery." },
  { n: "04", stage: "Report",     hue: "oklch(0.45 0.30 295)", desc: "Communicate outcomes with standards-aligned ESG reporting and apps." },
];


const credentials = [
  { icon: GraduationCap, title: "NTU MSc",   body: "Executive MSc in Sustainability Management" },
  { icon: Award,         title: "20+ years", body: "Cross-industry senior leadership" },
  { icon: ShieldCheck,   title: "ISO 14064", body: "Standards-aligned GHG advisory" },
  { icon: Globe2,        title: "ASEAN",     body: "Built for regional regulatory tempo" },
];

const frameworks = [
  "SGX Climate Reporting", "ISO 14064", "GHG Protocol",
  "MAS Green Finance", "Singapore PDPA", "Scope 3 Accounting",
];




export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden"
        style={{
          background: [
            "radial-gradient(ellipse 60% 70% at 92% 0%, oklch(0.45 0.30 295 / 0.48) 0%, transparent 100%)",
            "radial-gradient(ellipse 50% 60% at 4% 100%, oklch(0.72 0.19 202 / 0.28) 0%, transparent 100%)",
            "radial-gradient(ellipse 40% 50% at 50% 55%, oklch(0.22 0.09 148 / 0.55) 0%, transparent 100%)",
            "linear-gradient(155deg, oklch(0.17 0.09 150) 0%, oklch(0.13 0.07 220) 42%, oklch(0.11 0.065 265) 100%)",
          ].join(","),
        }}
      >
        <ParticleField />
        <div aria-hidden className="animate-blob-1 pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full blur-[110px]" style={{ background: "oklch(0.45 0.30 295 / 0.14)" }} />
        <div aria-hidden className="animate-blob-2 pointer-events-none absolute -right-24 top-1/4 h-[400px] w-[400px] rounded-full blur-[130px]" style={{ background: "oklch(0.72 0.19 202 / 0.12)" }} />
        <div aria-hidden className="animate-blob-3 pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full blur-[100px]" style={{ background: "oklch(0.22 0.09 148 / 0.35)" }} />

        {/* Centred content column */}
        <div className="relative mx-auto flex flex-1 w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center lg:py-28">
          {/* Badge pill */}
          <div className="animate-float inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/55 backdrop-blur-sm uppercase">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }} />
            Sustainability + Technology · Singapore & ASEAN
          </div>

          {/* Headline */}
          <h1 className="mt-8 font-display text-[3rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-[3.75rem] lg:text-[5rem]">
            Bridging Technology<br className="hidden sm:block" /> &{" "}
            <span className="text-gradient-animated">Sustainability.</span>
          </h1>

          {/* Gradient accent line */}
          <div
            className="mx-auto mt-6 h-px w-40"
            style={{ background: "linear-gradient(90deg, transparent, #6B21C8, #06C9E8, transparent)" }}
          />

          <p className="mx-auto mt-7 max-w-xl text-[1.0625rem] leading-[1.8] text-white/50">
            Singapore advisory where technology and sustainability are the same solution — expressed differently. Serving MNCs, SMEs and government agencies across ASEAN.
          </p>

          {/* Single CTA with pulse ring */}
          <div className="relative mt-10">
            <div
              aria-hidden
              className="absolute inset-0 rounded-lg"
              style={{ animation: "pulse-ring 2.6s ease-out infinite", background: "oklch(0.50 0.26 292 / 0.30)" }}
            />
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2.5 rounded-lg bg-gradient-brand px-8 py-4 text-[0.9375rem] font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-14 flex flex-col items-center gap-1.5 text-white/25">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">scroll</span>
            <span className="text-lg leading-none">↓</span>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/[0.04] py-4 backdrop-blur-sm">
          <Marquee items={frameworks} duration={22} className="text-white/35" />
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.04 262)" }}>
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <div className="mx-auto mb-8 w-44">
            <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full" />
          </div>
          <p className="mx-auto font-display text-[1.65rem] font-semibold leading-[1.3] tracking-[-0.025em] text-white/90 sm:text-[2rem] lg:text-[2.4rem]">
            Technology and sustainability are not<br className="hidden sm:block" /> competing priorities. They are{" "}
            <span className="text-gradient-animated">the same solution,<br className="hidden sm:block" /> expressed differently.</span>
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition-colors duration-150 hover:text-white/70">
            Our founding story <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ── THE ZELVRA LOOP ──────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <div className="mx-auto mb-6 w-24">
              <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full" />
            </div>
            <p className="label-tag mb-3">The Zelvra Loop · One continuous cycle of value</p>
            <h2 className="text-3xl sm:text-4xl text-white">A continuous loop of value</h2>
          </div>

          {/* Circular node layout — matches wireframe */}
          <div className="relative flex flex-col items-stretch gap-8 sm:flex-row sm:items-start sm:gap-0">
            {loopStages.map(({ n, stage, hue, desc }, i) => (
              <div key={stage} className="relative flex flex-1 flex-col items-center text-center">
                {/* Connector line (between nodes, desktop only) */}
                {i < 3 && (
                  <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] sm:block" style={{ background: `linear-gradient(90deg, ${hue}55, oklch(0.52 0.27 278 / 0.4))` }} />
                )}

                {/* Circle node */}
                <div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2"
                  style={{ borderColor: hue, background: `${hue}14`, boxShadow: `0 0 20px ${hue}30` }}
                >
                  <span className="font-mono text-[0.6875rem] font-bold tracking-wider" style={{ color: hue }}>{n}</span>
                </div>

                {/* Arrow for mobile */}
                {i < 3 && (
                  <div className="my-1 text-white/20 sm:hidden">↓</div>
                )}

                {/* Label + desc */}
                <div className="mt-5 px-2">
                  <div className="font-display text-base font-bold text-white/90" style={{ color: hue }}>{stage}</div>
                  <p className="mt-2 text-[0.75rem] leading-relaxed text-white/40">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-[0.6875rem] text-white/25 italic">
            ← the loop closes — outputs feed the next movement
          </p>
        </div>
      </section>

      {/* ── SERVICES mapped to the loop ──────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.045 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-tag mb-3">Services, mapped to the loop</p>
              <h2 className="text-3xl sm:text-4xl text-white">Every service has a stage.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/40 transition-colors duration-150 hover:text-white/70">
              All services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Alternating rows by loop stage */}
          <div className="divide-y divide-white/[0.06]">
            {/* Row 1 — ASSESS */}
            <div className="grid items-center gap-0 py-0 lg:grid-cols-2">
              <div className="border-r border-white/[0.06] p-8 lg:p-10">
                <span className="mb-3 inline-block text-[0.5625rem] font-bold uppercase tracking-[0.16em]" style={{ color: "oklch(0.72 0.19 202)" }}>ASSESS</span>
                <h3 className="font-display text-xl font-bold text-white/90">Sustainability Consultancy</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-white/45">GHG accounting, ISO 14064, ESG reporting & SGX climate disclosure guidance for Singapore and ASEAN.</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold transition-colors duration-150 hover:opacity-90" style={{ color: "oklch(0.72 0.19 202)" }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              {/* ASSESS visual */}
              <div className="hidden h-full min-h-[220px] items-center justify-center lg:flex" style={{ background: "oklch(0.115 0.046 262)" }}>
                <div className="relative flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div className="absolute h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.19 202 / 0.12) 0%, transparent 70%)" }} />
                  {/* Central icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08]" style={{ background: "oklch(0.72 0.19 202 / 0.15)", boxShadow: "0 0 32px oklch(0.72 0.19 202 / 0.25)" }}>
                    <Leaf className="h-7 w-7" style={{ color: "oklch(0.72 0.19 202)" }} />
                  </div>
                  {/* Orbiting icons */}
                  <div className="absolute -top-7 -right-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]" style={{ background: "oklch(0.72 0.19 202 / 0.08)" }}>
                    <BarChart3 className="h-4.5 w-4.5 h-[18px] w-[18px]" style={{ color: "oklch(0.72 0.19 202 / 0.6)" }} />
                  </div>
                  <div className="absolute -bottom-7 -left-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]" style={{ background: "oklch(0.72 0.19 202 / 0.08)" }}>
                    <Globe2 className="h-[18px] w-[18px]" style={{ color: "oklch(0.72 0.19 202 / 0.6)" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 — OPTIMISE (reversed) */}
            <div className="grid items-center gap-0 py-0 lg:grid-cols-2">
              {/* OPTIMISE visual */}
              <div className="hidden h-full min-h-[220px] items-center justify-center border-r border-white/[0.06] lg:flex" style={{ background: "oklch(0.115 0.046 262)" }}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.60 0.24 252 / 0.12) 0%, transparent 70%)" }} />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08]" style={{ background: "oklch(0.60 0.24 252 / 0.15)", boxShadow: "0 0 32px oklch(0.60 0.24 252 / 0.25)" }}>
                    <Recycle className="h-7 w-7" style={{ color: "oklch(0.60 0.24 252)" }} />
                  </div>
                  <div className="absolute -top-7 -right-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]" style={{ background: "oklch(0.60 0.24 252 / 0.08)" }}>
                    <Database className="h-[18px] w-[18px]" style={{ color: "oklch(0.60 0.24 252 / 0.6)" }} />
                  </div>
                  <div className="absolute -bottom-7 -left-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]" style={{ background: "oklch(0.60 0.24 252 / 0.08)" }}>
                    <ShieldCheck className="h-[18px] w-[18px]" style={{ color: "oklch(0.60 0.24 252 / 0.6)" }} />
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <span className="mb-3 inline-block text-[0.5625rem] font-bold uppercase tracking-[0.16em]" style={{ color: "oklch(0.60 0.24 252)" }}>OPTIMISE</span>
                <h3 className="font-display text-xl font-bold text-white/90">Circular Economy Advisory · IT Asset Management</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-white/45">Asset lifecycle management, waste reduction frameworks and circular procurement strategy.</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold transition-colors duration-150 hover:opacity-90" style={{ color: "oklch(0.60 0.24 252)" }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Row 3 — REPORT */}
            <div className="grid items-center gap-0 py-0 lg:grid-cols-2">
              <div className="border-r border-white/[0.06] p-8 lg:p-10">
                <span className="mb-3 inline-block text-[0.5625rem] font-bold uppercase tracking-[0.16em]" style={{ color: "oklch(0.45 0.30 295)" }}>REPORT</span>
                <h3 className="font-display text-xl font-bold text-white/90">Sustainability App Development · Data Centre Services</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-white/45">Custom ESG dashboards, GHG tracking tools and infrastructure that closes the reporting loop.</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold transition-colors duration-150 hover:opacity-90" style={{ color: "oklch(0.45 0.30 295)" }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              {/* REPORT visual */}
              <div className="hidden h-full min-h-[220px] items-center justify-center lg:flex" style={{ background: "oklch(0.115 0.046 262)" }}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.45 0.30 295 / 0.12) 0%, transparent 70%)" }} />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08]" style={{ background: "oklch(0.45 0.30 295 / 0.15)", boxShadow: "0 0 32px oklch(0.45 0.30 295 / 0.25)" }}>
                    <Monitor className="h-7 w-7" style={{ color: "oklch(0.45 0.30 295)" }} />
                  </div>
                  <div className="absolute -top-7 -right-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]" style={{ background: "oklch(0.45 0.30 295 / 0.08)" }}>
                    <BarChart3 className="h-[18px] w-[18px]" style={{ color: "oklch(0.45 0.30 295 / 0.6)" }} />
                  </div>
                  <div className="absolute -bottom-7 -left-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]" style={{ background: "oklch(0.45 0.30 295 / 0.08)" }}>
                    <Server className="h-[18px] w-[18px]" style={{ color: "oklch(0.45 0.30 295 / 0.6)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[0.8125rem] text-white/30">
            + Year 2 lines listed on enquiry ·{" "}
            <Link to="/services" className="text-white/50 underline underline-offset-2 hover:text-white/70 transition-colors">
              See all services →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FOUNDER / WHY ZELVRA ─────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="label-tag mb-3">Why Zelvra</p>
              <h2 className="text-3xl sm:text-4xl text-white">Senior delivery across IT, energy & ESG</h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.75] text-white/50">
                Founded by a senior professional with over 20 years of programme leadership across a global IT managed services firm, an international energy major in Singapore, and a regional resources company — spanning IT infrastructure, petrochemical operations, logistics, and HSSE governance.
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.75] text-white/50">
                An Executive MSc in Sustainability Management from NTU Singapore provides the academic foundation. Every engagement is owned and delivered at principal level — strategic counsel, not vendor pitch.
              </p>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition-colors duration-150 hover:text-white/70">
                Read the founding story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {credentials.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="card-shine group rounded-xl border border-white/[0.08] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.18]"
                  style={{ background: "oklch(0.13 0.05 265)" }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "oklch(0.50 0.26 292 / 0.12)" }}>
                    <Icon className="h-4 w-4" style={{ color: "oklch(0.50 0.26 292)" }} />
                  </div>
                  <div className="mt-3 text-[0.9375rem] font-bold text-white/90">{title}</div>
                  <div className="mt-1 text-[0.8125rem] leading-relaxed text-white/45">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FROM THE JOURNAL ─────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.04 262)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="label-tag mb-3">From the journal</p>
              <h2 className="text-3xl sm:text-4xl text-white">Thinking on ESG,<br className="hidden sm:block" /> technology & circularity</h2>
            </div>
            <Link to="/insights" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-white/40 transition-colors hover:text-white/70 sm:inline-flex">
              All insights <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {posts.map(({ tag, title, slug }) => (
              <Link
                key={slug}
                to={`/insights/${slug}`}
                className="group flex items-center gap-5 py-5 transition-colors duration-150 hover:text-white"
              >
                <span
                  className="shrink-0 rounded-md px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wide text-white"
                  style={{ background: "linear-gradient(135deg,oklch(0.45 0.30 295),oklch(0.72 0.19 202))" }}
                >
                  {tag}
                </span>
                <span className="flex-1 text-[0.9375rem] font-semibold leading-snug text-white/70 transition-colors group-hover:text-white/90">
                  {title}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-white/50" />
              </Link>
            ))}
          </div>

          <Link to="/insights" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/40 transition-colors hover:text-white/70 sm:hidden">
            All insights <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/[0.08]" style={{ background: "oklch(0.07 0.035 262)" }}>
        <div aria-hidden className="animate-blob-1 pointer-events-none absolute -left-20 -top-20 h-[450px] w-[450px] rounded-full opacity-[0.14] blur-[100px]" style={{ background: "oklch(0.50 0.26 292)" }} />
        <div aria-hidden className="animate-blob-2 pointer-events-none absolute -bottom-20 right-0 h-[380px] w-[380px] rounded-full opacity-[0.12] blur-[120px]" style={{ background: "oklch(0.72 0.19 202)" }} />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Get in touch</p>
          <h2 className="mx-auto mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Begin the loop with us.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] text-white/45">
            Tell us about your reporting deadlines, asset programmes or net-zero ambitions. We respond within one business day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-8 py-4 text-[0.9375rem] font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-8 py-4 text-[0.9375rem] font-medium text-white/80 transition-all duration-150 hover:bg-white/10 hover:border-white/25">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
