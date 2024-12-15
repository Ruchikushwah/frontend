import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageAuthor = () => {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    async function fetchAuthor() {
      try {
        const url = `http://127.0.0.1:8000/api/authors`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecord(data.data);
        console.log("Fetched author:", data.data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    }
    fetchAuthor();
  }, []);
  const handleDelete = async (id) => {
    let resp = await fetch(`http://127.0.0.1:8000/api/authors/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      console.log(`topic ${id} deleted successfully`);
    } else {
      console.error("Failed to delete author", resp);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto w-full py-10 px-8">
        <h2 className="text-lg font-bold text-gray-700 border-l-4 border-teal-600 p-1">
          Manage Author
        </h2>

        <div className="flex flex-col md:flex-row justify-between md:items-center py-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded w-full md:w-64 focus:outline-none"
          />
          <Link to={"/admin/insertauthor/:id/:slug"}>
            <button className="px-4 py-2 font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 w-full md:w-auto">
              Insert Author
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Author Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {record.map((author) => (
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{author.id}</td>
                  <td className="px-6 py-4">{author.author_name}</td>
                  <td className="px-6 py-4">{author.email}</td>
                  <td className="px-6 py-4">
                    <img
                      src={`http://127.0.0.1:8000/storage/${author.image}`}className="w-16 h-16"/>
                  </td>
                  <td className="px-6 py-4 gap-4">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button
                      className="ml-2 text-red-500 hover:underline"
                      onClick={() => handleDelete(author.id)}
                    >
                      Delete
                    </button>

                    <Link to={"/admin/insertpost/:id/:slug"}>
                      <button className="px-4 py-2 text-white bg-teal-500 rounded hover:teal-blue-600 ml-6">
                        Add Post
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageAuthor;
