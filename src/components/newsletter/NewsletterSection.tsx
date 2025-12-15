// 'use client';

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { motion } from "framer-motion";
// import { Mail } from "lucide-react";
// import { useState } from "react";

// export default function NewsletterSection() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       setSubmitted(true);
//       // Gerçek backend gelince buraya API çağrısı koyarız
//       setTimeout(() => setSubmitted(false), 3000);
//       setEmail("");
//     }
//   };

//   return (
//     <section className="relative py-24 bg-[var(--background)] overflow-hidden">
//       {/* Swirl dekor */}
//       <div className="gold-swirl-decor absolute inset-0 opacity-30">
//         <div className="swirl-top-left"></div>
//         <div className="swirl-bottom-right"></div>
//       </div>

//       <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#b68d40] via-[#d4a65a] to-[#b68d40]"
//         >
//           Gelişmelerden Haberdar Ol
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="text-lg md:text-xl text-[var(--muted)] mb-12 max-w-2xl mx-auto leading-relaxed"
//         >
//           Yeni tasarımlar, özel indirimler ve Pelmes Signature'dan haberler için bültene üye ol.<br />
//           İlk sen haberdar ol, fırsatları kaçırma.
//         </motion.p>

//         <motion.form
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.8 }}
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
//         >
//           <div className="relative flex-1">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--muted)] pointer-events-none" />
//             <Input
//               type="email"
//               placeholder="E-posta adresin"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="pl-12 pr-4 py-6 text-lg bg-[var(--card)] border-[var(--primary)]/30 focus:border-[var(--primary)]"
//             />
//           </div>
//           <Button type="submit" className="btn-primary px-10 py-6 text-lg">
//             {submitted ? "Üye Olundu ✓" : "Üye Ol"}
//           </Button>
//         </motion.form>

//         {submitted && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-6 text-[var(--primary)] text-sm"
//           >
//             Teşekkürler! Hoş geldin maili birazdan gelecek.
//           </motion.p>
//         )}
//       </div>
//     </section>
//   );
// }