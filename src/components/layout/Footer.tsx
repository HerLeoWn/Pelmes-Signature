'use client';

import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.46a6.34 6.34 0 1 0 6.76 6.33V9.93a8.28 8.28 0 0 0 4.78-2.24l-.11-1Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const legalLinks = [
    { name: "Gizlilik Politikası", href: "/gizlilik" },
    { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
    { name: "İade Koşulları", href: "/iade" },
  ];

  return (
    <footer className="relative border-t-4 border-[var(--primary)]/30 bg-[#2c2c2c] py-12 text-[#f5f0e6]">
      {/* Hafif altın overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#b68d40]/10 to-transparent opacity-40" />

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-10">
          {/* Sol - Logo + Açıklama */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]">
                Pelmes Signature
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Kişiye özel butik hediyeler – ahşap & lazer gravür, kıyafet baskıları.
            </p>
          </div>

          {/* Orta - Hızlı Linkler + İletişim */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-playfair font-bold text-[#b68d40] mb-4">
                Hızlı Linkler
              </h4>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#b68d40] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
              <h4 className="text-lg font-playfair font-bold text-[#b68d40] mb-4">
                İletişim
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#b68d40]" />
                  <span>pelmesagaci@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#b68d40]" />
                  <span>+90 540 587 26 30</span>
                </div>
              </div>
            </div>

          {/* Sağ - Sosyal Medya */}
          <div className="text-left">
            <h4 className="text-lg font-playfair font-bold text-[#b68d40] mb-4">
              Bizi Takip Edin
            </h4>
            <div className="flex space-x-2 justify-start">
              <a href="https://instagram.com/pelmes_signature" target="_blank" rel="noopener noreferrer" className="hover:text-[#b68d40] hover:scale-110 transition-all duration-300">
                <Instagram className="h-7 w-7" />
              </a>
              <a href="https://tiktok.com/@pelmes_signature" target="_blank" rel="noopener noreferrer" className="hover:text-[#b68d40] hover:scale-110 transition-all duration-300">
                <TikTokIcon className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Alt - Legal + Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#b68d40]/20 text-xs">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#b68d40] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p>© {currentYear} Pelmes Signature. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}