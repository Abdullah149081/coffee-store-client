import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ product, handlerDelete }) => {
  const { _id, name, chef, photo } = product;
  return (
    <div className="bg-[#F5F4F1] rounded-lg py-8 lg:py-0 justify-between flex flex-col lg:flex-row items-center pr-10">
      <div>
        <img className="h-[239px] object-cover" src={photo} alt="" />
      </div>
      <div className="font-sans font-semibold space-y-4">
        <p>
          <span>Name:</span> {name}
        </p>
        <p>
          <span>Chef:</span> {chef}
        </p>
        <p>
          <span>Price:</span> 890tk
        </p>
      </div>
      <div className="mt-4 lg:mt-0  gap-4  flex flex-row lg:flex-col ">
        <Link to="/details">
          <button className="btn bg-[#D2B48C] border-0" type="button">
            <FaEye />
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button className="btn" type="button">
            <FaPen />
          </button>
        </Link>

        <button onClick={() => handlerDelete(_id)} className="btn bg-[#EA4744] border-0" type="button">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Products;
