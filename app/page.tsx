import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to Your Awesome App
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Build incredible things with our powerful tools and easy-to-use
          interface. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam aliquet sem eget ex malesuada consequat.
        </p>

        <p>Lorem lapsus</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Get Started Now with us.
        </button>
      </div>
    </div>
  );
};

export default Home;
