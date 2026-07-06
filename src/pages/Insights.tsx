import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/data/posts";

export default function Insights() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background: [
            "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.60 0.24 252 / 0.20) 0%, transparent 70%)",
            "oklch(0.09 0.04 262)",
          ].join(","),
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto mb-7 w-20">
            <img src="/zelvra-logo.png" alt="Zelvra Group" className="w-full" />
          </div>
          <p className="label-tag mb-5 inline-block">From the journal</p>
          <h1 className="font-display text-[2.75rem] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
            Thinking on ESG,<br className="hidden sm:block" />{" "}
            <span className="text-gradient-animated">technology & circularity.</span>
          </h1>
          <div
            className="mx-auto mt-7 h-px w-36"
            style={{ background: "linear-gradient(90deg, transparent, #6B21C8, #06C9E8, transparent)" }}
          />
          <p className="mx-auto mt-7 max-w-xl text-[1.0625rem] leading-[1.8] text-white/50">
            Short, practical articles for sustainability, technology and operations leaders navigating Singapore and ASEAN regulatory change.
          </p>
        </div>
      </section>

      {/* ── EDITORIAL POST LIST ────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="divide-y divide-white/[0.07]">
            {posts.map(({ n, tag, title, excerpt, slug, readTime }) => (
              <article key={n} className="group py-14 first:pt-0 last:pb-0">
                <Link to={`/insights/${slug}`} className="block">
                  <div className="grid gap-8 lg:grid-cols-[80px_1fr]">
                    {/* Issue number */}
                    <div className="hidden lg:block">
                      <span
                        className="font-display text-[3.5rem] font-bold leading-none"
                        style={{
                          background: "linear-gradient(135deg, oklch(0.45 0.30 295 / 0.25), oklch(0.72 0.19 202 / 0.25))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {n}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="rounded-md px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wide text-white"
                          style={{ background: "linear-gradient(135deg, oklch(0.45 0.30 295), oklch(0.72 0.19 202))" }}
                        >
                          {tag}
                        </span>
                        <span className="flex items-center gap-1 text-[0.6875rem] text-white/25">
                          <Clock className="h-3 w-3" /> {readTime}
                        </span>
                      </div>

                      <h2 className="mt-5 font-display text-[1.25rem] font-bold leading-snug text-white/85 transition-colors duration-150 group-hover:text-white sm:text-[1.5rem]">
                        {title}
                      </h2>
                      <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/40">{excerpt}</p>

                      <div className="mt-6 flex items-center gap-2 text-[0.8125rem] font-semibold transition-colors duration-150" style={{ color: "oklch(0.72 0.19 202)" }}>
                        Read article <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                      </div>

                      <div
                        className="mt-5 h-px w-0 transition-all duration-500 group-hover:w-24"
                        style={{ background: "linear-gradient(90deg, oklch(0.45 0.30 295), oklch(0.72 0.19 202))" }}
                      />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ─────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.07 0.035 262)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="label-tag mb-5 inline-block">Stay informed</p>
          <h2 className="font-display text-[1.75rem] font-bold text-white sm:text-[2.25rem]">
            More insights on their way.
          </h2>
          <div
            className="mx-auto mt-5 h-px w-28"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.60 0.24 252 / 0.6), transparent)" }}
          />
          <p className="mx-auto mt-6 max-w-md text-[0.9375rem] leading-[1.8] text-white/40">
            Additional articles covering ESG frameworks, circular economy practice and Singapore regulatory developments are in preparation. Get in touch to be notified when they are published.
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
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
