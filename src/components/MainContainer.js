import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer/VideoContainer'
import { useSelector } from 'react-redux'
const MainContainer = () => {
  const viewSideBar = useSelector((state) => state.sidebar?.view);
  const marginLeft = viewSideBar ? "ml-64" : "mr-2";
  return (
    <div className={`${marginLeft}`}><ButtonsList></ButtonsList>
    <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer