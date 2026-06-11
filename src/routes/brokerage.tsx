import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/brokerage")({
  head: () => ({
    meta: [
      { title: "Brokerage | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "B & R Marine Energy Logistics brokerage services: market analysis, ship sale & purchase, chartering, advisory consultancy and new building supervision.",
      },
    ],
  }),
  component: BrokeragePage,
});

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 border-l-[3px] border-accent pl-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function BrokeragePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent">Our Expertise</p>
          <h1 className="mt-4 text-5xl font-bold text-primary-foreground sm:text-6xl">Brokerage</h1>
        </div>
      </section>

      {/* ── Market Analysis ── */}
      <section id="market-analysis" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Section 01</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Market Analysis, Engineering Consulting, Valuation and Advisory
          </h2>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              B &amp; R Marine Energy Logistics Ltd blends quantitative and qualitative assessment of a market trend
              to create value for every move aimed at accomplishing deal closure. We carefully look into the size of
              the market both in volume and in value, the various customer segments and buying patterns, the
              competition, and the economic environment in terms of barriers to entry and regulation.
            </p>
            <p>
              B &amp; R Marine Energy Logistic Ltd creatively adopts a quantitative process of determining the fair
              value of an asset or a firm.
            </p>
            <p>
              B &amp; R Marine Energy Logistic Ltd develops findings and conclusions and recommendations that are
              presented to the client for consideration and decision making.
            </p>
            <p>
              B &amp; R Marine Energy Logistic Ltd provides predictable market information to enable a totally free
              operational experience for our clients.
            </p>
            <p>
              We are known for our high quality, high performance analysis for various vessels meant for both marine
              and offshore operations. Judging by the flexibility and the all-encompassing professional approach of
              our collective diligence, B &amp; R Marine Energy Logistic Ltd is able to fulfill our clients' most
              stringent demand and customized specific requirements.
            </p>
            <p>
              We pride ourselves as the ultimate solution for your quest of a cost-effective marine and offshore
              operation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sale & Purchase ── */}
      <section id="sale-purchase" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Section 02</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Ship's Procurement Services, Sale and Purchase
          </h2>
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Ships are technically complex, and they are bought and sold in an international market that is
              extremely volatile. B &amp; R Marine Energy Logistics provides timely and accurate information to their
              clients, while introducing a mediatory interface and providing absolute sanctuary between sellers,
              buyers and intermediaries to ease the closure of a big sale by:
            </p>
            <BulletList
              items={[
                "Putting the seller and buyer in contact with one another.",
                "Render opinions on vessel valuations.",
                "Assist in the obtaining of ship finance.",
                "Act as escrow agent.",
                "Assist in the negotiation of the sales contract.",
                "Draft the S and P agreement.",
                "Assist in obtaining the vessel's inspection and survey.",
                "Obtain abstracts of title and render opinions on any title issues.",
                "Resolve any preexisting maritime lien issues.",
                "Preparation of documentation for vessel registration.",
                "Assist in resolving any disputes arising out of the transaction.",
              ]}
            />
            <p>
              Liens could have been incurred against the vessel for any number of reasons. The Seller, as the
              shipowner, may owe wages to the crew or may not have paid for vessel repairs or drydocking. Similarly,
              the vessel may have collided with a dock or a bridge causing extensive property damage or damaged a
              shipper's cargo on an earlier voyage.
            </p>
            <p>
              Besides, certain maritime liens may have arisen against the vessel through no fault of the Seller. For
              example, the Seller (shipowner) may have time chartered the ship to a time charterer that failed to pay
              for bunkers, stevedoring or other goods and services ordered on behalf of the vessel. The existence of a
              lien can delay or thwart a sales transaction. Therefore, sale and purchase of vessels can be complicated.
              Great professionalism and expertise is needed in this important business — that's where BR Marine comes
              in.
            </p>

            <h3 className="pt-4 text-xl font-bold text-primary">Setting up a Sale and Purchase Transaction</h3>
            <p>
              Vessels are routinely sold for cash, free of charters, mortgages and maritime liens. No two sale and
              purchase transactions are completely alike. However, a fairly routine transaction might involve the
              following:
            </p>
            <BulletList
              items={[
                "The listing of the vessel for sale with B & R Marine.",
                "Negotiation of the price and other terms of the sales contract.",
                "Preparation of the sales agreement.",
                "An inspection by the buyer of the vessel. (B & R Marine nominated for inspections)",
                "The payment of funds and the closing of title.",
              ]}
            />
            <p>B &amp; R Marine's contract forms set forth contract terms such as:</p>
            <BulletList
              items={[
                "The details of the vessel.",
                "Amount and method of payment.",
                "Any escrow money required.",
                "The nature of the vessel inspection (drydock, underwater, sea trials, etc.).",
                "Inspection of the vessel's documents such as classification society records.",
                "Time and place of delivery.",
                "Spare parts, bunkers, or other items included in the vessel's sale.",
                "Condition of the vessel on delivery.",
                "Responsibility for any taxes or fees.",
                "Documents required at closing.",
                "Remedies in the event of the seller's or buyer's default.",
                "Arbitration or other dispute resolution clause.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Chartering ── */}
      <section id="chartering" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Section 03</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Chartering</h2>
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Our service includes acting as the client's freight and logistics department, coordinating cargo
              movements from conception to delivery at the final destination. We accomplish this by understanding your
              requirements, checking our network and the market to locate the most suitable vessel with the best ship
              owner. We then facilitate that contract from charter party to invoice finalization.
            </p>
            <p>
              We understand that ship chartering can seem like a daunting job for one experienced in logistics but
              new to shipping. At B &amp; R Marine we have experience guiding businesses through the process of
              chartering vessels — helping traders, producers, and manufacturers move product from point A to point B,
              continuing the process of globalization.
            </p>

            <h3 className="pt-4 text-xl font-bold text-primary">Three Main Charter Types</h3>
            <div className="space-y-4">
              <div className="rounded-sm border-l-4 border-accent bg-secondary px-6 py-5">
                <h4 className="text-base font-bold text-primary">Demise Charter (Bareboat)</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  An arrangement for the hiring of a vessel whereby no administration or technical maintenance is
                  included as part of the agreement. The charterer obtains possession and full control of the vessel
                  along with the legal and financial responsibility for it. The charterer pays for all operating
                  expenses, including fuel, crew, port expenses and P&amp;I and hull insurance. In commercial demise
                  chartering, the charter period may last for many years and may end with the charterer acquiring
                  title of the ship. Demise chartering is common for tankers and bulk-carriers.
                </p>
              </div>
              <div className="rounded-sm border-l-4 border-accent bg-secondary px-6 py-5">
                <h4 className="text-base font-bold text-primary">Voyage Charter</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  The hiring of a vessel and crew for a voyage between a load port and a discharge port. The
                  charterer pays the vessel owner on a per-ton or lump-sum basis. The owner pays the port costs
                  (excluding stevedoring), fuel costs and crew costs. The payment for the use of the vessel is known
                  as freight. A voyage charter specifies a period, known as laytime, for loading and unloading the
                  cargo. If laytime is exceeded, the charterer must pay demurrage. If laytime is saved, the charter
                  party may require the shipowner to pay despatch to the charterer.
                </p>
              </div>
              <div className="rounded-sm border-l-4 border-accent bg-secondary px-6 py-5">
                <h4 className="text-base font-bold text-primary">Time Charter</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  The hiring of a vessel for a specific period of time; the owner still manages the vessel but the
                  charterer selects the ports and directs the vessel where to go. The charterer pays for all fuel the
                  vessel consumes, port charges, commissions, and a daily hire to the owner of the vessel.
                </p>
              </div>
            </div>

            <h3 className="pt-4 text-xl font-bold text-primary">When You Use BR Marine Energy Logistics</h3>
            <BulletList
              items={[
                "Freight estimates, market research, market evaluation",
                "Advise both Owners and Charterers of contract deadlines",
                "Evaluate viability of shipping to certain destinations",
                "Charter party creation",
                "Voyage monitoring and problem resolution",
                "Cargo scheduling recommendation and planning",
                "Recommending how to ship the cargo, whether through a COA or a spot shipment",
                "Preparation of laytime calculations",
                "Collection of port information",
              ]}
            />

            <h3 className="pt-4 text-xl font-bold text-primary">Our Chartering Specialties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                "Ro-Ro Vessels",
                "Dry Bulk Vessels",
                "General Cargo Vessels",
                "Bulk Carriers",
                "Reefer Vessels",
                "Container Vessels",
                "Liquid Cargo Vessels",
                "Crude Carriers",
                "Product Carriers",
                "Chemical Carriers",
                "Liquid Gas Carriers",
                "Specialized Cargos",
                "Passenger Vessels",
                "Tugs",
                "Livestock Carriers",
                "Heavy-lift / Project Cargo Vessels",
                "Tug Boats / Crew Boats / Fast Supply and Intervention Vessels (FSIV)",
                "Accommodation Barges / Dump Barges / Pipe Laying Vessels / Pipe Laying Barges",
                "Floating Production, Storage and Offloading Vessels (FPSO)",
                "Floating Storage and Offloading Vessels (FSO)",
                "Jack-Up Oil Drilling Rigs / Semi-Submersible Oil Drilling Rigs",
                "Work Barges / Platform Maintenance Boats / Platform Supply Vessels (PSV)",
                "Multi-Purpose Platform Supply Vessels (MPPSV)",
                "Dive Support Vessels (DSV) / Subsea and Cable Laying Vessels",
                "Anchor Handling Towing and Supply Vessels (AHTS) and Barges",
                "Oil Tankers including Very Large Crude Carriers (VLCC)",
                "Liquefied Natural Gas Carriers (LNG)",
                "Liquefied Petroleum Gas Carriers (LPG)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 border-b border-gray-100 py-1.5 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Advisory ── */}
      <section id="advisory" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Section 04</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Advisory, Valuations, Engineering Consultancy &amp; Market Analysis
          </h2>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              From market analysis to investment decision support, advisory valuation and consultancy services, B &amp;
              R Marine Energy Logistics Ltd (BRMEL) offers high level, independent market forecasting and business
              advisory services for shipping, offshore and allied industries.
            </p>
            <p>
              For over 10 years, BRMEL has developed integrated relationships with a diverse client base of financial
              institutions, ship owners, shipyards, brokers, investors, insurers and equipment and service providers.
            </p>
            <p>
              BRMEL's expertise covers a broad range of shipping and offshore sectors providing clients with a
              combination of sector reports, forecasting models, vessel valuations and bespoke consultancy services.
            </p>
            <p>
              Our engineering team, made up of well-seasoned PhD holders and hands-on professionals, has delivered
              high profile technical services to clients across America, Asia, Europe, and Africa. We are never tired
              of going the extra mile to make sure our clients are happy — even in the fiercest of weather conditions,
              we take care of your vessel's electrical and mechanical needs.
            </p>
            <p>
              Our professional expertise is second to none in the industry, and we are proud to introduce ourselves
              as the giant of the maritime solution providers.
            </p>
          </div>
        </div>
      </section>

      {/* ── New Building ── */}
      <section id="new-building" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Section 05</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Ship New Building Arrangement and Supervision
          </h2>
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              It is our aim to provide our clients around the globe with high quality ships and service with
              consistency, while keeping up our high supervision and technical competence. We achieve this aim thanks
              to our capable and highly specialized staff who are at your service when it comes to dealing with your
              ship building and supervision requirements.
            </p>
            <p>
              With our ambitious technical concepts and experienced, competent staff we have been fulfilling
              increasingly demanding requirements by assisting in the manufacturing of efficient high performance
              vessels for our preferred clients. Our guarantee and achievements in delivering high quality vessels is
              our commitment to our customers' satisfaction. We challenge ourselves in meeting ever-changing
              regulations and new requirement standards. Currently, we represent several of our Clients for New
              Building designs recommendations and supervision.
            </p>

            <h3 className="pt-4 text-xl font-bold text-primary">New Building Process</h3>
            <BulletList
              items={[
                "Vessel Design",
                "Vessel Specification",
                "Pre-qualification of Shipyard",
                "Bidding",
                "Shipyard Selection",
                "Contract Negotiation",
                "Commercial Closing",
                "Ship Trial",
                "Vessel Delivery",
              ]}
            />

            <p>
              While working hand in hand with professional brokers, vessel owners and various IOS and potential
              contractors, we introduce a process that effectively guides and ensures that the appropriate vessel is
              engaged, the cargo gets delivered safely, and in a timely and cost effective manner. We work with
              charterers to make sure the process is swift and safe.
            </p>

            <h3 className="pt-2 text-xl font-bold text-primary">Our Commitment to Smooth Delivery</h3>
            <p>
              B &amp; R Marine Energy Logistic Ltd introduces the following steps to ensure that from contract,
              negotiation and delivery is hitch free:
            </p>
            <BulletList
              items={[
                "Understand contractual provision",
                "Introduce effective ways to avoid potential pitfalls in the chartering process",
                "Understand and manage charter party disputes that might arise",
                "Work with the governing laws of the contract",
              ]}
            />
            <p>
              We embrace the laws of contract that govern issues of contractual validity, interpretation,
              consideration, party obligations, mode of performance and the discharge of the obligation or of the
              contract. Since the shipping industry deals directly with the market fluctuations imposed by government
              agencies, it is important to keep abreast of the latest geopolitical movement, which affects
              international transportation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
