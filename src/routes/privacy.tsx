import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Zelvra Group" },
      { name: "description", content: "How Zelvra Group collects, uses and protects personal data under Singapore's Personal Data Protection Act (PDPA)." },
      { property: "og:title", content: "Privacy Policy — Zelvra Group" },
      { property: "og:description", content: "Zelvra Group privacy policy and PDPA statement." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-xs font-medium uppercase tracking-widest text-primary">Legal</div>
      <h1 className="mt-3 font-display text-4xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

      <div className="prose-zelvra mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-2">
            Zelvra Group Pte. Ltd. ("Zelvra", "we", "our", "us") is committed to
            protecting the personal data of visitors, clients and prospects in
            accordance with Singapore's Personal Data Protection Act 2012 (PDPA).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">2. Personal data we collect</h2>
          <p className="mt-2">
            We collect data you voluntarily submit via our website forms, email or
            WhatsApp Business — including your name, work email, company, phone
            number and the contents of your enquiry. We may also collect technical
            data such as IP address, browser type and pages visited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">3. How we use your data</h2>
          <p className="mt-2">
            Personal data is used to respond to enquiries, deliver requested
            services, communicate updates relevant to the services you have
            expressed interest in, and meet legal and regulatory obligations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">4. Disclosure</h2>
          <p className="mt-2">
            We do not sell personal data. We may share limited data with trusted
            service providers (e.g. hosting, analytics, email) bound by
            confidentiality and data protection obligations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">5. Retention</h2>
          <p className="mt-2">
            Personal data is retained only for as long as necessary to fulfil the
            purposes for which it was collected, or as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">6. Your rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or withdrawal of consent for
            the use of your personal data by contacting us at hello@zelvra.com.sg.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">7. Contact</h2>
          <p className="mt-2">
            For privacy-related enquiries, please contact our Data Protection Officer
            at hello@zelvra.com.sg.
          </p>
        </section>
      </div>
    </div>
  );
}
