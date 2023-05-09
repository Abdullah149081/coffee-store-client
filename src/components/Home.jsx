/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { FiCoffee } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [coffee, setCoffee] = useState([]);
  const follow = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);

  return (
    <div className="coffee-container">
      <div className="product-container mt-32">
        <div className="text-center space-y-4 ">
          <h2 className="font-sans">--- Sip & Savor ---</h2>
          <h2 className="text-5xl font-bold text-[#331A15] coffee-shadow">Our Popular Products</h2>
          <button className="btn text-2xl capitalize bg-[#E3B577] border-2 border-[#331A15] hover:bg-transparent hover:text-gray-900" type="button">
            <span className="inline-flex items-center gap-4">
              Add Coffee <FiCoffee className="text-[#331A15]" />
            </span>
          </button>
        </div>
      </div>

      <div className="follow-container mt-32">
        <div className="text-center space-y-2 ">
          <h2 className="font-sans">Follow Us Now</h2>
          <h2 className="text-5xl font-bold text-[#331A15] coffee-shadow">Follow on Instagram</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12 ">
          {follow?.map((image) => (
            <div className="border rounded-lg " key={image.id}>
              <img className="h-[350px] rounded-lg w-full object-cover " src={image?.img} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
