import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../App";
const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault(); //preventing default page reload

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login successful");
      window.location.replace("/");
    }
  };

  return (
    <div id="login">
      <div className="row flex-column contactform justify-content-center align-items-center position-relative">
        <div className="mx-5">
          <div id="formSection" className=" ">
            <div className="container py-5 px-4 px-sm-5">
              <h3 className="mb-5">Sign in to PakDrive</h3>
              <form method="POST">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Rahul_7872@yahoo.com"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group mb-1">
                  <label htmlFor="pass1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="pass1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                  />
                </div>
                <Link to="/reset" className="ftpw">
                  Forgot Password?
                </Link>
                <div className="submitBtn text-center mt-5">
                  <button
                    type="submit"
                    className="btn d-block col-12"
                    onClick={loginUser}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="regTip text-center mt-3">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </div>
          <div className=" text-white divider d-flex text-center align-items-center my-3">
            Or
          </div>
          <div className=" altsign justify-content-between">
            <div className="container py-3 px-4 px-sm-5">
              <div className="row justify-content-between align-items-center ">
                <p className="mb-0 ml-2 ml-sm-0">Sign in with</p>
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

export default Login;
