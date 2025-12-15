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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.123456789!2d28.979530!3d41.015320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzU1LjIiTiAyOMKwNTgnNDYuMyJF!5e0!3m2!1str!2str!4v1700000000000"
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
          <span>info@pelmes.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-[var(--primary)]" />
          <span>+90 555 123 45 67</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-[var(--primary)]" />
          <span>İstanbul, Türkiye</span>
        </div>
      </div>

      <Button asChild className="btn-primary w-full py-7 text-xl">
        <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
          WhatsApp'tan Yaz →
        </a>
      </Button>
    </motion.div>
  );
}