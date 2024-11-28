import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-8">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
                    Welcome Back
                </h2>
                <p className="mb-6 text-center text-sm text-gray-600">
                    Please log in to continue
                </p>
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="w-full mt-1 rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="w-full mt-1 rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-lg font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-purple-600"
                    >
                        Log In
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a
                        href="login"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
