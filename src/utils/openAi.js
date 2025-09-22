const Groq = require("groq-sdk");

const openai = new Groq({
  apiKey: process.env.REACT_APP_API_KEY,
 
  dangerouslyAllowBrowser: true,
});
export default openai;