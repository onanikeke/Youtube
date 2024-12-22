import React from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { HiOutlineScissors } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);
  return (
    isMenuOpen && (
      <div className="w-36 m-2 ">
        <ul className="text-sm font-medium ">
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484] hover:cursor-pointer">
            <IoMdHome />
            <p className="text-sm">Home</p>
          </li>
          <li
            className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]
        hover:cursor-pointer"
          >
            <SiYoutubeshorts />
            <p className="text-sm">shorts</p>
          </li>
          <li
            className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]
        hover:cursor-pointer"
          >
            <FaGooglePlay />
            <p className="text-sm">Subscriptions</p>
          </li>
        </ul>
        <hr className="my-2 border-b-1 border-black"></hr>
        <h1 className="font-normal text-lg">You ↬</h1>
        <ul className="text-sm font-medium hover:cursor-pointer">
          <li
            className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]
        hover:cursor-pointer"
          >
            <FaHistory />
            <p className="text-sm">History</p>
          </li>
          <li
            className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]
        hover:cursor-pointer"
          >
            <MdOutlinePlaylistPlay />
            <p className="text-sm">Playlist</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <MdOutlineVideoLibrary />
            <p className="text-sm">Your Video</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <FaGraduationCap />
            <p className="text-sm">Your Course</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <MdOutlineWatchLater />
            <p className="text-sm">Watch later</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <SlLike />
            <p className="text-sm">Liked video</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <HiOutlineScissors />
            <p className="text-sm">Your clips</p>
          </li>
        </ul>
        <hr className="my-2 border-b-1 border-black"></hr>
        <h1 className="font-normal text-lg">Subscriptions</h1>
        <ul className="text-sm font-normal hover:cursor-pointer ">
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484] ">
            <FaUserCircle />
            <p className="text-sm">T-series</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <FaUserCircle />
            <p className="text-sm">Carry Minati</p>
          </li>
          <li className="flex items-center gap-4 text-xl py-2 px-2 rounded-xl hover:bg-[#868484]">
            <FaUserCircle />
            <p className="text-sm">IIT Bombay </p>
          </li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
