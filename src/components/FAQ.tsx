"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Я могу оставить клинера одного в квартире?",
    answer:
      "Да, все наши сотрудники проходят проверку и несут материальную ответственность. Технолог контролирует процесс на каждом объекте.",
  },
  {
    question: "Как можно перенести или отменить уборку?",
    answer:
      "Вы можете перенести или отменить уборку, связавшись с менеджером не менее чем за 4 часа до начала. Это бесплатно.",
  },
  {
    question: "Что нужно подготовить к приходу клинера?",
    answer:
      "Ничего специального. Обеспечьте доступ к помещению и доступ к воде. Все оборудование и средства мы привозим с собой.",
  },
  {
    question: "Как можно оплатить ваши услуги?",
    answer:
      "Наличными, переводом на карту или по безналичному расчету для юридических лиц. Оплата после выполнения работы.",
  },
  {
    question: "Сколько сотрудников выезжают на уборку?",
    answer:
      "Команда формируется исходя из объема работ: от 2 до 5 клинеров плюс технолог-контролер.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-gold">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
      >
        <span className="text-base md:text-lg font-medium tracking-tight pr-8 group-hover:text-text-secondary transition-colors duration-200">
          {item.question}
        </span>
        <span className="shrink-0 text-text-muted text-lg font-mono">
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-6 max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-[1.1]">
              Частые
              <br />
              вопросы
            </h2>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-sm">
              Не нашли ответ? Свяжитесь с нами — менеджер ответит в течение 15
              минут.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-3"
          >
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
