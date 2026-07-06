import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const nav: { to: string; label: string }[] = [
  { to: "/about",            label: "About" },
  { to: "/services",         label: "Services" },
  { to: "/circular-economy", label: "Circular Economy" },
  { to: "/insights",         label: "Insights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.08] backdrop-blur-md"
      style={{ background: "oklch(0.09 0.04 262 / 0.88)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/zelvra-logo.png"
            alt="Zelvra Group"
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                [
                  "rounded-md px-3.5 py-2 text-[0.875rem] font-semibold transition-colors duration-150",
                  isActive ? "text-primary" : "text-white/55 hover:text-white",
                ].join(" ")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-2.5 text-[0.875rem] font-semibold text-white transition-all duration-150 hover:brightness-110"
          >
            Book a Call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-1.5 text-white/60 transition-colors duration-150 hover:bg-white/8 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="border-t border-white/[0.08] lg:hidden"
          style={{ background: "oklch(0.10 0.045 262 / 0.97)" }}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-4 py-3 text-sm font-semibold transition-colors duration-150 ${
                  isActive ? "text-primary bg-white/5" : "text-white/55 hover:text-white hover:bg-white/5"
                }`
              }
            >
              Home
            </NavLink>
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-4 py-3 text-sm font-semibold transition-colors duration-150 ${
                    isActive ? "text-primary bg-white/5" : "text-white/55 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
