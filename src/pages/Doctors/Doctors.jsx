import React, { Suspense, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ data }) => {
  const [doctors, setDoctors] = useState([]);

  return (
    <div className="w-4/5 mx-auto py-20">
      <h1 className="text-center mb-4 text-4xl font-extrabold text-[#0F0F0F]">
        Our Best Doctors
      </h1>
      <p className="text-center text-[#0F0F0F] text-base mb-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 rounded-2xl">
          {data.map((singleDoc) => (
            <Doctor key={singleDoc.id} singleDoc={singleDoc}></Doctor>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Doctors;
