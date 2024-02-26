import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request) {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    const params = await request.json();

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
            {
                role: "system",
                content: "You're an education specialist. Create a learning objective content in a single sentence for the user  according to their input. The content should be in a h1 element."
            },
            {
                role: "user",
                content: params.prompt
            }
        ],
        temperature: 0.6,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return NextResponse.json(response);
}