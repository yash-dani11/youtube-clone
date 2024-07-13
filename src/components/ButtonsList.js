import React from 'react'
import Button from './Button'
import { VIDEO_CATEGORIES } from '../utils/constants'
const ButtonsList = () => {
    const buttons = VIDEO_CATEGORIES.map((category,index)=><Button key={index}>{category}</Button>);
  return (
    <div className='hidden sm:block fixed bg-white w-full pt-2 pl-8 overflow-scroll'>{buttons}</div>
  )
}

export default ButtonsList