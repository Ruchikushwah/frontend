import React, { useEffect, useState } from "react";
import Card from "../Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      let url = `http://127.0.0.1:8000/api/courses`;
      const response = await fetch(url);
      const data = await response.json();
      setCourses(data.data);
    }

    fetchCourses();
  }, []);
  return (
    <>
     <div className=" flex flex-1">
      <img src=" " alt="" />
      <p></p>

     </div>

      <div>
        <Card courses={courses} />
      </div>

      <div className="bg-[#76ABAE] w-full h-[600px] flex px-10">
        <div className="w-6/12">
          <img
            src="/Education-Course-PNG-Download-Image.png"
            alt=""
            className="w-[600px] h-[600px]"
          />
        </div>
        <div className="w-6/12 flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl font-semibold text-white tracking-wide ">
            My Syntax
          </h1>
          <p className="text-lg text-center font-semibold tracking-wider">
            Track your progress with <br />
            our free "LearnSyntax" program.
          </p>
          <p className="text-md font-semibold tracking-wider">
            Log in to your account, and start earning points!
          </p>
          <NavLink
            to="register"
            className="w-64 rounded-full items-center text-center text-xl px-5 py-3 bg-[#092635] text-white font-semibold"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
