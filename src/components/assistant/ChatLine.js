const type = "user" | "system" | "assistant";

export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900">
          <a href="#" className="hover:underline">
            AI
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
);

const convertNewLines = (text) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

export function ChatLine({ role = "assistant", content }) {
  if (!content) {
    return null;
  }
  const formatteMessage = convertNewLines(content);


  return (
    <div
      className={
        role != "assistant" ? "float-right clear-both" : "float-left clear-both"
      }
    >
      <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-1 gap-4">
            <p className="font-large text-xxl text-gray-900">
              <a href="#" className="hover:underline">
                {role == "assistant" ? "Zola" : "You"}
              </a>
            </p>
            <p
              className={`text ${
                role == "assistant" ? "font-semibold font-" : "text-gray-400"
              }`}
            >
              {formatteMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
