"use client";

import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="border-t border-border-gold py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-serif italic text-2xl text-text-primary tracking-tight">
              Г-Клин
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              Профессиональная клининговая компания. Уборка квартир, домов и
              офисов с гарантией качества.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4 font-medium">
              Навигация
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Услуги", href: "#services" },
                { label: "О нас", href: "#about" },
                { label: "Процесс", href: "#process" },
                { label: "Калькулятор", href: "#calculator" },
                { label: "Вопросы", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4 font-medium">
              Контакты
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+79001234567"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <Phone size={14} weight="bold" />
                +7 (900) 123-45-67
              </a>
              <a
                href="mailto:info@clean-g.ru"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <EnvelopeSimple size={14} weight="bold" />
                info@clean-g.ru
              </a>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin size={14} weight="bold" />
                Москва и область
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-gold flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Г-Клин. Все права защищены.
          </p>
          <a
            href="/privacy"
            className="text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
