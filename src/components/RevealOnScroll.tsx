"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "left" | "right"; // <--- Opsi Baru Ditambahkan
}

export const RevealOnScroll = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  direction = "up" // Default tetap dari bawah
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Logika Arah Gerakan
  const getHiddenVariant = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -75, y: 0 }; // Dari Kiri jauh (-75px)
      case "right": return { opacity: 0, x: 75, y: 0 }; // Dari Kanan jauh (75px)
      case "up": default: return { opacity: 0, y: 75, x: 0 }; // Dari Bawah (Default)
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: getHiddenVariant(),
        visible: { opacity: 1, x: 0, y: 0 }, // Posisi Normal
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};