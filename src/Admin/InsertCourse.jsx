import React from 'react'

const InsertCourse = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
    <form  className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className='mb-4'>
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Course Title</label>
          <input
            type="text"
            id="course_title"
            name="course_title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Course Decription</label>
          <input
            type="text"
            id="course_description"
            name="course_description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="image" className="block text-gray-600 font-medium mb-2">Course Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            
            required
          />
        </div>

      
        </form>
    </div>
    </>
  )
}

export default InsertCourse