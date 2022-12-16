import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Control from "../../assets/control.png";
import Logo from "../../assets/logo.png";
const Home = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="bg-gradient-to-r from-[#03345B] to-[#265A85]">
      {/* Search Pad */}
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-primary h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={Control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)} alt="control"
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`} alt="logo"
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          <div className="flex justify-center">
            <div className="text-center shadow-md w-6/12 p-3 card bg-base-200 mt-10">
              <p className="">
                For support email example@gmail.com OR Call our Hotline
                12345678901
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card w-9/12 bg-base-100 shadow-xl mt-20">
              <div className="card-body">
                <div className="card w-auto bg-base-100 shadow-xl -mt-20">
                  <div className="card-body p-4 grid grid-cols-4">
                    <button className="btn btn-outline">Button</button>
                    <button className="btn btn-outline btn-primary">
                      Button
                    </button>
                    <button className="btn btn-outline btn-secondary">
                      Button
                    </button>
                    <button className="btn btn-outline btn-accent">
                      Button
                    </button>
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
      </div>
    </div>
  );
};

export default Home;
