import React from 'react'

const ShimmerList = () => {
    return (
        <div className='flex items-center justify-center'>
        <div className="p-4 w-6/12">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between animate-pulse">
              <div className="w-7/12">
                <div className="py-2">
                  <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                </div>
                <div className="h-3 bg-gray-400 rounded w-full mt-2"></div>
              </div>
              <div className="w-2/12 p-4 flex items-center justify-center">
                <div className="relative w-full">
                  <div className="absolute bottom-4 left-4 w-full">
                    {/* <div className="p-2 rounded-xl bg-gray-400 w-full h-10"></div> */}
                  </div>
                  <div className="w-full h-24 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      );
}

export default ShimmerList