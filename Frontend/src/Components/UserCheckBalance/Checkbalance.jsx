import React, { useState } from 'react'
import { useContext } from 'react'
 import UserContext from '../../context/UserContextMaker';
const Checkbalance = () => {
  const {balance} = useContext(UserContext)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-5">
        <div className="w-80 bg-gray-100 p-4 rounded-lg">
            <h1 className="block mt-1  text-2xl font-bold text-gray-700 text-center"> Balance : {balance}</h1>
        </div>
    </div>
  )
}

export default Checkbalance