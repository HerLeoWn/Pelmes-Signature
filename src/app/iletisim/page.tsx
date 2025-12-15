import ContactHero from "@/components/iletisim/ConcactHero";
import ContactForm from "@/components/iletisim/ConcactForm";
import ContactInfo from "@/components/iletisim/ConcactInfo";

export default function Iletisim() {
  return (
    <>
      <ContactHero />
      <section className="py-24 bg-[var(--background)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}