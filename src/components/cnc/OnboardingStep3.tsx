'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function OnboardingStep3({ onComplete }: { onComplete: () => void }) {
  const router = useRouter();
  const [wantRegister, setWantRegister] = useState<"yes" | "no" | null>(null);

  const handleContinue = () => {
    if (wantRegister === "yes") {
      router.push("/auth/register"); // Evet → register sayfasına
    } else {
      onComplete(); // Hayır → ürün sayfasına
    }
  };

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-playfair font-bold text-[var(--primary)] text-center">
        Son bir adım!
      </h2>
      <p className="text-center text-[var(--muted)] text-lg leading-relaxed">
        Özel indirimler, yeni ürünlerden ilk haberdar olma ve daha fazla avantaj için<br />
        hesabın olsun ister misin?
      </p>

      <div className="space-y-6">
        {/* Evet */}
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="register"
            checked={wantRegister === "yes"}
            onChange={() => setWantRegister("yes")}
            className="w-6 h-6 text-[var(--primary)] border-[var(--primary)]/50"
          />
          <span className="text-lg">Evet, hemen kayıt olayım 😊</span>
        </label>

        {/* Hayır */}
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="register"
            checked={wantRegister === "no"}
            onChange={() => setWantRegister("no")}
            className="w-6 h-6 text-[var(--primary)] border-[var(--primary)]/50"
          />
          <span className="text-lg">Hayır, üye olmadan devam edeyim</span>
        </label>
      </div>

      {/* Tek Devam Et butonu */}
      <Button
        onClick={handleContinue}
        disabled={!wantRegister}
        className="btn-primary w-full py-5 text-xl disabled:opacity-50"
      >
        Devam Et →
      </Button>
    </motion.div>
  );
}