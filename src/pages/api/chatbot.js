const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { role, content } = req.body;

    const payload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant for Dreamed Consultancy, an abroad education consultancy.",
        },
        {
          role: role,
          content: content,
        },
      ],
      temperature: 0.8,
      max_tokens: 150,
    };

    try {
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion(payload);
      console.log(response);
      const assistantMessage = response.choices[0].message.text;
      res.status(200).json({ message: assistantMessage });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error.message);
    }
  } else {
    res.status(405).end();
  }
};
