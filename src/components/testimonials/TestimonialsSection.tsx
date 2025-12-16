'use client';

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ayşe Y.",
    rating: 5,
    comment: "Sevgilime doğum günü için ahşap isimlik yaptırdım, lazer gravür o kadar net ki inanamadım! Paketleme çok özenliydi, hediye notu da eklemişler. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet K.",
    rating: 5,
    comment: "Kurumsal plaket siparişi verdim, şirket logosu ve yazı tam istediğim gibi oldu. İletişim hızlı, teslimat zamanında. Ev tipi üretim olmasına rağmen kalite profesyonel.",
  },
  {
    name: "Elif S.",
    rating: 5,
    comment: "Kişiye özel hoodie baskısı yaptırdım, tasarım onayı için prova gönderdiler – çok beğendim! Kumaş kaliteli, baskı yıkayınca çıkmadı. Tekrar sipariş vereceğim.",
  },
  {
    name: "Can T.",
    rating: 5,
    comment: "Fiyat/performans mükemmel. Lazer kesim anahtarlık yaptırdım, detaylar harika. Küçük bir atölye ama işleri büyük firmalardan iyi. Teşekkürler Pelmes!",
  },
  {
    name: "Zeynep Ö.",
    rating: 5,
    comment: "Sevgililer günü için matching tişörtler aldık, renkler tam istediğimiz gibi. Paket güzel, hızlı kargo. Sevgilim çok mutlu oldu, siz de mutlu ettiniz bizi :)",
  },
  {
    name: "Ozan B.",
    rating: 5,
    comment: "Ofis için isimlikler yaptırdım, ahşap malzeme kaliteli ve gravür çok net. Fiyatı uygun, iletişim süper. Bundan sonra hediyeler burdan!",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-24 bg-[var(--background)] overflow-hidden">
      {/* Swirl dekor hafif */}
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
          Müşteri Yorumları
        </motion.h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-none w-full md:w-1/2 lg:w-1/3 px-6"
              >
                <div className="bg-[var(--card)] rounded-lg shadow-xl p-8 border border-[var(--primary)]/20 hover:border-[var(--primary)]/50 hover:shadow-2xl hover:shadow-[#b68d40]/20 transition-all duration-500">
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, starI) => (
                      <motion.div
                        key={starI}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: starI * 0.1 }}
                      >
                        <Star className="h-6 w-6 fill-[#b68d40] text-[#b68d40]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[var(--muted)] text-lg italic mb-6">
                    "{t.comment}"
                  </p>
                  <p className="text-[var(--foreground)] font-medium">
                    — {t.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot butonlar */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                selectedIndex === i ? "w-8 bg-[var(--primary)] shadow-lg shadow-[#b68d40]/50" : "bg-[var(--muted)]/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}