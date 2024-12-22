import React from "react";
import Shimmer from "./Shimmer";

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo);
  console.log("deepak singh");
  if (!videoInfo) return <Shimmer />;
  const { channelTitle, localized, thumbnails } = videoInfo?.snippet;
  let { viewCount, likeCount } = videoInfo?.statistics;
  viewCount = viewCount / 1000000;
  return (
    <div className="text-black m-2 py-2">
      <div className="w-[380px] h-72 rounded-lg border-black">
        <img
          className="w-full h-[200px] overflow-hidden object-cover rounded-lg"
          src={thumbnails.medium.url}
          alt={localized.title}
        />
        <p className="font-bold">{localized.title}</p>
        <h1>{channelTitle}</h1>
        <h1>{viewCount.toFixed(1)}M views</h1>
      </div>
    </div>
  );
};

export default VideoCard;
