import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleTogglemenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 my-2 -mt-2 shadow-lg ">
      <div className="flex col-span-2 items-center gap-4">
        <img
          onClick={handleTogglemenu}
          className="h-6 hover:cursor-pointer"
          alt="hem"
          src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png"
        />
        <img
          className="w-16"
          alt="yt_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg"
        />
      </div>
      <div className="col-span-8 flex items-center justify-center">
        <input
          className=" w-1/2 border-[1px] border-gray-400 py-1 focus:ring-1  focus:ring-blue-400 rounded-l-full px-2 outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="border-[1px] border-gray-400 rounded-r-full px-4 py-2 bg-gray-200">
          <CiSearch />
        </button>
        <button>
          <p className=" ml-4 text-2xl border-[1px] p-1 rounded-full bg-gray-200">
            <MdKeyboardVoice />
          </p>
        </button>
      </div>
      <div className="flex col-span-2 gap-2 justify-end items-center ">
        <button className="px-4 py-2 border-[1px] rounded-full font-medium text-sm bg-gray-200">
          ╋ Create
        </button>
        <p className="text-2xl">
          <IoIosNotificationsOutline />
        </p>
        <img
          className="h-8 rounded-full"
          alt="user_icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
