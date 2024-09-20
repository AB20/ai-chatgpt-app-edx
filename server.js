require('dotenv').config();
const { OpenAI } = require("@langchain/openai");

const model = new OpenAI({ 
    openAIApiKey: process.env.OPENAI_API_KEY, 
    temperature: 0,
    model: 'gpt-4.0-mini'
  });
  
  console.log(model);