'use client';

import { motion } from "framer-motion";
import { Hammer, Leaf, Sparkles, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Hammer,
    title: "Butik Üretim",
    desc: "Her ürün ev tipi makinelerle tek tek, seri üretim gibi değil, size özel üretilir.",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilir Yaklaşım",
    desc: "Küçük ölçekli üretimle az atık, çevreye duyarlı malzemeler ve yerel kaynaklar.",
  },
  {
    icon: Sparkles,
    title: "Sınırsız Kişiselleştirme",
    desc: "İsim, fotoğraf, mesaj, logo… İstediğiniz her şeyi ürününüze ekleyebiliriz.",
  },
  {
    icon: HeartHandshake,
    title: "Anlamlı Hediyeler",
    desc: "Hediye sadece bir eşya değil, bir duygu olmalı. Biz de tam olarak bunu sunuyoruz.",
  },
];

export default function WhyUsSection() {
  // Kartlar sırayla gelsin (header gibi stagger)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        ease: "easeOut" as const  // <-- varsa buraya da
      },
    },
  };

    const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2, 
        duration: 0.8, 
        ease: "easeOut" as const  // <-- buraya ekle
      },
    }),
  };

  return (
    <section className="relative py-24 bg-[var(--background)] overflow-hidden">
      {/* Swirl dekor */}
      <div className="gold-swirl-decor absolute inset-0 opacity-30">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          Neden Pelmes Signature?
        </motion.h2>

        {/* Kartlar eşit boyutta + sırayla animasyon */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="h-full" // eşit yükseklik
            >
              <div className="h-full bg-[var(--card)] rounded-lg p-8 shadow-xl border border-[var(--primary)]/20 group-hover:border-[var(--primary)]/50 group-hover:shadow-2xl group-hover:shadow-[#b68d40]/20 transition-all duration-500 group text-center">
                <reason.icon className="h-16 w-16 mx-auto mb-6 text-[var(--primary)]" />
                <h3 className="text-2xl font-playfair font-bold text-[var(--primary)] mb-4">
                  {reason.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}