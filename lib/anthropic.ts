import Anthropic from '@anthropic-ai/sdk';

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
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
