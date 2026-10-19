"use client";

import { useState } from "react";
import { ProjectCard } from "../components/project-card";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  videoId?: string;
  group:
    | "Editing Skool Assignments"
    | "Personal Projects"
    | "Kalakar"
    | "Motion Graphics"
    | "Thumbnail Design"
    | "Color Grading";
};

const filters = [
  "Editing Skool Assignments",
  "Personal Projects",
  "Kalakar",
  "Motion Graphics",
  "Thumbnail Design",
  "Color Grading",
] as const;

export function WorkFilters({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(filters[0]);
  const visibleProjects =
    projects.filter((project) => project.group === activeFilter);

  return (
    <>
      <div className="work-filters" aria-label="Filter projects">
        <span className="work-filters__label">Filter by</span>
        {filters.map((filter) => (
          <button
            className="filter-chip"
            type="button"
            key={filter}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="work-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            priority={index === 0}
            showCategory={false}
            showDescription={false}
          />
        ))}
      </div>
      {visibleProjects.length === 0 ? (
        <p className="work-empty">More work in this category will be added as the matching project media is ready.</p>
      ) : null}
    </>
  );
}
