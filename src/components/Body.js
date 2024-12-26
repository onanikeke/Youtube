import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar scrollbar-hide ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
