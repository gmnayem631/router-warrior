import React from "react";

const DefaultBookingMsg = () => {
  return (
    <div className="w-4/5 mx-auto my-8 py-6 sm:py-8 lg:py-10 px-6 sm:px-7 lg:px-8 text-center rounded-3xl">
      <h2 className="text-[#141414] text-xl sm:text-2xl md:text-3xl font-extrabold">
        You Have Not Booked Any Appointment Yet
      </h2>
      <p className="text-[#0F0F0F99] font-medium text-base mt-4">
        Our Platform Connects You With Verified, Experienced Doctors Across
        Various Specialties - All at Your Convenience
      </p>
      <button className="bg-[#176AE5] rounded-full py-3 px-5 mt-5 text-white font-semibold text-lg cursor-pointer">
        Book Appointment Now
      </button>
    </div>
  );
};

export default DefaultBookingMsg;
