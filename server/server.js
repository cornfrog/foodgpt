import express from "express";
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SERVER_CONFIG } from "./config.js";

const server = express();
server.use(cors())
server.use(express.json())



const interactWithGemini = async () => {
    const genAI = new GoogleGenerativeAI(SERVER_CONFIG.GEMINI_API_KEY);
    const prompt = "how do i connect the google map api to you?"
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response.text())

}

interactWithGemini();

// server.get("/", (request, response) => {
//     return response.json({
//         message: "server running..."
//     })
// });

server.listen(3001, () => console.log('Server running on port 3001'));