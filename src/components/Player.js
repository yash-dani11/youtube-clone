import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EMBED_VIDEO_ENDPOINT } from "../utils/constants";
import { useSelector } from "react-redux";
import ChannelInfo from "./ChannelInfo/ChannelInfo";
import Description from "./Description";
import useVideo from "../hooks/useVideo";
import RelatedVideoContainer from "./Related/RelatedVideoContainer";
import CommentsContainer from "./Comments/CommentsContainer";
const Player = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const videoInfo = useSelector((state) => state.videos.videos?.all?.[id]);
  const viewSideBar = useSelector((state) => state.sidebar?.view);
  useVideo(id);
  const likeCount = videoInfo?.statistics?.likeCount;
  const channelId = videoInfo?.snippet?.channelId;
  const marginLeft = viewSideBar ? "ml-64" : "sm:mx-6";
  const [isIframeLoading,setIsIframeLoading] = useState(true);
  useEffect(() => {
    if (videoInfo?.snippet?.title) {
      document.title = videoInfo?.snippet?.title;
    }
  }, [videoInfo?.snippet?.title]);

  return (
    <>
      
        <div className="block sm:grid sm:grid-cols-3 mt-20">
          <div className={`${marginLeft} col-span-2`}>
            {isIframeLoading&&<div className="w-full aspect-video sm:rounded-xl bg-gray-200 animate-blink"></div>}
            <iframe
              className={`w-full aspect-video sm:rounded-xl ${isIframeLoading ? 'hidden' : 'block'}`}
              src={`${EMBED_VIDEO_ENDPOINT}${id}?autoplay=1&mute=1`}
              title="YouTube video player"
              allowFullScreen
              onLoad={()=>{setIsIframeLoading(false)}}
            ></iframe>
            <div className="mx-6 sm:mx-0">
            {videoInfo?.snippet?.title?<div className="font-bold text-xl mt-2">
            {videoInfo?.snippet?.title}
                </div>:<div className="mt-2 h-9 bg-gray-100 animate-blink w-1/2"></div>}
              <div className="mt-4 ">
                <ChannelInfo
                  channelId={channelId}
                  likeCount={likeCount}
                ></ChannelInfo>
                <div className="mt-4">
                  <Description
                    age={videoInfo?.snippet?.publishedAt}
                    viewCount={videoInfo?.statistics.viewCount}
                    description={videoInfo?.snippet?.description}
                  ></Description>
                </div>
              </div>
              <CommentsContainer></CommentsContainer>
            </div>
            
          </div>
          <div className="col-span-1">
              <RelatedVideoContainer></RelatedVideoContainer>
            </div>
        </div>
      
    </>
  );
};

export default Player;
