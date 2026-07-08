import { Hero }            from '@/components/landing/Hero';
import { TrustBar }        from '@/components/landing/TrustBar';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { ModulesSection }  from '@/components/landing/ModulesSection';
import { ExamInfo }        from '@/components/landing/ExamInfo';
import { B2BCta }          from '@/components/landing/B2BCta';
import { Testimonials }    from '@/components/landing/Testimonials';
import { Pricing }         from '@/components/landing/Pricing';

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
