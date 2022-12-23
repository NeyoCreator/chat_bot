import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-2PlHfJ27wgR5YD6RNwVBbj1p",
    apiKey: "" ,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "what is the capital of France?",
  max_tokens: 7,
  temperature: 0,
});
console.log(response.data.choices)