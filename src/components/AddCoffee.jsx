import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  return (
    <div className="coffee-container">
      <Link to="/">
        <button className="text-[#374151] text-3xl" type="button">
          <span className="inline-flex gap-4 items-center">
            <FaArrowLeft className="w-5" />
            Back to home
          </span>
        </button>
      </Link>
      <div className="bg-[#F4F3F0] mt-12 py-4 px-2 lg:px-28 lg:py-16 rounded-lg">
        <h1 className="text-center text-4xl text-[#374151] ">Add New Coffee</h1>
        <form className=" mt-12 ">
          <div className="grid lg:grid-cols-2 gap-4 mt-12 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Coffee Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Chef Name</span>
              </label>
              <label className="input-group">
                <span>Chef</span>
                <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Supplier</span>
              </label>
              <label className="input-group">
                <span>Supplier</span>
                <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Taste</span>
              </label>
              <label className="input-group">
                <span>Taste</span>
                <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Category</span>
              </label>
              <label className="input-group">
                <span>Category</span>
                <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Details</span>
              </label>
              <label className="input-group">
                <span>Details</span>
                <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-sans text-gray-700 font-semibold">Photo</span>
            </label>
            <label className="input-group">
              <span> URL</span>
              <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <button className="btn mt-8 w-full bg-[#D2B48C] text-gray-800 hover:bg-transparent" type="submit">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
