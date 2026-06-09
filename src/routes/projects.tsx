import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChevronRight } from "lucide-react";
import dockingCalculations from "@/assets/docking-calculations.jpg";
import intactAndDamage from "@/assets/intactanddamage.jpg";
import vesselOperability from "@/assets/project-dropdownpic.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "Explore BRL's specialist consulting services across naval architecture, offshore engineering, structural design, and vessel compliance.",
      },
    ],
  }),
  component: ProjectsPage,
});

const services = [
  "Naval Architecture",
  "Offshore and Marine Engineering",
  "Structural Design and Analysis",
  "Vessel Documentation and Compliance",
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <section className="bg-primary pt-36 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent mb-4">What we do</p>
          <h1 className="text-5xl font-bold text-primary-foreground sm:text-6xl">
            Our Projects
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In addition to its vessel design services, <span className="font-semibold text-primary">B & R Marine Energy Logistics (BRL)</span> provides
              a comprehensive range of specialist engineering consulting services, with a specific focus on the marine,
              maritime, and offshore sectors.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Drawing on the extensive experience of our multi-disciplinary team and leveraging the latest techniques
              and design/analysis software, BRL's consulting engineering services span the following fields:
            </p>

            {/* Service list */}
            <ul className="mt-8 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 text-base font-semibold uppercase tracking-widest text-accent hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              To explore further details and selected examples of work undertaken by BRL in each of these
              engineering consultancy fields, click the corresponding service area above.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <hr className="border-border" />
      </div>

      {/* Naval Architectural Projects */}
      <section id="naval-architectural-projects" className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-10">
            Naval Architectural Projects
          </h2>

          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              BRL's core naval architecture and ship design consultancy services encompass expert advice
              and analysis across the following areas:
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: "Stability",
                  detail:
                    "Including intact and damage stability using probabilistic and deterministic methods; lightship and inclining surveys; and onboard stability software.",
                },
                {
                  title: "Vessel Motions and Seakeeping",
                  detail:
                    "Including assessments and predictions of vessel operability and dynamic positioning (DP) performance.",
                },
                {
                  title: "Ship Resistance and Powering",
                  detail:
                    "Analysis and optimisation of hull form resistance, propulsion system selection, and powering requirements.",
                },
                {
                  title: "Launching and Docking",
                  detail:
                    "Detailed engineering support for vessel launch operations, dry-docking procedures, and related marine activities.",
                },
              ].map((item) => (
                <li key={item.title} className="border-l-[3px] border-accent pl-5">
                  <h3 className="text-base font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>

            {/* Project cards grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2">

              {/* Docking Calculations */}
              <div className="overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={dockingCalculations}
                    alt="Docking Calculations – Far Sword"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="eyebrow text-xs">Naval Architecture</span>
                  <h4 className="mt-2 text-base font-bold uppercase tracking-widest text-primary">
                    Docking Calculations
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Far Sword
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Comprehensive docking
                    calculations including structural analysis of the docking cradle, assessment of keel block
                    arrangement and bearing pressures, and design of cradle modifications to withstand
                    increased operational loads. Included preparation of full docking plans and load
                    distribution drawings for classification society approval.
                  </p>
                </div>
              </div>

              {/* Intact and Damage Stability */}
              <div className="overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={intactAndDamage}
                    alt="Intact and Damage Stability – Pacific Rapier"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="eyebrow text-xs">Naval Architecture</span>
                  <h4 className="mt-2 text-base font-bold uppercase tracking-widest text-primary">
                    Intact and Damage Stability
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Pacific Rapier
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Preparation of a fully
                    revised intact and damage stability book following significant vessel modifications,
                    including the addition of a crane, mezzanine deck, and methanol tank. The revised
                    stability assessment ensured continued compliance with applicable classification society
                    and flag state requirements under the modified loading conditions.
                  </p>
                </div>
              </div>

              {/* Vessel Operability Analysis */}
              <div className="overflow-hidden rounded-sm border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={vesselOperability}
                    alt="Vessel Operability Analysis – Havila Harmony"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="eyebrow text-xs">Naval Architecture</span>
                  <h4 className="mt-2 text-base font-bold uppercase tracking-widest text-primary">
                    Vessel Operability Analysis
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Havila Harmony
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Detailed comparison of
                    predicted vessel motions against recorded vessel motions captured during Vincent wellhead
                    installation operations. The analysis validated the accuracy of the motion prediction
                    model and provided key insights into vessel operability limits, response amplitude
                    operators, and onboard location-specific acceleration levels under real offshore
                    environmental conditions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
