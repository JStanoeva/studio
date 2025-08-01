'use server';

/**
 * @fileOverview This file defines a Genkit flow to prioritize projects based on user engagement analytics.
 *
 * The flow uses an AI model to determine the optimal order of projects for display in a portfolio gallery, aiming to maximize visitor interest.
 * @module prioritize-projects
 *
 * @function prioritizeProjects - The main function to initiate the project prioritization flow.
 * @interface PrioritizeProjectsInput - Defines the input schema for the prioritizeProjects function.
 * @interface PrioritizeProjectsOutput - Defines the output schema for the prioritizeProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @interface ProjectEngagement
 * @description Represents the engagement data for a single project.
 * @property {string} projectId - The unique identifier for the project.
 * @property {number} viewCount - The number of times the project has been viewed.
 * @property {number} interactionCount - The number of interactions (e.g., likes, comments) the project has received.
 */
const ProjectEngagementSchema = z.object({
  projectId: z.string().describe('The unique identifier for the project.'),
  viewCount: z.number().describe('The number of times the project has been viewed.'),
  interactionCount: z
    .number()
    .describe('The number of interactions (e.g., likes, comments) the project has received.'),
});

/**
 * @interface PrioritizeProjectsInput
 * @description Defines the input schema for the prioritizeProjects function.
 * @property {Array<ProjectEngagement>} projectEngagementData - An array of project engagement data.
 */
const PrioritizeProjectsInputSchema = z.object({
  projectEngagementData: z
    .array(ProjectEngagementSchema)
    .describe('An array of project engagement data.'),
});
export type PrioritizeProjectsInput = z.infer<typeof PrioritizeProjectsInputSchema>;

/**
 * @interface PrioritizeProjectsOutput
 * @description Defines the output schema for the prioritizeProjects function.
 * @property {Array<string>} prioritizedProjectIds - An array of project IDs, ordered by priority.
 */
const PrioritizeProjectsOutputSchema = z.object({
  prioritizedProjectIds: z
    .array(z.string())
    .describe('An array of project IDs, ordered by priority.'),
});
export type PrioritizeProjectsOutput = z.infer<typeof PrioritizeProjectsOutputSchema>;

/**
 * @function prioritizeProjects
 * @description A wrapper function that calls the prioritizeProjectsFlow with the input and returns the output.
 * @param {PrioritizeProjectsInput} input - The input data for project prioritization.
 * @returns {Promise<PrioritizeProjectsOutput>} - A promise that resolves to the prioritized project IDs.
 */
export async function prioritizeProjects(input: PrioritizeProjectsInput): Promise<PrioritizeProjectsOutput> {
  return prioritizeProjectsFlow(input);
}

const prioritizeProjectsPrompt = ai.definePrompt({
  name: 'prioritizeProjectsPrompt',
  input: {schema: PrioritizeProjectsInputSchema},
  output: {schema: PrioritizeProjectsOutputSchema},
  prompt: `You are an expert in optimizing portfolio display order to maximize user engagement.

Given the following project engagement data, determine the optimal order to display the projects in a portfolio gallery.

Return an array of project IDs, ordered by priority, with the most compelling projects listed first.

Project Engagement Data:
{{#each projectEngagementData}}
  - Project ID: {{this.projectId}}, View Count: {{this.viewCount}}, Interaction Count: {{this.interactionCount}}
{{/each}}

Prioritized Project IDs:`,
});

const prioritizeProjectsFlow = ai.defineFlow(
  {
    name: 'prioritizeProjectsFlow',
    inputSchema: PrioritizeProjectsInputSchema,
    outputSchema: PrioritizeProjectsOutputSchema,
  },
  async input => {
    const {output} = await prioritizeProjectsPrompt(input);
    return output!;
  }
);
