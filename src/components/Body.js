import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Provider } from "react-redux";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
