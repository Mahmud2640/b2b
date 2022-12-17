import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import { FaSearch } from "react-icons/fa";
// import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
const Home = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  return (
    <div className="bg-gradient-to-r from-[#03345B] to-[#265A85]">
      {/* Search Pad */}
      <section className="flex gap-6">
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <img className="cursor-pointer h-30 w-30" onClick={() => setOpen(!open)} src={Logo} alt="logo" />
            {/* <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            /> */}
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
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
                  <FaSearch size={19} className="m-2" />
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
      </section>
    </div>
  );
};

export default Home;
