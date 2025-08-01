"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "Figma",
  "UI/UX Design",
];

export default function About() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`py-20 sm:py-28 bg-secondary fade-in-on-scroll ${isInView ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A little bit about my background and the skills I bring to the table.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-full overflow-hidden shadow-lg mx-auto w-4/5 md:w-full">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Portrait of the creator"
                fill
                className="object-cover"
                data-ai-hint="person portrait"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Passionate about building for the web
            </h3>
            <p className="text-foreground/80 mb-4 text-base leading-relaxed">
              Hello! I&apos;m a versatile developer and designer with a passion for creating elegant, high-performance web applications. With a foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. My approach is centered on user experience, clean code, and scalable architecture.
            </p>
            <p className="text-foreground/80 mb-6 text-base leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and seeking inspiration from the world of digital art and design.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="default" className="bg-primary/80 text-primary-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
