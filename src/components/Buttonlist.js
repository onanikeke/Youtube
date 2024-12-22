import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  const btnList = [
    "All",
    "Gaming",
    "Music",
    "Wildlife",
    "Rivers",
    "Podcasts",
    "Live",
    "Recently Uploaded",
    "New to You",
    "Cats",
    "Dinasours",
    "Mixes",
    "Hot Wheels",
  ];
  return (
    <div className="flex ">
      {btnList.map((btnName, index) => (
        <Button key={index} names={btnName} />
      ))}
    </div>
  );
};

export default Buttonlist;
