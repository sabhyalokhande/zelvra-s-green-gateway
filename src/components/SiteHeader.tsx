import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Zelvra Group" className="h-10 w-10 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-[0.25em]">ZELVRA</div>
            <div className="text-[10px] tracking-[0.35em] text-muted-foreground">GROUP</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-md bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Start a Conversation
          </Link>
        </nav>

        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-3 text-sm text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gradient-brand px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
