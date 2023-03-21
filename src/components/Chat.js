import { useState } from "react";

const Chat = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userMessage },
    ]);
    setUserMessage("");

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "user",
        content: userMessage,
      }),
    });

    const data = await response.json();
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: data.message },
    ]);
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className={message.role}>
            {message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userMessage} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
