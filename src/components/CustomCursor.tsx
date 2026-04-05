"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        setIsHovering(false);
      }
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>

      {/* Dot */}
      <motion.div
        ref={dotRef}
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-2 h-2 -ml-1 -mt-1 rounded-full bg-text-primary"
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 1.8 : 1,
            borderColor: isHovering
              ? "rgba(47, 52, 55, 0.2)"
              : "rgba(47, 52, 55, 0.4)",
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-8 -ml-4 -mt-4 rounded-full border border-text-primary/40"
        />
      </motion.div>
    </>
  );
}
