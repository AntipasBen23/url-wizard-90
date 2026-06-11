import { useEffect, useRef, useState } from "react";
import { Search, Menu, X, ExternalLink, LifeBuoy, ChevronRight } from "lucide-react";
import vesselDropdownPic from "@/assets/vessel-dropdownpic.jpg";
import projectDropdownPic from "@/assets/project-dropdownpic.jpg";
import aboutDropdownPic from "@/assets/card-story.jpg";
import servicesDropdownPic from "@/assets/card-services.jpg";
import brokerageDropdownPic from "@/assets/card-companies.jpg";

const primaryNav = ["Vessels", "Projects", "Brokerage", "Services", "About"];

const vesselCategories = [
  { label: "Cargo/Commercial", href: "/vessels#cargo-commercial" },
  { label: "Defence and Patrol", href: "/vessels#defence-patrol" },
  { label: "Fishing and Research", href: "/vessels#fishing-research" },
];

const aboutCategories = [
  { label: "Mission & Vision", href: "/about#mission-vision" },
  { label: "Team", href: "/about#team" },
  { label: "Policies", href: "/about#policies" },
];

const serviceCategories = [
  { label: "Drilling Chemical and Fluids", href: "/services#drilling-chemical-fluids" },
  { label: "Ship Management", href: "/services#ship-management" },
  { label: "Crew Management", href: "/services#crew-management" },
  { label: "Ship Technical Services", href: "/services#ship-technical-services" },
  { label: "Torqueing and Hot Bolting Services", href: "/services#torqueing-hot-bolting" },
  { label: "Process Control and Instrumentation", href: "/services#process-control-instrumentation" },
  { label: "Petroleum Product Supply and Importations", href: "/services#petroleum-product-supply" },
  { label: "Industrial Tank Cleaning Services", href: "/services#industrial-tank-cleaning" },
  { label: "Vessel Survey / Marine Inspection Services", href: "/services#vessel-survey-inspection" },
  { label: "Safety Training for Seafarers", href: "/services#safety-training-seafarers" },
  { label: "Electrical, Electronic and Telecommunication Engineering (ETE)", href: "/services#electrical-electronic-engineering" },
];

const brokerageCategories = [
  { label: "Market Analysis & Valuation", href: "/brokerage#market-analysis" },
  { label: "Sale & Purchase", href: "/brokerage#sale-purchase" },
  { label: "Chartering", href: "/brokerage#chartering" },
  { label: "Advisory & Consultancy", href: "/brokerage#advisory" },
  { label: "New Building Supervision", href: "/brokerage#new-building" },
];

