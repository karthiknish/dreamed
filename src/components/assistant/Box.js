import { useState } from "react";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { ChatLine, LoadingChatLine } from "./ChatLine";
function Box() {
  const [input, setInput] = useState("What is a good css plugin for nextjs");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  //   const [cookie, setCookie] = useCookies([]);
  //   useEffect(() => {
  //     if (!cookie[COOKIE_NAME]) {
  //       const randomId = Math.random().toString(36).substring(7);
  //       setCookie(COOKIE_NAME, randomId);
  //     }
  //   }, [cookie, setCookie]);
  const sendMessage = async (message) => {
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: message }];
    setMessages(newMessages);
    const last10messages = newMessages.slice(-10).map((message) => ({
      role: "user",
      content: message.content,
    }));

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: last10messages,
        // user: cookie[COOKIE_NAME],
      }),
    }).then((r) => console.log(r));
    console.log("Edge function returned.");

    // if (!response.ok) {
    //   console.log(response.statusText);
    //   throw new Error(response.statusText);
    // }
    // console.log(data);
    const data = response?.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: "assistant", content: lastMessage },
      ]);

      setLoading(false);
    }
  };
  const InputMessage = ({ input, setInput, sendMessage }) => (
    <div className="mt-6 flex clear-both">
      <input
        autoFocus
        type="text"
        aria-label="chat input"
        required
        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(input);
            setInput("");
          }
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        type="submit"
        className="ml-4 flex-none"
        onClick={() => {
          sendMessage(input);
          setInput("");
        }}
      >
        <BiRightArrow />
      </button>
    </div>
  );
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      className="fixed bg-slate-200 p-4 bottom-20 right-10"
    >
      {messages.length &&
        messages?.map(({ content, role }, index) => (
          <ChatLine key={index} role={role} content={content} />
        ))}
      {loading && <LoadingChatLine />}
      {messages.length < 2 && (
        <span className="mx-auto flex flex-grow text-gray-600 clear-both">
          Type a message to start the conversation
        </span>
      )}
      <div className="flex items-center gap-2">
        <InputMessage
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
        {/* <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(input);
              setInput("");
            }
          }}
          value={input}
          className="rounded shadow-sm"
        />
        <BiRightArrow /> */}
      </div>
    </motion.div>
  );
}

export default Box;
