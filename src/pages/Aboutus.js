import React from "react";
import home2 from "../img/home2.jpg";
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/good-times2.jpg";
import "../App.css";
const About = () => {
  return (
 <div className="">
      <h1 className="h1 text-white text-center py-2 mt-2">About Me</h1>
    <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h3 className="text-white text-center">BIOGRAPHY</h3>
            <h6 className="biographytext text-white">
              Born in Madanapalle, raised in Tirupati, and forever consumed with
              answering the question: Why is that compelling? Taking pictures
              has been a part of my life for as long as I can remember. As a
              child, I would routinely steal my father's DSLR to shoot portraits
              of my pet chinchillas and our family dog. Although creating images
              has been a constant passion and interest, I spent my college years
              studying music, as an opera singer, and the Meisner method of
              acting in Tirupathi. It may appear off topic, but I gained immeasurable
              insight into what it means to work hard, with passion, vision,
              intention, and artistry. My work is an obsession, so every day and
              every shoot is an opportunity to learn and to further develop my
              craft - discovering more about myself, and my fellow earthlings.
               
            </h6>
            <p className="blockquote-footer text-end mt-3">YUVA SAI KIRAN</p>
          </div>
          <div className="col-md-6 mt-3">
            <img src={home2} alt="athlete" className="img-about" />
          </div>
        </div>
    </div>
    <div className="col-12 px-4 p-5 ">
      <h2 className="text-center text-white p-1">Our Samples</h2>
        <div className="row d-flex justify-content-around gx-5 flex-wrap text-center">
            <div className="col-md-3 p-1">
                 <img src={athlete} alt="athlete" className="img-sample"/>
            </div>
            <div className="col-md-3 p-1">
                  <img src={goodtimes} alt="goodtimes" className="img-sample"/>
            </div>
            <div className="col-md-3 p-1">
                <img src={athlete} alt="athlete" className="img-sample"/>
            </div>
            <div className="col-md-3 p-1">
                <img src={goodtimes} alt="goodtimes" className="img-sample" />
            </div>
        </div>
        </div>
</div>
  );
};

export default About;
