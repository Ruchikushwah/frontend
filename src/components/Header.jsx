import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-full h-14  bg-[#76ABAE] flex gap-10 items-center justify-center">
      <div className="flex gap-10 items-center justify-center text-lg font-normal text-white font-mono">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="login"
          className=" shadow-md px-3 py-1  bg-gray-600 rounded"
        >Login</NavLink>
        <NavLink
          to="register"
          className=" shadow-md px-3 py-1  bg-gray-600 rounded"
        >Register</NavLink>
      </div>
    </div>
  );
}

export default Header