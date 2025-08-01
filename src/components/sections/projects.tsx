import { projects as allProjects, Project } from "@/lib/data";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  // Simple sort as a fallback
  const sortedProjects = [...allProjects].sort(
    (a, b) =>
      (b.viewCount + b.interactionCount * 5) - (a.viewCount + a.interactionCount * 5)
  );

  return (
    <section id="projects" className="py-20 sm:py-28 bg-background">
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
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
