'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const examples = [
  { title: "Kişiye Özel Ahşap İsimlik", desc: "Ceviz ahşap üzerine lazer gravür • Ev tipi CO2 lazer ile üretildi • Boyut: 20x10 cm • İsim + tarih kişiselleştirme", side: "left" },
  { title: "Sevgililer Günü Çerçeve", desc: "Kontrplak kalp çerçeve • CNC router + lazer kombinasyonu • Boyut: 30x30 cm • Çift isimleri ve özel motif", side: "right" },
  { title: "Kurumsal Plaket", desc: "Akrilik + ahşap taban • Lazer kazıma • Boyut: 25x15 cm • Şirket logosu + motivasyon yazısı", side: "left" },
  { title: "Kişisel Hoodie Tasarımı", desc: "Pamuklu hoodie • DTG baskı (yakında) • Kişiye özel yazı ve tasarım • Ev tipi üretim", side: "right" },
];

export default function AboutExamples() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair font-bold tracking-wider leading-tight text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          Çalışmalarımızdan
        </motion.h2>

        <div className="space-y-24">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${ex.side === "right" ? "md:grid-flow-dense md:grid-cols-reverse" : ""}`}
            >
              <div className={ex.side === "right" ? "md:order-2" : ""}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg"
                    alt={ex.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjYWFhYWFhIj5DYWxpc21hPC90ZXh0Pjwvc3ZnPg=="
                  />
                </div>
              </div>
              <div className={ex.side === "right" ? "md:order-1" : ""}>
                <h3 className="text-3xl font-playfair font-bold text-[var(--primary)] mb-6">
                  {ex.title}
                </h3>
                <p className="text-lg text-[var(--muted)] leading-relaxed">
                  {ex.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}