'use client';

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // <-- bu satırı ekledik

const examples = [
  {
    title: "Kişiye Özel Ahşap İsimlik",
    desc: "Malzeme: Ceviz ahşap • Makine: Masaüstü CO2 lazer • Boyut: 20x10 cm • Kişiselleştirme: İsim + tarih gravür",
  },
  {
    title: "Sevgililer Günü Çerçeve",
    desc: "Malzeme: Kontrplak • Makine: CNC router + lazer • Boyut: 30x30 cm • Kişiselleştirme: Çift isimleri ve kalp motif",
  },
  {
    title: "Kurumsal Plaket",
    desc: "Malzeme: Akrilik + ahşap taban • Makine: Lazer kazıma • Boyut: 25x15 cm • Kişiselleştirme: Şirket logosu + motivasyon yazısı",
  },
  {
    title: "Matching Hoodie Set",
    desc: "Malzeme: %100 pamuk • Baskı: DTG (yakında) • Kişiselleştirme: King & Queen yazıları",
  },
  {
    title: "Şirket Üniforması",
    desc: "Malzeme: Organik pamuk • Baskı: Logo baskı (yakında) • Adet: Toplu üretim",
  },
  {
    title: "Kişisel Tişört",
    desc: "Malzeme: Premium kumaş • Baskı: Fotoğraf + mesaj (yakında) • Kişiselleştirme: Tamamen özgür tasarım",
  },
];

export default function ExamplesSection() {
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
    <section className="relative h-[85vh]">
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {examples.map((example, i) => (
            <div key={i} className="embla__slide flex-none w-full h-full relative">
              <Image
                src="/placeholder.svg"
                alt={example.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjYWFhYWFhIj5QbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4="
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 text-left text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
                  >
                    {example.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-xl max-w-2xl leading-relaxed"
                  >
                    {example.desc}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot butonlar – altın, yuvarlak */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {examples.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              selectedIndex === i ? "w-8 bg-[var(--primary)] shadow-lg shadow-[#b68d40]/50" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
}