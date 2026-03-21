"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github } from "lucide-react";
import { personal } from "@/data/resume";

const stackBadges = ["Databricks", "LangGraph", "AWS", "PySpark"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-2 text-sm tracking-widest text-[var(--muted)] uppercase"
        >
          {personal.title}
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-4 text-5xl font-bold tracking-tight text-[var(--fg)] sm:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 text-lg text-[var(--muted)] sm:text-xl"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          {stackBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={personal.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Download size={16} />
            이력서 다운로드
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-[var(--muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
