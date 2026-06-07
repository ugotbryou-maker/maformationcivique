export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ── Exercices inline par leçon (slug → exercices) ────────────────────────────
export const lessonExercises: Record<string, Exercise[]> = {
  'symboles-republique': [
    {
      id: 'ex-sr-1',
      question: 'D\'où viennent les couleurs bleu et rouge du drapeau français ?',
      options: ['Des couleurs de la mer et du sang', 'Des couleurs de la ville de Paris', 'Des couleurs royales de la monarchie', 'Des couleurs choisies par Napoléon'],
      correctIndex: 1,
      explanation: 'Bleu et rouge sont les couleurs historiques de la ville de Paris, associées depuis la Révolution. Le blanc représentait la royauté. Ensemble ils symbolisent l\'union de la nation.',
    },
    {
      id: 'ex-sr-2',
      question: 'En quelle année La Marseillaise a-t-elle été composée ?',
      options: ['1789', '1792', '1804', '1830'],
      correctIndex: 1,
      explanation: 'La Marseillaise a été composée en 1792 par Rouget de Lisle à Strasbourg. Elle tire son nom des soldats marseillais qui la popularisèrent en marchant vers Paris.',
    },
  ],
  'laicite': [
    {
      id: 'ex-la-1',
      question: 'Quelle loi a établi la séparation des Églises et de l\'État en France ?',
      options: ['La loi du 1er juillet 1901', 'La loi du 9 décembre 1905', 'La loi du 15 mars 2004', 'La Constitution de 1958'],
      correctIndex: 1,
      explanation: 'La loi du 9 décembre 1905 est le texte fondateur de la laïcité. Elle interdit à l\'État de financer les cultes et garantit la liberté de conscience.',
    },
  ],
  'devise-liberte-egalite-fraternite': [
    {
      id: 'ex-def-1',
      question: 'Depuis quelle année l\'égalité entre les femmes et les hommes est-elle un principe constitutionnel ?',
      options: ['1789', '1944', '1999', '2013'],
      correctIndex: 2,
      explanation: 'L\'égalité entre les femmes et les hommes a été élevée au rang de principe constitutionnel en 1999, avec la révision de la Constitution permettant la parité en politique.',
    },
  ],
  'droits-fondamentaux': [
    {
      id: 'ex-df-1',
      question: 'Quel texte de 1789 constitue la base des droits civils et politiques en France ?',
      options: ['La Constitution de la Ve République', 'La Déclaration des droits de l\'homme et du citoyen', 'Le Préambule de la Constitution de 1946', 'La Charte de l\'environnement'],
      correctIndex: 1,
      explanation: 'La Déclaration des droits de l\'homme et du citoyen du 26 août 1789 est le texte fondateur des libertés individuelles. Elle proclame les droits naturels, inaliénables et sacrés de l\'homme.',
    },
  ],
  'etat-droit-separation-pouvoirs': [
    {
      id: 'ex-ed-1',
      question: 'Qui a théorisé le principe de la séparation des pouvoirs ?',
      options: ['Jean-Jacques Rousseau', 'Voltaire', 'Montesquieu', 'Napoléon Bonaparte'],
      correctIndex: 2,
      explanation: 'Montesquieu a théorisé la séparation des pouvoirs dans "De l\'Esprit des lois" (1748). Il distingue le pouvoir législatif, exécutif et judiciaire pour éviter la tyrannie.',
    },
  ],
  'regimes-politiques-1789': [
    {
      id: 'ex-rp-1',
      question: 'Combien de Républiques la France a-t-elle connues depuis 1792 ?',
      options: ['3', '4', '5', '6'],
      correctIndex: 2,
      explanation: 'La France a connu 5 Républiques : Ière (1792), IIème (1848), IIIème (1870), IVème (1946) et Ve (1958, toujours en vigueur aujourd\'hui).',
    },
  ],
};

