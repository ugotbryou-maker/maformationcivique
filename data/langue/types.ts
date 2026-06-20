// ─────────────────────────────────────────────────────────────────────────────
// Types — modules langue française (A2 / B1 / B2)
// ─────────────────────────────────────────────────────────────────────────────

export type LangLevel = 'A2' | 'B1' | 'B2' | 'transversal';
export type LangModuleType =
  | 'thematique'
  | 'grammaire'
  | 'conjugaison'
  | 'phonetique'
  | 'orthographe'
  | 'erreurs'
  | 'examen';

export type ExerciseType =
  | 'qcm'           // choix multiple — 4 options
  | 'conjugaison'   // choisir la forme verbale correcte
  | 'transformation'// choisir la transformation correcte
  | 'vf'            // vrai / faux (2 options)
  | 'appariement';  // choisir le meilleur équivalent

export interface LangExercise {
  id: string;
  type: ExerciseType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LangLesson {
  id: string;
  slug: string;
  moduleSlug: string;
  level: LangLevel;
  title: string;
  description: string;
  duration: number; // minutes
  free: boolean;
  dialogue: string;        // markdown — dialogue ou texte déclenchant
  linguisticPoint: string; // markdown — point grammaire / vocab / conjugaison
  keyPoints: string[];     // bullet recap
  exercises: LangExercise[];
}

export interface LangModule {
  id: string;
  slug: string;
  level: LangLevel;
  title: string;
  subtitle: string;
  description: string;
  type: LangModuleType;
  emoji: string;
  free: boolean; // première leçon gratuite
  lessons: LangLesson[];
}
