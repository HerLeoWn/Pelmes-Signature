'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "", // sadece 1 seçim
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      }, 4000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-playfair font-bold text-[var(--primary)]">
        Bize Yazın
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Input
          placeholder="Ad Soyad"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="py-6 text-lg border-[var(--primary)]/30 focus:border-[var(--primary)] bg-[var(--card)] placeholder:text-[var(--muted)]/70"
        />
        <Input
          type="email"
          placeholder="E-posta adresiniz"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="py-6 text-lg border-[var(--primary)]/30 focus:border-[var(--primary)] bg-[var(--card)] placeholder:text-[var(--muted)]/70"
        />
        <Input
          placeholder="Telefon (opsiyonel)"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="py-6 text-lg border-[var(--primary)]/30 focus:border-[var(--primary)] bg-[var(--card)] placeholder:text-[var(--muted)]/70"
        />

        {/* Radio'lar – Yan yana, navigation gibi */}
        <RadioGroup
          value={formData.category}
          onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
          className="flex flex-wrap gap-7"
        >
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="ahsap-lazer" id="ahsap" className="border-[var(--primary)] text-[var(--primary)]" />
            <Label htmlFor="ahsap" className="text-sm cursor-pointer hover:text-[var(--primary)] transition-colors">
              Ahşap & Lazer Hediyelikler
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="kiyafet" id="kiyafet" className="border-[var(--primary)] text-[var(--primary)]" />
            <Label htmlFor="kiyafet" className="text-sm  cursor-pointer hover:text-[var(--primary)] transition-colors">
              Kişiye Özel Kıyafet Baskıları
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="her-ikisi" id="her-ikisi" className="border-[var(--primary)] text-[var(--primary)]" />
            <Label htmlFor="her-ikisi" className="text-sm  cursor-pointer hover:text-[var(--primary)] transition-colors">
              Her ikisi de
            </Label>
          </div>
        </RadioGroup>

        <Textarea
          placeholder="Mesajınız..."
          rows={8}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          className="py-2 text-lg border-[var(--primary)]/30 focus:border-[var(--primary)] bg-[var(--card)] placeholder:text-[var(--muted)]/70"
        />

        <Button type="submit" className="btn-primary w-full py-7 text-xl">
          {submitted ? "Gönderildi ✓" : "Gönder"}
        </Button>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--primary)] text-center text-lg"
        >
          Teşekkürler! En kısa sürede size dönüş yapacağız.
        </motion.p>
      )}
    </motion.div>
  );
}