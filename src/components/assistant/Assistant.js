import { useState, useEffect } from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import Box from "./Box";

function Assistant() {
  const initialMessages = [
    {
      role: "assistant",
      content: "Hi! I am DreamEd's AI assistant. Ask me anything!",
    },
  ];

  const [on, setOn] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);
  useEffect(() => {
    const clearStorage = () => {
      localStorage.removeItem("chatMessages");
    };

    window.addEventListener("beforeunload", clearStorage);

    return () => {
      window.removeEventListener("beforeunload", clearStorage);
    };
  }, []);
  return (
    <>
      <div
        onClick={() => setOn(!on)}
        className="bg-slate-100 p-4 fixed bottom-10 right-10 rounded shadow-lg"
      >
        <BsFillChatLeftQuoteFill />
      </div>
      {on && (
        <Box
          messages={messages}
          setMessages={setMessages}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </>
  );
}

export default Assistant;