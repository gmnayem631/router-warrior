import React from "react";
import Banner from "../../components/Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";
import Services from "../../components/Services/Services";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Doctors key={data.id} data={data}></Doctors>
      <Services></Services>
    </div>
  );
};

export default Home;
