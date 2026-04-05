"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cleanTypes = [
  { label: "Генеральная", pricePerSqm: 300 },
  { label: "После ремонта", pricePerSqm: 450 },
  { label: "Поддерживающая", pricePerSqm: 150 },
];

const objectTypes = ["Квартира", "Дом", "Офис"];

export default function Calculator() {
  const [cleanType, setCleanType] = useState(0);
  const [area, setArea] = useState(50);
  const [objectType, setObjectType] = useState(0);

  const basePrice = cleanTypes[cleanType].pricePerSqm * area;
  const discount = area > 300 ? 0.05 : 0;
  const finalPrice = Math.round(basePrice * (1 - discount));
  const minPrice = cleanType === 1 ? 15000 : 0;
  const displayPrice = Math.max(finalPrice, minPrice);

  return (
    <section id="calculator" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-3xl md:text-5xl tracking-tight leading-[1.1] mb-16"
        >
          Рассчитайте стоимость
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-px rounded-xl overflow-hidden border border-border-gold bg-border-gold"
        >
          <div className="lg:col-span-3 bg-surface-elevated p-8 md:p-10">
            <div className="mb-8">
              <label className="block text-sm text-text-secondary mb-3">
                Тип уборки
              </label>
              <div className="flex flex-wrap gap-2">
                {cleanTypes.map((type, i) => (
                  <button
                    key={type.label}
                    onClick={() => setCleanType(i)}
                    className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      cleanType === i
                        ? "bg-text-primary text-white"
                        : "bg-surface-overlay text-text-secondary hover:text-text-primary border border-border-gold"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm text-text-secondary mb-3">
                Тип объекта
              </label>
              <div className="flex gap-2">
                {objectTypes.map((type, i) => (
                  <button
                    key={type}
                    onClick={() => setObjectType(i)}
                    className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      objectType === i
                        ? "bg-text-primary text-white"
                        : "bg-surface-overlay text-text-secondary hover:text-text-primary border border-border-gold"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-text-secondary">
                  Площадь (м\u00B2)
                </label>
                <span className="text-lg font-semibold font-mono tabular-nums text-text-primary">
                  {area}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={5}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-1 rounded-full bg-border-gold appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-text-primary"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>10 м\u00B2</span>
                <span>500 м\u00B2</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-surface-elevated p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-2">Предварительная стоимость</p>
              <div className="text-5xl md:text-6xl font-semibold tracking-tight text-text-primary">
                {displayPrice.toLocaleString("ru-RU")}
                <span className="text-xl text-text-muted ml-2">руб</span>
              </div>
              {discount > 0 && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bg text-accent text-xs font-medium uppercase tracking-wider">
                  Скидка 5%
                </div>
              )}
              <p className="text-xs text-text-muted mt-4 leading-relaxed">
                Точную стоимость рассчитает менеджер после уточнения деталей.
                {cleanType === 1 && " Минимальная стоимость — 15 000 руб."}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 rounded-md bg-text-primary text-white font-medium text-base hover:bg-gold-light transition-colors duration-200 active:scale-[0.98]"
            >
              Заказать уборку
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
