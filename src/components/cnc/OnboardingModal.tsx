'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";

export default function OnboardingModal() {
  const router = useRouter();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const visited = localStorage.getItem("cncOnboardingCompleted");
    if (!visited) {
      setShowOnboarding(true);
    } else {
      router.push("/cnc-lazer/anasayfa"); // zaten tamamlamışsa direkt ana sayfaya
    }
  }, [router]);

  const handleSkip = () => {
    localStorage.setItem("cncOnboardingCompleted", "true");
    router.push("/cnc-lazer/anasayfa");
  };

  const handleComplete = () => {
    localStorage.setItem("cncOnboardingCompleted", "true");
    router.push("/cnc-lazer/anasayfa");
  };

  if (!showOnboarding) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-[var(--card)] rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-8 md:p-12"
      >
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--primary)] text-lg font-medium"
        >
          Atla →
        </button>

        <AnimatePresence mode="wait">
          {currentStep === 1 && <OnboardingStep1 setStep={setCurrentStep} />}
          {currentStep === 2 && <OnboardingStep2 setStep={setCurrentStep} />}
          {currentStep === 3 && <OnboardingStep3 setStep={setCurrentStep} onComplete={handleComplete} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}