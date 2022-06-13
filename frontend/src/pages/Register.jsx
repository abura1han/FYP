import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name; //name = email
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    // object destructuring to get all values in one line
    const {
      firstname,
      lastname,
      gender,
      email,
      phone,
      password,
      confirmpassword,
    } = user;

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      // M.toast("Wow so easy!");
      toast.warning(" Invalid Email format", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!.@$%^&*-]).{8,}$/.test(
        password
      )
    ) {
      // M.toast("Wow so easy!");
      toast.warning(" Invalid Password format", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    // using fetch API
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        gender,
        email,
        phone,
        password,
        confirmpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("User Registered Successfully!");
      console.log("User Registered Successfully!");

      toast.success(" Registered Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      history.push("/login");
    }
  };

  return (
    <div id="register">
      <div className="row flex-column contactform justify-content-center align-items-center position-relative">
        <div className="mx-5">
          <div id="formSection" className=" ">
            <div className="container py-5 px-4 px-sm-5">
              <h3 className="mb-5">Sign up to PakDrive</h3>
              <form method="POST">
                {/* we use POST for sending / create database data */}
                <div className="form-row form-group mb-4">
                  <div className="col">
                    <label htmlFor="Fname">First Name</label>
                    <input
                      type="text"
                      id="Fname"
                      className="form-control"
                      name="firstname"
                      placeholder="Rahul"
                      value={user.firstname}
                      onChange={handleInputs}
                      required=""
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="Lname">Last Name</label>
                    <input
                      type="text"
                      id="Lname"
                      className="form-control"
                      name="lastname"
                      placeholder="Gianchandani"
                      value={user.lastname}
                      onChange={handleInputs}
                      required=""
                    />
                  </div>
                </div>
                <div className="form-row ml-0 mb-4 ">
                  <div className="form-check ">
                    <input
                      className="form-check-input "
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleInputs}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>

                  <div className="form-check ml-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleInputs}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Rahul_7872@yahoo.com"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="03xx-xxxxxx"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="pass1">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    id="pass1"
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="6+ chars, 1 digit & 1 Cap letter"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="pass2">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pass2"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handleInputs}
                    placeholder="password"
                  />
                </div>
                <div className="form-group form-check mt-3 termsDiv">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Creating an account means you’re okay with our
                    <Link target="_blank" to="/terms">
                      {" "}
                      Terms of Service
                    </Link>
                    ,
                    <Link target="_blank" to="/privacy">
                      {" "}
                      Privacy Policy
                    </Link>
                    , and our default
                    <Link target="_blank" to="/notifications">
                      {" "}
                      Notification Settings
                    </Link>
                    .
                  </label>
                </div>
                <div className="submitBtn text-center mt-4 mb-2">
                  <button
                    type="submit"
                    name="signup"
                    className="btn d-block col-12"
                    onClick={PostData}
                  >
                    Create Account
                  </button>
                </div>
                <p className="logTip text-center mt-3">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
                <p className="recaptcha-terms">
                  This site is protected by reCAPTCHA and the Google
                  <Link to="https://policies.google.com/privacy">
                    Privacy Policy
                  </Link>{" "}
                  and
                  <Link to="https://policies.google.com/terms">
                    Terms of Service
                  </Link>{" "}
                  apply.
                </p>
              </form>
            </div>
          </div>
          <div className=" text-white divider d-flex text-center align-items-center my-3">
            Or
          </div>
          <div className=" altsign justify-content-between">
            <div className="container py-3 px-4 px-sm-5">
              <div className="row justify-content-between align-items-center ">
                <p className="mb-0 ml-2 ml-sm-0">Sign up with</p>
                <div>
                  <Link to="#">
                    <i className="fab fa-facebook-f " />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-google-plus-g mx-1" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-mobile-alt" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
