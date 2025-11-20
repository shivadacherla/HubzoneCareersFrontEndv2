import { NextRequest } from "next/server";
import { anthropic, defaultModel, openai } from "@/lib/ai/providers";
import { streamText } from "ai";

const FALLBACK_MODEL = "claude-3-5-sonnet-20241022";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  const requestedProvider =
    (body?.provider as "openai" | "anthropic") ?? "openai";
  const requestedModel = (body?.model as string) ?? defaultModel;

  if (messages.length === 0) {
    return new Response(
      JSON.stringify({ error: "messages array is required" }),
      { status: 400 },
    );
  }

  const hasOpenAIKey = Boolean(process.env.OPENAI_API_KEY);
  const hasAnthropicKey = Boolean(process.env.ANTHROPIC_API_KEY);

  if (!hasOpenAIKey && !hasAnthropicKey) {
    return new Response(
      JSON.stringify({
        error:
          "No AI provider keys set. Configure OPENAI_API_KEY or ANTHROPIC_API_KEY.",
      }),
      { status: 500 },
    );
  }

  const provider =
    requestedProvider === "openai" && !hasOpenAIKey && hasAnthropicKey
      ? "anthropic"
      : requestedProvider;

  if (provider === "openai" && !hasOpenAIKey) {
    return new Response(
      JSON.stringify({
        error:
          "OPENAI_API_KEY not configured. Pass provider='anthropic' or set the key.",
      }),
      { status: 400 },
    );
  }

  const stream = await streamText({
    model:
      provider === "anthropic"
        ? anthropic(requestedModel || FALLBACK_MODEL)
        : openai(requestedModel),
    messages,
  });

  return stream.toAIStreamResponse();
}

