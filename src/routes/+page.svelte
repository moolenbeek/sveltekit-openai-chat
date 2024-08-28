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

{#if messages.length !== 0}
	<div id="messages">
		{#each messages as message}
			<pre>{JSON.parse(message)[2]}</pre>
		{/each}
	</div>
{/if}

<style>
	pre {
		white-space: -moz-pre-wrap; /* Mozilla, supported since 1999 */
		white-space: -pre-wrap; /* Opera */
		white-space: -o-pre-wrap; /* Opera */
		white-space: pre-wrap; /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */
		word-wrap: break-word; /* IE 5.5+ */
	}
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
	#messages {
		width: 80vw;
		margin: auto;
		padding: 1em;
		border-radius: 6px;
		background-color: #708090;
	}
	#title {
		font-family: Archivo, sans-serif;
		flex: 1;
		text-align: center;
	}
	#submitButton {
		display: block;
		appearance: button;
		backface-visibility: hidden;
		background-color: #405cf5;
		border-radius: 6px;
		border-width: 0;
		box-shadow:
			rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
			rgba(50, 50, 93, 0.1) 0 2px 5px 0,
			rgba(0, 0, 0, 0.07) 0 1px 1px 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
		font-size: 100%;
		height: 44px;
		line-height: 1.15;
		margin: 12px 0 0;
		outline: none;
		overflow: hidden;
		padding: 0 25px;
		position: relative;
		text-align: center;
		text-transform: none;
		transform: translateZ(0);
		transition:
			all 0.2s,
			box-shadow 0.08s ease-in;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		width: 100%;
	}
	#submitButton:disabled {
		cursor: default;
	}
	#submitButton:focus {
		box-shadow:
			rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
			rgba(50, 50, 93, 0.2) 0 6px 15px 0,
			rgba(0, 0, 0, 0.1) 0 2px 2px 0,
			rgba(50, 151, 211, 0.3) 0 0 0 4px;
	}
</style>
