import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InsertPost = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/authors");
        const result = await response.json();
        if (response.ok) {
          setAuthors(result.data);
        } else {
          alert("Failed to fetch authors");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while fetching authors");
      }
    };

    fetchAuthors();
  }, []);

  const handleSubmit = async () => {
    const postData = {
      title:title,
      description:description,
      author_id: authorId,
      topic_id:id,
    };


    try {
      const response = await fetch("http://127.0.0.1:8000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();
console.log(result);
      if (response.ok) {
        alert("Post Added Successfully");
        setTitle("");
        setDescription("");
        setAuthorId("");
        navigate("/admin/managepost");
      } else {
        alert("Failed to add post");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while adding post");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Post Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your post description"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="author_id"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Author
          </label>
          <select
            id="author_id"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select an Author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.author_name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsertPost;
