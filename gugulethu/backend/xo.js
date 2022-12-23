import { ChatGPTAPIBrowser } from 'chatgpt'
calling_api()

async function calling_api(){

  const api = new ChatGPTAPIBrowser({
    email: "Neo25722@gmail.com",
    password: "BOSS97balls!"
  })
  await api.initSession()
  
  const result = await api.sendMessage('Hello World!')
  console.log(result.response)
}
