import React from "react";
import Shimmer from "./Shimmer";

const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  // console.log("deepak singh");
  if (!videoInfo) return <Shimmer />;
  const { channelTitle, localized, thumbnails } = videoInfo?.snippet;
  let { viewCount, likeCount } = videoInfo?.statistics;
  viewCount = viewCount / 1000000;
  return (
    <div className="text-black m-2 py-2  ease-in-out duration-500 hover:cursor-pointer">
      <div className="w-[280px] h-64 rounded-lg border-black">
        <img
          className="w-full h-[150px] overflow-hidden object-cover rounded-lg"
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

// export const HighOrderComponent = ({ info }) => {
//   return (
//     <div className="border-2 border-red-500">
//       <VideoCard videoInfo={info} />
//     </div>
//   );
// };

export default VideoCard;
