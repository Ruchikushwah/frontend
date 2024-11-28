import React from "react";

import { Link } from "react-router-dom";

const AdminHeader = () => {
  
  return (
    <>
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h14a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
          </svg>
          <span className="text-2xl font-bold text-white">Learn Syntax</span>
        </div>

        <button>
          <Link href="" className=" px-3 py-2 text-white bg-gray-700 rounded">
            Logout
          </Link>
        </button>
      </header>
    </>
  );
};

export default AdminHeader;
