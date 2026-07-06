import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { getPostBySlug, posts } from "@/data/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");

  if (!post) return <Navigate to="/insights" replace />;

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.45 0.30 295 / 0.20) 0%, transparent 70%)",
            "oklch(0.09 0.04 262)",
          ].join(","),
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
          <Link
            to="/insights"
            className="mb-8 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-white/35 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Insights
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className="rounded-md px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-wide text-white"
              style={{ background: "linear-gradient(135deg, oklch(0.45 0.30 295), oklch(0.72 0.19 202))" }}
            >
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5 text-[0.75rem] text-white/30">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-[0.75rem] text-white/30">
              <Calendar className="h-3 w-3" /> {post.date}
            </span>
          </div>

          <h1 className="font-display text-[1.875rem] font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[2.5rem]">
            {post.title}
          </h1>

          <div
            className="mt-7 h-px w-24"
            style={{ background: "linear-gradient(90deg, oklch(0.45 0.30 295), oklch(0.72 0.19 202))" }}
          />

          <p className="mt-7 text-[1.0625rem] leading-[1.8] text-white/55">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────── */}
      <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.10 0.04 262)" }}>
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="mb-4 font-display text-[1.25rem] font-bold text-white/90 sm:text-[1.375rem]">
                    {section.heading}
                  </h2>
                )}
                {section.body.split("\n\n").map((para, j) => {
                  /* Render bullet-style lines (starting with —) as a block */
                  if (para.startsWith("—") || para.includes("\n—")) {
                    const lines = para.split("\n").filter(Boolean);
                    const label = !lines[0].startsWith("—") ? lines[0] : null;
                    const bullets = lines.filter((l) => l.startsWith("—"));
                    return (
                      <div key={j} className="mt-4">
                        {label && (
                          <p className="mb-2 text-[0.875rem] font-bold uppercase tracking-[0.12em] text-white/40">{label}</p>
                        )}
                        <ul className="space-y-2.5">
                          {bullets.map((b, k) => (
                            <li key={k} className="flex items-start gap-3 text-[0.9375rem] leading-[1.75] text-white/55">
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "oklch(0.72 0.19 202)" }}
                              />
                              {b.replace(/^—\s*/, "")}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={j} className="mt-4 text-[0.9375rem] leading-[1.85] text-white/55 first:mt-0">
                      {para}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>

          {/* CTA inline */}
          <div
            className="mt-16 rounded-xl border border-white/[0.08] p-8"
            style={{ background: "oklch(0.12 0.048 262)" }}
          >
            <p className="label-tag mb-3">Talk to Zelvra</p>
            <h3 className="text-[1.125rem] font-bold text-white">
              Ready to act on this?
            </h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-white/45">
              We help Singapore and ASEAN organisations translate regulatory requirements and sustainability frameworks into practical programmes. Tell us about your situation and we will respond within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 text-[0.875rem] font-semibold text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-px"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT ───────────────────────────────────── */}
      {(prev || next) && (
        <section className="border-t border-white/[0.08]" style={{ background: "oklch(0.09 0.04 262)" }}>
          <div className="mx-auto max-w-3xl px-6 py-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  to={`/insights/${prev.slug}`}
                  className="group flex flex-col gap-2 rounded-xl border border-white/[0.08] p-5 transition-all duration-150 hover:border-white/[0.18]"
                  style={{ background: "oklch(0.12 0.048 262)" }}
                >
                  <div className="flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/25">
                    <ArrowLeft className="h-3 w-3" /> Previous
                  </div>
                  <span className="text-[0.875rem] font-semibold leading-snug text-white/65 transition-colors group-hover:text-white/85">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next && (
                <Link
                  to={`/insights/${next.slug}`}
                  className="group flex flex-col gap-2 rounded-xl border border-white/[0.08] p-5 text-right transition-all duration-150 hover:border-white/[0.18] sm:ml-auto sm:w-full"
                  style={{ background: "oklch(0.12 0.048 262)" }}
                >
                  <div className="flex items-center justify-end gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/25">
                    Next <ArrowRight className="h-3 w-3" />
                  </div>
                  <span className="text-[0.875rem] font-semibold leading-snug text-white/65 transition-colors group-hover:text-white/85">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
