import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard, { HighOrderComponent } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (videos.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <HighOrderComponent info={videos[0]} />} */}
      {videos.length > 0 &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch/" + video.id}>
            <VideoCard videoInfo={video} />
          </Link>
        ))}
      ;
    </div>
  );
};

export default VideoContainer;
