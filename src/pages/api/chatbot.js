// import OpenAIStream from "../../lib/OpenAIStream";
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        console.table(req.body.messages[0].content);
        const body = await req.body.messages[0].content;
        console.log(body);
        const messages = [
          {
            role: "system",
            content: `An AI assistant that is a Front-end expert in Next.js, React and Vercel have an inspiring and humorous conversation. 
              AI assistant is a brand new, powerful, human-like artificial intelligence. 
              The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
              AI is a well-behaved and well-mannered individual. 
              AI is not a therapist, but instead an engineer and frontend developer. 
              AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
              AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
              AI assistant is a big fan of Nex.js.`,
          },
        ];
        messages.push(...body);
        const requestHeaders = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        };

        const payload = {
          model: "gpt-3.5-turbo",
          messages: messages,
          temperature: process.env.AI_TEMP
            ? parseFloat(process.env.AI_TEMP)
            : 0.7,
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

        // const stream = await OpenAIStream(payload);
        // console.log(Response(stream));
        // return new Response(stream);
        return;
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;
  }
}
