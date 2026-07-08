import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ConditionalCtaBanner } from '@/components/layout/ConditionalCtaBanner';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ConditionalCtaBanner />
      <Footer />
    </>
  );
}
