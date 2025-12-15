'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shirt, Heart, Building2, Palette } from "lucide-react"; // lucide ikonları
import { useState } from "react";

export default function PassiveCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="group bg-[var(--card)] rounded-lg shadow-xl overflow-hidden border border-[var(--primary)]/10 opacity-80 transition-all duration-500 hover:opacity-100 hover:border-[var(--primary)]/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Üst kısım – Minimal ikon + altın dekor */}
      <div className="relative h-64 flex items-center justify-center bg-gradient-to-br from-[var(--background)] to-[var(--card)]">
        {/* Arka planda hafif altın ikonlar (dekoratif) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Shirt className="h-32 w-32 text-[var(--primary)]" />
        </div>
        <Heart className="absolute top-8 left-8 h-12 w-12 text-[var(--primary)] opacity-30" />
        <Building2 className="absolute bottom-8 right-8 h-12 w-12 text-[var(--primary)] opacity-30" />
        <Palette className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-[var(--primary)] opacity-10" />

        {/* Başlık – her zaman görünür */}
        <h3 className="relative z-10 text-3xl md:text-4xl font-playfair font-bold text-[var(--muted)]">
          Kişiye Özel Kıyafet Baskıları
        </h3>
      </div>

      <div className="p-8">
        {/* Detaylar – hover/tap'te açılır */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden space-y-3 text-[var(--muted)]/70"
        >
          <p>Şirketlere özel logo ve üniforma baskıları</p>
          <p>Kişiye özel isim, tarih, mesajlı tasarımlar</p>
          <p>Sevgililere matching hoodie & tişört setleri</p>
          <p>Bizim hazır trend koleksiyonlarımız</p>
        </motion.div>

        {/* Buton – hover/tap'te görünür */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Button disabled variant="outline" className="w-full mt-8 border-[var(--primary)]/30 text-[var(--muted)]">
            Çok Yakında
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}