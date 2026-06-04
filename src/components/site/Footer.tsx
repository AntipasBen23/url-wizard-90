import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const columns = [
  {
    title: "Popular content",
    links: ["About Damen", "Career", "How we Build", "News", "Whitepapers"],
  },
  {
    title: "Useful links",
    links: ["Companies", "Contact us", "Our products", "Our markets", "Our services"],
  },
  {
    title: "Markets",
    links: ["Defence & Security", "Offshore Wind", "Dredging", "Ports & Terminals", "Public Transport"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <div className="damen-logo text-3xl">DAMEN</div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/60">
              Building ships since 1927. An international shipyard group with family roots.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-primary-foreground/90">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Damen Shipyards Group. Replica for demonstration.</span>
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
