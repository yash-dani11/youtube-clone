import React from "react";

const Shimmer = () => {
  return (
    
      <div className="flex justify-stretch mt-6">
        <div className="rounded-full w-10 h-10">
          <div className="rounded-full min-w-10 min-h-10 bg-gray-100 animate-blink"></div>
        </div>
        <div className="ml-4 w-full h-20">
            <div className="animate-blink bg-gray-100 ml-2 w-full h-4"></div>
            <div className="animate-blink bg-gray-100 ml-2 w-full h-4 mt-2"></div>
          
        </div>
      </div>
  );
};

export default Shimmer;
