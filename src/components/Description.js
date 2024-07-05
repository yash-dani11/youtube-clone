import React, { useState } from 'react'
import { getTimeString } from '../utils/formatter'; 
const Description = ({description,viewCount,age}) => {
    const lines = description?.split('\n').slice(0,2);
    const truncatedDescription = lines.join('\n');
    const [displayFullText,setDisplayFullText] = useState(false);
    const toggleDescriptionText=()=>{
        setDisplayFullText(prev=>!prev);
    }
    const buttonText = displayFullText?"...less":"...more";
    const descriptionText = displayFullText?description:truncatedDescription;
  return (
    <div className='bg-gray-100 w-full rounded-xl p-4'>
        <div className='font-bold text-sm'><span>{`${Number(viewCount)?.toLocaleString()} views`}</span><span className='ml-3'>{`${getTimeString(age)} ago`}</span></div>
        <div className='whitespace-pre-line'>{descriptionText}</div>
        <button className="font-semibold text-gray-600" onClick={toggleDescriptionText}>{buttonText}</button>
        </div>
  )
}

export default Description