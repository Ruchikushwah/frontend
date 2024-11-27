const Dashboard = () => {
  return (
    
        <div className="p-6 bg-gray-100 w-full">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to the Admin Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-10 bg-slate-300 rounded shadow">Widget 1</div>
            <div className="p-10 bg-white rounded shadow">Widget 2</div>
            <div className="p-10 bg-white rounded shadow">Widget 3</div>
            <div className="p-10 bg-white rounded shadow">Widget 4</div>
          </div>
        </div>
     
  );
};

export default Dashboard;
