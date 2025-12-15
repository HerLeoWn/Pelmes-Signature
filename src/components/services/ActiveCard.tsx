'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Trees, Gift, HeartHandshake } from "lucide-react"; // ahşap & lazer temalı ikonlar

export default function ActiveCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="group bg-[var(--card)] rounded-lg shadow-xl overflow-hidden border border-[var(--primary)]/30 transition-all duration-500 hover:border-[var(--primary)]/60 hover:shadow-2xl hover:shadow-[#b68d40]/20 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Üst kısım – Minimal ikon dekor */}
      <div className="relative h-64 flex items-center justify-center bg-gradient-to-br from-[var(--background)] to-[var(--card)]">
        {/* Arka planda hafif altın ikonlar */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Trees className="h-32 w-32 text-[var(--primary)]" />
        </div>
        <Gift className="absolute bottom-8 right-8 h-12 w-12 text-[var(--primary)] opacity-30" />
        <HeartHandshake className="absolute top-10 left-1/4 -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-[var(--primary)] opacity-10" />

        {/* Başlık */}
        <h3 className="relative z-10 text-3xl md:text-4xl font-playfair font-bold text-[var(--primary)]">
          Ahşap & Lazer Hediyelikler
        </h3>
      </div>

      <div className="p-8">
        {/* Detaylar – hover/tap'te açılır */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden space-y-3 text-[var(--muted)]"
        >
          <p>Bireysel hediyelikler (isimlik, anahtarlık vb.)</p>
          <p>Sevgililer için romantik tasarımlar</p>
          <p>Ofis ve kurumsal plaketler</p>
        </motion.div>

        {/* Buton – hover/tap'te görünür */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild className="btn-primary w-full mt-8">
            <Link href="/cnc-lazer">Keşfet →</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}