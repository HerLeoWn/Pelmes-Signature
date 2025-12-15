'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Home, Info, Briefcase, Mail, Moon, Sun, LogIn, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const MotionDiv = motion.div;

const navItems = [
  { name: "Anasayfa", href: "/", icon: Home },
  { name: "Hakkımızda", href: "/hakkimizda", icon: Info },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz", icon: Briefcase },
  { name: "İletişim", href: "/iletisim", icon: Mail },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[var(--primary)]/20 bg-[var(--background)]/95 backdrop-blur-md shadow-md">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[#d4a65a]">
              Pelmes Signature
            </span>
          </Link>
        </MotionDiv>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, i) => (
            <MotionDiv
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-[var(--primary)]",
                  pathname === item.href ? "text-[var(--primary)]" : "text-[var(--muted)]"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </MotionDiv>
          ))}
        </nav>

        {/* Sağ - Giriş/Kayıt + Tema (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/auth/login" className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors">
            <LogIn className="h-5 w-5" />
            Giriş Yap
          </Link>
          <Link href="/auth/register" className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors">
            <User className="h-5 w-5" />
            Kayıt Ol
          </Link>

          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)]"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>

        {/* Mobil Hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-[var(--primary)] hover:bg-[var(--primary)]/10">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-[var(--background)]/95 backdrop-blur-lg border-l-4 border-[var(--primary)]/40 p-0">
            <div className="flex flex-col h-full">
              {/* Üst Sağ: Çarpı + Tema butonu (aynı hizada) */}
              <div className="flex items-center justify-between p-6">
                {mounted && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)]"
                  >
                    {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  </Button>
                )}
              </div>

              <div className="flex flex-col items-center justify-center flex-1 space-y-12">
                {/* Logo büyük */}
                <Link href="/" className="mb-12">
                  <span className="text-4xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[#d4a65a]">
                    Pelmes Signature
                  </span>
                </Link>

                {/* Menü linkleri */}
                <nav className="flex flex-col space-y-8 text-center">
                  {navItems.map((item, i) => (
                    <MotionDiv
                      key={item.href}
                      custom={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-center space-x-4 text-2xl font-medium transition-all duration-300 hover:text-[var(--primary)]",
                            pathname === item.href ? "text-[var(--primary)]" : "text-foreground"
                          )}
                        >
                          <item.icon className="h-8 w-8" />
                          <span>{item.name}</span>
                        </Link>
                      </SheetClose>
                    </MotionDiv>
                  ))}
                </nav>

                {/* Giriş / Kayıt Ol – Yan yana */}
                <div className="flex items-center gap-12 mt-16">
                  <SheetClose asChild>
                    <Link href="/auth/login" className="flex items-center gap-3 text-xl hover:text-[var(--primary)] transition-colors">
                      <LogIn className="h-7 w-7" />
                      Giriş Yap
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/auth/register" className="flex items-center gap-3 text-xl hover:text-[var(--primary)] transition-colors">
                      <User className="h-7 w-7" />
                      Kayıt Ol
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}