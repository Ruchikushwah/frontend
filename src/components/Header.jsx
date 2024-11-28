import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-14  bg-[#76ABAE] flex gap-10 items-center justify-center">
      
        <div className="flex gap-10 items-center justify-center text-lg font-normal text-white font-mono">
            <a href="">Home</a>


            <a href="" className=" shadow-md px-3 py-1  bg-gray-600 rounded">Login</a>
            <a href="" className=" shadow-md  px-3 py-1  bg-gray-600 rounded">Signup</a>
        </div>

    </div>
  )
}

export default Header