import React from "react";

const Chat = ({ name, message }) => {
  // console.log("deepak singh");
  return (
    <div className="flex items-center gap-2 shadow-md p-2 ">
      <img
        className="h-8 rounded-full"
        alt="user_icon"
        src="https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135"
      />
      <span className="text-sm font-medium">{name}:</span>
      <span className="text-sm font-light">{message}</span>
    </div>
  );
};

export default Chat;
