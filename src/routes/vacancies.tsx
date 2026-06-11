import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Briefcase, Bell } from "lucide-react";

export const Route = createFileRoute("/vacancies")({
  head: () => ({
    meta: [
      { title: "Careers | B & R Marine Energy Logistics" },
      {
        name: "description",
        content:
          "Explore career opportunities at B & R Marine Energy Logistics. Join a team of maritime professionals delivering excellence across global operations.",
      },
    ],
  }),
  component: VacanciesPage,
});

function VacanciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-accent">Join Our Team</p>
          <h1 className="mt-4 text-5xl font-bold text-primary-foreground sm:text-6xl">Careers</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Why B &amp; R Marine</p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Build a career at the forefront of maritime energy logistics
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At B &amp; R Marine Energy Logistics, we believe our people are our greatest asset. We bring together
              engineers, mariners, operations specialists, and business professionals from across the globe — united
              by a shared commitment to delivering excellence in maritime and offshore services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Working with us means exposure to complex, high-impact projects across Nigeria, the United Kingdom,
              Panama, the United States, and beyond. We invest in our people through continuous professional
              development, mentorship, and a culture that rewards initiative and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* No vacancies notice */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">Open Positions</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Current Vacancies</h2>

          <div className="mt-12 flex flex-col items-center justify-center rounded-sm border border-dashed border-primary/20 bg-background py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Briefcase className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-primary">No open positions at this time</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              We are not currently advertising any vacancies, but we are always interested in hearing from talented
              maritime professionals. Check back regularly — new opportunities arise as our operations expand.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 rounded-sm bg-primary/5 px-8 py-6 sm:flex-row">
              <Bell className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm text-muted-foreground">
                Interested in future roles?{" "}
                <a
                  href="#contact"
                  className="font-semibold text-accent underline decoration-1 underline-offset-2 hover:opacity-80"
                >
                  Send us your CV
                </a>{" "}
                and we will keep you in mind when suitable positions become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow mb-4">What We Value</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">What we look for in our people</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Technical Excellence",
                body: "Deep domain knowledge in maritime, offshore, or engineering disciplines — and a drive to keep learning as the industry evolves.",
              },
              {
                title: "Global Perspective",
                body: "Comfort working across cultures and time zones, with the adaptability that international operations demand.",
              },
              {
                title: "Integrity",
                body: "We operate in high-stakes environments where trust and transparency are non-negotiable at every level of the organisation.",
              },
              {
                title: "Safety Mindset",
                body: "A personal commitment to safety — for yourself, your colleagues, and the vessels and assets in your care.",
              },
              {
                title: "Collaboration",
                body: "The ability to work effectively with diverse teams, clients, and partners across our global network of offices.",
              },
              {
                title: "Initiative",
                body: "We reward people who identify problems, propose solutions, and take ownership of outcomes without waiting to be told.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-border bg-white p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-accent" />
                <h3 className="text-base font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
