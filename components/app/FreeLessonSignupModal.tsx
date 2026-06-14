'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

const STORAGE_KEY = 'mfc_signup_popup_dismissed_at';
const SHOW_DELAY_MS = 20_000;
const REAPPEAR_AFTER_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours

/**
 * Pop-up affiché aux visiteurs non connectés pendant une leçon gratuite,
 * après un délai de 20s. Encourage la création de compte (gratuit ou
 * Premium). Mémorise la fermeture en localStorage pour ne pas réapparaître
 * avant 7 jours.
 */
export function FreeLessonSignupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastDismissed: number | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      lastDismissed = raw ? parseInt(raw, 10) : null;
    } catch {
      // localStorage indisponible (navigation privée stricte) — on continue
    }

    if (lastDismissed && Date.now() - lastDismissed < REAPPEAR_AFTER_MS) {
      return;
    }

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // Non bloquant
    }
  }, []);

  return (
    <Modal open={open} onClose={handleClose} title="Continuez votre progression" maxWidth={460}>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
        Vous suivez cette leçon en tant que visiteur. Créez un compte gratuit
        pour sauvegarder votre progression, gagner des points d&apos;expérience
        et accéder à vos badges.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
        {[
          'Suivi de votre progression et de vos badges',
          'Accès aux quiz de fin de leçon',
          "Programme complet en illimité avec l'offre Premium",
        ].map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <CheckCircle size={14} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>

      <Link
        href="/inscription?plan=premium"
        onClick={handleClose}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          width: '100%', padding: '14px 24px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--gradient-primary)',
          color: '#fff',
          fontSize: 'var(--font-size-base)', fontWeight: 600,
          textDecoration: 'none',
          marginBottom: '10px',
          minHeight: '52px',
        }}
      >
        <Sparkles size={16} /> Découvrir l&apos;offre Premium
      </Link>

      <Link
        href="/inscription"
        onClick={handleClose}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '100%', padding: '13px',
          borderRadius: 'var(--radius-pill)',
          background: 'transparent',
          color: 'var(--color-text-secondary)',
          border: 'var(--border-default)',
          fontSize: 'var(--font-size-sm)', fontWeight: 500,
          textDecoration: 'none',
          minHeight: '44px',
        }}
      >
        Créer un compte gratuit
      </Link>
    </Modal>
  );
}
