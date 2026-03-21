"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, BookOpen } from "lucide-react";
import { personal, about } from "@/data/resume";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-2xl font-bold text-[var(--fg)]"
      >
        About
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Text */}
        <div className="space-y-6 md:col-span-2">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="text-sm leading-relaxed text-[var(--muted)]"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl border border-[var(--border)] p-6"
        >
          <h3 className="mb-4 text-sm font-semibold text-[var(--fg)]">
            Contact
          </h3>
          <div className="space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={16} />
              {personal.email}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={personal.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <BookOpen size={16} />
              Velog
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
