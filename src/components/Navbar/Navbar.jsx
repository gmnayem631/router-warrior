import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  // responsive submenu options
  const linksResponsive = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>My-Bookings</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>Contact us</a>
      </li>
    </>
  );

  //   main menu options
  const linksMain = (
    <>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/bookings"}>
        <li>My-Bookings</li>
      </Link>
      <li>Blogs</li>
      <li>Contact Us</li>
    </>
  );

  return (
    <div className="bg-[#EFEFEF]">
      <div className="navbar sm:px-[160px] sm:py-[20px] px-8 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {linksResponsive}
            </ul>
          </div>
          <div className="flex gap-3">
            <img className="h-[45px] w-[45px]" src={logo} alt="" />
            <span className="text-xl font-[Plus_Jakarta_Sans] text-[32px] font-extrabold text-[rgb(15,15,15)]">
              Phudu
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[rgba(15,15,15,0.7)] font-medium gap-10 text-[18px]">
            {linksMain}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn text-center text-white text-xl bg-[#176AE5] rounded-[99px] px:4 sm:px-7 sm:py-4 py-2 mx-[10px] my-0">
            Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
