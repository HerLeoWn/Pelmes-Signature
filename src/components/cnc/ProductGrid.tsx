'use client';

import { motion } from "framer-motion";

const placeholderProducts = [1, 2, 3, 4, 5, 6];

export default function ProductGrid() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          Ürünlerimiz
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {placeholderProducts.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-[var(--card)] rounded-lg shadow-xl overflow-hidden border border-[var(--primary)]/20 group-hover:border-[var(--primary)]/50 transition-all duration-500">
                <div className="relative h-80">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-[var(--muted)] text-2xl">Ürün {i}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-[var(--primary)] mb-4">
                    Özel Ahşap Hediye {i}
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    Kişiye özel lazer gravür ile hazırlanmış premium hediye.
                  </p>
                  <button className="btn-primary w-full">
                    Sipariş Ver →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}