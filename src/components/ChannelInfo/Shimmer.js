import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row">
      <div className="flex items-center"><div className="mr-3">
        <div
          alt="thumbnail"
          className="w-10 h-10 rounded-full bg-gray-100 animate-blink"
        ></div>
      </div>
      <div>
        <div className="bg-gray-100 animate-blink h-7 w-44"></div>
        <div className="bg-gray-100 animate-blink h-4 w-44 mt-2"></div>
      </div>
      <div className="ml-4 sm:ml-10">
        <div className="bg-gray-100 animate-blink rounded-3xl h-9 w-24 p-2.5 px-4">
        </div>
      </div></div>
      <div className="flex items-center justify-between mt-6 sm:mt-0">
      <div className="bg-gray-100 animate-blink p-2 py-1 rounded-3xl h-9 w-28">
          
        </div>

        <div className="bg-gray-100 animate-blink p-2 px-3 rounded-3xl ml-3 h-9 w-24 flex items-center">
          
          
          
        </div>
        <div className="bg-gray-100 animate-blink p-2 px-3 rounded-3xl ml-3 h-9 w-28 flex items-center">
          
          
          
        </div>
        <div className="bg-gray-100 animate-blink p-2 px-3 rounded-3xl ml-3 h-9 w-9 items-center hidden lg:flex">
          
            
          
        </div>
        
      </div>
    </div>
  )
}

export default Shimmer