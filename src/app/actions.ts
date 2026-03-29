"use server";

import {
  generateCreativePrompt,
  type GenerateCreativePromptInput,
} from "@/ai/flows/generate-creative-prompt";

export async function getAiPrompt(
  input: GenerateCreativePromptInput
): Promise<string> {
  try {
    const prompt = await generateCreativePrompt(input);
    return prompt;
  } catch (error) {
    console.error("AI prompt generation failed:", error);
    return "Oops! Something went wrong while generating the prompt. Please check the server logs and try again.";
  }
}
