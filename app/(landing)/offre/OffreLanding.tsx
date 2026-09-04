'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  Check, Clock, ShieldCheck, Sparkles, Star, Infinity as InfinityIcon,
  BookOpen, Languages, Target, Brain, ArrowRight,
} from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { fbqTrack } from '@/lib/fbq';
import { EXAMEN_CIVIQUE, NIVEAUX_LANGUE } from '@/lib/reglementation';

/* ── Offres mises en avant : volontairement 2 seulement ────────────────────
   Une landing publicitaire convertit mieux avec un choix binaire qu'avec les
   5 paliers de la page /#tarifs. Civique seul et Langue seule restent
   accessibles depuis le site, mais ne sont pas proposés ici.              */
const OFFERS = {
  bundle: { plan: 'bundle', label: 'Complet', price: 10, old: 20, value: 10 },
  lifetime: { plan: 'lifetime', label: 'Accès à vie', price: 20, old: null, value: 20 },
} as const;

function trackCheckout(offer: { plan: string; value: number }) {
  fbqTrack('InitiateCheckout', {
    value: offer.value,
    currency: 'EUR',
    content_name: offer.plan,
  });
}

export function OffreLanding() {
  useEffect(() => {
    fbqTrack('ViewContent', { content_name: 'landing_offre', currency: 'EUR', value: 10 });
  }, []);

  return (
    <div style={{ background: '#fff', color: 'var(--color-text-primary)' }}>

      {/* ── En-tête minimal : logo + CTA, aucun lien de navigation ──────── */}
      <header className="ol-header">
        <div className="ol-container ol-header-inner">
          <BrandLogo height={32} variant="color" />
          <Link
            href={`/inscription?plan=${OFFERS.bundle.plan}`}
            onClick={() => trackCheckout(OFFERS.bundle)}
            className="ol-btn ol-btn-sm"
          >
            Commencer
          </Link>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="ol-hero">
        <div className="ol-hero-bg" aria-hidden />
        <div className="ol-container ol-hero-inner">
          <span className="ol-badge">
            <Sparkles size={13} /> Obligatoire depuis janvier 2026
          </span>

          <h1 className="ol-h1">
            Réussissez votre<br />
            <span className="ol-h1-accent">examen civique</span><br />
            du premier coup.
          </h1>

          <p className="ol-hero-sub">
            {EXAMEN_CIVIQUE.nbQuestions} questions en {EXAMEN_CIVIQUE.dureeMinutes} minutes,{' '}
            {EXAMEN_CIVIQUE.seuilReussite}/{EXAMEN_CIVIQUE.nbQuestions} pour réussir.
            Entraînez-vous sur les <strong>177 questions officielles</strong> et progressez
            en français de {NIVEAUX_LANGUE.CSP} à {NIVEAUX_LANGUE.naturalisation} — tout
            au même endroit.
          </p>

          <div className="ol-hero-cta">
            <Link
              href={`/inscription?plan=${OFFERS.bundle.plan}`}
              onClick={() => trackCheckout(OFFERS.bundle)}
              className="ol-btn ol-btn-lg"
            >
              Commencer pour 10 €/mois <ArrowRight size={17} />
            </Link>
            <p className="ol-hero-note">
              <ShieldCheck size={13} /> Sans engagement · Annulable en 1 clic · Paiement sécurisé
            </p>
          </div>

          <div className="ol-stats">
            {[
              { n: '177', l: 'questions officielles' },
              { n: '2 700+', l: 'exercices de français' },
              { n: '4', l: 'langues disponibles' },
              { n: '80 %+', l: 'de réussite visée' },
            ].map((s) => (
              <div key={s.l} className="ol-stat">
                <span className="ol-stat-n">{s.n}</span>
                <span className="ol-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── L'ENJEU ─────────────────────────────────────────────────────── */}
      <section className="ol-section ol-section-gray">
        <div className="ol-container ol-narrow">
          <h2 className="ol-h2">Un examen que vous ne pouvez pas rater</h2>
          <p className="ol-lead">
            Depuis 2026, l&apos;examen civique conditionne votre carte de séjour pluriannuelle,
            votre carte de résident ou votre naturalisation. Un échec, c&apos;est une démarche
            retardée de plusieurs mois — parfois davantage.
          </p>
          <div className="ol-problem">
            {[
              { t: `${EXAMEN_CIVIQUE.seuilReussite} bonnes réponses sur ${EXAMEN_CIVIQUE.nbQuestions}`, d: 'Le seuil est strict : 80 % de réussite exigés, sans rattrapage immédiat.' },
              { t: 'Un niveau de français exigé', d: `${NIVEAUX_LANGUE.CSP} pour la carte pluriannuelle, ${NIVEAUX_LANGUE.carteResident} pour la carte de résident, ${NIVEAUX_LANGUE.naturalisation} pour la naturalisation.` },
              { t: 'Des questions précises', d: 'Institutions, valeurs, histoire, vie quotidienne : le programme est vaste et officiel.' },
            ].map((p) => (
              <div key={p.t} className="ol-problem-card">
                <p className="ol-problem-t">{p.t}</p>
                <p className="ol-problem-d">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONCTIONNALITÉS ─────────────────────────────────────────────── */}
      <section className="ol-section">
        <div className="ol-container">
          <h2 className="ol-h2 ol-center">Tout ce qu&apos;il faut pour réussir</h2>
          <p className="ol-lead ol-center">
            Une seule plateforme pour l&apos;examen civique <em>et</em> le test de langue.
          </p>

          <div className="ol-features">
            {[
              { Icon: BookOpen, t: 'Les 177 questions officielles', d: '5 modules, 19 leçons couvrant tout le programme : République, droits, institutions, histoire, vie en France.' },
              { Icon: Target, t: 'Examens blancs illimités', d: `${EXAMEN_CIVIQUE.nbQuestions} questions chronométrées en conditions réelles. Score immédiat et lacunes identifiées.` },
              { Icon: Languages, t: 'Français A2 → B2', d: '2 700 exercices, préparation OFII, DELF et entretien de naturalisation.' },
              { Icon: Brain, t: 'IA pédagogique', d: "Après chaque erreur, l'IA vous explique la bonne réponse en 2-3 phrases simples." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="ol-feature">
                <div className="ol-feature-icon"><Icon size={20} color="#fff" /></div>
                <p className="ol-feature-t">{t}</p>
                <p className="ol-feature-d">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 ÉTAPES ────────────────────────────────────────────────────── */}
      <section className="ol-section ol-section-gray">
        <div className="ol-container">
          <h2 className="ol-h2 ol-center">Prêt à réviser en 3 minutes</h2>
          <div className="ol-steps">
            {[
              { n: '1', t: 'Créez votre compte', d: 'Un email et un mot de passe. Pas de carte bancaire pour découvrir le module 1.' },
              { n: '2', t: 'Choisissez votre démarche', d: 'Carte de séjour, carte de résident ou naturalisation : le parcours s\'adapte.' },
              { n: '3', t: 'Révisez et testez-vous', d: 'Leçons courtes, quiz, examens blancs chronométrés. Progression suivie au quotidien.' },
            ].map((s) => (
              <div key={s.n} className="ol-step">
                <span className="ol-step-n">{s.n}</span>
                <div>
                  <p className="ol-step-t">{s.t}</p>
                  <p className="ol-step-d">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS — cœur de la conversion ──────────────────────────────── */}
      <section className="ol-section" id="tarifs">
        <div className="ol-container">
          <h2 className="ol-h2 ol-center">Deux façons d&apos;y accéder</h2>
          <p className="ol-lead ol-center">
            Civique <strong>et</strong> langue française inclus dans les deux formules.
          </p>

          <div className="ol-pricing">
            {/* Mensuel */}
            <div className="ol-price-card">
              <p className="ol-price-label">Complet — mensuel</p>
              <div className="ol-price-row">
                <span className="ol-price">10 €</span>
                <span className="ol-price-old">20 €</span>
                <span className="ol-price-per">/ mois</span>
              </div>
              <p className="ol-price-save">−50 % à vie sur le tarif initial</p>
              <ul className="ol-price-list">
                {['Examen civique complet (177 questions)', 'Français A2, B1, B2 + examens blancs', 'IA pédagogique et suivi de progression', 'Sans engagement — résiliable à tout moment'].map((f) => (
                  <li key={f}><Check size={15} color="#1D9E75" /> {f}</li>
                ))}
              </ul>
              <Link
                href={`/inscription?plan=${OFFERS.bundle.plan}`}
                onClick={() => trackCheckout(OFFERS.bundle)}
                className="ol-btn ol-btn-block"
              >
                Commencer — 10 €/mois
              </Link>
            </div>

            {/* Lifetime — mis en avant */}
            <div className="ol-price-card ol-price-featured">
              <span className="ol-price-tag"><InfinityIcon size={12} /> Meilleure valeur</span>
              <p className="ol-price-label ol-price-label-light">Accès à vie — paiement unique</p>
              <div className="ol-price-row">
                <span className="ol-price ol-price-light">20 €</span>
                <span className="ol-price-per ol-price-per-light">une seule fois</span>
              </div>
              <p className="ol-price-save ol-price-save-light">Rentabilisé en 2 mois</p>
              <ul className="ol-price-list ol-price-list-light">
                {['Tout le contenu civique et langue', 'Examens blancs illimités, à vie', 'Mises à jour futures incluses', 'Aucun abonnement, aucun renouvellement'].map((f) => (
                  <li key={f}><Check size={15} color="#6BDFB8" /> {f}</li>
                ))}
              </ul>
              <Link
                href={`/inscription?plan=${OFFERS.lifetime.plan}`}
                onClick={() => trackCheckout(OFFERS.lifetime)}
                className="ol-btn ol-btn-block ol-btn-invert"
              >
                Obtenir l&apos;accès à vie — 20 €
              </Link>
              <p className="ol-price-legal">
                « Accès à vie » = valable tant que la plateforme est exploitée. Détail dans les{' '}
                <Link href="/cgu" target="_blank" className="ol-legal-link">CGU, art. 4.4bis</Link>.
              </p>
            </div>
          </div>

          <p className="ol-guarantee">
            <ShieldCheck size={15} /> Paiement sécurisé par Stripe · Vos coordonnées bancaires ne
            transitent jamais par nos serveurs
          </p>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ─────────────────────────────────────────────────── */}
      <section className="ol-section ol-section-gray">
        <div className="ol-container">
          <h2 className="ol-h2 ol-center">Ils ont obtenu leur titre</h2>
          <div className="ol-testimonials">
            {[
              { n: 'Fatima El Amrani', r: 'Carte de séjour pluriannuelle — obtenue', t: "J'ai pu me préparer en arabe et en français. J'ai obtenu 87 % à mon examen civique du premier coup. Les explications de l'IA après chaque erreur sont vraiment utiles." },
              { n: 'Emre Yilmaz', r: 'Naturalisation — accord préfectoral', t: "Les examens blancs m'ont permis de gérer le stress du chronomètre. La progression avec les badges m'a motivé à travailler chaque jour." },
              { n: 'Maria Santos', r: 'Carte de résident — titre obtenu', t: "En tant que Portugaise, j'ai utilisé la version en portugais pour comprendre les nuances. Le module sur les institutions était particulièrement clair." },
            ].map((t) => (
              <figure key={t.n} className="ol-testimonial">
                <div className="ol-stars">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={13} fill="#F5A623" color="#F5A623" />)}
                </div>
                <blockquote className="ol-quote">« {t.t} »</blockquote>
                <figcaption>
                  <span className="ol-testimonial-n">{t.n}</span>
                  <span className="ol-testimonial-r">{t.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ──────────────────────────────────────────────────── */}
      <section className="ol-section">
        <div className="ol-container ol-narrow">
          <h2 className="ol-h2 ol-center">Les questions qu&apos;on nous pose</h2>
          {[
            { q: 'Est-ce que je peux annuler quand je veux ?', a: "Oui. L'abonnement mensuel est sans engagement : vous résiliez en un clic depuis votre espace personnel, et l'accès reste actif jusqu'à la fin du mois payé." },
            { q: 'Cette formation remplace-t-elle la formation officielle de l\'OFII ?', a: "Non, et c'est important : la formation civique officielle délivrée par l'OFII reste obligatoire. Notre plateforme est un outil de préparation complémentaire, pour arriver à l'examen en confiance." },
            { q: 'Quelle différence entre les deux formules ?', a: "Le contenu est identique. La formule mensuelle à 10 € se règle chaque mois et s'arrête quand vous voulez ; l'accès à vie se paie une seule fois 20 € et ne se renouvelle jamais." },
            { q: 'Dans quelles langues est-ce disponible ?', a: 'Français, arabe, anglais et portugais pour l\'interface et les explications — les questions officielles restent, elles, en français, comme le jour de l\'examen.' },
            { q: 'Et si je ne suis pas à l\'aise avec le français ?', a: `Les cours de langue sont inclus, du niveau ${NIVEAUX_LANGUE.CSP} au niveau ${NIVEAUX_LANGUE.naturalisation}, avec 2 700 exercices progressifs et une préparation spécifique à l'entretien.` },
          ].map((f) => (
            <details key={f.q} className="ol-faq">
              <summary className="ol-faq-q">{f.q}</summary>
              <p className="ol-faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────────────── */}
      <section className="ol-final">
        <div className="ol-container ol-narrow ol-center">
          <h2 className="ol-final-h">
            Votre examen n&apos;attendra pas.<br />Votre préparation non plus.
          </h2>
          <p className="ol-final-sub">
            Rejoignez les candidats qui révisent chaque jour sur maformationcivique.fr.
          </p>
          <div className="ol-final-cta">
            <Link
              href={`/inscription?plan=${OFFERS.bundle.plan}`}
              onClick={() => trackCheckout(OFFERS.bundle)}
              className="ol-btn ol-btn-lg ol-btn-invert"
            >
              Commencer — 10 €/mois <ArrowRight size={17} />
            </Link>
            <Link
              href={`/inscription?plan=${OFFERS.lifetime.plan}`}
              onClick={() => trackCheckout(OFFERS.lifetime)}
              className="ol-btn ol-btn-lg ol-btn-ghost"
            >
              Ou l&apos;accès à vie — 20 €
            </Link>
          </div>
          <p className="ol-final-note">
            <Clock size={13} /> Inscription en moins de 2 minutes
          </p>
        </div>
      </section>

      {/* ── Mentions ────────────────────────────────────────────────────── */}
      <footer className="ol-mentions">
        <div className="ol-container ol-center">
          <p>
            Plateforme indépendante, non affiliée à l&apos;État français. Ne remplace pas la
            formation civique obligatoire de l&apos;OFII.
          </p>
          <p className="ol-mentions-links">
            <Link href="/cgu" target="_blank">CGU</Link>
            <span aria-hidden> · </span>
            <Link href="/confidentialite" target="_blank">Confidentialité</Link>
            <span aria-hidden> · </span>
            <Link href="/mentions-legales" target="_blank">Mentions légales</Link>
          </p>
        </div>
      </footer>

      {/* ── Barre CTA collante mobile — le trafic Meta est massivement mobile */}
      <div className="ol-sticky">
        <div className="ol-sticky-price">
          <strong>10 €</strong>
          <span>/mois · sans engagement</span>
        </div>
        <Link
          href={`/inscription?plan=${OFFERS.bundle.plan}`}
          onClick={() => trackCheckout(OFFERS.bundle)}
          className="ol-btn ol-btn-sticky"
        >
          Commencer
        </Link>
      </div>

      <style>{`
        .ol-container { width: 100%; max-width: 1080px; margin: 0 auto; padding: 0 20px; }
        .ol-narrow { max-width: 720px; }
        .ol-center { text-align: center; }

        .ol-header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(10px);
          border-bottom: 0.5px solid var(--color-border);
        }
        .ol-header-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 60px;
        }

        .ol-hero { position: relative; overflow: hidden; padding: 64px 0 56px; }
        .ol-hero-bg {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, #001A70 0%, #002395 45%, #0057A8 100%);
        }
        .ol-hero-inner { position: relative; z-index: 1; text-align: center; }
        .ol-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 100px;
          background: rgba(255,255,255,0.14);
          border: 0.5px solid rgba(255,255,255,0.28);
          color: #fff; font-size: 12.5px; font-weight: 600;
          margin-bottom: 22px;
        }
        .ol-h1 {
          font-size: clamp(32px, 7vw, 56px); font-weight: 800; line-height: 1.08;
          color: #fff; letter-spacing: -0.02em; margin: 0 0 18px;
        }
        .ol-h1-accent { color: #FFB4AC; }
        .ol-hero-sub {
          font-size: clamp(15px, 2.2vw, 17px); line-height: 1.65;
          color: rgba(255,255,255,0.86); max-width: 580px; margin: 0 auto 28px;
        }
        .ol-hero-sub strong { color: #fff; }
        .ol-hero-cta { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .ol-hero-note {
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 12.5px; color: rgba(255,255,255,0.7);
          max-width: 340px; text-align: center;
        }
        .ol-hero-note svg { flex-shrink: 0; }
        .ol-stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
          margin-top: 40px; padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.16);
        }
        .ol-stat { display: flex; flex-direction: column; gap: 3px; }
        .ol-stat-n { font-size: clamp(20px, 3.5vw, 28px); font-weight: 800; color: #fff; }
        .ol-stat-l { font-size: 11.5px; color: rgba(255,255,255,0.62); line-height: 1.3; }

        .ol-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--gradient-primary); color: #fff;
          padding: 12px 26px; border-radius: 100px;
          font-size: 15px; font-weight: 700; text-decoration: none;
          border: none; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .ol-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 26px rgba(0,35,149,0.28); }
        .ol-btn-sm { padding: 8px 18px; font-size: 13.5px; }
        .ol-btn-lg { padding: 16px 34px; font-size: 16.5px; }
        .ol-btn-block { display: flex; width: 100%; margin-top: 20px; }
        .ol-btn-invert { background: #fff; color: var(--color-blue-france); }
        .ol-btn-invert:hover { box-shadow: 0 10px 26px rgba(0,0,0,0.22); }
        .ol-btn-ghost {
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.4);
        }

        .ol-section { padding: 64px 0; }
        .ol-section-gray { background: var(--color-off-white); }
        .ol-h2 {
          font-size: clamp(24px, 4vw, 34px); font-weight: 800;
          letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 14px;
        }
        .ol-lead {
          font-size: 16px; line-height: 1.7; color: var(--color-text-secondary);
          margin: 0 auto 32px; max-width: 620px;
        }

        .ol-problem { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .ol-problem-card {
          background: #fff; border: var(--border-default);
          border-radius: var(--radius-lg); padding: 20px;
          border-top: 3px solid var(--color-red-france);
        }
        .ol-problem-t { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
        .ol-problem-d { font-size: 13.5px; line-height: 1.6; color: var(--color-text-secondary); }

        .ol-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ol-feature {
          background: var(--color-off-white); border: var(--border-default);
          border-radius: var(--radius-xl); padding: 26px;
        }
        .ol-feature-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: var(--gradient-primary);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .ol-feature-t { font-size: 17px; font-weight: 700; margin-bottom: 7px; }
        .ol-feature-d { font-size: 14px; line-height: 1.65; color: var(--color-text-secondary); }

        .ol-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ol-step { display: flex; gap: 14px; align-items: flex-start; }
        .ol-step-n {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
          background: var(--gradient-primary); color: #fff;
          font-size: 14px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }
        .ol-step-t { font-size: 15.5px; font-weight: 700; margin-bottom: 5px; }
        .ol-step-d { font-size: 13.5px; line-height: 1.6; color: var(--color-text-secondary); }

        .ol-pricing {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px;
          max-width: 860px; margin: 0 auto;
        }
        .ol-price-card {
          position: relative;
          background: #fff; border: var(--border-default);
          border-radius: var(--radius-xl); padding: 28px;
          box-shadow: var(--shadow-card);
        }
        .ol-price-featured {
          background: linear-gradient(160deg, #001A70 0%, #002395 60%, #7A1220 100%);
          border: none; box-shadow: var(--shadow-lg);
        }
        .ol-price-tag {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 5px;
          background: #FFB4AC; color: #6B1018;
          padding: 5px 14px; border-radius: 100px;
          font-size: 11.5px; font-weight: 800; white-space: nowrap;
        }
        .ol-price-label {
          font-size: 12px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.07em; color: var(--color-text-muted); margin-bottom: 12px;
        }
        .ol-price-label-light { color: rgba(255,255,255,0.6); }
        .ol-price-row { display: flex; align-items: baseline; gap: 9px; flex-wrap: wrap; }
        .ol-price { font-size: 42px; font-weight: 800; letter-spacing: -0.02em; }
        .ol-price-light { color: #fff; }
        .ol-price-old {
          font-size: 18px; text-decoration: line-through; color: var(--color-text-muted);
        }
        .ol-price-per { font-size: 14px; color: var(--color-text-muted); }
        .ol-price-per-light { color: rgba(255,255,255,0.6); }
        .ol-price-save { font-size: 12.5px; font-weight: 700; color: #1D9E75; margin-top: 6px; }
        .ol-price-save-light { color: #6BDFB8; }
        .ol-price-list { list-style: none; padding: 0; margin: 20px 0 0; }
        .ol-price-list li {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 13.8px; line-height: 1.55; padding: 6px 0;
          color: var(--color-text-secondary);
        }
        .ol-price-list-light li { color: rgba(255,255,255,0.86); }
        .ol-price-legal {
          font-size: 11px; line-height: 1.5; color: rgba(255,255,255,0.55); margin-top: 12px;
        }
        .ol-legal-link { color: rgba(255,255,255,0.8); }
        .ol-guarantee {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          font-size: 13px; color: var(--color-text-muted); margin-top: 28px;
        }

        .ol-testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ol-testimonial {
          background: #fff; border: var(--border-default);
          border-radius: var(--radius-xl); padding: 22px; margin: 0;
        }
        .ol-stars { display: flex; gap: 2px; margin-bottom: 12px; }
        .ol-quote {
          font-size: 14px; line-height: 1.7; color: var(--color-text-secondary);
          margin: 0 0 14px;
        }
        .ol-testimonial-n { display: block; font-size: 14px; font-weight: 700; }
        .ol-testimonial-r { display: block; font-size: 12px; color: var(--color-text-muted); margin-top: 2px; }

        .ol-faq {
          border-bottom: 1px solid var(--color-border);
          padding: 4px 0;
        }
        .ol-faq-q {
          cursor: pointer; list-style: none;
          font-size: 15.5px; font-weight: 700; padding: 16px 0;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ol-faq-q::-webkit-details-marker { display: none; }
        .ol-faq-a {
          font-size: 14px; line-height: 1.7; color: var(--color-text-secondary);
          padding: 0 0 16px;
        }

        .ol-final {
          padding: 72px 0;
          background: linear-gradient(160deg, #001A70 0%, #002395 50%, #CC1A1A 100%);
        }
        .ol-final-h {
          font-size: clamp(26px, 4.5vw, 40px); font-weight: 800;
          color: #fff; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 14px;
        }
        .ol-final-sub {
          font-size: 15.5px; color: rgba(255,255,255,0.78); margin: 0 0 28px;
        }
        .ol-final-cta {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
        }
        .ol-final-note {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12.5px; color: rgba(255,255,255,0.65); margin-top: 18px;
        }

        .ol-mentions {
          padding: 28px 0 100px;
          background: var(--color-off-white);
          font-size: 12px; line-height: 1.6; color: var(--color-text-muted);
        }
        .ol-mentions-links { margin-top: 8px; }
        .ol-mentions-links a { color: var(--color-text-muted); }

        .ol-sticky {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 60;
          display: none; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(10px);
          border-top: 1px solid var(--color-border);
          box-shadow: 0 -4px 18px rgba(0,23,112,0.1);
        }
        .ol-sticky-price { display: flex; flex-direction: column; line-height: 1.2; }
        .ol-sticky-price strong { font-size: 19px; font-weight: 800; }
        .ol-sticky-price span { font-size: 11px; color: var(--color-text-muted); }
        .ol-btn-sticky { padding: 12px 26px; font-size: 15px; }

        @media (max-width: 860px) {
          .ol-problem, .ol-features, .ol-steps, .ol-testimonials, .ol-pricing {
            grid-template-columns: 1fr;
          }
          .ol-pricing { max-width: 460px; }
        }
        @media (max-width: 620px) {
          .ol-hero { padding: 44px 0 40px; }
          .ol-stats { grid-template-columns: repeat(2, 1fr); gap: 18px 12px; }
          .ol-section { padding: 48px 0; }
          .ol-sticky { display: flex; }
          .ol-header .ol-btn-sm { display: none; }
          .ol-final-cta .ol-btn-lg { width: 100%; }
        }
      `}</style>
    </div>
  );
}
