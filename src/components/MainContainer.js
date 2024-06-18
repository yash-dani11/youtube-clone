import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='px-20 py-4'><ButtonsList></ButtonsList>
    <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer