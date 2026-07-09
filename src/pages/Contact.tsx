import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock, MessageCircle, Check, ArrowRight } from "lucide-react";

/* Mission Control direction — conversion-optimised, dense, utility */

const serviceOptions = [
  "Sustainability Consultancy",
  "Circular Economy Advisory",
  "Sustainability Application Development",
  "IT Asset Management",
  "Data Centre Services",
  "Electrical and M&E Works",
  "IT Managed Services (Year 2)",
  "Supply Chain & Logistics (Year 2)",
  "Other / Not sure yet",
];

const quickRoutes = [
  { label: "General enquiry",            desc: "talk.to.us@zelvra.com.sg" },
  { label: "SGX / ESG reporting",        desc: "Fast-track scoping for climate disclosure deadlines" },
  { label: "IT asset programme review",  desc: "ITAM & circular economy advisory" },
];

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[0.8125rem] font-semibold text-white/70">
        {label}{required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-white/[0.10] bg-white/[0.04] px-3.5 py-2.5 text-[0.875rem] text-white/90 outline-none placeholder:text-white/20 transition-all duration-150 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────── */}
      <section style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label-tag mb-3">Contact</p>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="text-4xl text-white sm:text-5xl">
                Start a <span className="text-gradient-brand">conversation</span>
              </h1>
              <p className="mt-4 max-w-xl text-[1.0625rem] text-white/50">
                Tell us about your reporting deadlines, asset programmes or net-zero ambitions. We respond within one business day, Monday to Friday Singapore time.
              </p>
            </div>
            <div className="shrink-0 rounded-xl border border-white/[0.08] px-5 py-4" style={{ background: "oklch(0.12 0.048 262)" }}>
              <div className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white/30">Response SLA</div>
              <div className="mt-1 font-display text-2xl font-bold text-white">1 day</div>
              <div className="mt-0.5 text-[0.625rem] text-white/30">Mon–Fri SGT</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + ASIDE ─────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.045 262)" }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">

            {/* Form */}
            <div className="rounded-xl border border-white/[0.08] p-8" style={{ background: "oklch(0.12 0.048 262)" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }}>
                    <Check className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl text-white">Thank you</h2>
                  <p className="mt-3 max-w-sm text-[0.875rem] text-white/45">
                    Your enquiry has been received. A member of the Zelvra team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <h2 className="text-xl text-white">Send us an enquiry</h2>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name"  name="name"  required />
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Company"    name="company" />
                    <Field label="Phone"      name="phone"   type="tel" />
                  </div>

                  {/* Service selector chips */}
                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-white/70 mb-3">
                      Service of interest<span className="ml-0.5 text-primary">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelected(s)}
                          className={`rounded-full border px-3.5 py-1.5 text-[0.75rem] font-semibold transition-all duration-150 ${
                            selected === s
                              ? "border-primary/50 bg-primary/10 text-primary"
                              : "border-white/10 text-white/40 hover:border-white/25 hover:text-white/65"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="service" value={selected} required />
                  </div>

                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-white/70">
                      How can we help?<span className="ml-0.5 text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="A brief description of your need or programme…"
                      className="mt-1.5 w-full resize-none rounded-lg border border-white/[0.10] bg-white/[0.04] px-3.5 py-2.5 text-[0.875rem] text-white/90 outline-none placeholder:text-white/20 transition-all duration-150 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px"
                  >
                    Send enquiry <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Aside */}
            <aside className="space-y-3">
              {[
                { icon: MapPin, title: "Location",      body: "Singapore (Incorporated in Singapore · UEN registered)" },
                { icon: Clock,  title: "Response time", body: "Within one business day, Mon–Fri (SGT)." },
                { icon: Mail,   title: "Email",         body: "talk.to.us@zelvra.com.sg" },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-white/[0.08] p-4" style={{ background: "oklch(0.12 0.048 262)" }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "oklch(0.50 0.26 292 / 0.12)" }}>
                    <Icon className="h-4 w-4" style={{ color: "oklch(0.50 0.26 292)" }} />
                  </div>
                  <div>
                    <div className="text-[0.8125rem] font-bold text-white/70">{title}</div>
                    <div className="mt-0.5 text-[0.8125rem] text-white/40">{body}</div>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/6593238150"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl p-4 text-white transition-all duration-150 hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[0.875rem] font-bold">WhatsApp Business</div>
                  <div className="text-[0.75rem] text-white/75">Chat with us directly</div>
                </div>
              </a>

              <p className="rounded-xl border border-white/[0.08] p-4 text-[0.75rem] leading-relaxed text-white/30" style={{ background: "oklch(0.12 0.048 262)" }}>
                Handled in accordance with our{" "}
                <Link to="/privacy" className="text-primary/70 hover:text-primary hover:underline">Privacy Policy</Link>{" "}
                and Singapore's PDPA.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── QUICK ROUTES ─────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">Quick routes</div>
          <div className="grid gap-3 sm:grid-cols-3">
            {quickRoutes.map(({ label, desc }) => (
              <Link key={label} to="/contact" className="group rounded-xl border border-white/[0.08] p-4 transition-all duration-150 hover:border-white/[0.18]" style={{ background: "oklch(0.12 0.048 262)" }}>
                <div className="text-[0.875rem] font-semibold text-white/70 group-hover:text-white/90 transition-colors">{label}</div>
                <div className="mt-1 text-[0.75rem] text-white/35">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
