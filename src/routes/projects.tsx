import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChevronRight } from "lucide-react";
import dockingCalculations from "@/assets/docking-calculations.jpg";
import intactAndDamage from "@/assets/intactanddamage.jpg";
import vesselOperability from "@/assets/project-dropdownpic.jpg";
import spsCode from "@/assets/spscode.jpg";
import craneOperations from "@/assets/craneoperationspic.jpg";
import ahOperations from "@/assets/ahoperationspic.png";
import santaFe from "@/assets/santafe.jpeg";
import modu from "@/assets/modu.jpg";
import tankTransport from "@/assets/tanktransport.jpg";
import craneBarge from "@/assets/cranebarge.png";
import liftEngineering from "@/assets/liftengineering.jpeg";
import gorgon from "@/assets/Gorgon.jpg";
import towed from "@/assets/towed.jpg";
import normand from "@/assets/Normand.jpg";

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

            {/* Project cards */}
            <div className="mt-14 space-y-5">

              {/* Docking Calculations */}
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                  <img src={dockingCalculations} alt="Docking Calculations – Far Sword" className="max-h-[200px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center px-8 py-7">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Docking Calculations</h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Far Sword
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Comprehensive docking calculations including structural analysis of the docking cradle, assessment of keel block arrangement and bearing pressures, and design of cradle modifications to withstand increased operational loads. Included preparation of full docking plans and load distribution drawings for classification society approval.
                  </p>
                </div>
              </div>

              {/* Intact and Damage Stability */}
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                  <img src={intactAndDamage} alt="Intact and Damage Stability – Pacific Rapier" className="max-h-[200px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center px-8 py-7">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Intact and Damage Stability</h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Pacific Rapier
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Preparation of a fully revised intact and damage stability book following significant vessel modifications, including the addition of a crane, mezzanine deck, and methanol tank. The revised stability assessment ensured continued compliance with applicable classification society and flag state requirements under the modified loading conditions.
                  </p>
                </div>
              </div>

              {/* Vessel Operability Analysis */}
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                  <img src={vesselOperability} alt="Vessel Operability Analysis – Havila Harmony" className="max-h-[200px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center px-8 py-7">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Vessel Operability Analysis</h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Havila Harmony
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Detailed comparison of predicted vessel motions against recorded vessel motions captured during Vincent wellhead installation operations. The analysis validated the accuracy of the motion prediction model and provided key insights into vessel operability limits, response amplitude operators, and onboard location-specific acceleration levels under real offshore environmental conditions.
                  </p>
                </div>
              </div>

              {/* SPS Code Damage Stability Analysis */}
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                  <img src={spsCode} alt="SPS Code Damage Stability Analysis – CGG Symphony" className="max-h-[200px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center px-8 py-7">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">SPS Code Damage Stability Analysis</h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> CGG Symphony
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Probabilistic damage stability analysis conducted in full accordance with SPS Code requirements, including assessment of all applicable damage cases and verification of compliance with survivability criteria. The analysis was submitted to and approved by DNV, ensuring the vessel met the necessary classification society standards for continued operation under the SPS framework.
                  </p>
                </div>
              </div>

              {/* Assessment of Stability with Crane Operations */}
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                  <img src={craneOperations} alt="Assessment of Stability with Crane Operations – Nor Australis" className="max-h-[200px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center px-8 py-7">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Assessment of Stability with Crane Operations</h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Nor Australis
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Comprehensive review of existing vessel stability documentation with specific focus on crane operations, including assessment of free-surface effects, load distribution, and allowable lift envelopes. The project delivered updated recommendations for safe crane operations and vessel loading conditions to ensure continued compliance with applicable stability requirements.
                  </p>
                </div>
              </div>

              {/* Assessment of Vessel Stability for AH Operations */}
              <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                  <img src={ahOperations} alt="Assessment of Vessel Stability for AH Operations – Lady Sandra" className="max-h-[200px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center px-8 py-7">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Assessment of Vessel Stability for AH Operations</h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">Vessel —</span> Lady Sandra
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary/80">Scope —</span> Stability assessment carried out for six anchor handling tug (AHT) vessels in accordance with NMD anchor handling stability guidelines, conducted in the wake of the Bourbon Dolphin accident. The study evaluated each vessel's stability performance under anchor handling load conditions and provided recommendations to ensure full compliance with the updated regulatory requirements.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Offshore Engineering Projects */}
      <section id="offshore-engineering-projects" className="py-20 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
            Offshore Engineering Projects
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-14 max-w-2xl">
            BRL's offshore engineering team delivers specialist analysis and design support across a broad range of marine and offshore projects, drawing on deep technical expertise in dynamic systems, mooring, and offshore operations.
          </p>

          <div className="space-y-5">

            {/* Jack Up Site Specific Assessment */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={santaFe} alt="Jack Up Site Specific Assessment – Santa Fe" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Jack Up Site Specific Assessment</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> Santa Fe
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Site specific assessment carried out in accordance with SNAME T&R 5-5A guidelines, covering preload capacity, bearing failure, sliding, and overturning checks for the proposed jack-up location. The assessment was prepared and submitted to Bureau Veritas for review and approval, ensuring the unit's fitness for purpose at the designated site.
                </p>
              </div>
            </div>

            {/* MODU Prelaid Mooring Design */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={modu} alt="MODU Prelaid Mooring Design – Jack Bates" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">MODU Prelaid Mooring Design</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> Jack Bates
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Full design of a prelaid mooring system complete with synthetic rope inserts for the MODU Jack Bates, commissioned by Hess NWS Exploration. The design encompassed mooring line configuration, component selection, anchor positioning, and load analysis to ensure safe station-keeping performance at the designated offshore location.
                </p>
              </div>
            </div>

            {/* Tank Transport Engineering */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={tankTransport} alt="Tank Transport Engineering – Go Enif / Labroy 256" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Tank Transport Engineering</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> Go Enif / Labroy 256
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Comprehensive engineering and tow planning for the marine transport of two 35-metre diameter fuel oil tanks from Bell Bay, Tasmania to Newcastle, NSW. The scope included sea-fastening design, structural assessment of the cargo support arrangement, tow route analysis, and preparation of the marine warranty documentation required for the operation.
                </p>
              </div>
            </div>

            {/* Crane Barge Analysis */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={craneBarge} alt="Crane Barge Analysis – AMS Gladstone" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Crane Barge Analysis</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> AMS Gladstone
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Design of barge mooring system and crane mats and fastenings, along with determination of crane operating limits and dynamic amplification factors (DAFs) for crane barge operations on the Brisbane Riverwalk replacement project. The analysis ensured safe and efficient lift operations within the defined environmental and structural constraints.
                </p>
              </div>
            </div>

            {/* Lift Engineering */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={liftEngineering} alt="Lift Engineering – Woodside Pluto LNG Jetty" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Lift Engineering</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Lift engineering services for pre-assembled units and loading arms required for the construction of the Woodside Pluto LNG jetty. The scope covered detailed lift studies, rigging arrangements, centre of gravity calculations, and dynamic load assessments to ensure all lifts were executed safely and in compliance with applicable engineering standards.
                </p>
              </div>
            </div>

            {/* Gorgon LNG Jetty Caisson Barge – Mooring */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={gorgon} alt="Gorgon LNG Jetty Caisson Barge – Mooring" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Gorgon LNG Jetty Caisson Barge – Mooring</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> Boa 33 / Pacific Wrangler
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Detailed mooring system design for the offloading of caissons from a semi-submersible barge at the Gorgon LNG jetty construction site. The work encompassed mooring line configuration, anchor positioning, load analysis under site-specific environmental conditions, and verification of the system's capacity to safely manage the offloading operation.
                </p>
              </div>
            </div>

            {/* Towed Body Simulation */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={towed} alt="Towed Body Simulation – Fugro Equator" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Towed Body Simulation</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> Fugro Equator
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Tow cable load analysis covering geometry and dynamic behaviour when towing a towfish sensor on up to 9.5 km of fibre optic umbilical. The simulation assessed cable tensions, catenary shape, and dynamic response under varying vessel speeds and sea states to ensure safe and reliable sensor deployment throughout the survey operation.
                </p>
              </div>
            </div>

            {/* Vessel Mobilisation */}
            <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="sm:w-[340px] shrink-0 flex items-center justify-center p-4">
                <img src={normand} alt="Vessel Mobilisation – Normand Clough" className="max-h-[200px] w-full object-contain" />
              </div>
              <div className="flex flex-col justify-center px-8 py-7">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Vessel Mobilisation</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary/80">Vessel —</span> Normand Clough
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/80">Scope —</span> Sea fastening design for the mobilisation of a field abandonment spread onto the Normand Clough vessel in support of the Lufeng 22-1 field abandonment project. The scope included structural assessment of deck loadings, fastening arrangement design, and preparation of the relevant engineering documentation to support safe offshore mobilisation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
