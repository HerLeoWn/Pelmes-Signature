'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] flex flex-col justify-between overflow-hidden bg-[var(--background)] px-6 md:px-12 lg:px-24">
      {/* Zarif altın swirl dekor */}
      <div className="gold-swirl-decor absolute inset-0">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      {/* Hafif overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b68d40]/5 to-transparent" />

      <div className="relative z-10 py-5 text-left max-w-4xl">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair font-bold tracking-wider leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
          style={{ textShadow: '0 0 30px rgba(182,141,64,0.2)' }}
        >
          Pelmes Signature
        </motion.h1>

        {/* Açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-base sm:text-lg md:text-xl text-[var(--muted)] leading-relaxed space-y-1"
        >
          <p>
            Sizlere en güzel ve en kaliteli hizmeti sunabilmek için kendimizi sürekli geliştiriyoruz.
          </p>
          <p>
            Kendine, eşine ya da ofisine özel bir hediye mi arıyorsun? Tam doğru adrestesin.
          </p>
          <p>
            Yoksa kıyafetlere özel baskı mı istiyorsun – kişiye ya da şirkete özel? O da çok yakında burada.
          </p>
          <p>
            Her iki alanda da butik üretimle yanınızdayız – kaliteli, anlamlı ve tamamen size özel.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator – Ortada, bounce + fade out */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pb-12 flex items-center justify-center gap-4 bounce-float"
      >
        <div className="w-12 h-12 rounded-full border-2 border-[var(--primary)]/50 flex items-center justify-center">
          <ChevronDown className="h-6 w-6 text-[var(--primary)]/70" />
        </div>
        <span className="text-sm lowercase tracking-widest text-[var(--muted)]">Hemen Keşfet</span>
      </motion.div>
    </section>
  );
}