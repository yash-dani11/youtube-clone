import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer/VideoContainer'

const MainContainer = () => {
  return (
    <div className='px-5 sm:ml-64'><ButtonsList></ButtonsList>
    <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer