import React,{useRef} from 'react'
import fetchPopularVideos from './fetchPopularVideos';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularVideos } from '../../redux/videoSlice';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Shimmer from './Shimmer';
const VideoContainer = () => {
    const videosList = useSelector(store=>store.videos?.videos);
    const videos = videosList?.all;
    const token = videosList?.token;
    const cardRef = useRef();
    const dispatch = useDispatch();
    const allVideos = Object.values(videos)
    const storePopularVideos = async ()=>{
        const data = await fetchPopularVideos(token);
        dispatch(addPopularVideos(data));
    };
    useInfiniteScroll(storePopularVideos,cardRef,videos);
    const cards = allVideos?.map((video,index)=><VideoCard key={video.id} details={video} ref={index===allVideos.length-4?cardRef:null}></VideoCard>)
    const shimmerList = Array(20).fill(0).map((_,index)=><Shimmer key={index}></Shimmer>) 
  return (
    <div className='flex flex-wrap w-full pt-8 sm:pt-20 justify-center'>{cards?.length?cards:shimmerList}</div>
  )
}

export default VideoContainer;