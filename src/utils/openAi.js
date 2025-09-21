const Groq = require("groq-sdk");

const openai = new Groq({
  apiKey: "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",
 
  dangerouslyAllowBrowser: true,
});
export default openai;