import React, { useCallback,useRef } from 'react'
import RelatedCard from './RelatedCard'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import fetchRelatedVideos from './fetchRelatedVideos';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { addRelatedVideos } from '../../redux/videoSlice';
import Shimmer from './Shimmer';
const RelatedVideoContainer = () => {
    
const [searchParams]=useSearchParams();
    const videoID = searchParams.get("v");
    const title = useSelector(state=>state.videos?.videos?.all?.[videoID]?.snippet?.title);
    const relatedRef = useRef();
    const dispatch = useDispatch();
    const queryString = title?.split(" ")[0];
    const videos = useSelector(state=>state.videos?.related);
    const related = videos?.videos[videoID];
    const token = videos?.token; 
    const storeRelatedVideos = useCallback(async()=>{
      try {
        const data = await fetchRelatedVideos(videoID,queryString,token);
        dispatch(addRelatedVideos(data));
      } catch (error) {
        console.log("An error occured.",error);
      }
    },[videoID,title,token])
    useInfiniteScroll(storeRelatedVideos,relatedRef,related)
    let relatedVideos = Array(20).fill(0).map((_,index)=><Shimmer key={index}></Shimmer>)
    if(related){
      const relatedList = Object.values(related);
      relatedVideos = relatedList.map((video,index)=><RelatedCard data={video} key={video?.etag} ref={index===relatedList.length-4?relatedRef:null}></RelatedCard>)
    }
    
    
    
  return (
    <div className='w-full h-full hidden sm:flex flex-col m-2 ml-0.5'>
        {relatedVideos}
    </div>
  )
}

export default RelatedVideoContainer