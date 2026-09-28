"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/site";

type ProjectFilter = "All" | ProjectCategory;

const filters: ProjectFilter[] = ["All", "Commercial", "Residential", "Others"];

function splitProjectTitle(title: string) {
  const [accentWord, ...remainingWords] = title.split(" ");

  return {
    accentWord,
    remainingTitle: remainingWords.join(" "),
  };
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      <div className="pill-tabs" aria-label="Project categories">
        {filters.map((filter) => (
          <button key={filter} type="button" className={filter === activeFilter ? "is-active" : ""} onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => {
          const { accentWord, remainingTitle } = splitProjectTitle(project.title);

          return (
            <article className="project-card" key={`${project.src}-${project.category}-${index}`}>
              <Image src={project.src} alt={`${project.title} ${project.category} project`} fill sizes="(max-width: 720px) 80vw, (max-width: 1200px) 22vw, 360px" />
              <div className="project-caption">
                <h2>
                  <span>{accentWord}</span>
                  {remainingTitle ? ` ${remainingTitle}` : ""}
                </h2>
                <p>{project.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
