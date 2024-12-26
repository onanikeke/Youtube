import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { openMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  }, [dispatch]);

  const { id } = useParams();
  return (
    <div className="mx-16  ">
      <div className="flex gap-4 ">
        <div className="">
          <iframe
            width="868"
            height="488"
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watchpage;
