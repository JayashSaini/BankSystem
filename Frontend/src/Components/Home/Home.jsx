import React from 'react'
import {NavLink} from 'react-router-dom'
 import { useContext } from 'react'
 import UserContext from '../../context/UserContextMaker';
const Home = () => {
  
  return (
    <>
    <nav className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
     {/* Left side */}
     <div className="font-bold text-xl">TrustGaurd</div>

     {/* Right side */}
     <div className="space-x-4">
     <NavLink
        to="/signin"
        className="text-white hover:bg-gray-700 py-2 px-4 rounded-md transition duration-300 ease-in-out mr-4"
        activeclassname="bg-gray-700"
      >
        Sign In
      </NavLink>
      <NavLink
        to="/signup"
        className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300 ease-in-out"
        activeclassname="bg-blue-600"
      >
        Sign Up
      </NavLink>
      </div>
   </nav>
   <div className="bg-blue-900 text-white min-h-screen">
     <div className="container mx-auto py-12 px-6">
       <div className="max-w-3xl">
         <h1 className="text-4xl font-bold mb-6">Welcome to TrustGuard Bank</h1>
         <p className="text-lg leading-relaxed mb-8">
           TrustGuard Bank offers secure and reliable banking services tailored to your needs.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis nisi placerat,
           eget commodo lorem scelerisque. Vivamus vel odio ac arcu finibus commodo.
         </p>
         <NavLink
        to="/Signup"
        className="bg-white text-blue-900 hover:bg-gray-200 py-3 px-8 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
        activeclassname="bg-blue-600"
      >
        Sign Up
      </NavLink>
       </div>
     </div>
   </div>
   </>
  )
}

export default Home