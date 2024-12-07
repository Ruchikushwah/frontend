import React from 'react'

const InsertPost = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Insert Post</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Title
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
            htmlFor="descrition"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your chapter description"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="author id"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
             Author ID
          </label>
          <input
            type="number"
            id="authorid"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter order number"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsertPost
