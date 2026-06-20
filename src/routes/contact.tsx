import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zelvra Group" },
      { name: "description", content: "Start a conversation with Zelvra Group. Singapore-based sustainability and technology advisory. We respond within one business day." },
      { property: "og:title", content: "Contact — Zelvra Group" },
      { property: "og:description", content: "Start a conversation with Zelvra Group." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const services = [
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

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-xs font-medium uppercase tracking-widest text-primary">Contact</div>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        Start a <span className="text-gradient-brand">conversation</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Tell us about your reporting deadlines, asset programmes or sustainability
        ambitions. We respond within one business day.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
        <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold">Thank you</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Your enquiry has been received. A member of the Zelvra team will
                respond within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone (optional)" name="phone" type="tel" />
              </div>

              <div>
                <label className="text-sm font-medium">Service of interest</label>
                <select
                  name="service"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">How can we help?</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  placeholder="A brief description of your need or programme…"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
              >
                Send enquiry
              </button>
            </>
          )}
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} title="Registered address" body="Singapore" />
          <InfoCard icon={Clock} title="Response time" body="Within one business day, Mon–Fri (SGT)." />
          <InfoCard icon={Mail} title="Email" body="hello@zelvra.com.sg" />
          <a
            href="https://wa.me/6500000000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-gradient-brand p-5 text-primary-foreground transition-transform hover:scale-[1.01]"
          >
            <MessageCircle className="h-5 w-5" />
            <div>
              <div className="text-sm font-semibold">WhatsApp Business</div>
              <div className="text-xs opacity-90">Chat with us directly</div>
            </div>
          </a>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
      <Icon className="mt-0.5 h-5 w-5 text-primary" />
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-0.5 text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
