'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // giriş kontrolü için (şimdilik mock)

export default function CncNavbar() {
  // Mock giriş durumu – gerçekte NextAuth ile bağlayacağız
  const [user, setUser] = useState<{ name: string } | null>(null); // null = giriş yok

  const navLinks = [
    { name: "Anasayfa", href: "/cnc-lazer/anasayfa" },
    { name: "Kişiye Özel Tasarımlar", href: "/cnc-lazer/kisiye-ozel" },
    { name: "Sevgililere Özel", href: "/cnc-lazer/sevgililer" },
    { name: "Ofis İçin Tasarımlar", href: "/cnc-lazer/ofis" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#1f3a2d]/60 bg-[#2c2c2c]/95 backdrop-blur-md shadow-lg">
      <div className="container max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Sol - Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="flex items-center gap-4">
            <span className="text-4xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#1f3a2d]">
              Pelmes Signature
            </span>
            <span className="text-lg text-[#b68d40] font-medium">Ahşap & Lazer Atölyesi</span>
          </Link>
        </motion.div>

        {/* Orta - Nav Linkler */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#f5f0e6]/90 hover:text-[#b68d40] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#b68d40] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Sağ - Giriş / Kayıt */}
        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[#f5f0e6]">Hoş geldin, {user.name}</span>
              <Button variant="outline" className="border-[#b68d40] text-[#b68d40] hover:bg-[#b68d40] hover:text-[#2c2c2c]">
                Çıkış Yap
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-[#f5f0e6] hover:text-[#b68d40]">
                  Giriş Yap
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="btn-primary">
                  Kayıt Ol
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}