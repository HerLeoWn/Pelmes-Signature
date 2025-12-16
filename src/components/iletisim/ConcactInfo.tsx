'use client';

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-playfair font-bold text-[var(--primary)]">
        Bize Ulaşın
      </h2>

      <div className="h-96 rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.443100646923!2d28.89559857632532!3d41.0593060713435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab07bc7d3af81%3A0xd8b628e3110c62d6!2sKartaltepe%2C%2061.%20Sk.%2C%2034040%20Bayrampa%C5%9Fa%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1765868467846!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="space-y-6 text-lg text-[var(--muted)]">
        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6 text-[var(--primary)]" />
          <span>pelmesagaci@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-[var(--primary)]" />
          <span>+90 540 587 26 30</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-[var(--primary)]" />
          <span>Türkiye, İstanbul / Bayrampaşa - Kartaltepe mahallesi 61.sokak</span>
        </div>
      </div>

      <Button asChild className="btn-primary w-full py-7 text-xl">
        <a href="https://wa.me/905405872630" target="_blank" rel="noopener noreferrer">
          WhatsApp'tan Yaz →
        </a>
      </Button>
    </motion.div>
  );
}