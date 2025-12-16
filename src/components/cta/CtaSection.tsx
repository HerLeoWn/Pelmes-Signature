'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--background)]">
      {/* Swirl dekor */}
      <div className="gold-swirl-decor absolute inset-0 opacity-30">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      {/* Altın overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#b68d40]/5 to-transparent" />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair tracking-wider leading-tight font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          Hazır mısın anlamlı bir hediye vermeye?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-[var(--muted)] mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Kişiye özel tasarımlar, butik üretim ve kaliteli malzemelerle<br />
          sevdiklerinize unutulmaz hediyeler hazırlayalım.
        </motion.p>

        {/* Butonlar – mobilde yan yana, gap dar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-row items-center justify-center gap-5 md:gap-10"
        >
          <Button asChild size="lg" className="btn-primary px-9 md:px-16 py-6 md:py-8 text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(182,141,64,0.7)] hover:scale-105 transition-all duration-500">
            <Link href="/hizmetlerimiz">
              Hemen Keşfet →
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="px-8 md:px-14 py-6 md:py-8 text-xl md:text-2xl border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] hover:scale-105 transition-all duration-500">
            <Link href="/iletisim">
              Bize Yaz
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}