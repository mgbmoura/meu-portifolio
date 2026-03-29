'use server';
/**
 * @fileOverview A Genkit flow for generating unique and inspiring creative prompts.
 *
 * - generateCreativePrompt - A function that handles the creative prompt generation process.
 * - GenerateCreativePromptInput - The input type for the generateCreativePrompt function.
 * - GenerateCreativePromptOutput - The return type for the generateCreativePrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCreativePromptInputSchema = z.object({
  themes: z
    .array(z.string())
    .describe('A list of themes or categories (e.g., "Writing", "Art", "Daily Challenge") to guide the prompt generation.'),
});
export type GenerateCreativePromptInput = z.infer<typeof GenerateCreativePromptInputSchema>;

const GenerateCreativePromptOutputSchema = z.string().describe('A unique and inspiring creative prompt.');
export type GenerateCreativePromptOutput = z.infer<typeof GenerateCreativePromptOutputSchema>;

export async function generateCreativePrompt(
  input: GenerateCreativePromptInput
): Promise<GenerateCreativePromptOutput> {
  return generateCreativePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCreativePromptPrompt',
  input: {schema: GenerateCreativePromptInputSchema},
  output: {schema: GenerateCreativePromptOutputSchema},
  prompt: `Generate a unique and inspiring creative prompt for writing, art, or daily inspiration.

Base the prompt on the following themes:
{{#each themes}}
- {{this}}
{{/each}}

Make sure the prompt is imaginative and encourages creative exploration.

Examples:
- 'Write a short story about a forgotten toy that dreams of becoming a star.'
- 'Create a piece of art that represents the feeling of unexpected joy.'
- 'Your daily challenge: Spend 15 minutes observing the smallest details in your immediate surroundings and write down your observations.'`,
});

const generateCreativePromptFlow = ai.defineFlow(
  {
    name: 'generateCreativePromptFlow',
    inputSchema: GenerateCreativePromptInputSchema,
    outputSchema: GenerateCreativePromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
