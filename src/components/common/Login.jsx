// pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen pt-24  flex items-center justify-center bg-gray-50 px-4">
      <div className="relative bg-white shadow-2xl rounded-3xl p-8  w-full max-w-md overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#060145]/20 blur-3xl rounded-full animate-pulse"></div>

        {/* Header */}
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-[#060145] text-center mb-3"
        >
          Welcome Back
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-center mb-8"
        >
          Log in to your account and start your culinary journey
        </p>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          data-aos="fade-up"
          data-aos-delay="400"
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDC700] transition shadow-sm hover:shadow-md"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDC700] transition shadow-sm hover:shadow-md"
              placeholder="********"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <Link
              to="/forgot-password"
              data-aos="fade-right"
              className="hover:text-[#FDC700] transition"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            data-aos="zoom-in"
            className="w-full bg-[#FDC700] cursor-pointer text-[#000000] py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Log In
          </button>
        </form>

        {/* Sign up link */}
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-8 text-center text-gray-600"
        >
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#1a170f] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;