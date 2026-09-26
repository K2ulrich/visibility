"use client";

import { motion } from "framer-motion";

/**
 * Fait apparaître son contenu (fondu + léger glissement) au moment où il
 * entre dans le viewport au scroll. `once` : l'animation ne se rejoue pas
 * en remontant. Respecte prefers-reduced-motion via framer-motion.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
