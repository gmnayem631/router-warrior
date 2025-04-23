import React from "react";
import "@fontsource/plus-jakarta-sans";
import bannerImg from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="banner w-4/5 mx-auto px-4 sm:px-8 md:px-16 lg:px-[160px] py-8 sm:py-12 md:py-16 lg:py-[64px] border-[3px] border-solid rounded-3xl border-white">
      <div className="text-content text-center flex flex-col gap-4">
        <h2 className="text-[#0F0F0F] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Plus_Jakarta_Sans]">
          Dependable Care, Backed by Trusted Professionals.
        </h2>
        <p className="#0F0F0F font-medium">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="btn-container mt-2 flex flex-col sm:flex-row gap-5 justify-center">
          <input
            className="bg-white rounded-[99px] border bx-border border-[#D1D5DB] px-4 py-2 flex-3/4"
            type="text"
            name=""
            placeholder="Search any doctor..."
          />
          <button className="btn bg-[#176AE5] text-white text-lg font-bold py-3 px-8 rounded-[99px] max-w-44">
            Search Now
          </button>
        </div>
      </div>
      <div className="image-container flex flex-col sm:flex-row sm:w-full md:flex-row  mt-6 gap-6">
        <img src={bannerImg} alt="" className="sm:w-1/2 w-full" />
        <img src={bannerImg} alt="" className="sm:w-1/2 w-full" />
      </div>
    </div>
  );
};

export default Banner;
