// src/app/api/generate-design/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { level } = await req.json();

  const prompt = `Create a CSS battle challenge of ${level} difficulty. 
Return only valid HTML+CSS inside a <div> and <style> tags.`;

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const result = chat.choices[0].message.content;

    return NextResponse.json({
      html: result,
      label: level,
    });
  } catch (error) {
    console.error("OpenAI API Error:", error); // ✅ Log full error
    return NextResponse.json(
      { error: "Failed to generate design", details: error },
      { status: 500 }
    );
  }
}
