/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Home = () => {
  return (
    <div className="bg-[url('./assets/more/3.png')] bg-no-repeat bg-cover  bg-fixed  lg:h-[800px] bg-blend-darken ">
      <div className="py-auto lg:w-2/3 lg:pl-96 mx-auto  flex justify-center items-center lg:h-screen">
        <div className="space-y-4 px-4 py-10">
          <h2 className="text-2xl lg:text-5xl  text-white">Would you like a Cup of Delicious Coffee?</h2>
          <p className="text-xs lg:text-lg font-sans text-white">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button type="button" className="btn text-2xl font-light bg-[#E3B577] text-gray-900 capitalize">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
