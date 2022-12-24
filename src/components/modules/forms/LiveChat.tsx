import { send, user } from "assets/images";
import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleSendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="px-2 py-4 flex flex-col justify-between">
      <ul className="h-[450px] flex flex-col gap-2 overflow-y-scroll ">
        {messages.map((message) => (
          <li key={message} className=" w-[80%]  flex gap-2">
            <span>
              <img src={user} className="h-8 w-18" />
            </span>
            <span className="rounded-r-md rounded-bl-md text-[24px] bg-gray-50 p-2">{message}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Send Message..."
          className="bg-white p-2 w-[80%] border-2 border-gray-100 rounded-md"
        />
        <button type="submit" className="bg-green p-3 rounded-full text-white">
          <img />
        </button>
        <button type="submit" className="bg-green p-3 rounded-full text-white">
          <img src={send} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
