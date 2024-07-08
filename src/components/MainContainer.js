import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer/VideoContainer'

const MainContainer = () => {
  return (
    <div className='sm:ml-60'><ButtonsList></ButtonsList>
    <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer