import React from "react";
import ShowEmp from "../showEmp/ShowEmp";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="home flex items-center justify-content-center">
      <Navbar />
      <ShowEmp />
      <Footer />
    </div>
  );
}

export default Home;
