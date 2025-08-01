"use client";

import { projects as allProjects } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import { useInView } from "@/hooks/use-in-view";

export default function Projects() {
  const [ref, isInView] = useInView<HTMLElement>();
  // Simple sort as a fallback
  const sortedProjects = [...allProjects].sort(
    (a, b) =>
      (b.viewCount + b.interactionCount * 5) - (a.viewCount + a.interactionCount * 5)
  );

  return (
    <section id="projects" ref={ref} className={`py-20 sm:py-28 bg-background fade-in-on-scroll ${isInView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            My Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s a selection of my recent projects. Click to see more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
             <div key={project.id} style={{ transitionDelay: `${index * 150}ms` }} className={`fade-in-on-scroll ${isInView ? 'is-visible' : ''}`}>
                <ProjectCard project={project} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
