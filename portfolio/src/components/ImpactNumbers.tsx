"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { impacts } from "@/data/resume";

function ImpactCard({
  number,
  label,
  context,
  detail,
  index,
}: {
  number: string;
  label: string;
  context: string;
  detail: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-xl border border-[var(--border)] p-6 transition-colors hover:border-[var(--accent)]/50"
    >
      <div className="mb-1 text-4xl font-bold text-[var(--accent)]">
        {number}
      </div>
      <div className="mb-1 text-sm font-medium text-[var(--fg)]">{label}</div>
      <div className="text-xs text-[var(--muted)]">{context}</div>
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-3 border-t border-[var(--border)] pt-3 text-xs text-[var(--muted)]">
          {detail}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {impacts.map((item, i) => (
          <ImpactCard key={item.label} {...item} index={i} />
        ))}
      </div>
    </section>
  );
}
