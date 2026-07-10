import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ConditionalCtaBanner } from '@/components/layout/ConditionalCtaBanner';
import { IntentPopup } from '@/components/app/IntentPopup';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  let isLoggedIn = false;
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
  } catch { /* Supabase indisponible */ }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ConditionalCtaBanner />
      <Footer />
      <IntentPopup isLoggedIn={isLoggedIn} />
    </>
  );
}
