import React from 'react'
import { useParams } from 'react-router-dom'
import { EMBED_VIDEO_ENDPOINT } from '../utils/constants';

const Player = () => {
    const id = useParams("id")?.id;
    if(!id){
        return;
    }
  return (
    <div><iframe className='w-4/5 aspect-video' src={`${EMBED_VIDEO_ENDPOINT}${id}?autoplay=1&mute=1`} title="YouTube video player" ></iframe></div>
  )
}

export default Player