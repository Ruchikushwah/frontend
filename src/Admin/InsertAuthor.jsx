import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InsertAuthor = () => {
  const [authorname, setAuthorName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleAuthor = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("author_name", authorname);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/authors", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Author Added Successfully");
        setAuthorName("");
        setEmail("");
        setPassword("");
        setImage("");
        navigate("/admin/manageauthor");
       
      } else {
        alert("Failed to add Author");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occured while adding author");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Insert Author</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Author Name
          </label>
          <input
            type="text"
            id="name"
            value={authorname}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter  email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className=" mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-600 mb-1 "
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            className=" w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Author Image"
            onChange={(e) => setImage (e.target.files[0])}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={handleAuthor} className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsertAuthor;
