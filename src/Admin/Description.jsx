import React from "react";

const Description = () => {
    


  const handleUpdate = async () => {
    let resp = await fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    });
    resp = await resp.json();
    alert(resp.message);
    setRecord(resp);
  };

  return (
    <div className=" border bg-gray-200  h-44  justify-center items-center flex flex-col gap-3 p-2 m-2  flex-1 rounded-lg">
      <label className=" mt-2 font-semibold">Description</label>
      <textarea
        type="text"
        rows="6"
        placeholder=""
        className=" border rounded w-full  focus:outline-none"
      ></textarea>

      <button className="px-6 py-2 text-white bg-teal-500 rounded hover:teal-blue-600 ml-6  self-end"
      onClick={handleUpdate}>
        Save
      </button>
    </div>
  );
};

export default Description;
