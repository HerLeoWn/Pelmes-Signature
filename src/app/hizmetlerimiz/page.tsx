'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Hizmetlerimiz() {
  const { theme } = useTheme();
  const [mousePosLeft, setMousePosLeft] = useState({ x: 0, y: 0 });
  const [mousePosRight, setMousePosRight] = useState({ x: 0, y: 0 });

  const handleMouseMoveLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosLeft({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMoveRight = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosRight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const leftBg = theme === "dark" ? "#2c2c2c" : "#f5f0e6";
  const rightBg = theme === "dark" ? "#f5f0e6" : "#2c2c2c";
  const leftText = theme === "dark" ? "#f5f0e6" : "#2c2c2c";
  const rightText = theme === "dark" ? "#2c2c2c" : "#f5f0e6";

  return (
    <section className="relative h-screen flex bg-[var(--background)]">
      {/* Sol - CNC & Lazer */}
      <div
        className="relative w-1/2 h-full cursor-pointer overflow-hidden"
        onMouseMove={handleMouseMoveLeft}
        style={{ backgroundColor: leftBg }}
      >
        <Link href="/cnc-lazer" className="block h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />

          {/* Geliştirilmiş parallax – tek büyük gradient yuvarlak + 3D shadow */}
          <motion.div
            className="pointer-events-none absolute -inset-20 rounded-full blur-3xl shadow-2xl shadow-[#b68d40]/50"
            style={{
              background: "linear-gradient(135deg, #b68d40, #f5f0e6)",
              opacity: 0.4,
            }}
            animate={{
              x: mousePosLeft.x - 350,
              y: mousePosLeft.y - 400,
              rotate: (mousePosLeft.x / 800) * 10, // hafif 3D tilt
            }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
          />

          <div className="relative h-full flex flex-col justify-end p-16" style={{ color: leftText }}>
            <h3 className="text-5xl md:text-6xl font-playfair font-bold mb-8 opacity-90">
              Ahşap & Lazer Hediyelikler
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-lg opacity-80">
              Kişiye özel gravür, plaket, isimlik ve dekoratif ürünler.<br />
              Ev tipi CNC router ve lazer ile butik üretim.
            </p>
            <span className="mt-8 text-2xl font-medium text-[#b68d40]">
              Keşfet →
            </span>
          </div>
        </Link>
      </div>

      {/* Sağ - Kıyafet Baskı */}
      <div
        className="relative w-1/2 h-full cursor-pointer overflow-hidden"
        onMouseMove={handleMouseMoveRight}
        style={{ backgroundColor: rightBg }}
      >
        <Link href="/kiyafet-baski" className="block h-full">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/50" />

          {/* Geliştirilmiş parallax – tek büyük gradient yuvarlak + 3D shadow */}
          <motion.div
            className="pointer-events-none absolute -inset-20 rounded-full blur-3xl shadow-2xl shadow-[#b68d40]/50"
            style={{
              background: "linear-gradient(135deg, #b68d40, #f5f0e6)",
              opacity: 0.4,
            }}
            animate={{
              x: mousePosRight.x - 350,
              y: mousePosRight.y - 400,
              rotate: (mousePosRight.x / 800) * 10, // hafif 3D tilt
            }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
          />

          <div className="relative h-full flex flex-col justify-end p-16" style={{ color: rightText }}>
            <h3 className="text-5xl md:text-6xl font-playfair font-bold mb-8 opacity-90">
              Kişiye Özel Kıyafet Baskıları
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-lg opacity-80">
              Hoodie, tişört, sweatshirt üzerine özel baskılar.<br />
              Şirketlere, sevgililere veya sana özel tasarımlar (yakında).
            </p>
            <span className="mt-8 text-2xl font-medium text-[#b68d40]">
              Yakında Keşfet →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}