import React from "react";
import logo from "../../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
      <div className="flex gap-3">
        <img className="h-[45px] w-[45px]" src={logo} alt="" />
        <span className="text-xl font-[Plus_Jakarta_Sans] text-[32px] font-extrabold text-[rgb(15,15,15)]">
          Phudu
        </span>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/"}>
          <a className="link link-hover">Home</a>
        </Link>
        <Link to={"/bookings"}>
          <a className="link link-hover">My-Bookings</a>
        </Link>
        <Link to={"/blogs"}>
          <a className="link link-hover">Blogs</a>
        </Link>
        <Link to={"/contacts"}>
          <a className="link link-hover">Contact Us</a>
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com/" target="_blank">
            <FaFacebook className="h-9 w-9" />
          </a>
          <a href="https://x.com/" target="_blank">
            <FaSquareXTwitter className="h-9 w-9" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin className="h-9 w-9" />
          </a>
          <a href="https://youtube.com/" target="_blank">
            <FaYoutube className="h-9 w-9" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
