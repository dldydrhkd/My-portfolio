"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience, education, activities } from "@/data/resume";
import { GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 py-20"
      ref={ref}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-2xl font-bold text-[var(--fg)]"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-[var(--border)] pl-8">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className="relative mb-10"
          >
            {/* Dot */}
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />

            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <h3 className="text-lg font-semibold text-[var(--fg)]">
                {exp.company}
              </h3>
              <span className="text-xs text-[var(--muted)]">
                {exp.period} · {exp.duration}
              </span>
            </div>
            <p className="mb-4 text-sm text-[var(--muted)]">{exp.role}</p>

            <ul className="mb-4 space-y-2">
              {exp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mr-2 text-[var(--accent)]">-</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 text-xs text-[var(--accent)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {/* Education */}
        <div className="rounded-xl border border-[var(--border)] p-6">
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-[var(--accent)]" />
            <h3 className="text-sm font-semibold text-[var(--fg)]">
              Education
            </h3>
          </div>
          {education.map((edu) => (
            <div key={edu.school}>
              <p className="text-sm font-medium text-[var(--fg)]">
                {edu.school}
              </p>
              <p className="text-xs text-[var(--muted)]">
                {edu.major} · {edu.degree}
              </p>
              <p className="text-xs text-[var(--muted)]">
                {edu.period} · GPA {edu.gpa}
              </p>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="rounded-xl border border-[var(--border)] p-6">
          <div className="mb-4 flex items-center gap-2">
            <Award size={18} className="text-[var(--accent)]" />
            <h3 className="text-sm font-semibold text-[var(--fg)]">
              Activities
            </h3>
          </div>
          <div className="space-y-3">
            {activities.map((act) => (
              <div key={act.name} className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--fg)]">{act.name}</p>
                  <p className="text-xs text-[var(--muted)]">{act.type}</p>
                </div>
                <span className="shrink-0 text-xs text-[var(--muted)]">
                  {act.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
