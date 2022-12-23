
import { Configuration, OpenAIApi } from "openai";


export async function call_api(){
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
  console.log("yes")
}
