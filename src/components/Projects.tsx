"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/resume";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-2xl font-bold text-[var(--fg)]"
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className={`group rounded-xl border p-6 transition-transform hover:-translate-y-1 ${
              project.highlight
                ? "border-[var(--accent)] bg-[var(--accent)]/5"
                : "border-[var(--border)]"
            }`}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-[var(--fg)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {project.period}
                </p>
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <div className="mb-4 space-y-3 text-xs leading-relaxed text-[var(--muted)]">
              <div>
                <span className="font-medium text-[var(--fg)]">Problem </span>
                {project.problem}
              </div>
              <div>
                <span className="font-medium text-[var(--fg)]">Solution </span>
                {project.solution}
              </div>
              <div>
                <span className="font-medium text-[var(--fg)]">Result </span>
                {project.result}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
