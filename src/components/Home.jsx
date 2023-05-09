/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const follow = useLoaderData();
  console.log(follow);
  return (
    <div>
      <div className="bg-[url('./assets/more/3.png')] bg-no-repeat bg-cover  lg:bg-fixed">
        <div className="lg:w-4/5 2xl:w-2/3  mx-auto lg:pl-96 2xl:pl-[36rem]   flex justify-center items-center lg:h-[800px]">
          <div className="space-y-4 lg:space-y-8 px-4 py-10">
            <h2 className="text-2xl lg:text-5xl  text-white">Would you like a Cup of Delicious Coffee?</h2>
            <p className="text-xs lg:text-lg  font-sans text-white">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button type="button" className="btn text-2xl font-light bg-[#E3B577] text-gray-900 capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="coffee-container">
        <div className="text-center space-y-2 ">
          <h2 className="font-sans">Follow Us Now</h2>
          <h2 className="text-5xl font-bold text-[#331A15] coffee-shadow">Follow on Instagram</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12">
          {follow?.map((image) => (
            <div className="border rounded-lg " key={image.id}>
              <img className="h-[350px] " src={image?.img} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
