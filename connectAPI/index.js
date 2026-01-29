import { GoogleGenAI }  from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyDpIM5XI2pJcqaFNXfF5g-E_9X35ucr20c"});

async function main() {
    const  response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                role: "user",
                parts: [{text:"what is my name"}]
            },
             {
                role: "model",
                parts: [{text:"as an ai, i don't access your data"}]
             },
               {
                role: "user",
                parts: [{text:"my nam is tony stark"}]
             },

               {
                role: "user",
                parts: [{text:"what is my name?"}]
             }
            
            

        ]

    })
    console.log(response.text);
}

await main();