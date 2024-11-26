import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaDiscourse } from "react-icons/fa6";
import { GrChapterAdd } from "react-icons/gr";
import { MdOutlineTopic } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 h-screen p-5 pt-8 duration-300 relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute  top-9 w-7 h-7 bg-white border border-gray-700 rounded-full flex justify-center items-center cursor-pointer"
        >
          {isOpen ? "<" : ">"}
        </button>

        {/* Navigation Menu */}
        <ul className="mt-10 items-center">
          <NavLink to="dashboard">
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
                isOpen && "pl-4"
              }`}
            >
              <span className="material-icons ">
                <LuLayoutDashboard className=" size-6 " />
              </span>
              <span className={`${!isOpen && "hidden"} duration-300`}>
                Dashboard
              </span>
            </li>
          </NavLink>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              isOpen && "pl-4"
            }`}
          >
            <span className="material-icons">
              <FaDiscourse className=" size-6" />
            </span>
            <span className={`${!isOpen && "hidden"} duration-300`}>
              Manage Course
            </span>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              isOpen && "pl-4"
            }`}
          >
            <span className="material-icons">
              <GrChapterAdd className=" size-6" />
            </span>
            <span className={`${!isOpen && "hidden"} duration-300`}>
              Manage Chapter
            </span>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              isOpen && "pl-4"
            }`}
          >
            <span className="material-icons">
              <MdOutlineTopic className=" size-6" />
            </span>
            <span className={`${!isOpen && "hidden"} duration-300`}>
              Manage Topic
            </span>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              isOpen && "pl-4"
            }`}
          >
            <span className="material-icons">
              <MdOutlinePostAdd className=" size-6" />
            </span>
            <span className={`${!isOpen && "hidden"} duration-300`}>
              Manage Post
            </span>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              isOpen && "pl-4"
            }`}
          >
            <span className="material-icons">
              <FaChalkboardTeacher className=" size-6" />
            </span>
            <span className={`${!isOpen && "hidden"} duration-300`}>
              Manage Author
            </span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
    </div>
  );
};

export default Sidebar;
