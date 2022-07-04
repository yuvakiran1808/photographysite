import React,{useRef} from "react";
import home2 from "../img/home2.png";
import emailjs from '@emailjs/browser';
const Contact = () => {
  // const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_68g4anq', 'template_5b21kvb', e.target, '2jLOq1RV3jy8gaOdF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <>
    <div className="container col-8 mx-auto">
      <h1 className="text-white text-center py-4">Contact us</h1>
      <form onSubmit={sendEmail}>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name  = "email"
            required
          />
        </div>
        <div className="form-group py-1">
          <label htmlFor="exampleInputPassword1" className="text-white">
            Mobile number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter mobile number"
            name = "number"
            required
          />
        </div>
        <div className="form-group py-1">
          <label htmlFor="exampleFormControlTextarea1" className="text-white">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter message"
            name = "message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      <div className="row">
        <div className="col-12 p-5">
            <img src={home2} alt="home2" className="img-home" />
        </div>
      </div>
    </>
  );
};

export default Contact;
