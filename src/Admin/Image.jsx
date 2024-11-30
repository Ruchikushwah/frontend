import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Image = ({ label, field }) => {
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState(field);

  const { id } = useParams();



  const handleUpdate = async () => {
    let resp = await fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
      method: "PUT",
      body: JSON.stringify({image}),
      headers: {
        "content-Type": "application/json",
      },
    });
    resp = await resp.json();
    alert(resp.message);
    setEdit(false);
    setImage("");
  };

 

  return (
    <div className=" border bg-gray-200  h-44  justify-center items-center flex flex-col gap-3 p-2 m-2 rounded-lg ">
      <label className=" mt-2 font-semibold">{label}</label>
      <input
        type="text"
        className="p-3 border rounded w-full flex  focus:outline-none"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button
        className="px-6 py-2 text-white bg-teal-500 rounded hover:teal-blue-600 ml-6  self-end"
        onClick={handleUpdate}
      >
        Save
      </button>
    </div>
  );
};

export default Image;
