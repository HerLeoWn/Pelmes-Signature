'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function OnboardingStep1({ setStep }: { setStep: (step: number) => void }) {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [mainPreference, setMainPreference] = useState("");

  const togglePreference = (value: string) => {
    setPreferences(prev => 
      prev.includes(value) 
        ? prev.filter(p => p !== value) 
        : [...prev, value]
    );
  };

  const handleNext = () => {
    const data = { preferences, mainPreference: preferences.length > 1 ? mainPreference : preferences[0] || "" };
    localStorage.setItem("cncPreferences", JSON.stringify(data));
    setStep(2);
  };

  const showMainQuestion = preferences.length > 1;

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-playfair font-bold text-[var(--primary)] text-center">
        Seni daha iyi tanıyabilir miyiz?
      </h2>
      <p className="text-center text-[var(--muted)]">
        Genellikle hangi hediye tarzını tercih edersin? (Birden fazla seçebilirsin)
      </p>

      <div className="space-y-4">
        {["bireysel", "sevgililer", "ofis"].map((item) => (
          <label key={item} className="flex items-center gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.includes(item)}
              onChange={() => togglePreference(item)}
              className="w-6 h-6 rounded border-[var(--primary)]/50 text-[var(--primary)] focus:ring-[var(--primary)]"
            />
            <span className="text-lg capitalize text-[var(--primary)]">
              {item === "bireysel" ? "Bireysel hediyelikler" : 
               item === "sevgililer" ? "Sevgililer için romantik ürünler" : 
               "Ofis ve kurumsal hediyeler"}
            </span>
          </label>
        ))}
      </div>

      {/* Birden fazla seçilirse ekstra soru */}
      <AnimatePresence>
        {showMainQuestion && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <p className="text-center text-[var(--muted)]">
              Hangisi daha çok ilgini çekiyor?
            </p>
            <div className="grid grid-cols-3 gap-4">
              {["Bireysel", "Sevgililer", "Ofis"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setMainPreference(opt.toLowerCase())}
                  className={`py-4 rounded-lg border transition-all ${
                    mainPreference === opt.toLowerCase()
                      ? "bg-[var(--primary)] text-[var(--background)] border-[var(--primary)]"
                      : "border-[var(--primary)]/30 hover:border-[var(--primary)]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleNext}
        disabled={preferences.length === 0 || (showMainQuestion && !mainPreference)}
        className="btn-primary w-full py-4 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Devam Et →
      </button>
    </motion.div>
  );
}