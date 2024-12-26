import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { GenerateRandomMsg } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.messages);
  // console.log(chatData);

  let msg = useRef(null);
  const handleLiveComment = (e) => {
    e.preventDefault();
    dispatch(addmessage({ Name: "Deepak Singh", message: msg.current.value }));
  };

  useEffect(() => {
    const i = setInterval(() => {
      //api polling logic...
      // console.log("polling logic running ");
      dispatch(
        addmessage({
          Name: generateRandomName(),
          message: GenerateRandomMsg(),
        })
      );
    }, 5000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="">
      <div className=" p-2 border-[1px] border-black w-[412px] h-[450px] rounded-xl overflow-y-scroll flex flex-col-reverse scrollbar scrollbar-hide ">
        {chatData.map((c, i) => (
          <Chat key={i} name={c.Name} message={c.message} />
        ))}
      </div>
      <form className="flex justify-center items-center gap-2">
        <input
          ref={msg}
          className="w-11/12 px-2  p-1 m-1 border-[1px] border-gray-800 rounded-full "
          type="text"
          placeholder="chat..."
        />
        <button onClick={handleLiveComment}>
          <i class="ri-send-plane-2-line cursor-pointer text-2xl p-1"></i>
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
