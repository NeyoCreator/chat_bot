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
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response)
}

// app.get('/api', (req, res) => {
//     openai.api.assistant({
//       prompt: 'Hello, how can I help you today?',
//       model: 'text-davinci-002',
//       api_key: process.env.OPENAI_API_KEY,
//     }, (error, response) => {
//       if (error) {
//         console.error(error);
//         return;
//       }
  
//       res.send(response.data.response);
//     });
//   });



app.get('/', (req, res) => {
    display()
    res.json({"name":"mkal", "schedule":"please"})
});

app.listen(2000, () => { console.log("Server started on porst 2000") })

process.env
