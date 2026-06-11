import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactPanel } from "@/components/site/ContactPanel";
import { Phone, ChevronRight, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "Contact B & R Marine Energy Logistics. Reach our global offices in Nigeria, UK, Panama and USA for all maritime enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const contactCards = [
  {
    title: "General Enquiries",
    body: "For general enquiries, reach our head office in Lagos or any of our regional offices in Port Harcourt, UK, Panama, and the USA. Our team is ready to assist.",
    cta: "Contact us",
    action: "panel",
  },
  {
    title: "Ship Management & Services",
    body: "B & R Marine provides comprehensive ship management, crew management and technical services for all vessel types worldwide.",
    cta: "Contact us",
    action: "panel",
  },
  {
    title: "Brokerage & Chartering",
    body: "We are experienced shipbrokers offering complete sale & purchase, chartering, market analysis and advisory services for the global maritime community.",
    cta: "View Brokerage",
    action: "/brokerage",
  },
  {
    title: "Vessels",
    body: "Browse our fleet of commercial, defence, fishing and research vessels, or enquire about specific vessel availability and technical specifications.",
    cta: "View Vessels",
    action: "/vessels",
  },
  {
    title: "Safety Training & Operations",
    body: "Our maritime safety division provides internationally recognised safety training courses for seafarers and offshore operations personnel.",
    cta: "Contact us",
    action: "panel",
  },
  {
    title: "Engineering & Projects",
    body: "Our engineering team delivers naval architecture, offshore engineering, structural design and full project management services worldwide.",
    cta: "View Projects",
    action: "/projects",
  },
];

function ContactPage() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactPanel open={panelOpen} onClose={() => setPanelOpen(false)} />

      {/* Page header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent">Get In Touch</p>
          <h1 className="mt-4 text-5xl font-bold text-primary-foreground sm:text-6xl">
            Contact B &amp; R Marine
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/70">
            Our global team of maritime professionals is ready to assist you across all our services
            and operations — wherever you are in the world.
          </p>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="bg-secondary py-10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex flex-col gap-6 rounded-sm bg-white px-8 py-7 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-accent">24/7 Global Maritime Support</h3>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                We provide round-the-clock support for maritime emergencies and operational enquiries
                wherever you are in the world. Our response team is always on standby.
              </p>
            </div>
            <a
              href="tel:+2348025454600"
              className="inline-flex shrink-0 items-center gap-2 text-2xl font-bold text-accent hover:opacity-80 transition-opacity"
            >
              <Phone className="h-6 w-6" />
              +234 802 545 4600
            </a>
          </div>
        </div>
      </section>

      {/* Contact type tabs */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex gap-8 py-5 text-sm font-semibold">
            {["Contact details", "Press contacts", "Other contacts"].map((tab) => (
              <button
                key={tab}
                className="text-primary/60 transition-colors hover:text-accent"
                onClick={() => setPanelOpen(true)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact cards grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card) => (
              <div key={card.title} className="flex flex-col rounded-sm border border-border bg-white p-7">
                <div className="mb-3 h-1 w-10 rounded-full bg-accent" />
                <h3 className="text-lg font-bold text-accent">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                {card.action === "panel" ? (
                  <button
                    onClick={() => setPanelOpen(true)}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                  >
                    {card.cta} <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={card.action}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                  >
                    {card.cta} <ChevronRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Your feedback</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Already have experience with our services? We value every piece of feedback — it helps us
                  serve you better. Share any complaints or remarks and we will get back to you within
                  5 working days.
                </p>
              </div>
            </div>
            <button
              onClick={() => setPanelOpen(true)}
              className="shrink-0 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
            >
              Share feedback <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
