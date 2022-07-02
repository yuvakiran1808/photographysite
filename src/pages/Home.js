import React from "react";
import home1 from "../img/home1.png";
import "../App.css";
const Home = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="title text-center">
            <h2 className="h1">We work to make</h2>
            <h2  className="">
              your <span>dreams</span> come
            </h2>
            <h2 className="">true</h2>
          </div>
          <div className="contact mt-5">
            <p className="">Contact us for any photography</p>
            <button className="home-btn">Contact Us</button>
          </div>
        </div>
        <div className="col-md-6 mt-5 image-container">
          <img src={home1} alt="photographer" className="img-home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
