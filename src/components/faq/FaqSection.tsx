'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Sipariş nasıl veririm?",
    answer: "Ürün detay sayfasında 'Sipariş Ver' butonuna tıklayın. Kişiselleştirme seçeneklerini doldurun, sepetinize ekleyin ve ödeme adımına geçin. Anonim veya üye olarak sipariş verebilirsiniz.",
  },
  {
    question: "Üretim süresi ne kadar?",
    answer: "Standart ürünler 3-5 iş günü, kişiye özel tasarımlar 5-10 iş günü içinde hazırlanır. Yoğun dönemlerde süre biraz uzayabilir, sipariş anında tahmini teslim tarihi bildirilir.",
  },
  {
    question: "Kargo ve teslimat nasıl?",
    answer: "Türkiye içi kargolar Aras veya Yurtiçi Kargo ile gönderilir. 500 TL üzeri siparişlerde kargo ücretsiz. Teslimat süresi ortalama 1-3 iş günü.",
  },
  {
    question: "İade veya değişim yapabilir miyim?",
    answer: "Standart ürünlerde 14 gün içinde iade/değişim hakkınız var. Kişiye özel ürünlerde iade kabul edilmez ancak üretim hatası durumunda ücretsiz yenisi gönderilir.",
  },
  {
    question: "Ödeme seçenekleri neler?",
    answer: "Kredi kartı, havale/EFT ve kapıda ödeme (sadece standart ürünler için). PayTR altyapısı ile güvenli ödeme. Taksit seçenekleri mevcut.",
  },
  {
    question: "Kişiselleştirme nasıl yapılır?",
    answer: "Sipariş sırasında isim, tarih, mesaj veya fotoğraf yükleme alanları çıkar. Tasarım onayı için prova görseli gönderilir, onayınızla üretime geçilir.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-24 bg-[var(--background)] overflow-hidden">
      {/* Swirl dekor hafif */}
      <div className="gold-swirl-decor absolute inset-0 opacity-30">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
        >
          Sıkça Sorulan Sorular
        </motion.h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccordionItem value={`item-${i}`} className="bg-[var(--card)] rounded-lg border border-[var(--primary)]/20 px-6">
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--muted)] text-base md:text-lg leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}