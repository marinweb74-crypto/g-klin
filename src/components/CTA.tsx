"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function CTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl p-10 md:p-16 bg-surface-elevated border border-border-gold"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-[1.1]">
                Оставьте заявку —
                <br />
                перезвоним за 15 минут
              </h2>
              <p className="mt-5 text-text-secondary leading-relaxed max-w-md">
                Расскажем о ценах, сроках и подберем удобное время.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  required
                  className="w-full px-5 py-4 rounded-md bg-surface border border-border-gold text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-text-primary transition-colors duration-200"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full px-5 py-4 rounded-md bg-surface border border-border-gold text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-text-primary transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-text-primary text-white font-medium text-base hover:bg-gold-light transition-colors duration-200 active:scale-[0.98] mt-2"
                >
                  Заказать звонок
                </button>
                <p className="text-[11px] text-text-muted text-center mt-1">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="w-14 h-14 rounded-md bg-surface-overlay flex items-center justify-center mb-5">
                  <PaperPlaneTilt size={24} className="text-text-primary" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-2">
                  Заявка отправлена
                </h3>
                <p className="text-sm text-text-secondary">
                  Менеджер свяжется с вами в ближайшее время
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
