'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] overflow-hidden relative px-6">
      {/* Zarif altın swirl dekor (siteyle uyumlu) */}
      <div className="gold-swirl-decor absolute inset-0 opacity-30">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl md:text-9xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-3xl text-[var(--muted)] mb-12"
        >
          Aradığın sayfa kaybolmuş gibi görünüyor... <br />
          Ama merak etme, doğru adrestesin – Pelmes Signature seni bekliyor!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="btn-primary px-12 py-7 text-xl rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(182,141,64,0.5)] transition-all duration-500">
            <Link href="/">Hemen Keşfet →</Link>
          </Button>
        </motion.div>

        {/* Küçük eğlenceli detay – altın toz efekti */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-[#b68d40] rounded-full opacity-60"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, repeatType: "reverse" }}
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}