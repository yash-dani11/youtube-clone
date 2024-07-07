import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <><Header></Header>
    <div className='mt-14'><Sidebar></Sidebar>
    <Outlet></Outlet></div></>
  )
}

export default Body