import React, { useState } from "react";
import { getTimeString } from "../../utils/formatter";
import LIKE_BUTTON from "../../assets/like.svg";
import DISLIKE_BUTTON from "../../assets/dislike.svg";
const Comment = React.forwardRef(({details,index},ref) => {
  const [displayFullComment, setDisplayFullComment] = useState(false);
  const toggleReadMore = ()=>{
    setDisplayFullComment(prev=>!prev);
  }
  const trucatedComment = details?.textDisplay.slice(0,260);
  const comment = displayFullComment?details?.textDisplay:trucatedComment;
  const buttonText = displayFullComment?"Show Less":"Read More"
  return (
    <div ref={ref}>
      <div className="flex justify-stretch mt-6">
        <div className="rounded-full w-10 h-10">
          <img
            className="rounded-full min-w-10 min-h-10"
            src={details?.authorProfileImageUrl}
            alt="USER"
          ></img>
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <div className="text-sm font-bold">{details?.authorDisplayName}</div>
            <div className="text-xs text-gray-500 ml-2">{getTimeString(details?.publishedAt)}{" ago"}</div>
          </div>
          <div className="mt-0.5 text-sm" dangerouslySetInnerHTML={{__html:comment}}></div>
          {trucatedComment.length!==details?.textDisplay.length &&<button className="text-sm font-semibold text-gray-700" onClick={toggleReadMore}>{buttonText}</button>}
          <div className="flex mt-3 items-center">
            <div className="flex items-center"><button><img src={LIKE_BUTTON} className="w-6 h-6" alt="Like"></img></button><span className="text-sm text-gray-500 p-0.5">{details?.likeCount}</span></div>
            <button className="ml-4"><img src={DISLIKE_BUTTON} className="w-6 h-6" alt="Dislike"></img></button>
            <button className="ml-8 text-xs font-bold text-gray-700">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Comment;
