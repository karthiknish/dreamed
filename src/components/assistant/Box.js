import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { ChatLine, LoadingChatLine } from "./ChatLine";
import { useCookies } from "react-cookie";
import { AiOutlineClose } from "react-icons/ai";
const COOKIE_NAME = process.env.COOKIE_NAME;
const InputMessage = ({ input, setInput, sendMessage }) => (
  <div className="mt-6 w-full flex">
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
      onFocus={() => document.body.classList.add("stop-scrolling")}
      onBlur={() => document.body.classList.remove("stop-scrolling")}
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
function Box({ messages, setMessages, loading, setLoading, on, setOn }) {
  const [input, setInput] = useState("");
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);
  const [chatBoxRef, setChatBoxRef] = useState(null);
  useEffect(() => {
    if (chatBoxRef) {
      chatBoxRef.scrollTop = chatBoxRef.scrollHeight;
    }
  }, [messages, chatBoxRef]);
  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      const randomId = Math.random().toString(36).substring(7);
      setCookie(COOKIE_NAME, randomId);
    }
  }, [cookie, setCookie]);
  const sendMessage = async (message) => {
    const keywords = [
      "abroad",
      "studies",
      "admission",
      "UK",
      "USA",
      "Canada",
      "Australia",
      "Ireland",
      "loan",
      "processing",
      "visa",
      "IELTS",
      "SOP",
      "LOR",
      "education",
      "consultancy",
      "english",
    ];
    const isRelated = keywords.some((keyword) =>
      message.toLowerCase().includes(keyword.toLowerCase())
    );
    if (!isRelated) {
      setMessages([
        ...messages,
        {
          role: "assistant",
          content:
            "I'm sorry, but that question is off-topic. I am here to assist you with education consultancy-related inquiries. Please feel free to ask about abroad studies admissions, loan processing, visa applications, IELTS preparation, SOPs, or LORs.",
        },
      ]);
      return;
    }
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: message }];
    setMessages(newMessages);
    const last10messages = newMessages.slice(-10).map((message) => ({
      role: message.role,
      content: message.content,
    }));

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: last10messages,
        user: cookie[COOKIE_NAME],
      }),
    });

    console.log("Edge function returned.");

    const data = await response.text();

    if (!data) {
      return;
    }

    setMessages([...newMessages, { role: "assistant", content: data }]);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      className={`${
        on
          ? "md:fixed sticky flex flex-col overflow-hidden bottom-20 md:w-1/2 w-full md:h-auto h-full right-10"
          : "fixed bottom-0 right-0 md:bottom-20 md:right-10 md:max-w-md md:h-auto w-full h-full"
      } bg-slate-200 p-4`}
    >
      <div className="md:hidden mt-2 absolute top-2 right-2">
        <AiOutlineClose
          onClick={() => setOn(!on)}
          className="h-6 w-6 text-2xl text-gray-500 cursor-pointer"
        />
      </div>
      <div ref={setChatBoxRef} className="flex-grow overflow-y-auto">
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
      </div>
      <div className="w-full border-t-2">
        <InputMessage
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>
    </motion.div>
  );
}

export default Box;
