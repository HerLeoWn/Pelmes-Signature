'use client';

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[var(--background)]">
      <div className="gold-swirl-decor absolute inset-0 opacity-30">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b68d40]/5 to-transparent" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          İletişim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto"
        >
          Soruların mı var, özel bir tasarım mı istiyorsun? Hemen yaz, en kısa sürede dönüş yapalım.
        </motion.p>
      </div>
    </section>
  );
}