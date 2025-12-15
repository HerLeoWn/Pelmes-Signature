import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function CncFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t-4 border-[#1f3a2d]/60 bg-[#2c2c2c] py-16 text-white">
      {/* Hafif altın overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b68d40]/5 to-transparent opacity-30" />

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sol - Logo + Kısa Yazı */}
          <div className="text-left">
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#1f3a2d] drop-shadow-lg">
                Pelmes Signature
              </span>
              <span className="block text-lg text-[#b68d40] mt-1">Ahşap & Lazer Atölyesi</span>
            </Link>
            <p className="text-base text-gray-300 leading-relaxed max-w-sm">
              Evde başlayan butik üretim. Her parça size özel, el emeğiyle yapılıyor. Büyüdükçe atölyemiz de büyüyecek!
            </p>
          </div>

          {/* Orta - İletişim Bilgileri */}
          <div className="text-center flex flex-col items-center justify-center">
            <h4 className="text-2xl font-playfair font-bold text-[#b68d40] mb-6">
              Bize Ulaşın
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#b68d40]" />
                <span>info@pelmes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#b68d40]" />
                <span>+90 555 123 45 67</span>
              </div>
            </div>
          </div>

          {/* Sağ - Sosyal + Copyright */}
          <div className="text-right flex flex-col items-end">
            <div className="flex space-x-8 mb-8">
              <a href="#" className="hover:text-[#b68d40] transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="hover:text-[#b68d40] transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="hover:text-[#b68d40] transition-all duration-300 transform hover:scale-110">
                <Mail className="h-8 w-8" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} Pelmes Signature. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}