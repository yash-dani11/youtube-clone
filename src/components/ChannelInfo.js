import React from "react";
import useChannelInfo from "../hooks/useChannelInfo";
import { useSelector } from "react-redux";
import { numberFormatter } from "../utils/formatter";
import OPTIONS_ICON from "../assets/options.svg";
import SHARE_ICON from "../assets/share.svg";
import LIKE_ICON from "../assets/like.svg";
import DISLIKE_ICON from "../assets/dislike.svg";
import DOWNLOAD_ICON from "../assets/download.svg";
const ChannelInfo = ({ channelId,likeCount }) => {
  useChannelInfo(channelId);

  const channelInfo = useSelector(
    (state) => state.channel?.channelInfo?.[channelId]
  );
    const snippet = channelInfo?.items?.[0]?.snippet;
    const statistics = channelInfo?.items?.[0]?.statistics;
  
  

  return (
    <div className="flex items-center justify-between flex-col sm:flex-row">
      <div className="flex items-center"><div className="mr-3">
        <img
          src={snippet?.thumbnails?.high?.url}
          alt="thumbnail"
          className="w-10 h-10 rounded-full"
        ></img>
      </div>
      <div>
        <div className="font-semibold text-lg">{snippet?.title}</div>
        <div className="text-gray-600 text-xs">{`${numberFormatter(
          statistics?.subscriberCount
        )} subscribers`}</div>
      </div>
      <div className="ml-4 sm:ml-10">
        <button className="bg-black text-white font-semibold text-xs rounded-3xl p-2.5 px-4">
          Subscribe
        </button>
      </div></div>
      <div className="flex items-center text-gray-800 font-semibold justify-between text-sm mt-6 sm:mt-0">
        <div className="bg-gray-100 p-2 py-1 rounded-3xl flex items-center h-9">
          <button>
            <div className="flex items-center">
              <img src={LIKE_ICON} alt="like"></img>
              <div className="mx-1">{numberFormatter(likeCount)}</div>
            </div>
          </button>
          <button className="border-l border-gray-400 ml-1 pl-2"> 
              <img src={DISLIKE_ICON} alt="dislike"></img>  
            </button>
        </div>
        <button className="bg-gray-100 p-2 px-3 rounded-3xl ml-3 h-9 flex items-center">
          
            <img src={SHARE_ICON} alt="share"></img>
            <div className="ml-1">Share</div>
          
        </button>
        <button className="bg-gray-100 p-2 px-3 rounded-3xl ml-3 h-9 items-center hidden lg:flex">
          
            <img src={DOWNLOAD_ICON} alt="share"></img>
            <div className="ml-1">Download</div>
          
        </button>
        <button className="p-2 rounded-full bg-gray-100 ml-3">
          <img src={OPTIONS_ICON} alt="Options"></img>
        </button>
      </div>
    </div>
  );
};

export default ChannelInfo;
