<script lang="ts">
	let prompt = "";
	let messages: string[] = [];

	async function sendPrompt() {
		const response = await fetch("/", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `prompt=${encodeURIComponent(prompt)}`
		});

		const message = await response.json();
		messages = [...messages, message.data];
	}
</script>

<h1>Open AI</h1>

<form method="POST" on:submit|preventDefault={sendPrompt}>
	<label for="prompt">
		<textarea name="prompt" rows="4" bind:value={prompt} />
	</label>
	<button type="submit">submit</button>
</form>

{#each messages as message}
	<pre>{JSON.parse(message)[2]}</pre>
{/each}

<style>
	h1 {
		font-family: Archivo, sans-serif;
	}
</style>
