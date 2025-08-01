"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-32 animated-gradient">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 animate-fade-in-up">
          Creative Developer & Designer
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up animation-delay-300">
          I build beautiful, functional, and user-centric digital experiences.
          Explore my work and let&apos;s create something amazing together.
        </p>
        <div className="animate-fade-in-up animation-delay-600">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
