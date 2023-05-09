import React, { useState } from "react";
import { useUserData } from "../state/store";
import { postUserMsg } from "../axios";
import EmojiPicker from 'emoji-picker-react';

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const { id: clientId, context, updateContext } = useUserData();
  const [showEmojis, setShowEmojis] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatting, setIsChatting] = useState(false);
  const [resTime, setResTime] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get("userInput");
    updateContext(inputValue, true);
    setUserInput("");

    setResTime(true);
    const botMsg = await postUserMsg({ id: clientId, msg: userInput });
    if (botMsg) {
      updateContext(botMsg, false);

      setResTime(false);
    } else setResTime(true);
  };
  const handleUserInput = (e) => setUserInput(e.target.value);
  const handleSelectEmoji = (e) => {
    setUserInput(userInput + e.emoji);
    setShowEmojis(!showEmojis)
  };

  return (
    <>
      <div 
        className="fixed right-10 bottom-10 bg-zeka-small h-120 w-200 gap-2 bg-no-repeat"
        onClick={()=>setIsChatOpen(true)}> 
      </div>
      {isChatOpen && (
        <div className="fixed flex flex-col text-14 justify-between font-inter w-37 gap-2 bg-chat-body border-borderColor h-65 min-h-min max-h-max rounded-7px right-10 bottom-10 shadow-md">
          {/* ChatHeader */}
          <div className="flex justify-between h-40 bg-green text-white font-bold rounded-7 p-12">
            <div className=" p-5">Zəka</div>
            <div className="flex items-end justify-between w-45 p-2">
              <div className="w-14 border-b-4 border-white h-2 rounded-7px cursor-pointer"></div>
              <div className="w-25 h-25 text-center leading-16 text-18 border-3 rounded-25 rotate-45 p-2px cursor-pointer">+</div> 
            </div>
          </div>
          {/* Chatarea */}
          {isChatting ?
            <div className="flex flex-col w-full h-full gap-2 p-12px overflow-auto rounded-xl">
              {context?.map(({ id, msg, isUser }) => (
                <ChatBox
                  key={id}
                  content={msg}
                  clientName={isUser ? `Client ${clientId}` : null}
                />
              ))}
            </div>
          :
            <div className="flex flex-col w-full h-full gap-2 p-12px rounded-xl">
              <div className="bg-zeka-big bg-no-repeat w-60% ml-auto h-1/2 mt-auto"></div>
            </div>
          }
          {/* Chatinput */}
          {/* {!resTime && ( */}
            <form onSubmit={handleSubmit} className="flex px-12-px mb-12">
              <button
                type="button"
                onClick={() => setShowEmojis(!showEmojis)}
                className="w-19 h-19 z-50 mt-10 ml-13 bg-smile bg-cover bg-center focus:outline-none"
              >
              </button>
              {showEmojis && (
                <div className="absolute bottom-[65px]">
                  <EmojiPicker
                  onEmojiClick={handleSelectEmoji}
                  />
                </div>
              )}
              <input
                type="text"
                disabled={resTime}
                value={userInput}
                onChange={handleUserInput}
                name="userInput"
                placeholder={resTime ? '' : "Sualınızı buraya yazın..."}
                className="flex w-full pl-52 px-4 py-1 ml-m34 h-40 w-90% bg-white rounded-lg border-none shadow-input relative disabled:bg-slate-300"
              />
              {!resTime && ( 
                <button 
                  type="submit"
                  className={userInput ? "w-36 h-36 bg-cover bg-send ml-12" : "w-36 h-36 bg-cover bg-voice ml-12"}
                  onClick={()=>setIsChatting(true)}
                >
                </button> 
              )} 
            </form>
          {/* )} */}
      </div>
      )}
    </>
  );
};

export default ChatBot;

const ChatBox = ({ content, clientName }) => (
  <div className={clientName ? "ml-10 flex flex-row-reverse break-words" : "flex break-words"}>
    <span className={clientName ? "bg-user rounded-full h-44 shadow-user-shadow z-0 mt-13 text-center p-user-name ml-10" : "inline-block w-46 h-46 bg-cover bg-center rounded-full bg-zeka-icon mt-13 mr-10"}>
    {clientName ? 'ME' :''}
    </span>
    <div>
      <div className={clientName ? "px-4 py-4 rounded-bl-28 rounded-tr-28 rounded-tl-28 bg-slate-100 w-fit min-w-150 max-w-435 bg-blue-1 leading-4" : "px-4 py-4 bg-slate-100 w-fit min-w-150 max-w-435 bg-gradient-to-b from-green-1 to-green-2 rounded-br-28 rounded-tr-28 rounded-tl-28 leading-4 text-white"}>
        {content}
      </div>
      <div className={clientName ? "text-time px-1 text-right" : "text-time px-1"}>
        {/* {time} */}
        10 AM
      </div>
    </div>

  </div>
);

