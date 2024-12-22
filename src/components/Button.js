import React from "react";

const Button = ({ names }) => {
  return (
    <div>
      <button className=" px-2 py-1 m-2 rounded-xl bg-gray-100 hover:cursor-pointer">
        {names}
      </button>
    </div>
  );
};

export default Button;
