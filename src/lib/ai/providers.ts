import { createAnthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export const defaultModel = process.env.OPENAI_DEFAULT_MODEL || "gpt-4o-mini";

