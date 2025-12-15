'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function OnboardingStep2({ setStep }: { setStep: (step: number) => void }) {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");

  const handleNext = () => {
    localStorage.setItem("cncUserInfo", JSON.stringify({ name, source }));
    setStep(3);
  };

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-playfair font-bold text-[var(--primary)] text-center">
        Biraz daha tanıyalım seni
      </h2>

      <input
        type="text"
        placeholder="Adın nedir?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full py-6 px-6 text-lg bg-[var(--card)] border border-[var(--primary)]/30 rounded-lg focus:border-[var(--primary)] focus:outline-none"
      />

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="w-full py-6 px-6 text-lg bg-[var(--card)] border border-[var(--primary)]/30 rounded-lg focus:border-[var(--primary)] text-foreground"
      >
        <option value="" className="bg-[var(--card)]">Bizi nereden buldun?</option>
        <option value="instagram" className="bg-[var(--card)]">Instagram</option>
        <option value="google" className="bg-[var(--card)]">Google arama</option>
        <option value="arkadas" className="bg-[var(--card)]">Arkadaş tavsiyesi</option>
        <option value="diger" className="bg-[var(--card)]">Diğer</option>
      </select>

      <button onClick={handleNext} className="btn-primary w-full py-4 text-xl">
        Devam Et →
      </button>
    </motion.div>
  );
}