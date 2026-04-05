"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Оставьте заявку",
    description: "Укажите удобное время и вид уборки — это займет меньше минуты.",
  },
  {
    number: "02",
    title: "Менеджер свяжется",
    description:
      "Перезвоним в течение 15 минут. Уточним детали и подтвердим заказ.",
  },
  {
    number: "03",
    title: "Команда приезжает",
    description: "Пунктуально, с оборудованием и готовностью к любой задаче.",
  },
  {
    number: "04",
    title: "Наслаждайтесь чистотой",
    description: "Все убрано — вам остается только отдыхать.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-3xl md:text-5xl tracking-tight leading-[1.1] mb-20"
        >
          Четыре шага до
          <br />
          идеальной чистоты
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-border-gold bg-border-gold">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-surface-elevated p-8"
            >
              <span className="text-xs font-mono text-text-muted tracking-wider">
                {step.number}
              </span>
              <h3 className="text-base font-semibold tracking-tight mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
