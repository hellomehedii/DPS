import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteDescription, siteName } from "@/data/site";

export const metadata: Metadata = {
  title: "Architectural Design, Engineering and Construction Solutions",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageShell active="home">
      <main className="page-frame home-frame">
        <section className="hero" aria-label={`${siteName} overview`}>
          <Image
            className="hero-image"
            src="/Banner_background.png"
            alt="Engineers reviewing construction plans at a building site"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-fade" />
          <div className="hero-copy">
            <h1>
              From <strong>Concept,</strong>
              <br />
              <strong>to</strong> Reality
            </h1>
            <p>
              DPS Project Solutions delivers architectural design, engineering
              consultancy, construction support, material supply, product import,
              project management, and turnkey solutions for residential,
              commercial, and community projects.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
