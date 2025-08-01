"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-accent">
          <div className="relative h-48 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{project.description}</DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-4 -mr-4 grid md:grid-cols-2 gap-8 py-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-primary">About this project</h3>
                <p className="text-foreground/80 mb-4">{project.longDescription}</p>
                <h3 className="text-xl font-semibold mb-2 text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <div className="mt-auto flex space-x-4">
                    {project.liveUrl && (
                        <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2"/> View Live
                            </a>
                        </Button>
                    )}
                    {project.repoUrl && (
                        <Button variant="outline" asChild>
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2"/> Source Code
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
