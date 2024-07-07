import React from 'react'
import { getTimeString } from '../../utils/formatter';
import MORE_ICON from "../../assets/more.svg";
import { Link } from 'react-router-dom';
const RelatedCard = React.forwardRef(({data},ref) => {
  const {snippet} = data;
  return (
    <Link to={`/watch?v=${data?.id?.videoId}`} className="cursor-pointer">
    <div className='flex mb-8 justify-center' ref={ref}>
    <div className='w-40 h-24'>
    <img src={snippet?.thumbnails?.high?.url} alt="Title" className='rounded-xl w-44 h-24'></img>
    </div>
    <div className='ml-2 w-1/2'>
        <div className='font-bold line-clamp-2'>{snippet?.title}</div>
        <div className='text-xs text-gray-700 mt-0.5'>{snippet?.channelTitle}</div>
        <div className='text-xs text-gray-700 mt-0.5'>{`${getTimeString(snippet?.publishedAt)} ago`}</div>
    </div>
    <div>
            <img src={MORE_ICON} alt='options'></img>
        </div>
</div>
</Link>
  )
})

export default RelatedCard