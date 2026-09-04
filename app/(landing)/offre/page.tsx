import type { Metadata } from 'next';
import { OffreLanding } from './OffreLanding';

export const metadata: Metadata = {
  title: { absolute: 'Réussissez votre examen civique — 10 €/mois' },
  description:
    "Examen civique obligatoire depuis 2026 : 177 questions officielles, examens blancs illimités et cours de français A2 à B2. Sans engagement, dès 10 €/mois.",
  robots: { index: false, follow: true },
};

export default function OffrePage() {
  return <OffreLanding />;
}
