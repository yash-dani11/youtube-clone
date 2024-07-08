import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex mb-8 justify-center'>
    <div className='w-40 h-24'>
    <div className='rounded-xl w-44 h-24 bg-gray-200 animate-blink'></div>
    </div>
    <div className='ml-5 w-1/2 mt-1'>
        <div className='w-full h-8 bg-gray-200 animate-blink'></div>
        <div className='mt-5 w-1/3 h-2 bg-gray-200 animate-blink'></div>
        <div className='mt-5 w-1/3 h-2 bg-gray-200 animate-blink'></div>
    </div>
</div>
  )
}

export default Shimmer