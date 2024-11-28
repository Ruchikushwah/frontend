import React from "react";

const Card = ({ image, title, description, instructor, duration }) => {
  return (
    <div className="w-[340px] rounded-lg overflow-hidden shadow-lg bg-[#E7E9EB] hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>👨‍🏫 {instructor}</span>
          <span>⏳ {duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
