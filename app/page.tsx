import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-gray-700 mb-6">
          Welcome to the future of app development! Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam aliquet sem eget ex malesuada
          consequat.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
