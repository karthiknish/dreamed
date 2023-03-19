import { useState, useEffect } from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import Box from "./Box";
function Assistant() {
  const [on, setOn] = useState(false);
  return (
    <>
      <div
        onClick={() => setOn(!on)}
        className="bg-slate-100 p-4 fixed bottom-10 right-10 rounded shadow-lg"
      >
        <BsFillChatLeftQuoteFill />
      </div>
      {on && <Box />}
    </>
  );
}

export default Assistant;
