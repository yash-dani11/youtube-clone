import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import ButtonsList from './ButtonsList'

const Homepage = () => {
  return (
    <div className='flex space-around'>
    <Sidebar></Sidebar>
    <MainContainer></MainContainer>
    </div>
  )
}

export default Homepage