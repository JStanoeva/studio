import { prioritizeProjects } from "@/ai/flows/prioritize-projects";
import { projects as allProjects } from "@/lib/data";
import ProjectCard from "@/components/project-card";

export default async function Projects() {
  const projectEngagementData = allProjects.map(
    ({ projectId, viewCount, interactionCount }) => ({
      projectId,
      viewCount,
      interactionCount,
    })
  );

  let sortedProjects = [...allProjects];

  try {
    const { prioritizedProjectIds } = await prioritizeProjects({
      projectEngagementData,
    });
    const projectMap = new Map(allProjects.map((p) => [p.projectId, p]));
    const prioritized = prioritizedProjectIds
      .map((id) => projectMap.get(id)!)
      .filter(Boolean);
    
    const remaining = allProjects.filter(p => !prioritizedProjectIds.includes(p.projectId));
    
    sortedProjects = [...prioritized, ...remaining];

  } catch (error) {
    console.error("Failed to prioritize projects with AI:", error);
    // Fallback to a simple sorting mechanism if AI fails
    sortedProjects.sort(
      (a, b) =>
        b.viewCount + b.interactionCount * 5 - (a.viewCount + a.interactionCount * 5)
    );
  }

  return (
    <section id="projects" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            My Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s a selection of my recent projects. Click on any project to see more details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
