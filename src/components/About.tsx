"use client";

import { motion } from "framer-motion";
import { UsersFour, ShieldCheck, Wrench } from "@phosphor-icons/react";

const features = [
  {
    icon: UsersFour,
    title: "Клинеры с опытом от 5 лет",
    description:
      "Знаем, как оттереть застарелый жир, не испортить покрытие и какой состав необходим чтобы отмыть пол без разводов.",
  },
  {
    icon: ShieldCheck,
    title: "Технолог на объекте",
    description:
      "На каждый объект вместе с командой клинеров выезжает технолог, контролирующий процесс и несущий материальную ответственность.",
  },
  {
    icon: Wrench,
    title: "Техника Karcher",
    description:
      "Только профессиональная техника: парогенераторы, пылесосы и экстракторы Karcher для безупречного результата.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-[1.1]">
              Почему клиенты
              <br />
              выбирают нас
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-lg">
              Г-Клин — профессиональная клининговая компания, специализирующаяся
              на уборке частных домов, квартир и офисных помещений. Каждый объект
              для нас — персональный проект.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border-gold">
              {[
                { value: "5+", label: "лет опыта" },
                { value: "300+", label: "объектов" },
                { value: "100%", label: "довольных" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-px rounded-xl overflow-hidden border border-border-gold bg-border-gold">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-surface-elevated p-6 md:p-8 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200"
                >
                  <div className="flex gap-5">
                    <div className="w-10 h-10 shrink-0 rounded-md bg-surface-overlay flex items-center justify-center text-text-secondary">
                      <Icon size={20} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
