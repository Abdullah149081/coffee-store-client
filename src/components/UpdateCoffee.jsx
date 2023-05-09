/* eslint-disable no-shadow */
import React from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const update = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = update;
  const handlerUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Update", {
            duration: 1000,
          });
        }
      });
  };
  return (
    <div className="coffee-container">
      <Link to="/">
        <button className="text-[#374151] text-3xl  " type="button">
          <span className="inline-flex gap-4 items-center text-shadow ">
            <FaArrowLeft className="w-5 " />
            Back to home
          </span>
        </button>
      </Link>
      <div className="bg-[#F4F3F0] mt-12 py-4 px-2 lg:px-28 lg:py-16 rounded-lg">
        <h1 className="text-center text-4xl text-[#374151] text-shadow ">Update Existing Coffee Details</h1>
        <form onSubmit={handlerUpdate} className=" mt-12 ">
          <div className="grid lg:grid-cols-2 gap-4 mt-12 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Coffee Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input type="text" defaultValue={name} placeholder="Enter coffee name" name="name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Chef Name</span>
              </label>
              <label className="input-group">
                <span>Chef</span>
                <input type="text" defaultValue={chef} placeholder="Enter coffee chef" name="chef" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Supplier</span>
              </label>
              <label className="input-group">
                <span>Supplier</span>
                <input type="text" defaultValue={supplier} placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Taste</span>
              </label>
              <label className="input-group">
                <span>Taste</span>
                <input type="text" defaultValue={taste} placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Category</span>
              </label>
              <label className="input-group">
                <span>Category</span>
                <input type="text" defaultValue={category} placeholder="Enter coffee category" name="category" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Details</span>
              </label>
              <label className="input-group">
                <span>Details</span>
                <input type="text" defaultValue={details} placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-sans text-gray-700 font-semibold">Photo</span>
            </label>
            <label className="input-group">
              <span> URL</span>
              <input type="text" defaultValue={photo} placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
            </label>
          </div>
          <button className="btn mt-8 w-full bg-[#D2B48C] text-gray-800 hover:bg-transparent" type="submit">
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
