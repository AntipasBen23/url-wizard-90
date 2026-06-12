import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import drillingImg from "@/assets/drillingimg.png";
import shipManagementImg from "@/assets/ship management.jpeg";
import crewmenImg from "@/assets/crewmen.png";
import shipTechImg from "@/assets/ship tech.png";
import torqueImg from "@/assets/torque.png";
import processControlImg from "@/assets/processcontrol.png";
import petroImg from "@/assets/petro.png";
import indusImg from "@/assets/indus.png";
import vesselInspectImg from "@/assets/vesselinspect.jpeg";
import safetyImg from "@/assets/safetyimg.jpeg";
import electImg from "@/assets/electimg.jpeg";
import armedResponderImg from "@/assets/ArmedResponder-photo.png";

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

const managedVessels = [
  {
    name: "Armed Responder",
    img: armedResponderImg,
    specGroups: [
      {
        label: "General",
        items: [
          { key: "Type", value: "Crew Boat" },
          { key: "Owner", value: "GIS Marine" },
          { key: "Builder", value: "Breaux Brothers" },
          { key: "Gross Tonnage", value: "93" },
          { key: "Net Tonnage", value: "67" },
          { key: "Year Built", value: "1996" },
          { key: "Official Number", value: "1048707" },
          { key: "USCG Inspection", value: "Yes" },
          { key: "ABS Loadline", value: "Yes" },
        ],
      },
      {
        label: "Dimensions",
        items: [
          { key: "Length", value: "145'" },
          { key: "Beam", value: "28'" },
          { key: "Depth", value: "11.66'" },
          { key: "Clear Deck", value: "83' × 23'" },
          { key: "Clear Deck Sq Ft", value: "1,909 sq ft" },
          { key: "Deadweight", value: "260 Long Tons" },
        ],
      },
      {
        label: "Propulsion",
        items: [
          { key: "Main Engines", value: "(5) Cummins QSK 19M" },
          { key: "Max HP", value: "3,500" },
          { key: "Reduction Gear", value: "Twin Disc 5202" },
          { key: "Propellers", value: '(5) 39" × 36"' },
          { key: "Generators", value: "(2) 50kw — Cummins" },
          { key: "Bow Thruster", value: "N/A" },
        ],
      },
      {
        label: "Performance",
        items: [
          { key: "Max Speed", value: "24 knots @ 167 gph" },
          { key: "Cruising Speed", value: "22 knots @ 150 gph" },
          { key: "Cargo Water", value: "600 gpm @ 130 ft" },
          { key: "Fuel Oil Transfer", value: "90 gpm @ 100 ft" },
          { key: "Potable Water", value: "600 gpm @ 130 ft" },
        ],
      },
      {
        label: "Capacities",
        items: [
          { key: "Deck Cargo", value: "240 Long Tons" },
          { key: "Ballast Water", value: "35,700 gals" },
          { key: "Fuel Oil", value: "18,100 gals" },
          { key: "Potable Water", value: "1,200 gals" },
          { key: "Lube Oil", value: "336 gals" },
        ],
      },
      {
        label: "Accommodations",
        items: [
          { key: "Cabins / Berths", value: "(4) 2-Man" },
          { key: "Certified Capacity", value: "85 persons" },
          { key: "Galley Seating", value: "8" },
          { key: "A/C & Heater", value: "Yes" },
        ],
      },
      {
        label: "Electronics",
        items: [
          { key: "Radars", value: "(2) Furuno" },
          { key: "Radios", value: "(2) VHF, (1) SSB" },
          { key: "Fathometer", value: "Yes" },
          { key: "GPS", value: "Garmin" },
        ],
      },
      {
        label: "Special Equipment",
        items: [
          { key: "Fire Fighting", value: "Yes" },
        ],
      },
    ],
  },
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

      {/* ── Ship Management ── */}
      <section id="ship-management" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={shipManagementImg}
                alt="Ship Management"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 02</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Ship Management</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics is the world's leading independent ship management company, and a
                global pioneer in technology, innovation, and services for worldwide vessel owners. With over 25 years'
                experience in managing vessels in the shipping, cruise and energy sectors, B &amp; R Marine Energy
                Logistics is committed to delivering safe and compliant operations through transparency,
                pro-activeness, and strong partnerships.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics provides a full range of ship management and marine support services
                to ship owners and operators around the globe, as well as the ability to blend those services together
                in unique combinations to meet specific customer needs. With responsibility for 100 assets including
                tankers, bulk carriers, and gas carriers, to cruise, offshore, passenger vessels and containerships,
                B &amp; R Marine Energy Logistics has access to an international network of over 1,000 seafarers
                across all sectors. They are supported by an onshore team of over 500 colleagues spread throughout
                30 countries in 50 regional offices.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As industry leaders, we combine our global footprint with specialists and operational hubs around the
                world to give our customers the most comprehensive service with multi-disciplined support. Guided by
                our values, we aim to deliver flawless service in every area in which we operate, with safety being
                our number one priority. B &amp; R Marine Energy Logistics has always placed technology and innovation
                at the center of its operations.
              </p>

              {/* Sub-sections */}
              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Shipberyl",
                    body: "A vital tool in delivering flawless service — a powerful digital platform that helps us collaborate better, make data-driven decisions, and seamlessly connect different areas of the business.",
                  },
                  {
                    title: "Operating Model",
                    body: "By leveraging our unique operating model, we align our risks and priorities more closely with our customers. We not only provide ship management services, but certainty and confidence for owners wanting to stay one step ahead.",
                  },
                  {
                    title: "Safety",
                    body: "We are able to set, measure and deliver the industry leading standards for safety, compliance, environmental protection and service quality. We demonstrate the know-how, commitment, and drive to help all our customers achieve their goals, through cost-effective, safe, and performance-enhancing asset management — wherever and whenever it's needed.",
                  },
                  {
                    title: "Technology",
                    body: "This drives better outcomes for our customers, integrating technology and data in order to generate tangible value in all aspects of their operations. Technology and datasets provide actionable insights, driving vessel safety, environmentally compliant operations and ultimately optimising technical and commercial performance.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Vessels Under Management ── */}
          <div className="mt-20">
            <p className="eyebrow mb-3">Track Record</p>
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Vessels Under Management</h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A selection of vessels B &amp; R Marine has managed on behalf of owners and operators worldwide.
            </p>
            <div className="mt-10 space-y-8">
              {managedVessels.map((vessel) => (
                <div key={vessel.name} className="overflow-hidden rounded-sm border border-border bg-white shadow-sm">
                  {/* Card header — photo + name */}
                  <div className="flex flex-col sm:flex-row">
                    <div className="h-[260px] shrink-0 overflow-hidden sm:w-[360px]">
                      <img
                        src={vessel.img}
                        alt={vessel.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-end bg-primary p-6 sm:flex-1">
                      <p className="eyebrow text-accent mb-2">Managed Vessel</p>
                      <h4 className="text-2xl font-bold text-primary-foreground sm:text-3xl">{vessel.name}</h4>
                      <p className="mt-2 text-sm text-primary-foreground/60">
                        {vessel.specGroups[0].items.find(i => i.key === "Type")?.value}
                        {" · "}
                        Built {vessel.specGroups[0].items.find(i => i.key === "Year Built")?.value}
                        {" · "}
                        Owner: {vessel.specGroups[0].items.find(i => i.key === "Owner")?.value}
                      </p>
                    </div>
                  </div>
                  {/* Spec groups grid */}
                  <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
                    {vessel.specGroups.map((group) => (
                      <div key={group.label} className="bg-white px-5 py-5">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                          {group.label}
                        </p>
                        <dl className="space-y-2">
                          {group.items.map((item) => (
                            <div key={item.key}>
                              <dt className="text-[10px] text-muted-foreground">{item.key}</dt>
                              <dd className="text-[12px] font-semibold text-primary">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Crew Management ── */}
      <section id="crew-management" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 03</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Crew Management</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Attracting, recruiting, training, deploying and developing highly skilled seafarers for your vessels
                is the core purpose of our crew management business. You can be assured we will offer your fleet the
                right mix of crew, with the right skillsets and competence, at the right time, to optimise your
                vessel and commercial performance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Operating from well-established Crew Management Centres around the world, we deal seamlessly with
                every aspect of crew management operations for every maritime segment, reducing your operating costs,
                and delivering world-class operations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you require a single specialist seafarer, or a turnkey solution for managing the full
                complement for every vessel in your fleet, our scale and global reach means we can offer you flexible
                and responsive crew management services tailored to suit your needs. Our dedication to safety,
                customer care, and quality, coupled with access to the industry's largest network of maritime talent,
                means that we are trusted the world over as a market leader in crew management services.
              </p>

              {/* Sub-sections */}
              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Crew Supply",
                    body: "With the world's largest database of certified and competent seafarers, B & R Marine Energy Logistics can meet all your crew supply requirements rapidly, and at scale.",
                  },
                  {
                    title: "Training",
                    body: "Training a multinational crew is essential to safe and successful operations, but it can be a complex and time-consuming process. We streamline and manage this for you.",
                  },
                  {
                    title: "Crew Services",
                    body: "From serving seafarers on merchant fleets and cargo vessels to ensuring guests aboard cruise liners and luxury yachts enjoy a 5-star dining experience, our crew services cover a diverse range of needs to satisfy and exceed the expectations of seafarers, crew and passengers alike.",
                  },
                  {
                    title: "Traveling",
                    body: "In a global maritime industry, you need to transport your people efficiently and cost effectively. Who better to trust than a leading industry travel management company who successfully moves over 100,000 maritime personnel every year?",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={crewmenImg}
                alt="Crew Management"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Ship Technical Services ── */}
      <section id="ship-technical-services" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={shipTechImg}
                alt="Ship Technical Services"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 04</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Ship Technical Services</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics delivers comprehensive ship technical services designed to keep
                your vessels operating at peak performance, in full regulatory compliance, and at the lowest possible
                cost. Our experienced team of naval architects, marine engineers and technical superintendents work
                closely with vessel owners and operators to provide end-to-end technical support across every stage
                of a vessel's lifecycle.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From routine planned maintenance and dry-docking management through to emergency response and
                complex repair projects, our technical team brings the expertise, responsiveness and global network
                needed to resolve challenges swiftly and effectively. We are committed to maintaining the highest
                standards of vessel integrity, seaworthiness and operational readiness for every asset under our care.
              </p>

              {/* Sub-sections */}
              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Planned Maintenance",
                    body: "We implement and oversee structured planned maintenance systems (PMS) to ensure all machinery, equipment and hull components are serviced on schedule, reducing unplanned downtime and extending the operational life of your assets.",
                  },
                  {
                    title: "Dry-Docking & Repairs",
                    body: "Our technical team manages the full dry-docking process — from specification and tendering to yard supervision and sea trials — ensuring projects are delivered on time, within budget, and to the highest quality standards.",
                  },
                  {
                    title: "Procurement & Spare Parts",
                    body: "Leveraging our global supplier network, we source and procure quality-approved spare parts, consumables and technical equipment at competitive prices, ensuring timely delivery to vessels wherever they operate in the world.",
                  },
                  {
                    title: "Technical Inspections & Vetting",
                    body: "Our superintendents conduct regular condition inspections, vetting preparations and class survey support to ensure vessels remain compliant with flag state requirements, class regulations and oil major vetting standards at all times.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Torqueing and Hot Bolting Services ── */}
      <section id="torqueing-hot-bolting" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 05</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Torqueing and Hot Bolting Services</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics offers the best services when it comes to bolting, training and
                consulting — offering full bolting tool service and maintenance wherever you need it. We provide
                personalised bolting demonstrations and training, and our service vehicle is equipped to perform
                torque wrench and other equipment calibrations and repairs on site.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We can give you advice on the best solutions and the bolting tools most suited to your application,
                enabling safe and controlled performance of your bolting activities. We are presently handling
                servicing and maintenance jobs for Exxon Mobil and other sub-contractors.
              </p>

              {/* Torqueing Training */}
              <div className="mt-10 border-l-4 border-accent pl-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Torqueing and Hot Bolting Training</h3>
              </div>

              {/* Bolt and Torque Technician */}
              <div className="mt-8 border-l-4 border-accent pl-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Bolt and Torque Technician</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  "Performing a variety of flange joint related services, bolt torque & tensioning",
                  "Perform bolt-up using hydraulic torque wrenches / or tensioners",
                  "Set pump pressure and perform bolt load calculation",
                  "Conduct repair hydraulic machine & hydraulic torque wrenches",
                  "Responsible for torqueing and hot bolting of any kind of flanges",
                  "Responsible for alignment of all flanges",
                  "Analyze isometric drawing or P&ID for location and details of flange, gasket, bolts & nuts",
                  "Preparing tools and equipment to be used in job site",
                  "Inspection of flange face, gasket, bolts and nuts for any damage before box-up",
                  "Numbering of bolts for sequence preparation",
                  "Assembling torque equipment",
                  "Setting torque machines precise pressure output",
                  "Torque sequence for 30%, 70% and 100% and clockwise set for final torque (depends on project procedure)",
                  "Checking all bolts using brass hammer to avoid sparks for any loose bolts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Mechanical Fitting */}
              <div className="mt-12 border-l-4 border-accent pl-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Mechanical Fitting Services — Offshore &amp; Onshore</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Mechanical/Plant Fitting is a field of mechanical engineering that deals with the maintenance of
                machines. The key aspect is to understand the interchangeability of mechanical parts. All machine
                parts are manufactured in such a manner that they are within the acceptable limit of tolerance
                (limits and fits).
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                BR Marine Energy Logistics specialises in taking care of all your mechanical fittings applying a
                cost-effective style of operations. We can help repair and re-pipe gas lines and water lines —
                whatever you need, our Fitters can help. Pipe fittings are attached to the end of pipes that allow
                them to change direction, control the flow, and change the diameter of the pipe.
              </p>
              <h4 className="mt-6 text-sm font-semibold text-primary">Types of pipe fittings and their purposes:</h4>
              <ul className="mt-4 space-y-3">
                {[
                  "Elbows: Used to change the angle or direction of the pipe run — most commonly in 90° and 45° turns.",
                  "Street Elbows: One end has male threads, the other female threads. Convenient in tight quarters.",
                  "Tee Fittings: Shaped like the letter T. Allows for branch lines.",
                  "Couplings: Used to join two straight pieces of pipe of the same diameter.",
                  "Reducers: Used to join pipes of different diameters, making a gradual change in diameter.",
                  "Bushings: Used to make the diameter of a pipe fitting smaller with an abrupt change, taking little space.",
                  "Unions: Used where pipes cannot be turned or when equipment may need to be removed for maintenance.",
                  "Adaptor Fittings: Used to change the end of a non-threaded pipe to male or female threads.",
                  "Caps: Used to close the end of a dead-end pipe.",
                  "Plugs: Used to close an ending on a pipe fitting normally used for inspection or cleanout.",
                  "Nipples: Short lengths of pipe threaded at both ends.",
                  "Wyes: Used primarily to gain inside access to DWV (drain-waste-vent) systems.",
                  "Valves: Devices that control the flow of liquid or gas — including compression, ball, sleeve-cartridge and ceramic disc valves.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={torqueImg}
                alt="Torqueing and Hot Bolting Services"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Process Control and Instrumentation ── */}
      <section id="process-control-instrumentation" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={processControlImg}
                alt="Process Control and Instrumentation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 06</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Process Control and Instrumentation</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We provide Instrumentation &amp; Control contracting services to a wide range of industries including
                Oil &amp; Gas, Petrochemical, Power &amp; Energy, Water and Waste Water, Infrastructure, Refinery,
                Fertilizer, Chemical, Cement, LNG, and Steel. Our comprehensive scope covers process automation,
                control systems and field instrumentation from concept through to commissioning.
              </p>

              {/* Systems */}
              <div className="mt-10 border-l-4 border-accent pl-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Systems &amp; Equipment</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  "DCS & PLC Systems",
                  "ESD (Emergency Shutdown) Systems",
                  "Fire & Gas Systems",
                  "PLC/RTU Systems",
                  "SCADA/HMI Systems",
                  "Field Instruments & Drives",
                  "Transmitters, switches & gauges for temperature, pressure, flow, and level applications",
                  "Control valves, On/Off valves, Breather valves, and Safety valves",
                  "Testing, calibration and loop checking of pressure, temperature, flow and level instruments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Automation & Control */}
              <div className="mt-10 border-l-4 border-accent pl-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Process Automation &amp; Control</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We deliver services in process automation and control systems including Distribution Control System
                (DCS), Programmable Logic Controller (PLC), Batch Control, Validation (ANSI/ISA S88.01), Field Bus,
                Profibus, AS-Interface, Device Net, PID and Advanced Control Measurement, OLE for process control,
                Process Instrumentation and Industrial Automation Training.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Petroleum Product Supply and Importations ── */}
      <section id="petroleum-product-supply" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 07</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Petroleum Product Supply and Importations</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                BR Marine Energy Logistics does direct supply of petroleum products both at seaports and offshore
                operations, working directly with clients and customers in the procurement, supply and delivery of
                petroleum products to their satisfaction without loss of lag time. We also supply to boats, tugs,
                barges, tankers, vessels, companies and home delivery.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our product line includes a full range of petroleum products sourced and delivered efficiently
                across all sectors of the energy market.
              </p>

              {/* Importation sub-section */}
              <div className="mt-10 border-l-4 border-accent pl-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Importation of Petroleum Products</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Marketing &amp; Distribution of AGO to both onshore &amp; offshore — tank farms, companies, large
                  organisations, hotels, hospitals, eateries, schools and telecom base stations — at affordable cost
                  with our fleet of trucks.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[380px] overflow-hidden rounded-sm">
              <img
                src={petroImg}
                alt="Petroleum Product Supply and Importations"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Industrial Tank Cleaning Services ── */}
      <section id="industrial-tank-cleaning" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={indusImg}
                alt="Industrial Tank Cleaning Services"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 08</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Industrial Tank Cleaning Services</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics provides professional industrial tank cleaning services across
                onshore and offshore environments. Our highly trained teams deploy industry-approved techniques and
                equipment to clean, degas, and prepare storage tanks for inspection, maintenance, product changeover,
                or decommissioning — all in strict compliance with international health, safety and environmental
                standards.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                With experience across crude oil tanks, fuel storage tanks, chemical tanks, water storage vessels and
                marine cargo tanks, we deliver efficient, cost-effective cleaning solutions that minimise downtime
                and protect the integrity of your assets.
              </p>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Tank Degassing & Vapour Freeing",
                    body: "We safely remove flammable and toxic vapours from tank interiors using controlled ventilation and gas-freeing procedures, ensuring tanks meet gas-free certification requirements before any personnel entry or hot work commences.",
                  },
                  {
                    title: "Sludge & Residue Removal",
                    body: "Our teams use mechanical and hydro-jetting equipment to break down and remove accumulated sludge, sediment and hydrocarbon residues from tank floors and walls, restoring full usable capacity and reducing corrosion risk.",
                  },
                  {
                    title: "High-Pressure Water Jetting",
                    body: "We deploy high-pressure water jetting systems to remove scale, coatings and residual product deposits from tank surfaces, preparing them for internal inspection, recoating or product changeover with minimal waste generation.",
                  },
                  {
                    title: "Waste Management & Disposal",
                    body: "All waste streams generated during tank cleaning — including sludge, contaminated water and chemical residues — are handled, transported and disposed of in compliance with local and international environmental regulations.",
                  },
                  {
                    title: "Safety & Compliance",
                    body: "Every tank cleaning operation is governed by a comprehensive method statement and risk assessment. Our personnel are trained in confined space entry, permit-to-work procedures, and the use of gas detection and personal protective equipment to ensure zero-harm outcomes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Vessel Survey / Marine Inspection Services ── */}
      <section id="vessel-survey-inspection" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 09</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Vessel Survey / Marine Inspection Services</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics provides comprehensive vessel survey and marine inspection services
                to ship owners, operators, charterers, insurers, and financial institutions. Our team of qualified
                surveyors and marine inspectors brings decades of hands-on experience across all vessel types —
                from tankers and bulk carriers to offshore support vessels and passenger craft.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you require a pre-purchase condition survey, a flag state inspection, a damage assessment,
                or ongoing class survey support, we deliver accurate, independent and timely reports that protect
                your interests and keep your vessels compliant with all applicable regulations.
              </p>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Pre-Purchase & Condition Surveys",
                    body: "Our inspectors carry out thorough condition surveys on vessels prior to purchase or charter, assessing hull integrity, machinery condition, safety equipment, and overall seaworthiness — giving buyers and charterers full confidence in their decisions.",
                  },
                  {
                    title: "Class & Statutory Surveys",
                    body: "We provide support for class renewal surveys, annual and intermediate surveys, dry-docking surveys, and statutory inspections required under SOLAS, MARPOL, MLC and flag state regulations, ensuring vessels maintain their certificates without delays.",
                  },
                  {
                    title: "Damage & Casualty Surveys",
                    body: "In the event of a collision, grounding, fire or structural failure, our surveyors attend promptly to assess the extent of damage, determine causation, and produce detailed reports for P&I clubs, underwriters and legal proceedings.",
                  },
                  {
                    title: "Cargo & Hatch Surveys",
                    body: "We conduct pre-loading and on-completion cargo surveys, hatch condition inspections and draft surveys to protect cargo interests, resolve disputes and ensure accurate quantity and quality records for charterers and traders.",
                  },
                  {
                    title: "Vetting & SIRE Inspections",
                    body: "Our inspectors prepare vessels for oil major vetting and SIRE/CDI inspections, identifying deficiencies in advance and supporting crews and operators to achieve high inspection scores and maintain tanker approval status.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={vesselInspectImg}
                alt="Vessel Survey and Marine Inspection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Safety Training for Seafarers ── */}
      <section id="safety-training-seafarers" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={safetyImg}
                alt="Safety Training for Seafarers"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 10</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Safety Training for Seafarers</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics delivers industry-leading safety training programmes designed
                specifically for seafarers operating across all vessel types and maritime environments. Our training
                is developed in line with STCW conventions, IMO guidelines and flag state requirements, equipping
                seafarers with the knowledge, skills and certifications needed to perform their duties safely and
                confidently at sea.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From basic safety familiarisation for new entrants to advanced survival and firefighting courses for
                experienced mariners, our programmes are delivered by certified instructors with extensive sea-going
                and operational backgrounds, ensuring training is practical, relevant and immediately applicable.
              </p>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "STCW Basic Safety Training",
                    body: "Our STCW-compliant basic safety training covers Personal Survival Techniques, Fire Prevention and Firefighting, Elementary First Aid, and Personal Safety and Social Responsibilities — the four core elements required for all seafarers under international convention.",
                  },
                  {
                    title: "Firefighting & Fire Prevention",
                    body: "Advanced firefighting courses train seafarers to take charge of firefighting operations onboard, covering fire detection systems, breathing apparatus, fire suppression methods and evacuation coordination in accordance with SOLAS requirements.",
                  },
                  {
                    title: "Survival at Sea & HUET",
                    body: "Helicopter Underwater Escape Training (HUET) and sea survival courses prepare offshore and maritime personnel for emergency evacuation scenarios, including liferaft deployment, survival craft operation, and search and rescue coordination.",
                  },
                  {
                    title: "Medical First Aid & Care",
                    body: "We offer medical first aid and medical care training for designated ship's officers, covering casualty assessment, CPR, trauma management, and the administration of medicines — enabling effective emergency medical response when shore-based help is not immediately available.",
                  },
                  {
                    title: "Safety Management & HSE Awareness",
                    body: "Our HSE awareness and safety management training instils a proactive safety culture among crew, covering risk assessment, permit-to-work systems, hazard identification, incident reporting and the International Safety Management (ISM) Code requirements.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Electrical, Electronic and Telecommunication Engineering ── */}
      <section id="electrical-electronic-engineering" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Service 11</p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">Electrical, Electronic &amp; Telecommunication Engineering (ETE)</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B &amp; R Marine Energy Logistics delivers end-to-end Electrical, Electronic and Telecommunication
                Engineering (ETE) services to the maritime, offshore and industrial sectors. Our team of qualified
                engineers and technicians provides reliable design, installation, commissioning, maintenance and
                repair solutions for electrical and communication systems across vessels, platforms and onshore
                facilities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From low-voltage power distribution and automation to satellite communication systems and integrated
                bridge equipment, we ensure all electrical and electronic systems operate safely, efficiently and
                in full compliance with class, flag state and international standards.
              </p>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Electrical Installation & Maintenance",
                    body: "We design, install and maintain low and medium voltage electrical systems for vessels and offshore structures, including switchboards, motor control centres, power distribution panels, lighting systems, cable management and earthing arrangements — all in compliance with IEC and class society standards.",
                  },
                  {
                    title: "Electronic Systems & Navigation Equipment",
                    body: "Our engineers service and maintain a full range of marine electronic and navigation equipment including RADAR, ECDIS, AIS, GPS, echo sounders, gyrocompasses, autopilot systems, and integrated bridge systems — ensuring vessels meet SOLAS carriage requirements at all times.",
                  },
                  {
                    title: "Telecommunication Systems",
                    body: "We install, commission and maintain vessel communication systems including GMDSS equipment, VSAT satellite communications, VHF/UHF radio systems, intercom networks, CCTV and public address systems — keeping vessels connected and compliant with international communication regulations.",
                  },
                  {
                    title: "Automation & Control Systems",
                    body: "Our ETE team provides support for vessel automation systems including engine room alarm and monitoring systems, integrated automation platforms, UPS systems, battery management and emergency power systems to ensure uninterrupted and safe vessel operations.",
                  },
                  {
                    title: "Inspection, Testing & Certification",
                    body: "We carry out comprehensive electrical inspections, insulation resistance testing, thermographic surveys and load testing on electrical installations, producing detailed reports to support class renewal surveys, statutory compliance and insurance requirements.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-accent pl-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-sm lg:sticky lg:top-28">
              <img
                src={electImg}
                alt="Electrical Electronic and Telecommunication Engineering"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
