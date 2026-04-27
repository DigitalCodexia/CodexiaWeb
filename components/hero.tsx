"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
})

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full min-h-[90vh] bg-white dark:bg-[#0B1120] overflow-hidden flex flex-col lg:flex-row">

      {/* ── Left content ── */}
      <div className="relative z-10 flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-0 w-full lg:w-1/2">
        {/* inner wrapper matches navbar max-w-7xl centering on the left half */}
        <div className="w-full max-w-xl ml-auto lg:pr-12">

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white"
        >
          Tu Negocio,{" "}
          <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Digital
          </span>{" "}y{" "}
          <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Rentable.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-sm text-base text-slate-500 dark:text-slate-400 leading-relaxed"
        >
          {t.hero.subheading}
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="/services"
            className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 active:scale-95 transition-all px-8 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>


        </div>{/* end inner wrapper */}
      </div>{/* end left panel */}

      {/* ── Right: holographic panel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative w-full lg:w-1/2 min-h-90 lg:min-h-0 flex items-center justify-center"
      >

        {/* Holographic gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-500 via-blue-500 to-cyan-400 dark:from-violet-800 dark:via-blue-800 dark:to-cyan-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.3),transparent_60%)]" />

        {/* Geometric lines decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="100" stroke="white" strokeWidth="0.5" />
          <line x1="50" y1="250" x2="450" y2="250" stroke="white" strokeWidth="0.5" />
          <line x1="250" y1="50" x2="250" y2="450" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="400" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="400" y1="100" x2="100" y2="400" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex items-center justify-center w-full h-full p-8 lg:p-12"
        >
          <motion.img
            src="/images/banner.png"
            alt="CODEXIA — Soluciones Digitales"
            className="w-full h-full object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Fade left edge into background */}
        <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white dark:from-[#0B1120] to-transparent pointer-events-none" />
      </motion.div>

    </section>
  )
}
