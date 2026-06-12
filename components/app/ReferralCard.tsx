'use client';

import { useState } from 'react';
import { Gift, Copy, Check, Share2 } from 'lucide-react';

interface Props {
  referralLink: string;
  referredCount?: number;
}

export function ReferralCard({ referralLink, referredCount = 0 }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Presse-papier indisponible (vieux navigateur) — on ignore silencieusement
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'maformationcivique.fr',
          text: 'Je prépare mon titre de séjour avec maformationcivique.fr — rejoins-moi, c’est gratuit pour commencer !',
          url: referralLink,
        });
        return;
      } catch {
        // Annulé par l'utilisateur ou non supporté → on retombe sur la copie
      }
    }
    handleCopy();
  };

  return (
    <div
      style={{
        padding: '24px',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--gradient-primary)',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flexWrap: 'wrap' }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Gift size={22} color="#fff" />
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h2 style={{ fontSize: 'var(--font-size-base)', color: '#fff', fontWeight: 600, marginBottom: '4px' }}>
            Parrainez un proche
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.85)', marginBottom: '16px', lineHeight: 1.5 }}>
            {referredCount > 0
              ? `${referredCount} proche${referredCount > 1 ? 's' : ''} inscrit${referredCount > 1 ? 's' : ''} grâce à vous. Merci, continuez !`
              : 'Une personne de votre entourage prépare aussi son titre de séjour ou sa naturalisation ? Partagez votre lien : il/elle bénéficiera de -20% sur son premier mois Premium.'}
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255,255,255,0.95)',
                color: 'var(--color-blue-france)',
                border: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '44px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Lien copié !' : 'Copier mon lien'}
            </button>
            <button
              onClick={handleShare}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '44px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <Share2 size={16} />
              Partager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
