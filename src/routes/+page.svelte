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

<div class="container">
	<h1 id="title">Open AI</h1>

	<form method="POST" on:submit|preventDefault={sendPrompt}>
		<textarea name="prompt" rows="4" bind:value={prompt} />
		<button type="submit" id="submitButton">submit</button>
	</form>
</div>

{#each messages as message}
	<pre>{JSON.parse(message)[2]}</pre>
{/each}

<style>
	textarea {
		width: 300px;
		height: 150px;
	}
	form {
		display: inline-block;
	}
	.container {
		padding: 1em;
		text-align: center;
	}
	#title {
		font-family: Archivo, sans-serif;
		flex: 1;
		text-align: center;
	}
	#submitButton {
		display: block;
	}
</style>
