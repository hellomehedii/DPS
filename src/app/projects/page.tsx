import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { projects, siteName } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore DPS Project Solutions' residential, commercial, hospitality, mosque, villa, and mixed-use design and construction project portfolio.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${siteName}`,
    description:
      "Residential, commercial, hospitality, mosque, villa, and mixed-use project work from DPS Project Solutions.",
    url: "/projects",
    images: projects.slice(0, 4).map((project) => ({
      url: project.src,
      alt: project.title,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <PageShell active="projects" surface="soft">
      <main className="page-frame projects-page">
        <section className="projects-panel">
          <h1>Projects</h1>
          <ProjectsGrid projects={projects} />
        </section>
      </main>
    </PageShell>
  );
}
