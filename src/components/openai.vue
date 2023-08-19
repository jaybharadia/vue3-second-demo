<template>
    <div>
        <form onsubmit="handleSubmit">
            <label>
                Say something...
                <input v-model="input" />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { OpenAIStream, StreamingTextResponse } from "ai";
import { useChat } from "ai/vue";
import { Configuration, OpenAIApi } from "openai-edge";

// export const runtime = "edge";

const { messages, handleSubmit, input } = useChat();

// // Create an OpenAI API client (that's edge friendly!)
const openaiConfig = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(openaiConfig);

console.log("🚀 ~ file: openai.vue:43 ~ created ~ this.openaiConfig:", openai);

async function POST(req) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();
    console.log("🚀 ~ file: index.js:17 ~ POST ~ messages:", messages);

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages,
    });
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
}
</script>
