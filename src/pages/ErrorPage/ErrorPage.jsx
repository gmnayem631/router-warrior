import React from "react";
import errorImg from "../../assets/error.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-col gap-5 justify-center items-center py-8">
      <img className="w-80 p-4 rounded-3xl" src={errorImg} alt="" />
      <h3 className="text-5xl text-red-400 font-bold">404 - Page Not Found</h3>
      <p className="text-lg text-gray-500">
        Oops! The Page You Are Looking for Doesn't Exist
      </p>
      <Link to={"/"} className="btn btn-info">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
