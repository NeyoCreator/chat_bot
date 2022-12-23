require('dotenv').config()
const openai = require('openai');
const express = require('express')
const app = express()



async function display(){
    const configuration = new openai.Configuration({
        organization: "org-2PlHfJ27wgR5YD6RNwVBbj1p",
        apiKey: process.env.OPENAI_API_KEY,
      });
      const api = new openai.OpenAIApi(configuration);
      const response = await api.createCompletion({
        model: "text-davinci-003",
        prompt: "What is the capital Of France?",
        max_tokens: 7,
        temperature: 0,
      });
      return response.data.choices
}

app.get('/', async (req, res) => {
  const choices = await display();
  res.json(choices);
});

app.listen(2000, () => { console.log("Server started on porst 2000") })

process.env
