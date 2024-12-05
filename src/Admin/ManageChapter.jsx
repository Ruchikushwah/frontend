
import { Link } from "react-router-dom";

const ManageChapter = () => {
  return (
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
        <Link to={`/admin/insertchapter`}>
          <button className="px-4 py-2 font-semibold text-white bg-teal-500 rounded hover:bg-teal-600 w-full md:w-auto">
            Insert Chapter
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
                Chapter Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Order
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
           
              <tr
                
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline mr-2"
                    
                  >
                    Delete
                  </button>
                  <Link to={`/admin/addtopic/`}>
                    <button className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
                      Add Topic
                    </button>
                  </Link>
                </td>
              </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageChapter;
