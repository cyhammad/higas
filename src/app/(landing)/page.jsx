import Hero from "./_components/Hero";
import Features from "./_components/Features";
import HowItWorks from "./_components/HowItWorks";
import ForDrivers from "./_components/ForDrivers";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { getTranslations } from "./_translations";

export default async function LandingPage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang || "en";
  const t = getTranslations(lang);

  return (
    <main>
      <Header t={t.header} lang={lang} />
      <Hero t={t.hero} />
      <Features t={t.features} />
      <HowItWorks t={t.howItWorks} />
      <ForDrivers t={t.forDrivers} />
      <CTA t={t.cta} />
      <Footer t={t.footer} lang={lang} />
    </main>
  );
}
