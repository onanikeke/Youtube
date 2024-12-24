import React, { useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // This is what debouncing is... it is a technique to delay the execution of a function until after some time has passed since the last time it was called.

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => SearchQuerySuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const SearchQuerySuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    console.log(suggestions);
  };

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
      <div className="col-span-8 ">
        <div
          className="flex  items-center justify-center"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" w-1/2 border-[1px] border-gray-400 py-1 focus:ring-1  focus:border-blue-800 rounded-l-full px-2 outline-none"
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
        {showSuggestions && (
          <div className="absolute w-[25.5rem] ml-[9.9rem] mt-1 bg-white rounded-lg overflow-hidden shadow-inner">
            {suggestions.map((sugges) => (
              <h2
                key={sugges}
                className="px-2 py-3 shadow-inner hover:bg-gray-100"
              >
                <i class="ri-search-line mr-3"></i>
                {sugges}
              </h2>
            ))}
          </div>
        )}
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