// ── Quiz de fin de module ────────────────────────────────────────────────────
export const moduleQuizzes: Record<string, Exercise[]> = {
  republique: [
    {
      id: 'mq-r-01',
      question: 'Quelle est la devise de la République française ?',
      options: ['Liberté, Justice, Fraternité', 'Liberté, Égalité, Fraternité', 'Unité, Égalité, Démocratie', 'Liberté, Solidarité, Démocratie'],
      correctIndex: 1,
      explanation: '« Liberté, Égalité, Fraternité » est la devise de la République française, inscrite dans la Constitution de 1958.',
    },
    {
      id: 'mq-r-02',
      question: 'Que commémore le 14 juillet, fête nationale française ?',
      options: ['La naissance de la République', 'La prise de la Bastille en 1789', 'La fin de la Seconde Guerre mondiale', 'La promulgation de la Constitution de 1958'],
      correctIndex: 1,
      explanation: 'Le 14 juillet commémore la prise de la Bastille en 1789, symbole de la fin de l\'absolutisme royal et du début de la Révolution française.',
    },
    {
      id: 'mq-r-03',
      question: 'La Marseillaise a été composée par Rouget de Lisle en :',
      options: ['1789', '1792', '1804', '1848'],
      correctIndex: 1,
      explanation: 'La Marseillaise a été composée en 1792 par Rouget de Lisle à Strasbourg. Les soldats de Marseille l\'ont rendue célèbre en la chantant lors de leur montée vers Paris.',
    },
    {
      id: 'mq-r-04',
      question: 'Où trouve-t-on le buste de Marianne en France ?',
      options: ['Dans toutes les écoles publiques', 'Dans toutes les mairies de France', 'Dans tous les tribunaux', 'Sur tous les billets de banque'],
      correctIndex: 1,
      explanation: 'Le buste de Marianne figure dans toutes les mairies de France. Elle symbolise la liberté et la raison, incarnation humaine de la République.',
    },
    {
      id: 'mq-r-05',
      question: 'Dans quel article de la Constitution la laïcité est-elle inscrite ?',
      options: ['Article 1er', 'Article 2', 'Article 4', 'Article 11'],
      correctIndex: 0,
      explanation: 'L\'article 1er de la Constitution de 1958 déclare : « La France est une République indivisible, laïque, démocratique et sociale. »',
    },
    {
      id: 'mq-r-06',
      question: 'Quelle loi a séparé les Églises et l\'État en France ?',
      options: ['La loi du 1er juillet 1901', 'La loi du 9 décembre 1905', 'La loi du 15 mars 2004', 'La loi Ferry de 1882'],
      correctIndex: 1,
      explanation: 'La loi du 9 décembre 1905 de séparation des Églises et de l\'État est le texte fondateur de la laïcité. Elle interdit à l\'État de financer ou reconnaître un culte.',
    },
    {
      id: 'mq-r-07',
      question: 'Quelle est la langue officielle de la République française selon la Constitution ?',
      options: ['Le français et les langues régionales', 'Le français', 'Le français, l\'anglais et l\'arabe', 'Aucune langue n\'est imposée'],
      correctIndex: 1,
      explanation: 'L\'article 2 de la Constitution affirme : « La langue de la République est le français. » Cela n\'interdit pas les langues régionales dans leur usage privé.',
    },
    {
      id: 'mq-r-08',
      question: 'Quel niveau de français est requis pour obtenir la nationalité française ?',
      options: ['Niveau A2', 'Niveau B1', 'Niveau B2', 'Aucun niveau n\'est exigé'],
      correctIndex: 1,
      explanation: 'Un niveau B1 à l\'oral est requis pour la demande de naturalisation française. Ce niveau correspond à une communication autonome dans des situations courantes.',
    },
    {
      id: 'mq-r-09',
      question: 'L\'examen civique comporte combien de questions ?',
      options: ['20 questions en 15 minutes', '30 questions en 30 minutes', '40 questions en 30 minutes', '50 questions en 45 minutes'],
      correctIndex: 2,
      explanation: 'L\'examen civique comporte 40 questions à traiter en 30 minutes. Le score requis pour réussir est de 80% (32 bonnes réponses sur 40).',
    },
    {
      id: 'mq-r-10',
      question: 'Qu\'est-ce que le Contrat d\'engagement républicain ?',
      options: ['Un test de langue française', 'Un document signé par les étrangers lors de leur premier titre de séjour', 'Un contrat de travail spécial pour les étrangers', 'Un formulaire de demande de naturalisation'],
      correctIndex: 1,
      explanation: 'Le Contrat d\'engagement républicain (CER) est signé par les étrangers lors de la délivrance de leur premier titre de séjour. Ils s\'engagent à respecter les valeurs et les lois de la République.',
    },
  ],
};
