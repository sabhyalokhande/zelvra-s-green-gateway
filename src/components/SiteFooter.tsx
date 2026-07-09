import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const explore = [
  { to: "/about",            label: "About Zelvra" },
  { to: "/services",         label: "Our Services" },
  { to: "/circular-economy", label: "Circular Economy" },
  { to: "/insights",         label: "Insights" },
];

const company = [
  { to: "/contact", label: "Contact" },
  { to: "/privacy",  label: "Privacy Policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src="/zelvra-logo.png"
              alt="Zelvra Group"
              className="h-11 w-auto"
            />
          </Link>

          <p className="mt-5 max-w-[260px] text-[0.875rem] leading-relaxed text-white/50">
            Bridging Technology & Sustainability. Singapore advisory at the
            intersection of ESG, circular economy and enterprise technology.
          </p>

          <div className="mt-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-[0.875rem] text-white/50">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" /> Singapore
            </div>
            <a
              href="mailto:talk.to.us@zelvra.com.sg"
              className="flex items-center gap-2.5 text-[0.875rem] text-white/50 transition-colors duration-150 hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
              talk.to.us@zelvra.com.sg
            </a>
            <a
              href="https://wa.me/6593238150"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-[0.875rem] text-white/50 transition-colors duration-150 hover:text-primary"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
              +65 9323 8150 (WhatsApp)
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[0.625rem] font-bold uppercase tracking-[0.22em] text-white/30">Explore</p>
          <ul className="mt-5 space-y-3">
            {explore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[0.875rem] text-white/55 transition-colors duration-150 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-[0.625rem] font-bold uppercase tracking-[0.22em] text-white/30">Company</p>
          <ul className="mt-5 space-y-3">
            {company.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[0.875rem] text-white/55 transition-colors duration-150 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/6593238150"
                target="_blank"
                rel="noreferrer"
                className="text-[0.875rem] text-white/55 transition-colors duration-150 hover:text-primary"
              >
                WhatsApp Business
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-[0.6875rem] text-white/30 sm:flex-row">
          <span>© {new Date().getFullYear()} Zelvra Group Pte. Ltd. All rights reserved.</span>
          <span>Incorporated in Singapore</span>
        </div>
      </div>
    </footer>
  );
}
