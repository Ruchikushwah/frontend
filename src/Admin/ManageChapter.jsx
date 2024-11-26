import React, { useState } from 'react'

const ManageChapter = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control popup visibility

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
    setIsOpen(false); // Close the popup after submission
  };

  return (
    <>
      <div className="relative overflow-x-auto w-full py-10 px-8">
        <h2 className="text-lg font-bold text-gray-700 border-l-4 border-teal-600 p-1">
          Manage Chapter
        </h2>

        <div className="flex flex-col md:flex-row justify-between md:items-center py-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded w-full md:w-64 focus:outline-none"
          />
          <button className="px-4 py-2 font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 w-full md:w-auto">
            insert Chapter
          </button>
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
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">React Basics</td>
                <td className="px-6 py-4">react-basics</td>
                <td className="px-6 py-4">Introduction to React.</td>
                <td className="px-6 py-4 gap-4">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-2 text-red-500 hover:underline">Delete</button>

                  <button
                    onClick={handleOpen}
                    className="px-4 py-2 text-white bg-teal-500 rounded hover:teal-blue-600 ml-6"
                  >
                    add Topic
                  </button>

                  {/* Popup */}
                  {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
                        <h2 className="text-lg font-bold text-gray-700 mb-4">Form Title</h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                              placeholder="Enter your name"
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
                              type="email"
                              id="email"
                              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                              placeholder="Enter your email"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                              placeholder="Enter your message"
                              rows="4"
                            ></textarea>
                          </div>

                          {/* Buttons */}
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={handleClose}
                              className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ManageChapter