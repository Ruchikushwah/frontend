
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className=" flex w-full flex-col items-center justify-center px-[8%] py-[5%] ">
      <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

      <div className="flex items-center justify-center  w-6/12 shadow-md px-10 py-5">
        <form className="w-full  space-y-6 rounded-lg ">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="login" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
