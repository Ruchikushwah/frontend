import React from "react";

const Home = () => {
  return (
    <div className=" flex items-center justify-center h-[500px] flex-col">
      <div className="w-6/12 text-center  gap-5 flex flex-col items-center">
        <h2 className="text-5xl font-semibold text-[#092635]">
          From Syntax To Success
        </h2>
        <p className="line-clamp-3 tracking-wider text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi
          corrupti deserunt tenetur dicta repellendus libero nisi.{" "}
        </p>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full md:w-64 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Home;
