import { useEffect } from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Deepak Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [
      {
        name: "Mannu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        profilePic:
          "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",

        replies: [
          {
            name: "Rma",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            profilePic:
              "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
            replies: [],
          },
        ],
      },
      {
        name: "Singha",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        profilePic:
          "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
        replies: [],
      },
    ],
  },
  {
    name: "Aman Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [],
  },
  {
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [],
  },
  {
    name: "Vivek",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [],
  },
  {
    name: "Vineet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [],
  },
  {
    name: "Riya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [],
  },
  {
    name: "Prem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic:
      "https://cdn-icons-png.freepik.com/512/16794/16794043.png?ga=GA1.1.163166233.1732639135",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Comments:</h1>
      {commentsData.map((comment) => {
        return <Comment key={comment.name} data={comment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
