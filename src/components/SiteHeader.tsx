import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/zelvra-logo.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/circular-economy", label: "Circular Economy" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy">
            <img src={logo.url} alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-[0.2em] text-navy">ZELVRA</div>
            <div className="text-[10px] font-medium tracking-[0.35em] text-muted-foreground">GROUP</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-navy-foreground transition-all hover:bg-primary"
          >
            Start a Conversation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:text-navy"
                activeProps={{ className: "rounded-md px-3 py-3 text-sm font-medium text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-navy px-4 py-3 text-center text-sm font-medium text-navy-foreground"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
