import React from "react";
import { Link } from "react-router-dom";
import img from "../src/assets/img.png";

const SignInPage = () => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row overflow-hidden bg-gray-50">
      {/* Left Section with Image */}
      <div className="hidden md:block w-3/5 h-full">
        <img
          src={img}
          alt="Sign in"
          className="w-full h-full hidden md:block object-cover hover:scale-110"
        />
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col items-center justify-center bg-gray-100 w-full md:w-2/5 p-8">
        <div className="mb-8 md:text-left">
          <h4 className="text-4xl font-extrabold text-gray-800">Sign In</h4>
          <p className="text-gray-600 mt-2">Access your account</p>
        </div>

        <form className="w-full md:w-2/5 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white text-lg font-medium py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign In
          </button>

          <div className="text-center mt-4 md:text-left">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-500 underline">
                Create one here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
