import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";


const ContactUs = () => {

  const [userData, setUserData] = useState({firstname:"", lastname:"", email:"", phone:""});

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", { //getting data from backend through fetch
        //fetch returns promises, accepted or rejected
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json(); //received full user info name:value from req.rootuser from auth.js
      console.log(data);
      setUserData({...userData, firstname:data.firstname, lastname:data.lastname, email:data.email, phone:data.phone});

      if (!res.status === 200) {
        const error = new Error("res.error");
        throw error;
      }
    } catch (err) {
      console.log(err);
     //if user not authenticating, redirecting to login from PROFILE page
    }
  };

  //cant use async function inside useEffect

  useEffect(() => {
    userContact();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value }); //saving data in state
  }


const contactForm = async (e) => {
  e.preventDefault();

  const {firstname, lastname, email, phone, subject, message} = userData;

  const res= await fetch('/ContactUs', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      firstname, lastname, email, phone, message, subject
    })
  });

  const data = await res.json();

  if(!data) {
    console.log("message not send");
  } else {
      alert("Message Sent");
      setUserData({...userData, message:""});
  }

}

  // sending data to backend


    return (
        <div id="contactUs">
            <div className="row contactform">
  <div className="col-12 col-md-7 bg-contact position-relative d-flex flex-column  justify-content-center align-items-center align-content-center">
    <h1 className="text-white text-center mb-4">HELLO!</h1>
    <p className="text-white text-center mb-2">
      Let us know what you have in mind, So we could be of help.{" "}
    </p>
    <p className="text-white text-center mb-2">
      {" "}
      Get the latest news and info regarding vehicles, real quick.
    </p>
    <p className="text-white text-center mb-2">
      {" "}
      Lorem ipsum dolor sit amet consectetur.
    </p>
    <div id="get-startedbtn" className="text-center mt-4">
      <Link to="/" className="text-white">
        Get Started
      </Link>
    </div>
  </div>
  <div id="formSection" className="col-12 col-md-5 py-5 px-5 px-md-3 pr-md-5">
    <h1 className="mb-5">Contact Us</h1>
    <form  method="POST">
      <div className="form-row form-group mb-4">
        <div className="col">
          <label htmlFor="Fname">First Name</label>
          <input
            type="text"
            id="Fname"
            name="firstname"
            className="form-control"
            value={userData.firstname}
            onChange={handleInputs}
            placeholder="Rahul"
            required=""
          />
        </div>
        <div className="col">
          <label htmlFor="Lname">Last Name</label>
          <input
            type="text"
            id="Lname"
            name="lastname"
            className="form-control"
            value={userData.lastname}
            onChange={handleInputs}
            placeholder="Gianchandani"
            required=""
          />
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={userData.email}
          onChange={handleInputs}
          placeholder="Rahul_7872@yahoo.com"
          required=""
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleInputs}
          placeholder="03xxxxxxxxx"
          required=""
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="exampleFormControlSelect1">Subject</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          name="subject"
          onChange={handleInputs}
          required=""
        >
          <option>Advertisement</option>
          <option>Fraud</option>
          <option>Blog</option>
          <option>Contacting</option>
          <option>Forums</option>
          <option>Suggestion / Feedback</option>
          <option>Partnership</option>
          <option>Registration</option>
        </select>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="exampleFormControlTextarea1">Mesaege</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          required=""
          name="message"
          onChange={handleInputs}
          defaultValue={""}
        />
      </div>
      {/* <div class="g-recaptcha" data-sitekey="your_site_key"></div>
<input type="submit" value="Submit"> */}
      <div className="submitBtn text-center mt-5">
        <button type="submit" className="btn" onClick={contactForm}>
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

        </div>
    );
  }


export default ContactUs;