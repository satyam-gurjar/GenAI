import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `you are a general purpose ai tool,
      - don't give any technical and logical answer`
    },
    contents: [
      {
        role: "user",
        parts: [{ text: "hello, how are you" }]
      }
    ]
  });

  console.log(response.text);
}

await main();
