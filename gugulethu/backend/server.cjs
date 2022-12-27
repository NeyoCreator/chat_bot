//IMPORT LIBRARIES
require('dotenv').config()
const openai = require('openai');
const express = require('express')
const app = express()
const cors = require('cors');

//ENABLE CORS
app.use(cors());
app.use(express.json());

//PROCESSING FUNCTION
async function processData(input){
    const configuration = new openai.Configuration({
        organization: "org-2PlHfJ27wgR5YD6RNwVBbj1p",
        apiKey: process.env.OPENAI_API_KEY,
      });
      const api = new openai.OpenAIApi(configuration);
      const response = await api.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        max_tokens: 400,
        temperature: 1,
      });
      return response.data.choices
}

app.get('/', async (req, res) => {
});


//SEND DATA TO FRONTEND
app.post('/api/data',async(req, res) => {
  const data = req.body;
  const choices = await processData(req.body["data"])

  //CLEAN DATA 
  let  cleanedData = choices[0].text.trim()

  
  //SEND DATA BACK TO FRONT END
  res.send({ success: cleanedData });

});

//LISTEN TO PORT
app.listen(2000, () => { console.log("Server started on post 2000") })
process.env
