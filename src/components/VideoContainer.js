import React from 'react'
import usePopularVideos from '../hooks/usePopularVideos'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
const VideoContainer = () => {
    usePopularVideos();
    const videos = useSelector(store=>store.videos?.videos);
    const cards = Object.values(videos).map(video=><VideoCard key={video.id} details={video}></VideoCard>)
  return (
    <div className='flex flex-wrap w-full'>{cards}</div>
  )
}

export default VideoContainer