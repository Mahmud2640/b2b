import React from "react";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { MdPersonPin, MdAccountBalance } from "react-icons/md";
import Aircity from "../../assets/aircity.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[#D9D9D9]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="w-auto">
          <img src={Aircity} alt="aircity" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-10">
          <div className="form-control">
            <div className="input-group ml-5">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center shadow-md w-60 card bg-base-200">
            <p className="mt-2">Hotline: 1597532150</p>
          </div>
          <button className="btn btn-outline btn-primary">
            <MdPersonPin className="mr-2" />
            Mahmud
          </button>
          <button className="btn btn-outline btn-primary">
            <MdAccountBalance className="mr-2" />
            BDT 600000
          </button>
        </ul>
      </div>
      <div className="navbar-end space-x-8 mr-4">
        <div className="dropdown dropdown-hover dropdown-end">
          <label tabIndex={0} className="btn m-1">
            <FiHelpCircle className="mr-2 h-4 w-4" />
            Help
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-52 p-2 shadow bg-primary text-primary-content"
          >
            <div className="card-body">
              <h3 className="card-title">Card title!</h3>
              <p>you can use any element as a dropdown.</p>
            </div>
          </div>
        </div>
        <Link to="logout">
          <button className="btn">
            <RiLogoutCircleRLine className="mr-2 h-8 w-8" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
