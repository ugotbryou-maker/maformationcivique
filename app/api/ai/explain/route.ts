import { NextResponse } from 'next/server';
import { anthropic, buildExplanationPrompt, type Lang } from '@/lib/anthropic';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(req: Request) {
  // Only premium users can access AI explanations
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    const { data: profile } = await supabase
      .from('users')
      .select('plan')
      .eq('id', user.id)
      .single();

    if (profile?.plan !== 'premium') {
      return NextResponse.json({ error: 'Premium required' }, { status: 403 });
    }
  }

  const { question, correctAnswer, userAnswer, explanation, lang = 'fr' } = await req.json();

  if (!question || !correctAnswer) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 300,
    messages: [
      {
        role: 'user',
        content: buildExplanationPrompt(question, correctAnswer, userAnswer, explanation, lang as Lang),
      },
    ],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';
  return NextResponse.json({ explanation: text });
}
