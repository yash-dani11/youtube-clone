import React from "react";
import { getTimeString } from "../../utils/formatter";
import { Link } from "react-router-dom";
const Card = React.forwardRef(({ data }, ref) => {
  const { snippet } = data;
  const timeString = getTimeString(snippet?.publishedAt);
  return (
    <Link to={`/watch?v=${data?.id?.videoId}`}><div ref={ref} className="sm:h-72 w-screen sm:w-full flex flex-col mb-4 sm:flex-row">
    <img
      src={snippet?.thumbnails?.medium?.url}
      alt="thumnail"
      className="w-screen h-48 sm:w-[500px] sm:h-72 sm:rounded-lg hover:rounded-none"
    ></img>
    <div className="ml-4 mt-2 sm:mt-0">
      <div className="line-clamp-2 font-semibold text-sm sm:text-lg">
        {snippet?.title}
      </div>
      <div className="text-gray-500 text-sm flex flex-row items-center sm:items-start mt-2 sm:flex-col sm:mt-0">
      <div className="sm:mt-2 text-xs">{`${timeString} ago`}</div>
      <span className="px-0.5 sm:hidden">•</span>
      <div className="sm:mx-0 sm:my-2 font-semibold text-xs sm:text-sm">{snippet?.channelTitle}</div>
      <div className="hidden text-xs sm:block">{snippet?.description}</div>
    </div>
  </div>
    </div></Link>
      
  );
});

export default Card;
