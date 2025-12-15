import ExamplesSection from "@/components/examples/ExamplesSection";
import HeroSection from "@/components/hero/HeroSection";
// import NewsletterSection from "@/components/newsletter/NewsletterSection";
import WhyUsSection from "@/components/whyus/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUsSection/>
      <ExamplesSection/>
      {/* <NewsletterSection/> */}
      {/* Sonraki bölümler buraya gelecek */}
    </>
  );
}