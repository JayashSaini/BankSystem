import React from 'react'
import { useNavigate } from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate();
    const homeHandler = ()=>{
        navigate('/');
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
    <img
      src="https://t3.ftcdn.net/jpg/02/79/38/38/240_F_279383806_vaBm8VnY6t7esqIwqyO3u4LrifouQeWB.jpg" // Placeholder image URL
      alt="404 Illustration"
      className="mt-8"
    />
    <a
      onClick={homeHandler}
      className="mt-8 py-2 px-4 bg-white text-blue-900 rounded-md text-lg font-medium hover:bg-gray-200 transition duration-300 cursor-pointer"
    >
      Go to Home
    </a>
  </div>
  )
}

export default Error