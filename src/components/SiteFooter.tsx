import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/zelvra-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white/5">
              <img src={logo.url} alt="" className="h-10 w-10 object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-[0.2em] text-white">ZELVRA</div>
              <div className="text-[10px] font-medium tracking-[0.35em] text-white/60">GROUP</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Bridging Technology & Sustainability. A Singapore-based advisory at the
            intersection of ESG, circular economy and enterprise technology — built for ASEAN.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Singapore</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@zelvra.com.sg</div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-white/80 hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-white/80 hover:text-primary">Services</Link></li>
            <li><Link to="/circular-economy" className="text-white/80 hover:text-primary">Circular Economy</Link></li>
            <li><Link to="/insights" className="text-white/80 hover:text-primary">Insights</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/contact" className="text-white/80 hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="text-white/80 hover:text-primary">Privacy Policy</Link></li>
            <li><a href="https://wa.me/6500000000" target="_blank" rel="noreferrer" className="text-white/80 hover:text-primary">WhatsApp Business</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Zelvra Group Pte. Ltd. All rights reserved.</div>
          <div>zelvra.com.sg</div>
        </div>
      </div>
    </footer>
  );
}
