import React from 'react'
import Button from './Button'
import { VIDEO_CATEGORIES } from '../utils/constants'
const ButtonsList = () => {
    const buttons = VIDEO_CATEGORIES.map((category,index)=><Button key={index}>{category}</Button>);
    
  return (
    <div className='flex'>{buttons}</div>
  )
}

export default ButtonsList