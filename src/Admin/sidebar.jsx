import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="flex flex-1 gap-5">
      <div className="w-2/12 flex h-screen">
          <aside className="w-64 bg-gray-900 p-4">

              <nav className="p-2 space-y-1">
                  <NavLink to="/" className="flex items-center space-x-2  rounded hover:bg-gray-700 text-gray-400 p-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Dashboard</span>
                  </NavLink>

                 
                  <NavLink  to="managecourse" className="flex items-center space-x-2 text-gray-400  hover:bg-gray-700  p-2 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5zm0 7v-5.5l4.5-2.5m-9 0L12 21"></path>
                      </svg>
                      <span>Manage Course</span>
                  </NavLink>
                 
              </nav>
          </aside>
      </div>
     
  </div>
  </>
  )
}

export default Sidebar