"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { TrendingUp, Zap } from "lucide-react"

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
        {/* Watermark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/codexia_icono_blanco.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-64 object-contain opacity-[0.04] dark:opacity-[0.05] pointer-events-none select-none rotate-[-15deg] translate-x-8 translate-y-8"
        />
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

        </div>
      </div>

      {/* ── Right: professional mockup panel ── */}
      <div className="relative w-full lg:w-1/2 min-h-96 lg:min-h-0 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0d1424]">

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Watermark logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/codexia_icono_blanco.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 m-auto w-[70%] max-w-sm object-contain opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none"
        />

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-[95%] max-w-2xl mx-auto"
        >
          {/* Browser chrome */}
          <div className="rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-slate-700/60">
            {/* Title bar */}
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 dark:text-slate-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                digitalcodexia.com
              </div>
            </div>
            {/* Screenshot */}
            <div className="bg-white dark:bg-slate-900 aspect-16/10 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="/images/banner.png"
                alt="CODEXIA — Soluciones Digitales"
                className="w-full h-full object-cover object-top"
                style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Floating card — top left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-10 top-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900 border border-slate-100 dark:border-slate-700 px-4 py-3 flex items-center gap-3 min-w-[150px]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 shrink-0">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 dark:text-slate-500">Conversión</div>
              <div className="text-sm font-bold text-slate-800 dark:text-white">+138%</div>
            </div>
          </motion.div>

          {/* Floating card — top right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -right-6 -top-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900 border border-slate-100 dark:border-slate-700 px-4 py-3 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 shrink-0">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 dark:text-slate-500">Velocidad</div>
              <div className="text-sm font-bold text-slate-800 dark:text-white">99 / 100</div>
            </div>
          </motion.div>

        </motion.div>

        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white dark:from-[#0B1120] to-transparent pointer-events-none z-20" />
      </div>

    </section>
  )
}
