"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-surface">
      <div className="absolute inset-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-text-primary">
            Безупречная чистота
            <br />
            вашего пространства
          </h1>

          <p className="mt-8 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
            Квартиры, дома, офисы. Клинеры с опытом от 5 лет,
            профессиональная техника Karcher, технолог на каждом объекте.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-text-primary text-white font-medium text-base hover:bg-gold-light transition-colors duration-200 active:scale-[0.98]"
            >
              Рассчитать стоимость
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-border-gold text-text-primary font-medium text-base hover:bg-black/[0.03] transition-colors duration-200 active:scale-[0.98]"
            >
              Наши услуги
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
