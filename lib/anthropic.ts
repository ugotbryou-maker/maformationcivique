import Anthropic from '@anthropic-ai/sdk';

// Lazy init — évite le crash au build si ANTHROPIC_API_KEY absent
let _anthropic: Anthropic | null = null;

export function getAnthropic(): Anthropic {
  if (_anthropic) return _anthropic;
  _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY ?? '' });
  return _anthropic;
}

/** @deprecated Use getAnthropic() instead */
export const anthropic = new Proxy({} as Anthropic, {
  get(_target, prop) {
    return (getAnthropic() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

export type Lang = 'fr' | 'ar' | 'en' | 'pt';

const langLabels: Record<Lang, string> = {
  fr: 'français',
  ar: 'arabe',
  en: 'anglais',
  pt: 'portugais',
};

export function buildExplanationPrompt(
  question: string,
  correctAnswer: string,
  userAnswer: string,
  explanation: string,
  lang: Lang
) {
  return `Tu es un assistant pédagogique bienveillant pour la formation civique française.

Un apprenant vient de répondre incorrectement à cette question :
Question : "${question}"
Bonne réponse : "${correctAnswer}"
Réponse donnée : "${userAnswer}"
Explication officielle : "${explanation}"

Explique pourquoi la bonne réponse est correcte en 2-3 phrases simples et encourageantes.
Utilise un langage accessible, sans jargon. Sois encourageant et positif.
Réponds en ${langLabels[lang]}.`;
}
