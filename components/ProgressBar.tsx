import React from 'react'

const ProgressBar = ({progress}: {progress: number}) => {
  return (
    <div className="w-full max-w-lg mx-auto mb-8">
    {/* <!-- Progress Bar Container --> */}
    <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
      {/* <!-- Progress --> */}
      <div 
        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out"
        style={{ width: `${Math.floor(progress)}%` }}
      ></div>
    </div>

    {/* <!-- Progress Info --> */}
    <div className="mt-2 flex justify-between text-sm font-medium text-muted-foreground">
      <span>Progress</span>
      <span>{Math.floor(progress)}%</span>
    </div>
  </div>
  )
}

export default ProgressBar