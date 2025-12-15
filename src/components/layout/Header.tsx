'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Info, Briefcase, Mail, Moon, Sun, LogIn, User } from "lucide-react";
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
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
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

        {/* Sağ - Tema + Giriş/Kayıt */}
        <div className="flex items-center space-x-4">
          {/* Giriş / Kayıt Ol */}
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors">
              <LogIn className="h-5 w-5" />
              Giriş Yap
            </Link>
            <Link href="/auth/register" className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors">
              <User className="h-5 w-5" />
              Kayıt Ol
            </Link>
          </div>

          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)]"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Tema değiştir</span>
            </Button>
          )}

          {/* Mobil Menü */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-8 mt-8">
                <Link href="/" className="text-2xl font-bold">
                  Pelmes Signature
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, i) => (
                    <MotionDiv key={item.href} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 text-lg font-medium transition-colors",
                          pathname === item.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    </MotionDiv>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}