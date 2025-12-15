'use client';

import Link from "next/link";
import { Facebook, Instagram, Mail, Send, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative border-t-4 border-gradient-to-r from-transparent via-[#b68d40]/40 to-transparent bg-[var(--background)] py-16">
      {/* Swirl dekor hafif */}
      <div className="gold-swirl-decor absolute inset-0 opacity-20">
        <div className="swirl-top-left"></div>
        <div className="swirl-bottom-right"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sol - Logo + Açıklama + İletişim */}
          <div className="text-left">
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl md:text-5xl font-playfair font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40] drop-shadow-lg">
                Pelmes Signature
              </span>
            </Link>
            <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-sm">
              Kişiye özel butik hediyeler – ahşap gravür, lazer kesim ve kıyafet baskıları.<br />
              Kalite, anlam ve tamamen size özel tasarımlar.
            </p>

            {/* Eksik hissi için iletişim bilgileri */}
            <div className="space-y-3 text-[var(--muted)]">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--primary)]" />
                <span>info@pelmes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--primary)]" />
                <span>+90 555 123 45 67</span>
              </div>
            </div>
          </div>

          {/* Orta - Güven vurgusu (eksik hissi giderir) */}
          <div className="text-center flex flex-col items-center justify-center">
            <h4 className="text-2xl font-playfair font-bold text-[var(--primary)] mb-4">
              Kalite & Güven
            </h4>
            <p className="text-[var(--muted)] max-w-xs">
              Her ürün özenle hazırlanır, memnuniyet garantisiyle teslim edilir.<br />
              Güvenle alışveriş yapın.
            </p>
          </div>

          {/* Sağ - Newsletter + Sosyal */}
          <div className="text-left md:text-right">
            <h4 className="text-2xl font-playfair font-bold text-[var(--primary)] mb-6">
              Gelişmelerden Haberdar Ol
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                type="email"
                placeholder="E-posta adresin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[var(--card)] border-[var(--primary)]/30 focus:border-[var(--primary)] text-foreground"
              />
              <Button type="submit" className="btn-primary">
                {submitted ? "Gönderildi ✓" : <Send className="h-5 w-5" />}
              </Button>
            </form>

            <div className="flex space-x-8 justify-start md:justify-end">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-300">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-300">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-300">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-12 border-t border-[var(--primary)]/20">
          <p className="text-sm text-[var(--muted)]">
            © {currentYear} Pelmes Signature. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}