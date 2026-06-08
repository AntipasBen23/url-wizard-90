import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Volume2, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import heroOcean from "@/assets/hero-ocean.jpg";
import cardVessels from "@/assets/card-vessels.jpg";
import cardServices from "@/assets/card-services.jpg";
import cardShiprepair from "@/assets/card-shiprepair.jpg";
import cardCompanies from "@/assets/card-companies.jpg";
import cardStory from "@/assets/card-story.jpg";
import careerCta from "@/assets/career-cta.jpg";
import bannerLaunch from "@/assets/banner-launch.jpg";
import spotlightSustainability from "@/assets/spotlight-sustainability.jpg";
import spotlightDefence from "@/assets/spotlight-defence.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B & R Marine Energy Logistics | Who We Are" },
      {
        name: "description",
        content:
          "B & R Marine Energy Logistics is your trusted partner in maritime energy solutions and logistics services.",
      },
      { property: "og:title", content: "B & R Marine Energy Logistics" },
      { property: "og:description", content: "An ocean of possibilities. Building ships since 1927." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const portfolio = [
  { label: "Vessels", img: cardVessels, span: "lg:col-span-2 lg:row-span-2" },
  { label: "Services", img: cardServices, span: "lg:col-span-2" },
  { label: "Shiprepair", img: cardShiprepair, span: "" },
  { label: "Companies", img: cardCompanies, span: "" },
  { label: "Our Story", img: cardStory, span: "lg:col-span-2" },
];

const spotlight = [
  {
    img: spotlightSustainability,
    title: "Our ambition",
    text: "B & R Marine Energy Logistics has the ambition to become the most sustainable maritime energy logistics provider in the world.",
  },
  {
    img: spotlightDefence,
    title: "Securing our Seas",
    text: "Securing the seas to safeguard society, trade and maritime activity.",
  },
];

const news = [
  {
    img: news1,
    date: "3 Jun 2026",
    title: "B & R Marine Energy Logistics announces expansion of energy logistics services",
  },
  {
    img: news2,
    date: "29 May 2026",
    title: "B & R Marine Energy Logistics delivers new vessel to partner fleet",
  },
  {
    img: news3,
    date: "28 May 2026",
    title: "Two B & R Marine vessels enter service with new maritime operator",
  },
];

const events = [
  { day: "4", mon: "Jun", title: "Posidonia 2026", loc: "Athens, Greece" },
  { day: "9", mon: "Jun", title: "IHMA Congress", loc: "Rotterdam, The Netherlands" },
  { day: "9", mon: "Jun", title: "Seawork", loc: "Southampton, United Kingdom" },
  { day: "16", mon: "Jun", title: "Breakbulk Europe", loc: "Rotterdam, The Netherlands" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex h-[100svh] min-h-[640px] items-center overflow-hidden">
        <img
          src={heroOcean}
          alt="Ocean horizon at golden hour with offshore wind turbines"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-10">
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] text-primary-foreground sm:text-7xl lg:text-8xl">
            We are B & R Marine Energy Logistics
          </h1>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border-2 border-white/80 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Get in touch <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        {/* Faux video controls */}
        <div className="absolute bottom-6 right-6 hidden items-center gap-4 text-primary-foreground/80 sm:flex">
          <div className="h-px w-40 bg-white/40">
            <div className="h-px w-1/3 bg-primary-foreground" />
          </div>
          <Play className="h-5 w-5" />
          <Volume2 className="h-5 w-5" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow">An ocean of possibilities</p>
          <h2 className="mt-5 text-4xl font-bold text-primary sm:text-5xl">Building ships since 1927</h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            B & R Marine Energy Logistics is an international maritime energy logistics company but at its heart, there is still a family company. We operate in
            every market where we see an opportunity to improve, innovate or invest. At B & R Marine we make time to listen to
            our clients. Our open, collaborative approach has been a key driver of our service portfolio's evolution.
            Exceeding your expectations is our most important goal; after all, it's your future we're building.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
            {portfolio.map((card) => (
              <a
                key={card.label}
                href="#"
                className={`group relative overflow-hidden rounded-sm ${card.span}`}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="text-xl font-bold text-primary-foreground">{card.label}</span>
                  <ArrowRight className="h-5 w-5 -translate-x-2 text-primary-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Launch banner */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={bannerLaunch}
          alt="A new vessel entering the water at launch"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="relative flex h-full items-center justify-center">
          <button className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/95 text-primary transition-transform hover:scale-110">
            <Play className="ml-1 h-8 w-8 fill-current" />
          </button>
        </div>
      </section>

      {/* Career CTA */}
      <section id="contact" className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-primary px-6 py-20 text-primary-foreground sm:px-16">
          <p className="eyebrow text-accent">Careers</p>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Join our family</h2>
          <p className="mt-5 max-w-md text-lg text-primary-foreground/70">
            Contact us and get in touch with the experts in field.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            View vacancies <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative min-h-[340px]">
          <img
            src={careerCta}
            alt="A diverse team of maritime professionals"
            loading="lazy"
            width={1000}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Spotlight */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">In the spotlight</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {spotlight.map((s) => (
              <a key={s.title} href="#" className="group relative h-[420px] overflow-hidden rounded-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm text-primary-foreground/80">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            A team of <span className="text-accent">12,500</span> over{" "}
            <span className="text-accent">35</span> shipyards across{" "}
            <span className="text-accent">5</span> continents
          </h2>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 border-2 border-white/70 px-7 py-4 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Find B & R Marine companies <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-background py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">Latest press releases</h2>
            <a href="#" className="hidden items-center gap-2 text-sm font-semibold text-accent hover:underline sm:inline-flex">
              Read all <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {news.map((n) => (
              <a key={n.title} href="#" className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{n.date}</p>
                <h3 className="mt-2 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                  {n.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">Upcoming events</h2>
            <a href="#" className="hidden items-center gap-2 text-sm font-semibold text-accent hover:underline sm:inline-flex">
              See all <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {events.map((e) => (
              <a key={e.title} href="#" className="group flex items-center gap-6 py-6 transition-colors hover:bg-background/60">
                <div className="flex w-16 shrink-0 flex-col items-center">
                  <span className="text-3xl font-bold text-primary">{e.day}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{e.mon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.loc}</p>
                </div>
                <ArrowRight className="h-5 w-5 -translate-x-2 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
