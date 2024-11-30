
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ course }) => {
  const Coursecard = course;
  //console.log(Coursecard);

  return(
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 m-4">
      {
        Coursecard.map((courses) => <NavLink key={courses.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src="public/laravel.png" alt="" className=" w-full p-3" />
          </div>
          <h3 className=" mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{courses.title}</h3>
          <p className=" mb-2 text-gray-600">{courses.description}</p>
        </NavLink> )
      }
    </div>

  ) 
};

export default Card;
