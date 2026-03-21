"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, BookOpen, Download } from "lucide-react";
import { personal } from "@/data/resume";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="mb-4 text-2xl font-bold text-[var(--fg)]">
          함께 일하고 싶다면 연락주세요
        </h2>
        <p className="mb-10 text-sm text-[var(--muted)]">
          새로운 기회와 협업에 항상 열려 있습니다.
        </p>

        <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            이메일 보내기
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={personal.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <BookOpen size={16} />
            Velog
          </a>
          <a
            href={personal.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Download size={16} />
            이력서 PDF
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-20 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted)]">
        &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
      </div>
    </section>
  );
}
