const { OpenAIStream } = require("../../lib/OpenAIStream");

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const config = {
  runtime: "edge",
};

const handler = async (req) => {
  const body = await req.json();

  const messages = [
    {
      role: "system",
      content: `DreamEd Consultancy is an education consultancy that specializes in abroad studies admissions in the UK, USA, Canada, Australia, and Ireland. They provide comprehensive assistance with loan processing, visa applications, IELTS preparation, SOPs (Statements of Purpose), and LORs (Letters of Recommendation). This AI assistant is knowledgeable in various aspects of education consultancy and aims to provide professional and direct answers to your queries. The AI assistant is characterized by expertise, helpfulness, and articulateness. As a reliable and well-mannered individual, the AI focuses on providing accurate and relevant information to address your concerns regarding overseas education opportunities and processes.The AI should also make the replies short for a chatbot`,
    },
  ];

  messages.push(...(body?.messages || []));

  const payload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
};

export default handler;
