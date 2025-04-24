import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { FaRegRegistered } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { addToStoredDB } from "../Utility/addToDB";
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const docId = parseInt(id);
  const data = useLoaderData();

  const singleDoc = data.find((doc) => doc.id === id);
  const {
    image,
    name,
    education,
    specialty,
    worksAt,
    registrationNumber,
    availability,
    consultationFee,
    details,
    isAvailable,
  } = singleDoc;

  const handleAppointment = () => {
    addToStoredDB(id);
    toast.success("You Booked an Appointment");
    setTimeout(() => {
      navigate("/bookings");
    }, 1000);
  };

  return (
    <div>
      <div className="w-4/5 mx-auto bg-white my-8 py-10 sm:py-14 lg:py-20 px-16 sm:px-28 lg:px-40 text-center rounded-3xl">
        <h2 className="text-[#141414] text-xl sm:text-2xl md:text-3xl font-extrabold">
          Doctor’s Profile Details
        </h2>
        <p className="text-[#141414] font-medium text-base mt-4">{details}</p>
      </div>

      <div className="w-4/5 mx-auto bg-white my-8 rounded-3xl p-8 flex flex-col md:flex-row gap-5">
        <img className="max-w-80 rounded-2xl" src={image} alt={name} />
        <div className="doc-details">
          <h2 className="text-[#141414] text-xl sm:text-2xl md:text-3xl font-extrabold">
            {name}
          </h2>
          <p className="text-[#0F0F0F99] font-medium text-base mt-4">
            {education} - {specialty}
          </p>
          <p className="text-[#0F0F0F99] font-medium text-base mt-4">
            Working at
          </p>
          <h3 className="text-[#141414] text-lg sm:text-xl font-bold">
            {worksAt}
          </h3>
          <div className="divider"></div>
          <div className="flex items-center gap-4 text-[#0F0F0FB3]">
            <FaRegRegistered className="h-10" />
            <span className="text-lg font-medium">{registrationNumber}</span>
          </div>
          <div className="divider"></div>
          <div className="flex gap-5 items-center">
            <p className="font-bold">Availability</p>
            <div className="flex gap-4">
              {availability.map((day) => (
                <div className="bg-[#ffa0001a] rounded-[99px] border border-[#ffa00033] py-2 px-4 btn text-[#FFA000] text-sm">
                  {day}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5">
            <span className="font-extrabold">Consultation Fee: </span>
            <span className="text-[#176AE5] font-bold">
              Taka : {consultationFee}
            </span>
            <span className="text-[#0F0F0F99] text-sm"> (Including Vat) </span>
            <span className="text-[#176AE5] text-base"> Per Consultation </span>
          </p>
        </div>
      </div>

      {/* Book Appointment */}
      <div className="w-4/5 mx-auto bg-white my-8 p-6 sm:p-7 lg:p-10 text-center rounded-3xl">
        <h3 className="text-[#141414] text-lg sm:text-xl font-bold mb-5">
          Book an Appointment
        </h3>
        <div className="border border-dashed border-gray-400"></div>
        <div className="flex justify-between m-4 items-center">
          <p className="font-bold text-lg">Availability</p>
          <div className="bg-[#09982f1a] border border-[#09982f33] rounded-[99px] py-2 px-4 text-[#09982F] font-medium text-sm">
            Doctor {isAvailable ? "Available" : "Not Available"} Today
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex items-center bg-[#ffa0001a] py-2 px-4 rounded-full text-[#FFA000] font-medium">
          <IoInformationCircle className="w-5 h-5" />
          <p>
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        {/* <Link to={"/bookings"}> */}
        <button
          onClick={handleAppointment}
          className="bg-[#176AE5] rounded-full py-3 px-5 w-full mt-5 text-white font-bold text-xl cursor-pointer"
        >
          Book Appointment Now
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default DoctorDetails;
