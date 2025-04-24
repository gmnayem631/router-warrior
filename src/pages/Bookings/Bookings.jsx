import React from "react";
import DefaultBookingMsg from "../DefaultBookingMsg/DefaultBookingMsg";
import { useLoaderData } from "react-router";

const Bookings = () => {
  const bookedDocs = useLoaderData();
  // const { name, education, specialty } = bookedDocs;
  if (bookedDocs.length === 0) return <DefaultBookingMsg />;
  return (
    <div>
      <div className="w-4/5 mx-auto my-8">
        <div className="flex flex-col justify-center gap-5 text-center">
          <h2 className="text-4xl font-extrabold">My Today Appointments</h2>
          <p className="text-[#0F0F0F99] font-medium text-base">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className="mt-5 grid gap-5">
          {bookedDocs.map((doc) => (
            <div className="bg-white rounded-3xl p-8 grid gap-5">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="font-bold">{doc.name}</h2>
                  <p className="text-[#0F0F0F99] font-medium text-base">
                    {doc.education} - {doc.specialty}
                  </p>
                </div>
                <p className="text-[#0F0F0F99] font-medium text-base">
                  Appointment Fee: {doc.consultationFee} + VAT
                </p>
              </div>
              <div className="border border-dashed border-gray-300"></div>
              <button className="btn btn-outline btn-error rounded-full">
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
