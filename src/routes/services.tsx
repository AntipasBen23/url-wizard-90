import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import drillingImg from "@/assets/drillingimg.png";
import shipManagementImg from "@/assets/ship management.jpeg";
import crewmenImg from "@/assets/crewmen.png";
import shipTechImg from "@/assets/ship tech.png";

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

      <Footer />
    </div>
  );
}
