import { config } from "dotenv";

config();

export const SERVER_CONFIG = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
}