const projectCategories = [
  { label: "Naval Architectures", href: "/projects#naval-architectural-projects" },
  { label: "Offshore Projects", href: "/projects#offshore-engineering-projects" },
  { label: "Structural Design & Analysis", href: "/projects#structural-design-analysis" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoveredAbout, setHoveredAbout] = useState<string | null>(null);
  const [hoveredBrokerage, setHoveredBrokerage] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [newsMsg, setNewsMsg] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  // Close search overlay on Escape
  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSearchOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [searchOpen]);

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
          <div className="relative">
            <button
              onClick={() => { setNewsMsg(true); setTimeout(() => setNewsMsg(false), 2500); }}
              onMouseEnter={() => setHoveredNav("news")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, position: "relative" }}
              className={`text-sm font-medium transition-colors ${textMuted}`}
            >
              News &amp; Insights
              <span style={{ display: "block", position: "absolute", bottom: "-4px", left: 0, height: "1px", width: hoveredNav === "news" ? "100%" : "0", backgroundColor: "white", transition: "width 0.3s ease" }} />
            </button>
            {newsMsg && (
              <div style={{ position: "absolute", top: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0a1f44", color: "#fff", fontSize: "0.72rem", fontWeight: 600, padding: "0.35rem 0.75rem", borderRadius: "4px", whiteSpace: "nowrap", zIndex: 100 }}>
                Coming soon!
              </div>
            )}
          </div>
          <a
            href="/vacancies"
            className={`relative inline-flex items-center gap-1 text-sm font-medium transition-colors ${textMuted}`}
            onMouseEnter={() => setHoveredNav("career")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            Career <ExternalLink className="h-3.5 w-3.5" />
            <span style={{ display: "block", position: "absolute", bottom: "-4px", left: 0, height: "1px", width: hoveredNav === "career" ? "100%" : "0", backgroundColor: "white", transition: "width 0.3s ease" }} />
          </a>
          <button
            aria-label="Search"
            onClick={() => { setSearchOpen(true); setSearchQuery(""); }}
            className={`transition-colors ${textMuted}`}
          >
            <Search className="h-5 w-5" />
          </button>
          <a
            href="/contact"
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
                      const isHovered = hoveredCat === cat.label;
                      return (
                        <li key={cat.label}>
                          <a
                            href={cat.href}
                            style={{ cursor: "pointer", display: "block", textDecoration: "none" }}
                            onMouseEnter={() => setHoveredCat(cat.label)}
                            onMouseLeave={() => setHoveredCat(null)}
                            onClick={() => setDropdown(null)}
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
                              {cat.label}
                            </span>
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
                    <a href="/vessels" onClick={() => setDropdown(null)} className="mt-4 inline-flex items-center gap-2 border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-primary">
                      More information <ChevronRight className="h-4 w-4" />
                    </a>
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

      {/* ── Brokerage mega-menu ── */}
      {dropdown === "Brokerage" && (
        <div className="animate-slide-down overflow-hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid grid-cols-[280px_1fr] py-8 gap-10">

              {/* Left column */}
              <div className="border-r border-gray-100 pr-10">
                <a
                  href="#"
                  className="flex items-center justify-between text-base font-bold text-primary hover:text-accent transition-colors"
                >
                  Brokerage services
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
                <div className="mt-6">
                  <p className="eyebrow mb-4">What We Offer</p>
                  <ul className="border-l-[3px] border-accent pl-4 space-y-3">
                    {brokerageCategories.map((cat) => {
                      const isHovered = hoveredBrokerage === cat.label;
                      return (
                        <li key={cat.label}>
                          <a
                            href={cat.href}
                            style={{ cursor: "pointer", display: "block", textDecoration: "none" }}
                            onMouseEnter={() => setHoveredBrokerage(cat.label)}
                            onMouseLeave={() => setHoveredBrokerage(null)}
                            onClick={() => setDropdown(null)}
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
                              {cat.label}
                            </span>
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
                  <img src={brokerageDropdownPic} alt="Brokerage" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="eyebrow text-white mb-2">Market expertise, deal certainty</p>
                    <h3 className="text-2xl font-bold">Brokerage</h3>
                    <a href="/brokerage" onClick={() => setDropdown(null)} className="mt-4 inline-flex items-center gap-2 border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-primary">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </a>
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

      {/* ── Projects mega-menu ── */}
      {dropdown === "Projects" && (
        <div className="animate-slide-down overflow-hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid grid-cols-[280px_1fr] py-8 gap-10">

              {/* Left column */}
              <div className="border-r border-gray-100 pr-10">
                <a
                  href="#"
                  className="flex items-center justify-between text-base font-bold text-primary hover:text-accent transition-colors"
                >
                  Projects catalogue
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
                <div className="mt-6">
                  <p className="eyebrow mb-4">Completed Projects</p>
                  <ul className="border-l-[3px] border-accent pl-4 space-y-3">
                    {projectCategories.map((cat) => {
                      const isHovered = hoveredProject === cat.label;
                      return (
                        <li key={cat.label}>
                          <a
                            href={cat.href}
                            style={{ cursor: "pointer", display: "block", textDecoration: "none" }}
                            onMouseEnter={() => setHoveredProject(cat.label)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => setDropdown(null)}
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
                              {cat.label}
                            </span>
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
                  <img src={projectDropdownPic} alt="Projects" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="eyebrow text-white mb-2">Engineering excellence</p>
                    <h3 className="text-2xl font-bold">Our Projects</h3>
                    <a href="/projects" onClick={() => setDropdown(null)} className="mt-4 inline-flex items-center gap-2 border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-primary">
                      More information <ChevronRight className="h-4 w-4" />
                    </a>
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

      {/* ── About mega-menu ── */}
      {dropdown === "About" && (
        <div className="animate-slide-down overflow-hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid grid-cols-[280px_1fr] py-8 gap-10">

              {/* Left column */}
              <div className="border-r border-gray-100 pr-10">
                <a
                  href="#"
                  className="flex items-center justify-between text-base font-bold text-primary hover:text-accent transition-colors"
                >
                  About B&R Marine
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
                <div className="mt-6">
                  <ul className="border-l-[3px] border-accent pl-4 space-y-3">
                    {aboutCategories.map((cat) => {
                      const isHovered = hoveredAbout === cat.label;
                      return (
                        <li key={cat.label}>
                          <a
                            href={cat.href}
                            style={{ cursor: "pointer", display: "block", textDecoration: "none" }}
                            onMouseEnter={() => setHoveredAbout(cat.label)}
                            onMouseLeave={() => setHoveredAbout(null)}
                            onClick={() => setDropdown(null)}
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
                              {cat.label}
                            </span>
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
                  <img src={aboutDropdownPic} alt="About B&R Marine" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="eyebrow text-white mb-2">Who we are</p>
                    <h3 className="text-2xl font-bold">Our Story</h3>
                    <a href="/about" onClick={() => setDropdown(null)} className="mt-4 inline-flex items-center gap-2 border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-primary">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </a>
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

      {/* ── Services mega-menu ── */}
      {dropdown === "Services" && (
        <div className="animate-slide-down overflow-hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid grid-cols-[1fr_300px] py-8 gap-10">

              {/* Left column */}
              <div className="border-r border-gray-100 pr-10">
                <a
                  href="#"
                  className="flex items-center justify-between text-base font-bold text-primary hover:text-accent transition-colors"
                >
                  Our Services
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
                <div className="mt-6">
                  <p className="eyebrow mb-4">What We Offer</p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3 border-l-[3px] border-accent pl-4">
                    {serviceCategories.map((cat) => {
                      const isHovered = hoveredService === cat.label;
                      return (
                        <li key={cat.label}>
                          <a
                            href={cat.href}
                            style={{ cursor: "pointer", display: "block", textDecoration: "none" }}
                            onMouseEnter={() => setHoveredService(cat.label)}
                            onMouseLeave={() => setHoveredService(null)}
                            onClick={() => setDropdown(null)}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "0.8rem",
                                opacity: isHovered ? 1 : 0.65,
                                color: isHovered ? "oklch(0.55 0.2 262)" : "inherit",
                                transition: "color 0.2s ease, opacity 0.2s ease",
                              }}
                            >
                              {cat.label}
                            </span>
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
                  <img src={servicesDropdownPic} alt="Services" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="eyebrow text-white mb-2">End-to-end solutions</p>
                    <h3 className="text-2xl font-bold">Our Services</h3>
                    <a href="/services" onClick={() => setDropdown(null)} className="mt-4 inline-flex items-center gap-2 border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-primary">
                      View all <ChevronRight className="h-4 w-4" />
                    </a>
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

      {/* ── Search overlay ── */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setSearchOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 70, backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}
          />
          {/* Panel */}
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 71, backgroundColor: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.18)", padding: "1.5rem 1.5rem 1rem" }}>
            {/* Input row */}
            <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Search style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0, color: "oklch(0.55 0.2 262)" }} />
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vessels, services, projects, brokerage…"
                style={{ flex: 1, fontSize: "1.05rem", border: "none", outline: "none", color: "#0a1f44", backgroundColor: "transparent" }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", color: "#0a1f44" }}
                aria-label="Close search"
              >
                <X style={{ width: "1.3rem", height: "1.3rem" }} />
              </button>
            </div>
            {/* Divider */}
            <div style={{ maxWidth: "860px", margin: "0.9rem auto 0", height: "1px", backgroundColor: "#e5e7eb" }} />
            {/* Results */}
            <div style={{ maxWidth: "860px", margin: "0 auto", paddingTop: "0.75rem", paddingBottom: "0.5rem", maxHeight: "60vh", overflowY: "auto" }}>
              {(() => {
                const items = [
                  { label: "Home", desc: "B & R Marine Energy Logistics – homepage", href: "/" },
                  { label: "Vessels", desc: "Browse our full fleet of commercial, defence and research vessels", href: "/vessels" },
                  { label: "Cargo / Commercial Vessels", desc: "Commercial cargo vessel designs", href: "/vessels#cargo-commercial" },
                  { label: "Defence and Patrol Vessels", desc: "Naval and patrol vessel designs", href: "/vessels#defence-patrol" },
                  { label: "Fishing and Research Vessels", desc: "Fishing, research and survey vessels", href: "/vessels#fishing-research" },
                  { label: "Services", desc: "Full range of maritime and energy services", href: "/services" },
                  { label: "Ship Management", desc: "Comprehensive vessel management services", href: "/services#ship-management" },
                  { label: "Crew Management", desc: "Seafarer recruitment and crew management", href: "/services#crew-management" },
                  { label: "Safety Training for Seafarers", desc: "Internationally recognised safety training", href: "/services#safety-training-seafarers" },
                  { label: "Vessel Survey / Marine Inspection", desc: "Vessel survey and marine inspection services", href: "/services#vessel-survey-inspection" },
                  { label: "Drilling Chemical and Fluids", desc: "Specialist drilling chemical and fluid supply", href: "/services#drilling-chemical-fluids" },
                  { label: "Ship Technical Services", desc: "Technical maintenance and support for vessels", href: "/services#ship-technical-services" },
                  { label: "Petroleum Product Supply", desc: "Petroleum product supply and importation", href: "/services#petroleum-product-supply" },
                  { label: "Industrial Tank Cleaning", desc: "Industrial tank cleaning services", href: "/services#industrial-tank-cleaning" },
                  { label: "Projects", desc: "Naval architecture, offshore and structural projects", href: "/projects" },
                  { label: "Naval Architecture Projects", desc: "Naval architectural design and engineering", href: "/projects#naval-architectural-projects" },
                  { label: "Offshore Engineering Projects", desc: "Offshore platform and structure engineering", href: "/projects#offshore-engineering-projects" },
                  { label: "Structural Design & Analysis", desc: "Marine structural design and finite element analysis", href: "/projects#structural-design-analysis" },
                  { label: "Brokerage", desc: "Shipbroking, chartering and advisory services", href: "/brokerage" },
                  { label: "Market Analysis & Valuation", desc: "Fleet valuation and market intelligence", href: "/brokerage#market-analysis" },
                  { label: "Sale & Purchase", desc: "Second-hand vessel sale and purchase", href: "/brokerage#sale-purchase" },
                  { label: "Chartering", desc: "Voyage, time and bareboat chartering", href: "/brokerage#chartering" },
                  { label: "Advisory & Consultancy", desc: "Strategic maritime advisory services", href: "/brokerage#advisory" },
                  { label: "New Building Supervision", desc: "Newbuilding management and supervision", href: "/brokerage#new-building" },
                  { label: "About B & R Marine", desc: "Our story, mission and team", href: "/about" },
                  { label: "Mission & Vision", desc: "Our company mission, vision and values", href: "/about#mission-vision" },
                  { label: "Our Team", desc: "Meet the B & R Marine leadership team", href: "/about#team" },
                  { label: "Policies", desc: "Company policies and compliance", href: "/about#policies" },
                  { label: "Careers / Vacancies", desc: "Join the B & R Marine team", href: "/vacancies" },
                  { label: "Contact Us", desc: "Get in touch with our global offices", href: "/contact" },
                  { label: "Lagos Office", desc: "Head office – Maple Close, Ikoyi, Lagos", href: "/contact" },
                  { label: "Port Harcourt Office", desc: "Diamond Valley Estate, Odili Road, Port Harcourt", href: "/contact" },
                  { label: "UK Office", desc: "5 William Merriman Road, Marlborough, UK", href: "/contact" },
                  { label: "Panama Office", desc: "Edificio Comosa, Bellavista, Ciudad Panama", href: "/contact" },
                  { label: "USA Office", desc: "410 SE 18th Street, Fort Lauderdale, FL", href: "/contact" },
                ];
                const q = searchQuery.trim().toLowerCase();
                const filtered = q.length < 2 ? items : items.filter((it) => it.label.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q));
                if (filtered.length === 0) {
                  return <p style={{ fontSize: "0.9rem", color: "#6b7280", padding: "0.5rem 0" }}>No results for &ldquo;{searchQuery}&rdquo;</p>;
                }
                return (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {filtered.map((item) => (
                      <li key={item.href + item.label}>
                        <a
                          href={item.href}
                          onClick={() => setSearchOpen(false)}
                          style={{ display: "flex", flexDirection: "column", gap: "0.15rem", padding: "0.6rem 0.5rem", textDecoration: "none", borderRadius: "4px", transition: "background 0.15s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#f4f6f8")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0a1f44" }}>{item.label}</span>
                          <span style={{ fontSize: "0.78rem", color: "#6b7280" }}>{item.desc}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                );
              })()}
            </div>
          </div>
        </>
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
