import CTASection from "@/components/cta/CtaSection";
import ExamplesSection from "@/components/examples/ExamplesSection";
import FAQSection from "@/components/faq/FaqSection";
import HeroSection from "@/components/hero/HeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
// import NewsletterSection from "@/components/newsletter/NewsletterSection";
import WhyUsSection from "@/components/whyus/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUsSection/>
      <ExamplesSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <CTASection/>
      {/* <NewsletterSection/> */}
      {/* Sonraki bölümler buraya gelecek */}
    </>
  );
}