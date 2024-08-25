import type { Actions } from "./$types";

export const actions = {
	default: async ({ request }) => {
    const data = await request.formData();
    const message = data.get('message');

    console.log(`Message: ${message}`);
	}
} satisfies Actions;
