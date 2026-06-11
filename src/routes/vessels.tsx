import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import enduranceVessel from "@/assets/endurance vessel.jpg";
import bhagwanRocker from "@/assets/bhagwan rocker vessel.jpeg";
import alamoVessel from "@/assets/alamo vessel.jpg";
import bhagwanShaker from "@/assets/bhagwan shaker.jpeg";
import alBasrahVessel from "@/assets/Ai basrah vessel.jpeg";
import tbdVessel from "@/assets/tbd vessel.jpg";
import nemesisVessel from "@/assets/nemesis vessel.jpg";

export const Route = createFileRoute("/vessels")({
  head: () => ({
    meta: [
      { title: "Vessels | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "Explore B & R Marine Energy Logistics vessel portfolio across cargo, commercial, defence, fishing and research categories.",
      },
    ],
  }),
  component: VesselsPage,
});

const cargoVessels = [
  {
    img: enduranceVessel,
    name: "Endurance III",
    type: "49.95 metre Landing Craft",
    specs: [
      { label: "Length Overall", value: "49.95 metres" },
      { label: "Beam", value: "13.8 metres" },
      { label: "Installed Power", value: "2160 kW" },
      { label: "Speed", value: "10.5 knots" },
      { label: "Deadweight", value: "549 tonnes" },
      { label: "BRL Scope", value: "Full Design Package" },
    ],
  },
  {
    img: bhagwanRocker,
    name: "Bhagwan Rocker",
    type: "38 metre Landing Craft",
    specs: [
      { label: "Length Overall", value: "38.0 metres" },
      { label: "Beam", value: "10.6 metres" },
      { label: "Installed Power", value: "750 kW" },
      { label: "Speed", value: "10.0 knots" },
      { label: "Deadweight", value: "263 tonnes" },
      { label: "BRL Scope", value: "Full Design Package" },
    ],
  },
  {
    img: alamoVessel,
    name: "Alamo",
    type: "27.2 metre Work Vessel",
    specs: [
      { label: "Length Overall", value: "27.2 metres" },
      { label: "Beam", value: "11.0 metres" },
      { label: "Installed Power", value: "750 kW" },
      { label: "Speed", value: "10.0 knots" },
      { label: "Deadweight", value: "185 tonnes" },
      { label: "BRL Scope", value: "Full Design Package" },
    ],
  },
  {
    img: bhagwanShaker,
    name: "Bhagwan Shaker",
    type: "48.5 metre Landing Craft",
    specs: [
      { label: "Length Overall", value: "48.5 metres" },
      { label: "Beam", value: "12.80 metres" },
      { label: "Installed Power", value: "900 kW" },
      { label: "Speed", value: "11.2 knots" },
      { label: "Deadweight", value: "490 tonnes" },
      { label: "BRL Scope", value: "Full Design Package" },
    ],
  },
];

const defenceVessels = [
  {
    img: alBasrahVessel,
    name: "Al Basrah, Al Fayhaa",
    type: "60.0 metre Offshore Patrol Vessel (2 off)",
    specs: [
      { label: "Length Overall", value: "60.0 metres" },
      { label: "Beam", value: "11.2 metres" },
      { label: "Installed Power", value: "4360 kW" },
      { label: "Speed", value: "17.0 knots" },
      { label: "Deadweight", value: "550 tonnes" },
      { label: "BRL Scope", value: "Full Design Package" },
    ],
  },
  {
    img: tbdVessel,
    name: "TBD",
    type: "35.0 metre Patrol Vessel",
    specs: [
      { label: "Length Overall", value: "35.8 metres" },
      { label: "Beam", value: "7.6 metres" },
      { label: "Installed Power", value: "4080 kW" },
      { label: "Speed", value: "30.0 knots" },
      { label: "BRL Scope", value: "Full Tender Package" },
    ],
  },
  {
    img: nemesisVessel,
    name: "Nemesis",
    type: "32.0 metre Offshore Patrol Vessel",
    specs: [
      { label: "Length Overall", value: "32.0 metres" },
      { label: "Beam", value: "7.2 metres" },
      { label: "Installed Power", value: "2690 kW" },
      { label: "Speed", value: "27.0 knots" },
      { label: "BRL Scope", value: "Tender Assistance and Construction Supervision" },
    ],
  },
];

function VesselCard({ vessel }: { vessel: typeof cargoVessels[number] }) {
  return (
    <div className="group flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="sm:w-[340px] shrink-0 overflow-hidden">
        <img
          src={vessel.img}
          alt={vessel.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ minHeight: "220px" }}
        />
      </div>
      <div className="flex flex-col justify-center px-8 py-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{vessel.type}</p>
        <h4 className="mt-1 text-xl font-bold text-primary">{vessel.name}</h4>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
          {vessel.specs.map((spec) => (
            <div key={spec.label}>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{spec.label}</span>
              <p className="text-sm font-medium text-primary">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VesselsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent">Our Fleet</p>
          <h1 className="mt-4 text-5xl font-bold text-primary-foreground sm:text-6xl">Vessels</h1>
        </div>
      </section>

      {/* ── Cargo / Commercial Vessels ── */}
      <section id="cargo-commercial" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Category 01</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Cargo / Commercial Vessels</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            BRL's expertise has been applied to specialised small cargo ships and work boats including custom designed
            landing craft and work barges, research vessels and training vessels.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            BRL has experience with a wide range of vessels that service the offshore oil and gas industry. This
            includes conventional offshore support vessel (OSV) types such as platform supply vessels (PSV) and anchor
            handling tug supply (AHTS) vessels, as well as more specialised tonnage including offtake support vessels,
            seismic vessels, survey / utility vessels, and fast crew boats. Design work has also been carried out on
            floating production storage and offload (FPSO) vessels.
          </p>
          <div className="mt-12 space-y-6">
            {cargoVessels.map((v) => (
              <VesselCard key={v.name} vessel={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Defence and Patrol Vessels ── */}
      <section id="defence-patrol" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Category 02</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Defence and Patrol Vessels</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            BRL has worked with government and commercial clients on various projects in the naval / defence /
            coast guard / law enforcement market, primarily for patrol boats. This has included police boats,
            fast patrol craft and offshore patrol vessels (OPV) in both steel and aluminium.
          </p>
          <div className="mt-12 space-y-6">
            {defenceVessels.map((v) => (
              <VesselCard key={v.name} vessel={v} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
