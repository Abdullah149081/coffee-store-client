/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import banner from "../assets/more/3.png";

const Home = () => {
  return (
    <div className="bg-banner bg-no-repeat bg-cover  bg-scroll  lg:h-[800px]">
      {/* <img className="" src={banner} alt="" /> */}
      <div className="py-11">
        <h2>Would you like a Cup of Delicious Coffee?</h2>
        <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button type="button" className="btn">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
