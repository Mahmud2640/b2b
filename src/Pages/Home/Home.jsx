import React from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#03345B] to-[#265A85]">
      {/* Search Pad */}
      <div className="flex justify-center">
        <div className="text-center shadow-md w-6/12 p-3 card bg-base-200 mt-10">
          <p className="">
            For support email example@gmail.com OR Call our Hotline 12345678901
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card w-9/12 bg-base-100 shadow-xl mt-20">
          <div className="card-body">
            <div className="card w-auto bg-base-100 shadow-xl -mt-20">
              <div className="card-body p-4 grid grid-cols-4">
                <button className="btn btn-outline">Button</button>
                <button className="btn btn-outline btn-primary">Button</button>
                <button className="btn btn-outline btn-secondary">
                  Button
                </button>
                <button className="btn btn-outline btn-accent">Button</button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 m-4">
              <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                <button className="btn-sm btn-active">One</button>
                <button className="btn-sm">Return</button>
                <button className="btn-sm">Multicity</button>
              </div>
              <select className="select select-bordered max-w-xs">
                <option disabled selected>
                  Normal
                </option>
                <option>Normal Apple</option>
                <option>Normal Orange</option>
                <option>Normal Tomato</option>
              </select>
              <div className="btn-group">
                <input
                  type="radio"
                  name="options"
                  data-title="Economy"
                  className="btn"
                />
                <input
                  type="radio"
                  name="options"
                  data-title="Buisness"
                  className="btn"
                  checked
                />
                <input
                  type="radio"
                  name="options"
                  data-title="First Class"
                  className="btn"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center -mb-5">
            <button className="btn bg-gradient-to-r from-[#DA143B] to-[#8E100B]">
              Search
              <FaSearch className="m-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Ad contentent */}
      <div className="grid grid-cols-2 ml-52">
        <div className="card w-96 bg-base-100 shadow-xl mt-20 mb-11">
          <figure>
            <img
              src="https://www.businessinsiderbd.com/media/imgAll/2020October/en/US-Banglas-international-destinations-2111181239.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-20 mb-11">
          <figure>
            <img
              src="https://www.businessinsiderbd.com/media/imgAll/2020October/en/US-Banglas-international-destinations-2111181239.png"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
