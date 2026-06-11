import { useEffect, useRef, useState } from "react";
import { Search, Menu, X, ExternalLink, LifeBuoy, ChevronRight } from "lucide-react";
import vesselDropdownPic from "@/assets/vessel-dropdownpic.jpg";
import projectDropdownPic from "@/assets/project-dropdownpic.jpg";
import aboutDropdownPic from "@/assets/card-story.jpg";
import servicesDropdownPic from "@/assets/card-services.jpg";

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
  const [hoveredService, setHoveredService] = useState<string | null>(null);
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
          <a
            href="#news"
            className={`relative text-sm font-medium transition-colors ${textMuted}`}
            onMouseEnter={() => setHoveredNav("news")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            News &amp; Insights
            <span style={{ display: "block", position: "absolute", bottom: "-4px", left: 0, height: "1px", width: hoveredNav === "news" ? "100%" : "0", backgroundColor: "white", transition: "width 0.3s ease" }} />
          </a>
          <a
            href="#"
            className={`relative inline-flex items-center gap-1 text-sm font-medium transition-colors ${textMuted}`}
            onMouseEnter={() => setHoveredNav("career")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            Career <ExternalLink className="h-3.5 w-3.5" />
            <span style={{ display: "block", position: "absolute", bottom: "-4px", left: 0, height: "1px", width: hoveredNav === "career" ? "100%" : "0", backgroundColor: "white", transition: "width 0.3s ease" }} />
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
