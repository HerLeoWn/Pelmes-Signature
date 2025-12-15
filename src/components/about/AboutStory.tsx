'use client';

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-[var(--primary)] mb-8">
            Hikayemiz
          </h2>
          <div className="text-lg text-[var(--muted)] leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              Pelmes Signature, evdeki küçük bir masaüstü CNC router ve lazer makinesiyle başladı. Şu an her şeyi ev ortamında, butik şekilde üretiyoruz – seri üretim değil, her parça tek tek, size özel.
            </p>
            <p>
              Büyüdükçe hedefimiz gerçek bir atölye kurmak ve daha büyük makinelerle daha karmaşık işler çıkartmak. Sizlerin desteğiyle bu yola devam ediyoruz.
            </p>
            <p>
              Amacımız, hediyelerin sadece bir eşya değil, bir duygu taşıması. Kaliteli malzeme, az atık ve tamamen kişiselleştirme ile yanınızdayız.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}