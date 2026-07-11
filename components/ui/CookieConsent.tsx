'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const FB_PIXEL_ID = '1709203707076110';
const STORAGE_KEY = 'cookie_consent';

type Consent = 'accepted' | 'refused' | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored) {
      setConsent(stored);
    } else {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    // Expose pour le lien "Gestion des cookies" du footer
    (window as unknown as Record<string, unknown>).openCookieConsent = () => setVisible(true);
    return () => {
      delete (window as unknown as Record<string, unknown>).openCookieConsent;
    };
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem(STORAGE_KEY, 'refused');
    setConsent('refused');
    setVisible(false);
  }

  return (
    <>
      {/* Meta Pixel — chargé uniquement après consentement */}
      {consent === 'accepted' && (
        <>
          {/* Meta Pixel */}
          <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${FB_PIXEL_ID}');
            fbq('track','PageView');
          `}</Script>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <noscript><img height="1" width="1" style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          /></noscript>
        </>
      )}

      {/* Bandeau */}
      {visible && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
          background: '#fff',
          borderTop: '1px solid #E2E8F0',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.10)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <p style={{ fontSize: 13, color: '#475569', margin: 0, flex: 1, minWidth: 260, lineHeight: 1.5 }}>
            🍪 Nous utilisons des cookies pour analyser notre audience et améliorer votre expérience.{' '}
            <Link href="/confidentialite" style={{ color: '#002395', textDecoration: 'underline' }}>
              En savoir plus
            </Link>
          </p>
          <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
            <button
              onClick={refuse}
              style={{
                padding: '8px 18px', borderRadius: 8, border: '1px solid #CBD5E1',
                background: '#fff', color: '#475569', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              style={{
                padding: '8px 18px', borderRadius: 8, border: 'none',
                background: 'var(--color-blue-france)', color: '#fff',
                fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Tout accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
