import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageTopic = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    async function fetchTopic() {
      try {
        const url = `http://127.0.0.1:8000/api/topic`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecord(data.topics);
        console.log("Fetched topics:", data.topics);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    }
    fetchTopic();
  }, []);
  
  const handleDelete = async (id) => {
    let resp = await fetch(`http://127.0.0.1:8000/api/topic/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      console.log(`topic ${id} deleted successfully`);
    } else {
      console.error("Failed to delete topic", resp);
    }
  };

  return (
    <div className="relative overflow-x-auto w-full py-10 px-8">
      <h2 className="text-lg font-bold text-gray-700 border-l-4 border-teal-600 p-1">
        Manage Topic
      </h2>

      <div className="flex flex-col md:flex-row justify-between md:items-center py-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full md:w-64 focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Topic Name
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                topic Description
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {record.map((topic) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={topic.id}>
                <td className="px-6 py-4">{topic.id}</td>
                <td className="px-6 py-4">{topic.topic_name}</td>
                <td className="px-6 py-4">{topic.topic_description}</td>
                <td className="px-6 py-4">{topic.topic_slug}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleDelete(topic.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={"/admin/insertpost/:id/:slug"}
                    className=" text-white px-2 py-2 bg-teal-500
                     text-center"
                  >
                    Add post
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTopic;
