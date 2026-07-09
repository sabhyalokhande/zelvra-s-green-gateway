import { Link } from "react-router-dom";
import { GraduationCap, Globe2, Compass, HeartHandshake, ArrowRight, CheckCircle2, TrendingUp, Shield } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "NTU",  label: "MSc Sustainability" },
  { value: "ASEAN", label: "Regional Posture" },
  { value: "7",    label: "Industries" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic foundation",
    body: "Executive MSc in Sustainability Management from Nanyang Technological University (NTU), Singapore — grounding every engagement in peer-reviewed methodology and current regulatory frameworks.",
  },
  {
    icon: Compass,
    title: "Senior delivery experience",
    body: "Programme leadership across global IT managed services, energy operations, logistics digitisation and HSSE governance — at C-suite accountability level throughout.",
  },
  {
    icon: Globe2,
    title: "Built for Singapore and ASEAN",
    body: "Fluent in SGX mandatory climate reporting, MAS green finance taxonomy, Singapore Green Plan 2030, and the regional regulatory tempo that affects MNCs, SMEs and government agencies alike.",
  },
  {
    icon: HeartHandshake,
    title: "Principled mandate",
    body: "Strategic counsel, not vendor pitch. Every engagement is owned and delivered through senior-led project management — with principal accountability maintained from scoping through to final delivery.",
  },
];

const sectors = [
  "Sustainability & ESG",
  "IT Infrastructure & Managed Services",
  "Petrochemicals & Energy",
  "Logistics & Warehousing",
  "Healthcare",
  "HSSE Governance",
  "Data Centre Operations",
];

const frameworks = [
  "ISO 14064",
  "GHG Protocol",
  "SGX Climate Reporting",
  "MAS Green Finance Taxonomy",
  "Singapore Green Plan 2030",
  "PDPA Compliance",
  "Scope 3 Accounting",
  "TCFD Alignment",
];

const deliverySteps = [
  {
    n: "01",
    title: "Discovery call",
    body: "A focused 30-minute scoping session to map your objectives, reporting deadlines, regulatory exposure and current programme state.",
  },
  {
    n: "02",
    title: "Programme design",
    body: "A tailored engagement structure with clear milestones, defined deliverables and principal-level accountabilities — no boilerplate scopes of work.",
  },
  {
    n: "03",
    title: "Delivery",
    body: "Hands-on execution led by the founding principal throughout. You work directly with the person who scoped the engagement — not a junior team.",
  },
  {
    n: "04",
    title: "Outcome review",
    body: "A close-out report with regulatory-ready outputs, a compliance checkpoint and a clear roadmap for the next iteration of the loop.",
  },
];

const aseanReasons = [
  {
    icon: TrendingUp,
    title: "SGX mandatory climate reporting",
    body: "Listed companies and those on the SGX watch list must now disclose climate-related risks aligned with TCFD. The compliance clock is running.",
  },
  {
    icon: Shield,
    title: "MAS green finance taxonomy",
    body: "The Monetary Authority of Singapore's green taxonomy is reshaping how financial institutions and their corporate clients classify and report sustainable activities.",
  },
  {
    icon: Globe2,
    title: "Singapore Green Plan 2030",
    body: "National targets on net-zero, circular economy and energy transition are creating new procurement, reporting and operational requirements for businesses of every size.",
  },
  {
    icon: Compass,
    title: "ISO 14064 adoption pressure",
    body: "GHG quantification and verification standards are being embedded into procurement requirements, investor diligence and government contracting across the ASEAN region.",
  },
];

