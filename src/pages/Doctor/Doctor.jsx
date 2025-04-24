import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { Link } from "react-router";

const Doctor = ({ singleDoc }) => {
  const {
    isAvailable,
    experience,
    name,
    education,
    specialty,
    registrationNumber,
    image,
    id,
  } = singleDoc;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-3">
        <img
          className="h-60 bg-gray-300 rounded-2xl w-80"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <dv className="badge-container flex gap-5">
          <div className="border border-[#09982f33] text-[#09982F] text-[14px] bg-[#09982f1a] rounded-[99px] py-2 px-3 font-medium">
            {isAvailable ? "Available" : "Not Available"}
          </div>
          <div className="border border-[#176ae533] bg-[#176ae51a] text-[#176AE5] text-[14px] rounded-[99px] py-2 px-3 font-medium">{`${experience} Experience`}</div>
        </dv>
        <h2 className="card-title font-bold text-[#0F0F0F]">{name}</h2>
        <p>
          {education} - {specialty}
        </p>
        <div className="divider"></div>
        <div className="flex items-center gap-4 text-[#0F0F0FB3]">
          <FaRegRegistered className="h-10" />
          <span className="text-[18px] font-medium">{registrationNumber}</span>
        </div>

        <Link
          to={`/doctorDetails/${id}`}
          className="hover:bg-[#c9d5e7] text-[#176AE5] text-center font-bold cursor-pointer rounded-[99px] border border-[#176ae5] py-3 px-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
