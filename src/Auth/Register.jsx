import React, { useEffect, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // const data = {name, email, password};
    const data = { name: name, email: email, password: password };
    let resp = await fetch("http://127.0.0.1:8000/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    resp = await resp.json();
    alert(resp.message);
  };

  return (
    <div className=" flex w-full flex-col items-center justify-center px-[8%] py-[5%]  ">
      <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>

      <div className="flex items-center justify-center  w-6/12 shadow-md px-10 py-5 ">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
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
              placeholder="Enter Password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>
        <button
          onClick={() => handleRegister()}
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
      </div>
    </div>
  );
};

export default Register;
