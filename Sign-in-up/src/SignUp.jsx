import React from "react";
import { Link } from "react-router-dom";
import img2 from "../src/assets/img3.png";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden bg-gray-50">
      {/* Left Section with Image */}
      <div className="hidden md:block w-full md:w-3/5 h-full">
        <img
          className="w-full h-full object-cover hover:scale-110"
          src={img2}
          alt="Sign up"
        />
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col items-center justify-center bg-gray-100 w-full md:w-2/5 p-8">
        <div className="mb-8 text-center md:text-left">
          <h4 className="text-4xl font-extrabold text-gray-800">
            Create Account
          </h4>
          <p className="text-gray-600 mt-2">Join us today!</p>
        </div>

        <form className="w-full space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center md:text-left">
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
