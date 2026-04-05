"use client";

import { motion } from "framer-motion";
import {
  SprayBottle,
  Broom,
  HouseLine,
  Sparkle,
} from "@phosphor-icons/react";

const services = [
  {
    title: "Генеральная уборка",
    description:
      "Детальная обработка каждого уголка. Удаление пыли, грязи, застарелых загрязнений. Полная дезинфекция всех поверхностей.",
    price: "от 300",
    unit: "руб/м\u00B2",
    icon: SprayBottle,
  },
  {
    title: "После ремонта",
    description:
      "Удаление остатков шпатлевки, цемента, эпоксидной смолы и строительной пыли. Подготовка к заселению.",
    price: "от 450",
    unit: "руб/м\u00B2",
    icon: Broom,
  },
  {
    title: "Поддерживающая",
    description:
      "Регулярная уборка для поддержания чистоты. Протирание поверхностей, мытье полов без разводов.",
    price: "от 150",
    unit: "руб/м\u00B2",
    icon: Sparkle,
  },
  {
    title: "Химчистка",
    description:
      "Профессиональная химчистка мебели, ковров, матрасов. Экстракторы Karcher для глубокой очистки.",
    price: "Индивидуально",
    unit: "",
    icon: HouseLine,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-3xl md:text-5xl tracking-tight leading-[1.1]"
        >
          Каждый вид уборки —<br />
          под вашу задачу
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px mt-16 bg-border-gold rounded-xl overflow-hidden border border-border-gold">
          {services.map((service, i) => {
            const Icon = service.icon;
            const span = i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-5" : "md:col-span-7";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${span} bg-surface-elevated p-8 md:p-10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 rounded-md bg-surface-overlay flex items-center justify-center text-text-secondary">
                    <Icon size={20} weight="bold" />
                  </div>

                  {service.unit ? (
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
                        {service.price}
                      </div>
                      <div className="text-xs text-text-muted mt-1">
                        {service.unit}
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-text-secondary font-medium">
                      {service.price}
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
