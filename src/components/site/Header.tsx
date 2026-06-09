import { useEffect, useRef, useState } from "react";
import { Search, Menu, X, ExternalLink, LifeBuoy, ChevronRight } from "lucide-react";
import vesselDropdownPic from "@/assets/vessel-dropdownpic.jpg";

const primaryNav = ["Vessels", "Equipment", "Markets", "Services", "About"];

const vesselCategories = [
  "Cargo/Commercial",
  "Defence and Patrol",
  "Fishing",
  "Research",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside the header
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const dropdownOpen = dropdown !== null;

  // When dropdown is open, header turns white; otherwise follow scroll state
  const headerBg = dropdownOpen
    ? "bg-white shadow-md"
    : scrolled
    ? "bg-primary/95 backdrop-blur-md shadow-lg"
    : "bg-gradient-to-b from-black/40 to-transparent";

  const textBase = dropdownOpen ? "text-primary" : "text-primary-foreground";
  const textMuted = dropdownOpen ? "text-primary/70 hover:text-primary" : "text-primary-foreground/85 hover:text-primary-foreground";

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}>
      <div className={`mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-10 ${textBase}`}>

        {/* Left nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => {
            const isNavHovered = hoveredNav === item;
            const isActive = dropdown === item;
            return (
              <button
                key={item}
                onClick={() => setDropdown(dropdown === item ? null : item)}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{ cursor: "pointer", position: "relative", padding: 0, background: "none", border: "none" }}
                className={`text-sm font-medium transition-colors ${isActive ? "text-accent" : textMuted}`}
              >
                {item}
                {/* Hover/active underline */}
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    bottom: isActive ? "-30px" : "-4px",
                    left: 0,
                    height: isActive ? "2px" : "1px",
                    width: isActive || isNavHovered ? "100%" : "0",
                    backgroundColor: "white",
                    transition: "width 0.3s ease",
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Center logo */}
        <a href="/" className={`damen-logo absolute left-1/2 -translate-x-1/2 text-2xl transition-colors ${textBase}`}>
          B&R MARINE
        </a>

        {/* Right cluster */}
        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <a href="#news" className={`text-sm font-medium transition-colors ${textMuted}`}>
            News &amp; Insights
          </a>
          <a href="#" className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${textMuted}`}>
            Career <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button aria-label="Search" className={`transition-colors ${textMuted}`}>
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
          onClick={() => setMobileOpen((o) => !o)}
          className={`ml-auto transition-colors lg:hidden ${textBase}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Vessels mega-menu ── */}
      {dropdown === "Vessels" && (
        <div className="animate-slide-down overflow-hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid grid-cols-[280px_1fr] py-8 gap-10">

              {/* Left column */}
              <div className="border-r border-gray-100 pr-10">
                <a
                  href="#"
                  className="flex items-center justify-between text-base font-bold text-primary hover:text-accent transition-colors"
                >
                  Our vision on vessels
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
                <div className="mt-6">
                  <p className="eyebrow mb-4">Vessel Categories</p>
                  <ul className="border-l-[3px] border-accent pl-4 space-y-3">
                    {vesselCategories.map((cat) => {
                      const isHovered = hoveredCat === cat;
                      return (
                        <li key={cat}>
                          <a
                            href="#"
                            style={{ cursor: "pointer", display: "block", textDecoration: "none" }}
                            onMouseEnter={() => setHoveredCat(cat)}
                            onMouseLeave={() => setHoveredCat(null)}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "0.875rem",
                                opacity: isHovered ? 1 : 0.65,
                                color: isHovered ? "oklch(0.55 0.2 262)" : "inherit",
                                transition: "color 0.2s ease, opacity 0.2s ease",
                              }}
                            >
                              {cat}
                            </span>
                            <span
                              style={{
                                display: "block",
                                height: "2px",
                                backgroundColor: "oklch(0.55 0.2 262)",
                                width: isHovered ? "100%" : "0",
                                transition: "width 0.3s ease",
                              }}
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Right column – featured card */}
              <div>
                <div className="relative h-[260px] overflow-hidden rounded-sm bg-primary/10">
                  <img src={vesselDropdownPic} alt="Vessels" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="eyebrow text-white mb-2">Proven design, short term delivery</p>
                    <h3 className="text-2xl font-bold">Vessels in stock</h3>
                    <button className="mt-4 inline-flex items-center gap-2 border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-primary">
                      More information <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-100 py-4 text-sm text-primary/55 flex justify-end">
              Questions?&nbsp;&nbsp;
              <a
                href="#contact"
                className="font-medium underline decoration-1 underline-offset-2"
                style={{ color: "#e53e3e", transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#3b82f6")}
                onMouseLeave={e => (e.currentTarget.style.color = "#e53e3e")}
                onClick={() => setDropdown(null)}
              >
                Contact us
              </a>
              &nbsp;&nbsp;and get in touch with the experts in the field.
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
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
