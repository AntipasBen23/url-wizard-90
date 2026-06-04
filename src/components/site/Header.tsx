import { useEffect, useState } from "react";
import { Search, Menu, X, ExternalLink, LifeBuoy } from "lucide-react";

const primaryNav = ["Vessels", "Equipment", "Markets", "Services", "About"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-10 text-primary-foreground">
        {/* Left nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Center logo */}
        <a href="/" className="damen-logo absolute left-1/2 -translate-x-1/2 text-2xl text-primary-foreground">
          DAMEN
        </a>

        {/* Right cluster */}
        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <a href="#news" className="text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground">
            News &amp; Insights
          </a>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground">
            Career <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button aria-label="Search" className="text-primary-foreground/85 hover:text-primary-foreground">
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Contact <LifeBuoy className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="ml-auto text-primary-foreground lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary px-5 py-4 text-primary-foreground lg:hidden">
          <nav className="flex flex-col gap-3">
            {[...primaryNav, "News & Insights", "Career"].map((item) => (
              <a key={item} href="#" className="py-1 text-sm font-medium text-primary-foreground/90">
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Contact <LifeBuoy className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
