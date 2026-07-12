import type { Metadata } from 'next';
import { Hero }            from '@/components/landing/Hero';
import { TrustBar }        from '@/components/landing/TrustBar';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { ModulesSection }  from '@/components/landing/ModulesSection';
import { ExamInfo }        from '@/components/landing/ExamInfo';
import { B2BCta }          from '@/components/landing/B2BCta';
import { Testimonials }    from '@/components/landing/Testimonials';
import { Pricing }         from '@/components/landing/Pricing';

export const metadata: Metadata = {
  title: { absolute: 'Examen civique & test de langue 2026 — maformationcivique.fr' },
  description: "Préparez l'examen civique 2026 et le test de langue (A2, B1, B2) pour votre titre de séjour ou naturalisation. 177 questions officielles, 2 700 exercices de français, examens blancs gratuits.",
  alternates: { canonical: 'https://www.maformationcivique.fr' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BenefitsSection />
      <ModulesSection />
      <ExamInfo />
      <B2BCta />
      <Testimonials />
      <Pricing />
    </>
  );
}
