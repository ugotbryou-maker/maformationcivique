import { Navbar }     from '@/components/layout/Navbar';
import { Footer }     from '@/components/layout/Footer';
import { CtaBanner }  from '@/components/landing/CtaBanner';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CtaBanner />
      <Footer />
    </>
  );
}
