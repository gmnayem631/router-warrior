import React from "react";
import CountUp from "react-countup";
import successDoc from "../../assets/success-doctor.png";
import successRev from "../../assets/success-review.png";
import successPat from "../../assets/success-patients.png";
import successStaff from "../../assets/success-staffs.png";

const Services = () => {
  return (
    <div className="w-4/5 mx-auto py-8">
      <div className="text-container text-center text-[#0F0F0F] flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold">
          We Provide Best Medical Services
        </h2>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {/* Box1 */}
        <div className="card bg-base-100">
          <div className="card-body gap-5">
            <img src={successDoc} alt="" className="w-14 h-14" />
            <div className="card-actions font-extrabold text-6xl">
              <CountUp
                start={0}
                end={199}
                duration={20}
                decimals={0}
                suffix="+"
              ></CountUp>
            </div>
            <p className="text-[#0F0F0F99] text-2xl font-semibold">
              Total Doctors
            </p>
          </div>
        </div>
        {/* Box2 */}
        <div className="card bg-base-100">
          <div className="card-body gap-5">
            <img src={successRev} alt="" className="w-14 h-14" />
            <div className="card-actions font-extrabold text-6xl">
              <CountUp
                start={0}
                end={467}
                duration={20}
                decimals={0}
                suffix="+"
              ></CountUp>
            </div>
            <p className="text-[#0F0F0F99] text-2xl font-semibold">
              Total Reviews
            </p>
          </div>
        </div>
        {/* Box3 */}
        <div className="card bg-base-100">
          <div className="card-body gap-5">
            <img src={successPat} alt="" className="w-14 h-14" />
            <div className="card-actions font-extrabold text-6xl">
              <CountUp
                start={0}
                end={1900}
                duration={20}
                decimals={0}
                suffix="+"
              ></CountUp>
            </div>
            <p className="text-[#0F0F0F99] text-2xl font-semibold">
              Total Patients
            </p>
          </div>
        </div>
        {/* Box4 */}
        <div className="card bg-base-100">
          <div className="card-body gap-5">
            <img src={successStaff} alt="" className="w-14 h-14" />
            <div className="card-actions font-extrabold text-6xl">
              <CountUp
                start={0}
                end={300}
                duration={20}
                decimals={0}
                suffix="+"
              ></CountUp>
            </div>
            <p className="text-[#0F0F0F99] text-2xl font-semibold">
              Total Staffs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
