import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import ceoIsrael from "@/assets/CEO Isreal.jpeg";
import giftIsrael from "@/assets/gift isreal.jpeg";
import josephGazz from "@/assets/Joseph Gazz.jpeg";
import sundayKennedy from "@/assets/sunday kennedy.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "Learn about B & R Marine Energy Logistics — our vision, mission, values, team, and guiding principles.",
      },
    ],
  }),
  component: AboutPage,
});

const teamMembers = [
  {
    img: ceoIsrael,
    title: "Chairman, CEO",
    name: "Israel B. Edu",
    qualifications: "Navy Capt. RTD, BS, MST, MSC",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    img: giftIsrael,
    title: "Finance Director, Economist",
    name: "Gift I. Benjamin",
    qualifications: "CBE, HW, FDP",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    img: josephGazz,
    title: "Africa Regional Supervisor",
    name: "Joseph Richard Gazzier",
    qualifications: "PIF, CAPT",
    country: "Alabama, USA",
    flag: "🇺🇸",
  },
  {
    img: sundayKennedy,
    title: "Marine Construction Supervisor",
    name: "Sunday Kennedy Kokumo",
    qualifications: "CPT, MST",
    country: "Nigeria",
    flag: "🇳🇬",
  },
];

const guidingPrinciples = [
  "A determination to achieve high personal standards",
  "A commitment to continuous improvement and bespoke innovation",
  "A focus on providing excellent customer service beyond expectation",
  "A willing responsiveness to customers — resulting in a 'can-do' attitude",
  "Flexibility and planned improvement based upon clear ideas and targets",
  "A clear and decisive attitude and understanding about health and safety and the fact that it is our number one core value",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent">Who We Are</p>
          <h1 className="mt-4 text-5xl font-bold text-primary-foreground sm:text-6xl">About B&R Marine</h1>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section id="mission-vision" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">

          {/* OUR VISION */}
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">Our Vision</p>
            <p className="text-base leading-relaxed text-muted-foreground">
              At B &amp; R Marine Energy Logistics Ltd we are a team of industry professionals offering unparalleled
              expertise in developing highly innovative products from the Construction, Consultancy and logistics trends
              of the future. Empowered by our commitment towards service quality, reliability and cost-effective
              solutions adapted to meet the changing needs of our customers. Guided by our core values of Excellence,
              Integrity and Responsibility we promote synergy in the pursuit of sustainable growth and development.
              We continuously strive to expand our global service portfolio and at the same time maintain our high
              standards in customer service and dedication to our daily work and endeavor to become a global market
              leader in the maritime logistics and vessel agency industries by providing greater connectivity to global
              growth markets through our solid network of offices and strategic alliances.
            </p>
          </div>

          {/* Mission And Values */}
          <div className="mt-16 max-w-4xl">
            <div className="border-l-4 border-accent pl-6">
              <h2 className="text-2xl font-bold text-primary">Mission And Values</h2>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our business transactions are based on trust; we are committed to the highest standards of
              professionalism and our business code of ethics. We believe in transparency as the foundation of our
              ambition to create lasting value, upholding the interests of our clients, employees and the communities
              where we operate. We act with a sense of urgency, to demonstrate our ability to respond to client needs
              with real, tangible and pro-active solutions that strengthen customer confidence and reinforce our market
              credibility. We value our diverse, talented workforce and inspire them to achieve their fullest potential
              and provide opportunities for their future. We aim to make a mark in the logistics and vessel agency
              industries creating milestones that will make us a global brand trusted and recognized for our first in
              class services. We pursue excellence in the way we do business by doing it first, doing it right and
              doing it best!
            </p>
          </div>

          {/* Guiding Principles */}
          <div className="mt-16 max-w-4xl">
            <div className="border-l-4 border-accent pl-6">
              <h2 className="text-2xl font-bold text-primary">Guiding Principles</h2>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">The B &amp; R Marine Energy Logistics Ltd Way of Working</p>
            </div>
            <p className="mt-6 text-base text-muted-foreground">
              Our guiding principles are embraced by every single team member in the BRMEL. As a result, each of our
              employees will demonstrate:
            </p>
            <ul className="mt-6 space-y-4">
              {guidingPrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted-foreground">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Our People</p>
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">The Team</h2>
          <div className="mt-12 flex flex-wrap gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group w-[200px] overflow-hidden rounded-sm bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="relative h-[240px] w-full overflow-hidden bg-gray-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="border-l-4 border-accent px-4 py-4">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-accent">{member.title}</p>
                  <p className="mt-1 text-sm font-bold text-primary">{member.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground/80 italic">({member.qualifications})</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span>{member.flag}</span>
                    {member.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Policies ── */}
      <section id="policies" className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Governance</p>
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">Policies</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Content coming soon — our commitment to compliance, ethics, and responsible operations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
