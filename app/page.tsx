import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white flex flex-col justify-center p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-black font-bold mb-4 text-center">
          Welcome to <br /> ConvoGenius
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Create extraordinary interactions with our cutting-edge API and
          intuitive interface. <br /> <br /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam aliquet sem eget ex malesuada
          consequat.
        </p>

        <p>Enhance your conversations with ConvoGenius</p>
        <Link
          href="chat"
          className="bg-blue-500 hover:bg-blue-600 text-center flex justify-center items-center text-white font-bold py-2 px-4 rounded-full"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
