import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { serviceCapabilities } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DPS Project Solutions offers project planning, architectural and engineering design, PMC, construction, BOQ, DPP, procurement, international sourcing, logistics, installation, and turnkey delivery.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | DPS Project Solutions",
    description:
      "Project planning, design coordination, PMC, construction, procurement, international sourcing, logistics, installation, and turnkey delivery services.",
    url: "/services",
    images: [
      {
        url: "/services/banner.jpg",
        alt: "Modern commercial building representing DPS Project Solutions services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <PageShell active="services" surface="soft">
      <main className="services-page">
        <section className="services-hero">
          <Image src="/services/banner.jpg" alt="Modern commercial building with blue sky" fill priority sizes="100vw" />
          <div className="services-hero-overlay" />
          <h1 className="services-title">Services</h1>
          <div className="services-tabs" aria-label="Service categories">
            {serviceCapabilities.map((service, index) => (
              <a href={`#service-${index + 1}`} key={service.title} className={index === 0 ? "is-active" : ""}>
                {service.title}
              </a>
            ))}
          </div>
          <div className="services-hero-copy">
            <span>Built to inspire</span>
            <h2>Design spaces people love</h2>
            <p>
              DPS is an integrated project solutions company providing consultancy,
              design coordination, project management, global sourcing, procurement,
              construction, and turnkey delivery. DPS combines strong local
              professional capability with an established international network across
              China, Hong Kong, Malaysia and Europe. Through its sister concern Dhaka
              Open Studio Ltd. (DOS), experienced project management professionals,
              international construction partners and sourcing and logistics teams,
              DPS supports clients throughout the complete project lifecycle.
            </p>
            <a href="#services-list" className="service-cta">
              Get started <b>↗</b>
            </a>
          </div>
          <div className="stats">
            <span>
              <strong>100+</strong>Project complete
            </span>
            <span>
              <strong>11 +</strong>Experience in Years
            </span>
          </div>
        </section>

        <section className="service-list" id="services-list">
          {serviceCapabilities.map((service, index) => (
            <article className={`service-row ${index % 2 ? "is-reverse" : ""}`} id={`service-${index + 1}`} key={service.title}>
              <div className="service-art">
                <Image src="/services/architectural_design.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 34vw" />
              </div>
              <div className="service-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href="/contact">Learn more</a>
              </div>
              <strong className="service-number">{String(index + 1).padStart(2, "0")}</strong>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
