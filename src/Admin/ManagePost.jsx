import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManagePost = () => {
  const [record, setRecord] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filterRecords, setFilterRecords] = useState([]);


  useEffect(() => {
    async function fetchPost() {
      try {
        const url = `http://127.0.0.1:8000/api/posts`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecord(data.data);
        setFilterRecords(data.data);
        console.log("Fetched posts:", data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPost();
  }, []);
  
  const handleDelete = async (id) => {
    let resp = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      console.log(`post ${id} deleted successfully`);
    } else {
      console.error("Failed to delete post", resp);
    }
  };
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = record.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
    );
    setFilterRecords(filtered);
  };

  return (
    <div className="relative overflow-x-auto w-full py-10 px-8">
      <h2 className="text-lg font-bold text-gray-700 border-l-4 border-teal-600 p-1">
        Manage Post
      </h2>

      <div className="flex flex-col md:flex-row justify-between md:items-center py-4 space-y-4 md:space-y-0">
      <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded w-full md:w-64 focus:outline-none"
          value={searchQuery}
          onChange={handleSearch}
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
                 Title
              </th>
              <th scope="col" className="px-6 py-3">
                
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filterRecords.map((post) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={post.id}>
                <td className="px-6 py-4">{post.id}</td>
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.description}</td>
                <td className="px-6 py-4">{post.author_id}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePost;
