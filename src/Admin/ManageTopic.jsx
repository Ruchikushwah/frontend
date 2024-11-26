import React from 'react'

const ManageTopic = () => {
  return (
    <>
      <div className="relative overflow-x-auto w-full py-10 px-8">
        <h2 className="text-lg font-bold text-gray-700 border-l-4 border-teal-600">
          Manage Topic
        </h2>

        <div className="flex flex-col md:flex-row justify-between md:items-center py-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded w-full md:w-64 focus:outline-none"
          />
          <button className="px-4 py-2 font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 w-full md:w-auto">
            Insert Topic
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
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-2 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ManageTopic