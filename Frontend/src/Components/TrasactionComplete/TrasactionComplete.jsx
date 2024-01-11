import React from 'react'
import { useParams } from 'react-router-dom'

const TrasactionComplete = () => {

    const {transitionstatus} = useParams()
    return (
      <div className="flex flex-col items-center justify-center min-h-screen m-5">
          <div className="w-80 bg-gray-100 p-4 rounded-lg">
              <h1 className="block mt-1  text-2xl font-bold text-gray-700 text-center"> Transition  {transitionstatus}</h1>
          </div>
      </div>
    )
}

export default TrasactionComplete