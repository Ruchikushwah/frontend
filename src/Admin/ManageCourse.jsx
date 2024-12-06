import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [record, setRecord] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const url = `http://127.0.0.1:8000/api/courses`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setRecord(data.data);
        console.log(record);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    fetchCourse();
  }, []);
  
  const handleCourse = async () => {
    if (!title || !description || !image) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    try {
      let resp = await fetch("http://127.0.0.1:8000/api/courses", {
        method: "POST",

        body: formData,
      });

      if (!resp.ok) {
        throw new Error(`Error: ${resp.statusText}`);
      }

      resp = await resp.json();
      alert(resp.message);
      setRecord(resp);
    } catch (error) {
      console.error("Error handling course:", error);
      alert("An error occurred while handling the course.");
    }
  };

  const handleDelete = async (id) => {
    let resp = await fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      console.log(`course ${id} deleted successfully`);
    } else {
      console.error("failed to delete course", resp);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto w-full py-10 px-8">
        <h2 className="text-lg font-bold text-gray-700 border-l-4 border-teal-600 p-1">
          Manage Courses
        </h2>

        <div className="flex flex-col md:flex-row justify-between md:items-center py-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded w-full md:w-64 focus:outline-none"
          />
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 text-white bg-teal-500 rounded hover:teal-blue-600 ml-6"
            >
              Insert Course
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
                  <h2 className="text-lg font-bold text-gray-700 mb-4">
                    Insert Courses
                  </h2>

                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-600 mb-1"
                    >
                      Course Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                      placeholder="course title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-600 mb-1"
                    >
                      Course Description
                    </label>
                    <textarea
                      id="description"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                      placeholder="course Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-600 mb-1"
                    >
                      Course Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                      placeholder="course image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
                      onClick={() => {
                        handleCourse();
                        setIsOpen(!isOpen);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Course Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Course Slug
                </th>
                <th scope="col" className="px-6 py-3">
                  Course Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {record.map((course) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                  key={course.id}
                >
                  <td className="px-6 py-4">{course.id}</td>
                  <td className="px-6 py-4">{course.title}</td>
                  <td className="px-6 py-4">{course.course_slug}</td>
                  <td className="px-6 py-4">
                    <img
                      src={`http://127.0.0.1:8000/storage/images/${course.image}`}
                      alt="{course.title}"
                      className="w-16 h-16"
                    />
                  </td>
                  <td className="px-6 py-4">{course.description}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`update/${course.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      className="ml-2 text-red-500 hover:underline"
                      onClick={() => handleDelete(course.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/admin/insertchapter/${course.id}/${course.course_slug}`}
                      className=" text-white px-2 py-2 bg-teal-500
                     text-center"
                    >
                      Add Chapter
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

export default ManageCourse;
