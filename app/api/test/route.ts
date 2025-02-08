// app/api/ai/test/route.ts
import { NextResponse } from 'next/server';
import { getTogetherProvider } from '@/lib/ai-engine/providers/together';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const provider = getTogetherProvider();
    const result = await provider.generateCompletion(prompt, {
      systemPrompt: 'You are a marketing expert. Provide concise, engaging copy.',
      temperature: 0.7,
      maxTokens: 500
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('AI Generation Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate AI response' },
      { status: 500 }
    );
  }
}