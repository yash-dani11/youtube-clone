import React from "react";
import { useLocation } from "react-router-dom";
import { EMBED_VIDEO_ENDPOINT, WHATSAPP_SHARE_ENDPOINT } from "../utils/constants";
import { useSelector } from "react-redux";
import useComments from "../hooks/useComments";
import Comment from "./Comment";
import ChannelInfo from "./ChannelInfo";
import Description from "./Description";
import useVideo from "../hooks/useVideo";
const Player = () => {
  const id = new URLSearchParams(useLocation().search).get("v");
  const videoInfo = useSelector((state) => state.videos.videos?.[id]);
  useVideo(id);
  const likeCount = videoInfo?.statistics?.likeCount;
  const channelId = videoInfo?.snippet?.channelId;
  useComments(id);
  const commentsList = useSelector(state=>state.comments?.videoComments?.[id]);
  const comments = commentsList?.map(comment=><Comment details = {comment} key={comment.id}></Comment>)
  
  return (
    <>{videoInfo && <div className="m-6">
    <iframe
      className="w-2/3 aspect-video rounded-xl"
      src={`${EMBED_VIDEO_ENDPOINT}${id}?autoplay=1&mute=1`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
    <div className="font-bold text-xl w-2/3 mt-2">{videoInfo?.snippet?.title}</div>
    <div className="mt-4 w-2/3"><ChannelInfo channelId={channelId} likeCount={likeCount}></ChannelInfo>
    <div className="mt-4"><Description age={videoInfo?.snippet?.publishedAt} viewCount={videoInfo?.statistics.viewCount} description={videoInfo?.snippet?.description}></Description></div>
    </div>
    <div className="mt-10 w-2/3">{comments}</div>
  </div>}</>
  );
};

export default Player;
