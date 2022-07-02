import React from "react";
import home2 from "../img/home2.png";

const Contact = () => {
  return (
    <>
    <div className="container col-8 mx-auto">
      <h1 className="text-white text-center py-4">Contact us</h1>
      <form>
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
