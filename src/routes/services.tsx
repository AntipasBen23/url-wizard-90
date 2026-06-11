import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import drillingImg from "@/assets/drillingimg.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "Explore the full range of maritime services offered by B & R Marine Energy Logistics — from drilling chemicals to vessel inspection and crew management.",
      },
    ],
  }),
  component: ServicesPage,
});

const drillingItems = [
  "Supply of Primary and Secondary Emulsifiers, Filtration control agents, Base oil, Rheology modifiers, Wetting agents and Organophilic clays Viscosifier.",
  "We believe in making available MSDS for all drilling products.",
  "Provide product specification.",
  "Preparation of the following: water samples for analysis, and lube oil, fuel, gas etc.",
  "Conducting routine analysis such as Bacteria Oxygen Demand (BOD), Chemical Oxygen Demand (COD), pH, conductivity, phosphate and silicate test on effluent water samples.",
  "Ensuring laboratory procedures are conducted according to international health and safety.",
  "Supply of cementing additives such as retarder RT–1, accelerator ACE–1, washing liquid WA–½, defoamer DEF–1, latex anti-fluid channelling agent, high temperature dispersant HTD.",
  "Mud engineering services.",
  "Supply processed drilling materials such as Calcium Carbonate, Bentonite, Barite.",
  "Supply of drilling and work-over fluids.",
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent">What We Offer</p>
          <h1 className="mt-4 text-5xl font-bold text-primary-foreground sm:text-6xl">Our Services</h1>
        </div>
      </section>

      {/* ── Drilling Chemical and Fluids ── */}
      <section id="drilling-chemical-fluids" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 01</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Drilling Chemical and Fluids</h2>
              <ul className="mt-8 space-y-4">
                {drillingItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={drillingImg}
                alt="Drilling Chemical and Fluids"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
