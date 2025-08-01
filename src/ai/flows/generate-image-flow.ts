'use server';

/**
 * @fileOverview A Genkit flow for generating images from a text prompt.
 *
 * This file defines a flow that uses an AI model to generate an image
 * based on a given text description. It's used in the portfolio to create
 * unique visuals for each project.
 *
 * @module generate-image-flow
 * @function generateImage - The main function to initiate the image generation flow.
 * @interface GenerateImageInput - Defines the input schema for the generateImage function.
 * @interface GenerateImageOutput - Defines the output schema for the generateImage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate an image from.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;


export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async ({ prompt }) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a visually stunning, professional, and modern image for a project portfolio. The image should be abstract or conceptual, representing the following idea: ${prompt}. Avoid text and logos. Use a clean, minimalist style.`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
