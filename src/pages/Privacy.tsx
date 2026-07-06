
const sections = [
  {
    title: "1. Introduction",
    body: 'Zelvra Group Pte. Ltd. ("Zelvra", "we", "our", "us") is committed to protecting the personal data of visitors, clients and prospects in accordance with Singapore\'s Personal Data Protection Act 2012 (PDPA).',
  },
  {
    title: "2. Personal data we collect",
    body: "We collect data you voluntarily submit via our website forms, email or WhatsApp Business — including your name, work email, company, phone number and the contents of your enquiry. We may also collect technical data such as IP address, browser type and pages visited.",
  },
  {
    title: "3. How we use your data",
    body: "Personal data is used to respond to enquiries, deliver requested services, communicate updates relevant to the services you have expressed interest in, and meet legal and regulatory obligations.",
  },
  {
    title: "4. Disclosure",
    body: "We do not sell personal data. We may share limited data with trusted service providers (e.g. hosting, analytics, email) bound by confidentiality and data protection obligations.",
  },
  {
    title: "5. Retention",
    body: "Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.",
  },
  {
    title: "6. Your rights",
    body: "You may request access to, correction of, or withdrawal of consent for the use of your personal data by contacting us at hello@zelvra.com.sg.",
  },
  {
    title: "7. Contact",
    body: "For privacy-related enquiries, please contact our Data Protection Officer at hello@zelvra.com.sg.",
  },
];

export default function Privacy() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.45 0.30 295 / 0.15) 0%, transparent 70%)",
            "oklch(0.09 0.04 262)",
          ].join(","),
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto mb-7 w-14 opacity-60">
            <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full" />
          </div>
          <p className="label-tag mb-5 inline-block">Legal</p>
          <h1 className="font-display text-[2.75rem] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[3.5rem]">
            Privacy Policy
          </h1>
          <div
            className="mx-auto mt-6 h-px w-28"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.45 0.30 295 / 0.6), oklch(0.72 0.19 202 / 0.6), transparent)" }}
          />
          <p className="mt-5 text-[0.875rem] text-white/30">Last updated: June 2026 · Singapore PDPA compliant</p>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.04 262)" }}>
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="divide-y divide-white/[0.07]">
            {sections.map(({ title, body }) => (
              <div key={title} className="py-10 first:pt-0 last:pb-0">
                <h2 className="font-display text-[1.125rem] font-bold text-white/85">{title}</h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.85] text-white/45">{body}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-16 h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.45 0.30 295 / 0.3), transparent)" }}
          />
          <p className="mt-8 text-center text-[0.8125rem] text-white/25">
            © {new Date().getFullYear()} Zelvra Group Pte. Ltd. · Incorporated in Singapore
          </p>
        </div>
      </section>
    </>
  );
}