export default function About() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────── */}
      <section style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="label-tag mb-3">About Zelvra</p>
              <h1 className="text-4xl text-white sm:text-5xl">
                Built where{" "}
                <span className="text-gradient-brand">technology meets sustainability</span>
              </h1>
            </div>
            <div className="flex shrink-0 divide-x divide-white/10">
              {stats.map(({ value, label }) => (
                <div key={label} className="px-6 first:pl-0 last:pr-0">
                  <div className="font-display text-2xl font-bold text-white">{value}</div>
                  <div className="mt-0.5 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING STORY ───────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.045 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[220px_1fr]">
            <div>
              <div className="w-full max-w-[220px]">
                <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full" />
              </div>
              <div className="mt-5">
                <div className="font-display text-lg font-bold text-white/90">Zelvra Group</div>
                <div className="mt-0.5 text-[0.75rem] text-white/40">Founder & Principal Consultant</div>
                <div className="mt-3 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.72 0.19 202)" }} />
                  <span className="text-[0.6875rem] text-white/40">Singapore</span>
                </div>
              </div>
            </div>

            <div>
              <p className="label-tag mb-4">The founding story</p>
              <p className="text-[1.0625rem] leading-[1.75] text-white/60">
                Zelvra Group is a Singapore-incorporated advisory founded by a senior professional with over 20 years of cross-industry experience. That career spans programme leadership at a global IT managed services firm, senior operations roles at an energy major in Singapore, and commercial leadership at a regional resources company — accumulating deep expertise across IT infrastructure, petrochemical operations, logistics and HSSE governance.
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.75] text-white/60">
                An Executive MSc in Sustainability Management from Nanyang Technological University (NTU) grounds the practice in academic rigour and current regulatory methodology. The combination — senior delivery experience across complex operational environments and formal sustainability training — is the foundation that Zelvra is built on.
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.75] text-white/60">
                The company name and its infinity loop mark deliberately reference the circular economy principle: continuous cycles of value creation, resource optimisation, and regenerative thinking. This is not a generic consultancy. It is a firm built on the belief that technology and sustainability are not competing priorities — they are the same solution, expressed differently.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "NTU MSc Sustainability",
                  "20+ Years Senior Experience",
                  "Global IT Managed Services",
                  "Energy Sector",
                  "ISO 14064 Advisory",
                  "SGX Climate Disclosure",
                  "C-Suite Governance",
                  "ASEAN Regulatory Expertise",
                ].map((c) => (
                  <span key={c} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.75rem] font-semibold text-white/60">
                    <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "oklch(0.72 0.19 202)" }} />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ─────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="label-tag mb-3">What we stand on</p>
          <h2 className="mb-10 text-2xl text-white sm:text-3xl">Four founding pillars</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex gap-4 rounded-xl border border-white/[0.08] p-5 transition-all duration-200 hover:border-white/[0.16]"
                style={{ background: "oklch(0.13 0.05 265)" }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "oklch(0.50 0.26 292 / 0.12)" }}>
                  <Icon className="h-4 w-4" style={{ color: "oklch(0.50 0.26 292)" }} />
                </div>
                <div>
                  <h3 className="text-[0.875rem] font-bold text-white/90">{title}</h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/45">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SINGAPORE & ASEAN ────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.045 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="label-tag mb-3">Why Singapore and ASEAN</p>
          <h2 className="mb-4 text-2xl text-white sm:text-3xl">The regulatory moment is now</h2>
          <p className="mb-10 max-w-2xl text-[0.9375rem] leading-[1.75] text-white/45">
            Singapore and ASEAN are entering a period of accelerating sustainability regulation. Zelvra was built from day one to serve clients navigating this transition — not as a reactive compliance service, but as a strategic partner in turning regulatory pressure into competitive advantage.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {aseanReasons.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-white/[0.08] p-6"
                style={{ background: "oklch(0.13 0.05 265)" }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "oklch(0.72 0.19 202 / 0.12)" }}>
                  <Icon className="h-4 w-4" style={{ color: "oklch(0.72 0.19 202)" }} />
                </div>
                <div>
                  <h3 className="text-[0.875rem] font-bold text-white/85">{title}</h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/45">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS + FRAMEWORKS ─────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="label-tag mb-3">Sector experience</p>
              <h2 className="mb-6 text-2xl text-white sm:text-3xl">Deep cross-industry roots</h2>
              <p className="mb-6 text-[0.9375rem] text-white/45">
                Direct operational and programme leadership experience across six industries — not advisory exposure from the outside.
              </p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <span key={s} className="rounded-lg border border-white/[0.10] bg-white/[0.04] px-3.5 py-2 text-[0.8125rem] font-semibold text-white/60">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="label-tag mb-3">Regulatory fluency</p>
              <h2 className="mb-6 text-2xl text-white sm:text-3xl">Frameworks we work within</h2>
              <p className="mb-6 text-[0.9375rem] text-white/45">
                Advisory grounded in the standards and taxonomies that matter to Singapore and ASEAN regulators, investors and procurement teams.
              </p>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <span key={f} className="rounded-lg border border-white/[0.10] bg-white/[0.04] px-3.5 py-2 text-[0.8125rem] font-semibold text-white/60">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE DELIVER ───────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.045 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="label-tag mb-3">How we deliver</p>
          <h2 className="mb-10 text-2xl text-white sm:text-3xl">An engagement in four steps</h2>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "oklch(0.24 0.04 268 / 0.3)" }}>
            {deliverySteps.map(({ n, title, body }) => (
              <div key={n} className="p-6" style={{ background: "oklch(0.10 0.04 262)" }}>
                <div className="font-mono text-[0.625rem] font-bold tracking-[0.2em] text-primary/60">{n}</div>
                <h3 className="mt-3 text-[0.9375rem] font-bold text-white/90">{title}</h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/40">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.07 0.035 262)" }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl text-white sm:text-3xl">Work with Zelvra</h2>
              <p className="mt-2 max-w-md text-[0.9375rem] text-white/45">
                Strategic counsel, not vendor pitch. Tell us about your programme and we will respond within one business day.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
