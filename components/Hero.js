"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import SquareImage from "./SquareImage";
import { heroContent, siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-divider">
      {/* Filigrane de marque géant, très discret, derrière le texte */}
      <Image
        src="/icons/logo.png"
        alt=""
        width={420}
        height={420}
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-16 -top-24 h-[420px] w-[420px] opacity-60 hidden lg:block"
      />

      <div className="container-page section-y grid md:grid-cols-[1.1fr,0.9fr] gap-14 items-center relative">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm text-teal-soft font-medium mb-5 tracking-wide uppercase">
            Studio web pour PME et entrepreneurs africains
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.06] font-semibold text-paper max-w-xl"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-muted text-base md:text-lg max-w-lg">
            {heroContent.subtitle}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href={heroContent.ctaPrimary.href} variant="primary">
              {heroContent.ctaPrimary.label}
            </Button>
            <Button href={heroContent.ctaSecondary.href} variant="outline">
              {heroContent.ctaSecondary.label}
            </Button>
          </motion.div>
          <motion.a
            variants={item}
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm text-muted hover:text-teal-soft transition-colors"
          >
            Discuter sur WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Cadre décalé en accent or : signature visuelle "carte encadrée" */}
          <div className="absolute -inset-3 lg:-inset-4 rounded bg-gold/15 rotate-2" aria-hidden="true" />
          <div className="absolute -inset-3 lg:-inset-4 rounded border border-ink-line -rotate-2" aria-hidden="true" />
          <SquareImage
            src="/images/brand/visibility.jpg"
            alt="Visibility — studio de développement web"
            label="Ajoutez une image dans public/images/brand/"
            className="relative shadow-[0_20px_50px_rgba(27,30,39,0.10)]"
          />
        </motion.div>
      </div>
    </section>
  );
}