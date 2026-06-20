import { Link } from "@tanstack/react-router";
import logo from "@/assets/zelvra-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Zelvra Group" className="h-10 w-10 rounded-md object-cover" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-[0.25em]">ZELVRA</div>
              <div className="text-[10px] tracking-[0.35em] text-muted-foreground">GROUP</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Bridging Technology & Sustainability. A Singapore-based advisory at the
            intersection of ESG, circular economy and enterprise technology — built
            for ASEAN.
          </p>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/circular-economy" className="hover:text-primary">Circular Economy</Link></li>
            <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Singapore</li>
            <li><Link to="/contact" className="hover:text-primary">Start a conversation</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Zelvra Group Pte. Ltd. All rights reserved.</div>
          <div>zelvra.com.sg</div>
        </div>
      </div>
    </footer>
  );
}
