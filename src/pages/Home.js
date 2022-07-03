import React from "react";
import home1 from "../img/home1.png";
import "../App.css";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div className="container">
      <div className="row ">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="title text-center">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: "all 10s easeOut" }}
              className="h1"
            >
              We work to make
            </motion.h2>
            <h2 className="">
              your <span>dreams</span> come
            </h2>
            <h2 className="">true</h2>
          </div>
          <div className="contact mt-5">
            <p className="heropara">Contact us for any photography</p>
            <motion.button
              animate={{
                scale: [1, 2, 1, 1, 1],
                rotate: [0, 0, 360, 360, 0],
              }}
              transition = {{
                duration: 2,
                repeat : Infinity,
                repeatDelay: 5
              }}
              className="home-btn"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
        <div className="col-md-6 mt-5 image-container">
          <img src={home1} alt="photographer" className="img-home" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
