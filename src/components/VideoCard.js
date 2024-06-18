import React from 'react'
import { getTimeString,numberFormatter } from '../utils/formatter';
import { Link } from 'react-router-dom';

const VideoCard = ({details}) => {
    if(!details){
        return;
    }
    const { snippet, statistics,id} = details; 
    const timeString = getTimeString(snippet.publishedAt);
    const viewCount = numberFormatter(statistics?.viewCount);
  return (
    <Link to={`/watch/${id}`}><div className='m-4 w-72 shadow-md p-2'>
    <img src={snippet?.thumbnails?.high?.url} className='rounded-lg'></img>
    <div className='line-clamp-2 font-bold text-sm mt-2'>{snippet?.title}</div>
    <div className='text-gray-500 text-sm font-bold'>{snippet?.channelTitle}</div>
    <div className='flex justify-between text-sm'><div>{viewCount} views</div>
    <div>{timeString} ago</div></div>

</div></Link>
  )
}

export default VideoCard