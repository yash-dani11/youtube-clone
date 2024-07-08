import React from 'react'
import Button from './Button'
import { VIDEO_CATEGORIES } from '../utils/constants'
const ButtonsList = () => {
    const buttons = VIDEO_CATEGORIES.map((category,index)=><Button key={index}>{category}</Button>);
  return (
    <div className='hidden sm:flex fixed bg-white w-full pt-2 pl-8'>{buttons}</div>
  )
}

export default ButtonsList