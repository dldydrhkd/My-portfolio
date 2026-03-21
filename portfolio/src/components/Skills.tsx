"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/resume";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-2xl font-bold text-[var(--fg)]"
      >
        Skills
      </motion.h2>

      <div className="space-y-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <span className="w-40 shrink-0 text-sm font-medium text-[var(--fg)]">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.primary.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]"
                >
                  {tag}
                </span>
              ))}
              {group.secondary.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
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
