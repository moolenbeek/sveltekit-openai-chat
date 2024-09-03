# Sveltekit GPT-4o-mini chat bot

This is a simple chat bot using sveltekit forms, bind, POST, OpenAi API, and GPT-4o-mini

## Creating your API key

Create an account here: [`OpenAI`](https://platform.openai.com/docs/overview)

## Storing your API key in .env file

Store your api key in a .env file in the project root as `OPENAI_API_KEY=`

```bash
#.env
OPENAI_API_KEY=YOUR_API_KEY_GOES_HERE
```

## Developing

Once you've stored your API key and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
