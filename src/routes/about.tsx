import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import ceoIsrael from "@/assets/CEO Isreal.jpeg";
import giftIsrael from "@/assets/gift isreal.jpeg";
import josephGazz from "@/assets/joe gazz1.jpeg";
import sundayKennedy from "@/assets/sunday kennedy.jpeg";
import ngobiChristopher from "@/assets/ngobi christopher.png";
import lindsay from "@/assets/lindsay.jpeg";
import davidUdosen from "@/assets/David udosen.png";
import awofidipe from "@/assets/awofidipe.jpeg";
import alli from "@/assets/alli.jpeg";

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
  {
    img: ngobiChristopher,
    title: "General Manager",
    name: "Ngobi Christopher Godwin",
    qualifications: "HND, BSC, MSTIT, M.ENG, ECE — Electrical & Electronics, Marine Technician",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    img: lindsay,
    title: "Head Engineering / Offshore Construction Manager",
    name: "Lindsay Ikpi Ifere",
    qualifications: "CTE, SSS",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    img: davidUdosen,
    title: "Operations Manager",
    name: "David Udosen",
    qualifications: "BSC, MST, Elec & Elec",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    img: awofidipe,
    title: "Business Development",
    name: "Awofidipe Samuel Adedotun",
    qualifications: "Port Capt. BSC, D.CS Nautical Science",
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    img: alli,
    title: "Port Engineer",
    name: "Alli Anthony",
    qualifications: "BSC, Marine Mechanical Engineering",
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
                className="group w-[200px] flex flex-col overflow-hidden rounded-sm bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
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
                <div className="flex-1 border-l-4 border-accent px-4 py-4">
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
        <div className="mx-auto max-w-[1000px] px-5 lg:px-10">

          {/* Page title */}
          <p className="eyebrow mb-4">Governance</p>
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">Policies</h2>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Health Safety &amp; Environment &nbsp;/&nbsp; Quality Assurance &amp; Quality Control
          </p>

          {/* Quality Management */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Quality Management</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Quality is the responsibility of every employee and must be developed and maintained to ensure a successful
              business venture. BR Marine Energy Ltd is committed to a policy of continual Learning and Development and
              educational programs for all employees. The objective is to build meaningful and widespread employee
              involvement, teamwork, and personal satisfaction that result in a cooperative effort that produces a quality
              service or product within the framework of the competitive business market.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "You will begin to realise why, consectetur",
                "Quidem error quae illo excepturi nostrum blanditiis laboriosam",
                "Molestias, eum nihil expedita dolorum odio dolorem",
                "Eum nihil expedita dolorum odio dolorem",
                "Explicabo rem illum magni perferendis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              BR Marine Energy Ltd's success derives from a policy of providing superior services of unmatched value for
              clients the world over. It is BR Marine Energy Ltd's Quality Policy to deliver excellence in every
              engagement.
            </p>
          </div>

          {/* Health & Safety */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Health &amp; Safety</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The management of BR Marine Energy Ltd is committed to the protection of the health and safety of our
              employees, our customer's employees, and the general public. We believe that incidents and injuries are
              preventable, and that a job is only well done if it is done safely. We have documented Health, Safety and
              Environmental policies in place, and have a Safety Management System in operation, which is in accordance
              with the labour laws of the countries in which we operate. In addition, BR Marine Energy Ltd engages
              external HSE auditors to perform external safety audits on our operation to ensure that our processes are
              in keeping with our procedures and the applicable legislation.
            </p>

            {/* H&S Goals */}
            <h4 className="mt-10 text-sm font-bold uppercase tracking-widest text-primary">Health &amp; Safety Goals</h4>
            <ul className="mt-4 space-y-2">
              {[
                "Prevent workplace incidents and injuries",
                "Continually improve our health and safety performance",
                "Have the best safety performance in the Marine Agency industry",
                "Foster a culture in which all employees, partners, contractors and subcontractors share this commitment to health and safety and the environment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* H&S Objectives */}
            <h4 className="mt-10 text-sm font-bold uppercase tracking-widest text-primary">Health &amp; Safety Objectives</h4>
            <ul className="mt-4 space-y-2">
              {[
                "Always manage our operations in the safest manner, by recognizing and assessing hazards and applying effective controls",
                "Make safe conduct a condition of employment",
                "Always comply with health and safety legislation and guidelines",
                "Ensure our managers and supervisors provide the tools, supervision, Learning and Development and resources needed for our employees to work safely",
                "Ensure our employees and others on BR Marine work-sites work safely",
                "Involve all employees in our health and safety management system",
                "Review our health and safety performance regularly, evaluate performance information and communicate performance to all employees",
                "Learn from our experiences to prevent future incidents",
                "Ensure that our formalized health and safety management system remains current with industry best practices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Environmental Policy */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Environmental Policy</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our goal is to conduct our business in a way that protects the environment. Everyone who works for
              BR Marine Energy Ltd has a responsibility to give their best efforts to achieve this goal. We are committed
              to do this through our policy principles. Consequently, BR Marine Energy Ltd plans and conducts their
              operations according to sound environmental principles. They are to strive always to carry out work in the
              manner best calculated to minimize any adverse environmental effect, to prevent pollution of any kind, and
              are actively to seek ways of reducing environmental damage. Where our operations, our conduct or our
              existence is subject to specific laws or regulations, our company will comply fully with all such applicable
              laws and regulations, and if possible will exceed the minimum requirements because this is good business
              practice. Special attention will be paid to ensure compliance with international conventions and regulations
              which apply to offshore and oil &amp; gas operations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At BR Marine Energy Ltd we are committed to reducing the environmental impact of our operations.
              To achieve our objective, BR Marine Energy Ltd employees will in their daily operations:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Ensure compliance with all environmental regulations",
                "Promote efficiency and reduce waste across the organization",
                "Ensure that environmental awareness is included into its business planning, process improvement and operational disciplines",
                "Provide accurate reporting to the authorities, the community, our shareholders and employees regarding our environmental performance",
                "Invest, wherever appropriate, in an asset base and the systems and processes which reduce energy consumption and minimize carbon emissions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Relations */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Community Relations</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              BR Marine Energy Ltd is committed to acting as a socially responsible company in those regions where our
              company and staff are operating. This means that we will go further by continually evaluating our business
              practices using the principle of sustainability. At the heart of sustainability lies the desire to maintain
              a balance between the economic, environmental and social needs of our world today without compromising the
              opportunities of future generations. We want our company to always be associated with a respect for human
              rights, safe work conditions, and environmentally sound business practices, for our own organization and
              those with whom we partner.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We strive to understand and respect the cultural values wherever we operate. In many countries and regions
              where our company is active — we prefer to employ local and native employees, and as a result, in many
              locations our company is recognized as an indigenous business entity. Our employees and management
              communicate extensively with the communities in whose areas we operate. This is a responsibility we take
              seriously and it equally provides us with an opportunity to be a positive force for local good. In all our
              operations — often in hostile and challenging environments — we aim, wherever possible, to use our core
              competencies to help tackle local community issues where we can make a positive difference.
            </p>
          </div>

          {/* Corporate Responsibility */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Corporate Responsibility</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A critical success factor for BR Marine Energy Ltd has been effective cross-cultural communication and
              collaboration. We recognize that as our client's chosen Maritime Logistics and Vessel support management
              and Agency partner we must ensure that outstanding results are consistently achieved through the
              cross-culture flow of best practices, knowledge, learning and expertise. Our offices are consistent in
              offering principal dedication to outstanding customer service, at a very professional level.
            </p>
          </div>

          {/* Human Resource Management */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Human Resource Management</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              With an indelible footprint in Nigeria, our company is poised to always strive to provide a competitive,
              but at the same time safe and professional environment for our local and expatriate employees. With a large
              number of nationalities represented within our company, and a workforce that holds a fair share of female
              employees, we foster diversity, and recognize that our people are our most valued assets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Many of our offices, around the world, lie in areas of highly distinct national and regional cultures. As
              well as different languages, there are also clear differences in strategic and operational business
              practices across Nigeria, which is where a large part of our business is transacted. There is one common
              denominator that binds all our offices together, and that is the well communicated management directives
              (including our code of conduct) and coordination of our activities through BR Marine Energy Ltd's global
              sales and operations office.
            </p>
          </div>

          {/* Safety Model */}
          <div className="mt-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary">Our Safety Model for a Zero</h3>
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-primary">
              A Near Miss Reported Today Will Prevent an Injury Tomorrow!
            </p>
            <p className="mt-4 text-base font-semibold text-primary/80">Everyone has an OBLIGATION to report all Near Misses</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              It is our policy and expectation that all Near Misses will be reported immediately. All Near Misses are
              investigated by the Safety Department and a risk assessment is conducted in order to mitigate any future
              reoccurrence. Significant Near Misses are shared with all crew by a Safety Alert. Captains share learnings
              with crew members during the safety stand down in order to prevent the incident from occurring on their
              vessel.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              BRL had expanded Near Miss reporting and encouraged more participation by giving away an embroidered BRL
              jacket each quarter for the best Near Miss. In less than a year Near Miss reporting increased 357 percent
              compared to the previous year. BRL will continue giving away the jackets and has a goal of increasing Near
              Miss reporting by another 10 percent.
            </p>

            {/* JSA */}
            <h4 className="mt-10 text-sm font-bold uppercase tracking-widest text-primary">
              J.S.A. Time Out and Stop Work Authority — Permit to Work Star Card
            </h4>
            <p className="mt-3 text-base text-muted-foreground">The Job Safety Analysis planning tool is a simple, organized approach to:</p>
            <ul className="mt-4 space-y-2">
              {[
                "Identify and discuss the job ahead; break it down into manageable steps; thoroughly identify the risks.",
                "Identify and discuss the hazards for each step; focus on the steps most likely to do us harm.",
                "Identify and discuss ways to manage the hazard with the most desirable precaution being complete elimination of the hazard.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              <span className="font-semibold text-primary/80">Time-Out</span> empowers any person with the authority
              and responsibility to stop a job when any hazard is identified. Should any person on board our facility
              perceive that a situation may be unsafe or otherwise hazardous in any way, that person is responsible for
              calling a Time-Out to interrupt the work process. Activity shall recommence only when a plan is
              implemented to mitigate the hazard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              <span className="font-semibold text-primary/80">The Permit to Work</span> ensures compliance with
              mandatory controls when performing potentially hazardous and high-risk work. The permit authorizes and
              highlights that appropriate health, safety, quality, operational, training, emergency response,
              environmental procedures and equipment are used. A written permit is prepared, discussed and approved by
              the Offshore Installation Manager (OIM) and the process is monitored and managed until the permitted work
              is properly completed.
            </p>
          </div>

          {/* Closing statement */}
          <div className="mt-16 rounded-sm bg-primary px-8 py-10 text-center">
            <p className="text-lg italic text-primary-foreground/80">Treat your People well and everything else will fall into place</p>
            <p className="mt-4 text-base font-bold uppercase tracking-widest text-accent">
              People First = Satisfied Customers = Rewarded Shareholders
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
