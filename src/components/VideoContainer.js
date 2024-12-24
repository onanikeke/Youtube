import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  // console.log(YOUTUBE_VIDEO_URL);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video, index) => (
          <Link key={video.id} to={"/watch/" + video.id}>
            <VideoCard videoInfo={video} />
          </Link>
        ))}
      ;
    </div>
  );
};

export default VideoContainer;
