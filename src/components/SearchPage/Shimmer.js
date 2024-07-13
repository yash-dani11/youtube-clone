import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-col mb-4 sm:flex-row'><div
    className="w-screen h-48 sm:w-[500px] sm:h-72 sm:rounded-lg animate-blink bg-gray-100"></div>
  <div className="ml-4 mt-2 sm:mt-0">
    <div className="animate-blink bg-gray-100 w-80 h-7"></div>
    <div className="flex flex-row items-center sm:items-start mt-2 sm:flex-col sm:mt-0">
    <div className="sm:mt-2 animate-blink bg-gray-100 h-4 w-32"></div>
    <div className="sm:mx-0 sm:my-2 animate-blink bg-gray-100 w-32 h-5"></div>
    <div className="hidden text-xs sm:block animate-blink bg-gray-100 w-60 h-9"></div>
  </div>
</div>
  </div>
  )
}

export default Shimmer