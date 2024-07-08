import React from "react";

const Shimmer = () => {
  return (
    <div className="w-80 sm:ml-1 mb-5">
      <div className="rounded-2xl h-48 w-80 bg-gray-100 animate-blink"></div>
      <div className="px-2 w-80">
        <div className="h-6 bg-gray-100 animate-blink mt-2"></div>
        <div className="bg-gray-100 animate-blink h-5 mt-1"></div>
      </div>
    </div>
  );
};

export default Shimmer;
