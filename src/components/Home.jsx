/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { FiCoffee } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import banner from "../assets/more/1.png";
import Products from "./Products";

const Home = () => {
  const follow = useLoaderData();
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);

  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Good Luck !!!", "Deleted coffee details", "success");
              const newCoffee = coffee.filter((cof) => cof._id !== id);
              setCoffee(newCoffee);
            }
          });
      }
    });
  };

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
        <div className="product-container mt-32 ">
          <img className="absolute hidden lg:block w-full right-0" src={banner} alt="" />
          <div className="text-center space-y-4 ">
            <h2 className="font-sans">--- Sip & Savor ---</h2>
            <h2 className="text-5xl font-bold text-[#331A15] coffee-shadow">Our Popular Products</h2>
          </div>
          <div className="text-center mt-5 cursor-pointer relative z-0">
            <Link to="/addCoffee">
              <button className="btn text-2xl capitalize bg-[#E3B577] border-2 border-[#331A15] hover:bg-transparent hover:text-gray-900" type="button">
                <span className="inline-flex items-center gap-4">
                  Add Coffee <FiCoffee className="text-[#331A15]" />
                </span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-32 relative z-0">
            {coffee.map((product) => (
              <Products key={product._id} product={product} handlerDelete={handlerDelete} />
            ))}
          </div>
        </div>

        <div className="follow-container mt-32">
          <div className="text-center space-y-2 ">
            <h2 className="font-sans">Follow Us Now</h2>
            <h2 className="text-5xl font-bold text-[#331A15] coffee-shadow">Follow on Instagram</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12  ">
            {follow?.map((image) => (
              <div className="border rounded-lg " key={image.id}>
                <img className="h-[350px] rounded-lg w-full object-cover " src={image?.img} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
