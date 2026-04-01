"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

// ── AnimatedGroup ────────────────────────────────────────────────
type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: { container?: Variants; item?: Variants };
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimatedGroup({ children, className, variants }: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || defaultItemVariants;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
// ────────────────────────────────────────────────────────────────

interface HeroWithGradientProps {
  badge?: ReactNode;
  heading: ReactNode;
  subheading: string;
  ctaPrimary: { label: string; href: string; icon?: ReactNode };
  ctaSecondary: { label: string; href: string };
  tags?: { icon: ReactNode; label: string }[];
  dashboardImage: string;
  dashboardImageAlt?: string;
}

export function HeroWithGradient({
  badge,
  heading,
  subheading,
  ctaPrimary,
  ctaSecondary,
  tags,
  dashboardImage,
  dashboardImageAlt = "Dashboard",
}: HeroWithGradientProps) {
  const gradientRef = useRef<HTMLDivElement>(null);

  const transitionVariants = {
    item: {
      hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 1.5 },
      },
    },
  };

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative w-full">
        {/* Gradient background */}
        <div
          ref={gradientRef}
          className="absolute inset-0 -z-10 transition-colors duration-700 dark:hidden rounded-2xl"
          style={{
            backgroundImage: `
              linear-gradient(180deg, #ffffff 0%, #ede9fe 30%, #ddd6fe 60%, #c4b5fd 85%, #f5f3ff 100%),
              radial-gradient(at 20% 30%, #ffffff33 0%, transparent 60%),
              radial-gradient(at 80% 70%, #7c3aed22 0%, transparent 70%)
            `,
            backgroundBlendMode: "overlay, screen",
          }}
        />
        <div className="absolute inset-0 -z-10 hidden dark:block rounded-2xl bg-gradient-to-b from-background via-primary/5 to-background" />

        {/* Text content */}
        <div className="pt-16 pb-10 sm:pt-20 sm:pb-12 text-center">
          <div className="relative max-w-3xl mx-auto px-4">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex justify-center"
              >
                {badge}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground"
            >
              {heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
            >
              {subheading}
            </motion.p>

            <AnimatedGroup
              variants={{
                container: {
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } },
                },
                ...transitionVariants,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                <Button asChild size="lg" className="rounded-xl px-6 text-base h-12">
                  <a
                    href={ctaPrimary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {ctaPrimary.icon}
                    {ctaPrimary.label}
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-r from-primary/80 via-primary to-primary/60 rounded-[14px] border p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-6 text-base h-12 bg-background text-foreground hover:bg-background/90"
                >
                  <a href={ctaSecondary.href} className="flex items-center gap-2">
                    {ctaSecondary.label}
                  </a>
                </Button>
              </div>
            </AnimatedGroup>

            {tags && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-8 flex flex-wrap justify-center gap-5"
              >
                {tags.map((tag) => (
                  <div key={tag.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    {tag.icon}
                    {tag.label}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Dashboard image */}
        <AnimatedGroup
          variants={{
            container: {
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative overflow-hidden px-4 sm:px-8">
            <div
              aria-hidden
              className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background"
            />
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl border border-border border-b-0 p-3 shadow-2xl shadow-primary/10 bg-card">
              <Image
                src={dashboardImage}
                alt={dashboardImageAlt}
                width={2700}
                height={1440}
                className="w-full rounded-xl object-cover object-top"
                priority
              />
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
