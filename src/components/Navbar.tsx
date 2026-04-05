"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Процесс", href: "#process" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Вопросы", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max"
      >
        <div className="flex items-center gap-1 rounded-lg bg-white/90 backdrop-blur-2xl border border-border-gold px-2 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <a
            href="#"
            className="px-5 py-2 font-serif italic text-text-primary text-xl tracking-tight"
          >
            Г-Клин
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-md hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="tel:+79001234567"
            className="hidden md:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-md bg-text-primary text-white text-sm font-medium hover:bg-gold-light transition-colors duration-200 active:scale-[0.98]"
          >
            <Phone size={14} weight="bold" />
            <span>Позвонить</span>
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2.5 rounded-md hover:bg-black/[0.03] text-text-secondary transition-colors"
            aria-label="Открыть меню"
          >
            <List size={20} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-surface/98 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-md bg-black/[0.03] text-text-primary"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-3xl font-serif italic text-text-primary hover:text-text-secondary transition-colors duration-200 py-3"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="tel:+79001234567"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex items-center gap-3 px-8 py-4 rounded-md bg-text-primary text-white font-medium text-lg"
              >
                <Phone size={20} weight="bold" />
                Позвонить
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
