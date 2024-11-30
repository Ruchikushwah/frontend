import React, { useEffect, useState } from "react";
import Card from "../Card";
import { NavLink } from "react-router-dom";



const Home = () => {
  const [course,setCourse] = useState([]);
  useEffect(() => {
    async function fetchCourse() {
      let url = `http://127.0.0.1:8000/api/courses`;
      const response = await fetch(url);
      const data = await response.json();
      setCourse(data);
      
    }
    fetchCourse();
  })

  console.log(course);
  return (
    <>
      <div className=" flex items-center justify-center h-[500px] flex-col bg-black">
        <div className="w-6/12 text-center  gap-5 flex flex-col items-center text-white ">
          <h2 className="text-5xl font-semibold ">From Syntax To Success</h2>
          <p className="line-clamp-3 tracking-wider text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quasi corrupti deserunt tenetur dicta repellendus libero nisi.{" "}
          </p>
          <input
            type="text"
            placeholder="Search..."
            className=" px-4 py-3   border rounded-3xl  p-10 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <div></div>
        
        <div>
          <Card course={course} />
        </div>
        <div></div>
        
      </div>
      <div className="bg-[#76ABAE] w-full h-[600px]  flex px-10">
        <div className="w-6/12">
          <img
            src="/Education-Course-PNG-Download-Image.png"
            alt=""
            className="w-[600px] h-[600px]"
          />
        </div>
        <div className="w-6/12  flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl  font-semibold text-white tracking-wide ">
            My Syntax
          </h1>
          <p className="text-lg text-center font-semibold tracking-wider">
            Track your progress with <br />
            our free "LearnSyntax" program.
          </p>
          <p className="text-md font-semibold tracking-wider">
            Log in to your account, and start earning points!
          </p>
          <NavLink to="register" className="w-64 rounded-full items-center text-center text-xl px-5 py-3 bg-[#092635] text-white font-semibold">
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
