import React from "react";
import ChatBot from "./components/ChatBot";
import DropDown from "./components/DropDown";

const App = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <div className="container pt-12 w-full h-full relative">
        <DropDown />
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
