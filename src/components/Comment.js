import React from "react";

const Comment = ({ data }) => {
  // console.log(data);
  const { name, text, replies, profilePic } = data;

  return (
    <div className="flex mt-6 border-l-2">
      <div>
        <img
          className=" rounded-full w-10"
          src={profilePic}
          alt="profile picture"
        />
      </div>
      <div className="flex flex-col ml-3">
        <h1 className="font-semibold">{name}</h1>
        <h2>{text}</h2>
        {replies.map((reply) => {
          return <Comment key={reply.name} data={reply} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
