import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Г-Клин — Премиальный клининг квартир, домов и офисов",
  description:
    "Профессиональная клининговая компания. Генеральная уборка, уборка после ремонта, поддерживающая уборка. Опытные клинеры, техника Karcher, технолог на каждом объекте.",
  keywords:
    "клининг, уборка квартир, генеральная уборка, уборка после ремонта, химчистка, клининговая компания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
