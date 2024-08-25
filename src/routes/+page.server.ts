import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";

import { OpenAI } from "openai";
const openai = new OpenAI({
	apiKey: env.OPENAI_API_KEY
});
export default openai;

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const prompt = form.get("prompt");

		const completion = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{
					role: "user",
					content: `${prompt}`
				}
			]
		});

		const data = completion.choices[0].message;
		return data;
	}
} satisfies Actions;
