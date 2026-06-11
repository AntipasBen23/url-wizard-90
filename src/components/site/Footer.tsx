import { useState } from "react";
import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "About B & R Marine", href: "/about" },
      { label: "Our Vessels", href: "/vessels" },
      { label: "Our Services", href: "/services" },
      { label: "Brokerage", href: "/brokerage" },
      { label: "Careers", href: "/vacancies" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Our Projects", href: "/projects" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Our Team", href: "/about#team" },
      { label: "Policies", href: "/about#policies" },
      { label: "News & Insights", href: "/#news" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Ship Management", href: "/services#ship-management" },
      { label: "Crew Management", href: "/services#crew-management" },
      { label: "Chartering", href: "/brokerage#chartering" },
      { label: "Sale & Purchase", href: "/brokerage#sale-purchase" },
      { label: "Safety Training", href: "/services#safety-training-seafarers" },
    ],
  },
];

export function Footer() {
  const [socialMsg, setSocialMsg] = useState(false);

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSocialMsg(true);
    setTimeout(() => setSocialMsg(false), 2500);
  };

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">

          {/* Brand column */}
          <div>
            <div className="damen-logo text-3xl">B&R MARINE</div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/60">
              B & R Marine Energy Logistics. Your trusted partner in maritime energy solutions.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={handleSocialClick}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            {/* Coming soon message */}
            <p
              style={{
                marginTop: "0.6rem",
                fontSize: "0.72rem",
                color: "oklch(0.55 0.2 262)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                opacity: socialMsg ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
            >
              Coming soon — stay tuned!
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-primary-foreground/90">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} B & R Marine Energy Logistics.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground">Privacy</a>
            <a href="#" className="hover:text-primary-foreground">Cookies</a>
            <a href="#" className="hover:text-primary-foreground">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
