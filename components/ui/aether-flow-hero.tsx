"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AetherFlowHeroProps {
  badge?: React.ReactNode;
  heading: React.ReactNode;
  subheading: string;
  ctaPrimary: { label: string; href: string; icon?: React.ReactNode };
  ctaSecondary: { label: string; href: string };
  tags?: { icon: React.ReactNode; label: string }[];
}

export function AetherFlowHero({
  badge,
  heading,
  subheading,
  ctaPrimary,
  ctaSecondary,
  tags,
}: AetherFlowHeroProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    class Particle {
      x: number; y: number;
      directionX: number; directionY: number;
      size: number; color: string;

      constructor(x: number, y: number, dX: number, dY: number, size: number, color: string) {
        this.x = x; this.y = y;
        this.directionX = dX; this.directionY = dY;
        this.size = size; this.color = color;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 5;
            this.y -= (dy / distance) * force * 5;
          }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    let particles: Particle[] = [];

    function init() {
      particles = [];
      const count = (canvas!.height * canvas!.width) / 9000;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas!.width - size * 4) + size * 2;
        const y = Math.random() * (canvas!.height - size * 4) + size * 2;
        const dX = (Math.random() * 0.4) - 0.2;
        const dY = (Math.random() * 0.4) - 0.2;
        particles.push(new Particle(x, y, dX, dY, size, 'rgba(139, 92, 246, 0.85)'));
      }
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dist =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2;
          const threshold = (canvas!.width / 7) * (canvas!.height / 7);
          if (dist < threshold) {
            const opacity = 1 - dist / 20000;
            const nearMouse = mouse.x !== null &&
              Math.sqrt((particles[a].x - mouse.x) ** 2 + (particles[a].y - mouse.y!) ** 2) < mouse.radius;
            ctx!.strokeStyle = nearMouse
              ? `rgba(220, 180, 255, ${opacity})`
              : `rgba(139, 92, 246, ${opacity * 0.5})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach(p => p.update());
      connect();
    }

    const resize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      init();
    };

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseOut = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseOut);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.15 + 0.3, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-[92vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* fade to background at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center lg:px-8">
        {badge && (
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            {badge}
          </motion.div>
        )}

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {heading}
          </h1>
        </motion.div>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {subheading}
        </motion.p>

        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25" asChild>
            <a href={ctaPrimary.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {ctaPrimary.icon}
              {ctaPrimary.label}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
            <a href={ctaSecondary.href} className="flex items-center gap-2">
              {ctaSecondary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {tags && (
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-8 flex flex-wrap justify-center gap-6"
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
  );
}
