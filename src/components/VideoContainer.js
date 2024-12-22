import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

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
          <VideoCard key={index} videoInfo={video} />
        ))}
      ;
    </div>
  );
};

export default VideoContainer;
