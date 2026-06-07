import { redirect } from 'next/navigation';

// L'examen blanc est désormais une page publique (lead gen)
export default function ExamenRedirect() {
  redirect('/examen');
}
