import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-gray-200 rounded-lg p-1 m-2 px-3 font-bold text-sm'>{children}</button>
  )
}

export default Button