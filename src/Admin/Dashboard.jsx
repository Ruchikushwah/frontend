const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 w-full">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Admin Dashboard
      </h2>
      <div className="grid grid-cols-4 my-8 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className=" bg-green-200 p-6 rounded-lg shadow-md">
          <h2 className=" text-xl font-semibold">Total Courses</h2>
          <p className=" text-3xl font-semibold">10</p>
        </div>
        <div className=" bg-red-200 p-6 rounded-lg shadow-md">
          <h2 className=" text-xl font-semibold">Total Chapters</h2>
          <p className=" text-3xl font-semibold">10</p>
        </div>
        <div className=" bg-slate-300 p-6 rounded-lg shadow-md">
          <h2 className=" text-xl font-semibold">Total Topics</h2>
          <p className=" text-3xl font-semibold">10</p>
        </div>
        <div className=" bg-gray-300 p-6 rounded-lg shadow-md">
          <h2 className=" text-xl font-semibold">Total Post</h2>
          <p className=" text-3xl font-semibold">10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
