import React from "react";
import { getTimeString, numberFormatter } from "../../utils/formatter";
import { Link } from "react-router-dom";
import MORE_ICON from "../../assets/more.svg";

const VideoCard = React.forwardRef(({ details },ref) => {
  const { snippet, statistics, id } = details;
  const timeString = getTimeString(snippet.publishedAt);
  const viewCount = numberFormatter(statistics?.viewCount);
  return (
    <Link to={`/watch?v=${id}`} className="cursor-pointer">
      <div className="w-screen sm:w-80 sm:ml-4 mb-8 sm:mb-5 sm:mx-0" ref={ref}>
        <img
          src={snippet?.thumbnails?.
            medium?.url}
          className="sm:rounded-2xl h-48 w-screen sm:w-80 hover:rounded-none"
          alt={snippet?.title}
        ></img>
        <div className="px-2">
          <div className="flex items-center mt-2 justify-between">
          <div className="line-clamp-2 font-bold text-sm">
            {snippet?.title}
          </div>
          <div>
          <img src={MORE_ICON} alt="MORE"></img>
          </div>
          </div>
          <div className="text-gray-500 text-sm">{snippet?.channelTitle}</div>
          <div className=" text-gray-500 text-sm">
            <span>{viewCount} views</span>
            <span className="px-0.5">•</span>
            <span>{timeString} ago</span>
          </div>
        </div>
      </div>
    </Link>
  );
})

export default VideoCard;
