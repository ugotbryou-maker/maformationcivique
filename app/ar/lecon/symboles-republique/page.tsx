import Link from 'next/link';
import { Tajawal } from 'next/font/google';
import { Flag, Star, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import { LessonEndQuiz, type QuizQuestion } from '@/components/app/LessonEndQuiz';

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700'], display: 'swap' });

// ─────────────────────────────────────────────────────────────────────────────
// POC — version arabophone de la leçon « Les symboles de la République »
// (module 01 — République). Page autonome, contenu traduit en dur, pour évaluer :
//   1) le rendu RTL (direction, alignement, flex, icônes)
//   2) la police arabe (Tajawal)
//   3) le comportement d'un composant interactif existant (LessonEndQuiz)
//      réutilisé tel quel — ses libellés internes restent en FR (cf. note bas
//      de page) : ça illustre concrètement ce qu'il reste à traduire.
// ─────────────────────────────────────────────────────────────────────────────

const sections: { title: string; icon: typeof Flag; color: string; bg: string; body: string }[] = [
  {
    title: 'العلم الثلاثي الألوان',
    icon: Flag,
    color: 'var(--color-blue-france)',
    bg: 'var(--color-blue-light)',
    body: 'ظهر العلم الأزرق والأبيض والأحمر إبّان الثورة الفرنسية. يمثّل اللونان الأزرق والأحمر ألوان مدينة باريس، بينما كان الأبيض يرمز إلى الملكية. ويجسّد العلم مجتمعةً وحدة الأمة والمصالحة بين الشعب والملك. يُستخدم في جميع المناسبات الرسمية، داخل فرنسا وخارجها.',
  },
  {
    title: 'ماريان',
    icon: Flag,
    color: 'var(--color-blue-france)',
    bg: 'var(--color-blue-light)',
    body: 'ماريان هي الرمز البشري للجمهورية الفرنسية، وتمثّل الحرية والعقل. يوجد تمثال نصفي لها في جميع دور البلديات في فرنسا. وتُصوَّر وهي ترتدي القبعة الفريجية — رمز الحرية منذ العصور القديمة — لتجسّد قيم الجمهورية: الحرية، المساواة، الإخاء.',
  },
  {
    title: 'الشعار الوطني',
    icon: Star,
    color: 'var(--color-red-france)',
    bg: 'var(--color-red-light)',
    body: '«الحرية، المساواة، الإخاء» هو شعار الجمهورية، وهو مدوَّن في الدستور. وهذه القيم الثلاث لا تنفصل عن بعضها وتشكّل أساس العهد الجمهوري. وتظهر هذه العبارة على المباني العامة والوثائق الرسمية والعملات النقدية.',
  },
  {
    title: 'النشيد الوطني — المارسييز',
    icon: Star,
    color: '#D97706',
    bg: '#FFFBEB',
    body: 'المارسييز هي النشيد الوطني الفرنسي، وقد لحّنها روجيه دو ليل في ستراسبورغ عام 1792. تُعزَف في المناسبات الرسمية والمنافسات الرياضية الدولية والاحتفالات الوطنية التذكارية. وقد اشتُقّ اسمها من جنود مدينة مرسيليا الذين كانوا يغنّونها في طريقهم إلى باريس.',
  },
  {
    title: 'العيد الوطني — 14 يوليو',
    icon: Flag,
    color: 'var(--color-blue-france)',
    bg: 'var(--color-blue-light)',
    body: 'يحتفل العيد الوطني بذكرى سقوط سجن الباستيل في 14 يوليو 1789، وهو رمز لانتهاء الحكم المطلق للملكية وبداية الثورة الفرنسية. ويُحتفل به كل عام بعرض عسكري في شارع الشانزليزيه وعروض للألعاب النارية في جميع مناطق فرنسا.',
  },
  {
    title: 'الديك الغالي',
    icon: Flag,
    color: 'var(--color-blue-france)',
    bg: 'var(--color-blue-light)',
    body: 'الديك الغالي هو شعار غير رسمي لفرنسا، وهو مرتبط بالأمة الفرنسية منذ العصور القديمة: فكلمة «gallus» باللاتينية تعني في الوقت نفسه «ديك» و«غالي». ويظهر هذا الرمز على بعض الأختام الرسمية، ويمثّل فرنسا في المنافسات الرياضية.',
  },
];

const keyPoints: { title: string; desc: string }[] = [
  { title: 'العلم الثلاثي الألوان', desc: 'أزرق، أبيض، أحمر — رمز منذ الثورة الفرنسية (1789)' },
  { title: 'ماريان', desc: 'التمثيل البشري للجمهورية، تمثال نصفي في جميع دور البلديات' },
  { title: 'الشعار الوطني', desc: 'الحرية، المساواة، الإخاء — مدوَّن في الدستور' },
  { title: 'المارسييز', desc: 'النشيد الوطني الذي لحّنه روجيه دو ليل عام 1792' },
  { title: '14 يوليو', desc: 'العيد الوطني، ذكرى سقوط الباستيل (1789)' },
];

const quizQuestions: QuizQuestion[] = [
  {
    id: 'Q-PVR-001-AR',
    question: 'ما هو شعار الجمهورية الفرنسية؟',
    options: { A: 'الحرية، المساواة، الإخاء', B: 'الوحدة، التضامن، التقدم', C: 'السلام، العدالة، الحرية', D: 'العمل، الأسرة، الوطن' },
    answer: 'A',
    explanation: 'شعار الجمهورية الفرنسية هو «الحرية، المساواة، الإخاء». وهو مدوَّن في دستور عام 1958، ويظهر على المباني الرسمية.',
  },
  {
    id: 'Q-PVR-002-AR',
    question: 'ما هو تاريخ العيد الوطني الفرنسي؟',
    options: { A: '8 مايو', B: '14 يوليو', C: '11 نوفمبر', D: '1 مايو' },
    answer: 'B',
    explanation: 'العيد الوطني هو 14 يوليو، وهو يحتفل بذكرى سقوط الباستيل عام 1789، رمز الثورة الفرنسية.',
  },
  {
    id: 'Q-PVR-003-AR',
    question: 'ما هي المارسييز؟',
    options: { A: 'لوحة مشهورة في متحف اللوفر', B: 'النشيد الوطني الفرنسي', C: 'نصب تاريخي في مدينة مرسيليا', D: 'نهر في جنوب فرنسا' },
    answer: 'B',
    explanation: 'المارسييز هي النشيد الوطني الفرنسي، لحّنها روجيه دو ليل عام 1792. تُعزَف في المناسبات الرسمية والفعاليات الرياضية.',
  },
  {
    id: 'Q-PVR-004-AR',
    question: 'ما هي ألوان العلم الفرنسي؟',
    options: { A: 'أحمر، أبيض، أخضر', B: 'أزرق، أبيض، أحمر', C: 'أبيض، أزرق، أحمر', D: 'أزرق، أحمر، أصفر' },
    answer: 'B',
    explanation: 'العلم الفرنسي أزرق وأبيض وأحمر. ظهر إبّان الثورة الفرنسية، ويمثّل ألوان باريس (الأزرق والأحمر) مع الأبيض الذي كان يرمز إلى الملكية.',
  },
  {
    id: 'Q-PVR-005-AR',
    question: 'من هي ماريان؟',
    options: { A: 'ملكة فرنسا', B: 'الرمز البشري للجمهورية الفرنسية', C: 'رئيسة الجمهورية', D: 'رمز مدينة باريس' },
    answer: 'B',
    explanation: 'ماريان هي الرمز البشري للجمهورية الفرنسية، وتمثّل الحرية والعقل. يوجد تمثال نصفي لها في جميع دور البلديات في فرنسا.',
  },
];

export default function SymbolesRepubliqueArabicPOC() {
  return (
    <div dir="rtl" lang="ar" className={tajawal.className} style={{ background: '#F0F0F0', minHeight: '100vh' }}>

      {/* ── Bandeau POC ─────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--gradient-primary)', color: '#fff', padding: '12px 24px', fontSize: 'var(--font-size-sm)', textAlign: 'center' }}>
        🧪 نسخة تجريبية (POC) بالعربية — صفحة « Les symboles de la République » —{' '}
        <Link href="/lecon/symboles-republique" style={{ color: '#fff', textDecoration: 'underline' }}>
          عرض النسخة الفرنسية
        </Link>
      </div>

      {/* ── ZONE HERO ───────────────────────────────────────────────────── */}
      <div className="container" style={{ padding: '32px 24px 0' }}>
        {/* Fil d'Ariane */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
          <span>الرئيسية</span>
          <span>/</span>
          <span>الوحدات</span>
          <span>/</span>
          <span>مبادئ وقيم الجمهورية</span>
          <span>/</span>
          <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>رموز الجمهورية</span>
        </nav>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ background: 'var(--color-blue-light)', color: 'var(--color-blue-france)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>
            01 · الدرس 1/6
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fff', color: 'var(--color-text-muted)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', border: 'var(--border-default)' }}>
            <Clock size={11} /> 8 دقائق
          </span>
          <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--font-size-xs)', fontWeight: 500 }}>
            مجاني
          </span>
        </div>

        {/* Titre + sous-titre */}
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBottom: '6px' }}>
          رموز الجمهورية
        </h1>
        <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-muted)', paddingBottom: '32px' }}>
          العلمانية، الشعار، الرموز، الحريات
        </p>
      </div>

      {/* ── CONTENU ─────────────────────────────────────────────────────── */}
      <div className="container" style={{ padding: '0 24px' }}>
        <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', border: 'var(--border-default)', padding: '28px 28px 24px', boxShadow: 'var(--shadow-card)' }}>
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div key={i} style={{ paddingBottom: '24px', marginBottom: '24px', borderBottom: i < sections.length - 1 ? 'var(--border-default)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: 30, height: 30, background: section.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={14} color={section.color} />
                  </div>
                  <h2 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                    {section.title}
                  </h2>
                </div>
                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 2, margin: 0 }}>
                  {section.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CE QU'IL FAUT RETENIR ───────────────────────────────────────── */}
      <div className="container" style={{ padding: '40px 24px 0' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
          ما يجب تذكّره
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {keyPoints.map((kp, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '14px 16px', border: 'var(--border-default)', boxShadow: 'var(--shadow-card)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: 26, height: 26, background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                <CheckCircle size={12} color="#16A34A" />
              </div>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>{kp.title}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>{kp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUIZ DE FIN DE LEÇON (composant réel, non traduit) ─────────────── */}
      <div className="container" style={{ padding: '0 24px' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px', marginTop: '40px' }}>
          اختبر معلوماتك
        </h2>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: '0' }}>
          {quizQuestions.length} أسئلة عن هذا الدرس · نسبة النجاح 80%
        </p>
        <LessonEndQuiz questions={quizQuestions} lessonTitle="رموز الجمهورية" lessonSlug="symboles-republique-ar-poc" />
      </div>

      {/* ── NOTE TECHNIQUE (visible uniquement sur le POC) ─────────────────── */}
      <div className="container" style={{ padding: '40px 24px 64px' }}>
        <div dir="ltr" style={{ background: '#fff', borderRadius: 'var(--radius-lg)', border: 'var(--border-default)', padding: '20px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          <strong>Notes POC :</strong> le contenu (titres, texte, points clés, questions/réponses) est traduit.
          Le composant <code>LessonEndQuiz</code> est réutilisé tel quel (non modifié) — son flex/gap
          s&apos;inverse correctement en RTL, mais ses libellés internes (« Quiz de fin de leçon »,
          « Recommencer », « Leçon validée », icônes ChevronRight/RotateCcw...) restent en français :
          c&apos;est ce type de composant partagé qu&apos;il faudra traduire/paramétrer pour une vraie
          version arabe (effort à mutualiser sur ~10 composants utilisés dans toutes les leçons).
          La police <strong>Tajawal</strong> est chargée via Google Fonts pour ce test.
        </div>
      </div>
    </div>
  );
}
