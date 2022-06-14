import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import { PendingCarContext } from "../reducer/carContext";

import { UserContext } from "../App";
import CartContext from "../reducer/CartContext";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  const { setPendingCarCount } = useContext(PendingCarContext);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    fetch("/pending-cars")
      .then((res) => res.json())
      .then(({ data }) => {
        setPendingCarCount(data.length);
      });
  }, [setPendingCarCount]);

  const RenderMenu = () => {
    if (state) {
      return (
        <div>
          {state && state.isAdmin && (
            <Link to="/AdmProfile" className="mr-4">
              <span className="loginIcons mr-2">
                <i className="fas fa-user" />
              </span>
              Admin panel
            </Link>
          )}
          <Link to="/profile" className="mr-4">
            <span className="loginIcons mr-2">
              <i class="fas fa-check "></i>
            </span>
            {userName.firstname}
            {/* { show ? userName.firstname : 'profile'} */}
          </Link>

          <Link to="/logout" className="">
            <span className="loginIcons mr-2">
              <i className="fas fa-arrow-right" />
            </span>
            Logout
          </Link>
          <Link to="/cart">
            <i class="fa-solid fa-cart-arrow-down ml-4 text-white position-relative"></i>
            <span className="position-absolute cartNum"> {cart.length}</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/profile" className="mr-4">
            <span className="loginIcons mr-2">
              <i class="fas fa-check"></i>
            </span>
            {/* { show ? userName.firstname : 'profile'} */}
            {"profile"}
          </Link>
          <Link to="/Register" className="mr-4">
            <span className="loginIcons mr-2">
              <i className="fas fa-user" />
            </span>
            Register
          </Link>
          <Link to="/Login" className="">
            <span className="loginIcons mr-2">
              <i className="fas fa-arrow-right" />
            </span>
            Login
          </Link>
        </div>
      );
    }
  };
  const [userName, setUserName] = useState({});
  const [, setShow] = useState(false);

  const userFName = async () => {
    try {
      const res = await fetch("/getdata", {
        //fetch returns promises, accepted or rejected
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json(); //received full user info name:value from req.rootuser from auth.js
      console.log(data);
      dispatch({ type: "USER", payload: data });
      setUserName(data);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  //cant use async function inside useEffect

  useEffect(() => {
    userFName();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <div id="firstnav">
        <div className="container">
          <div className="row align-items-center justify-content-center py-1">
            <div className="col-12 col-sm-6 text-left">
              <ul className="d-flex align-items-center justify-content-sm-start justify-content-center my-0 px-0">
                <li className="px-2 px-lg-3 px-xl-3 ">
                  <Link to="#">
                    <span className="firstNavIcons">
                      <i className="fab fa-facebook" />
                    </span>
                  </Link>
                </li>
                <li className="px-2 px-lg-3 px-xl-3 ">
                  <Link to="#">
                    <span className="firstNavIcons">
                      <i className="fab fa-twitter" />
                    </span>
                  </Link>
                </li>
                <li className="px-2 px-lg-3 px-xl-3 ">
                  <Link to="#">
                    <span className="firstNavIcons">
                      <i className="fab fa-linkedin-in" />
                    </span>
                  </Link>
                </li>
                <li className="px-2 px-lg-3 px-xl-3 ">
                  <Link to="#">
                    <span className="firstNavIcons">
                      <i className="fab fa-google-plus-g" />
                    </span>
                  </Link>
                </li>
                <li className="px-2 px-lg-3 px-xl-3 ">
                  <span id="midline" />
                </li>
                <li>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle "
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Language
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="#">
                        English (UK)
                      </Link>
                      <Link className="dropdown-item" to="#">
                        English (US)
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Urdu
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Sindhi
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Bengali
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Español
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Spanish
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Arabic
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Chinese
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Hindi
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Russian
                      </Link>
                      <Link className="dropdown-item" to="#">
                        French
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Portguese
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Dutch
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to="#">
                        Another Language?
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 text-sm-right text-center my-1">
              <RenderMenu />
            </div>
          </div>
        </div>
      </div>
      {/* FIRST MINI NAV */}
      {/* MAIN NAVBAR */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink
              id="logoIcon"
              activeClassName="navbar-brand active"
              exact
              to="/"
            >
              <img src="/images/Nav-logo.png" alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul
                id="Items"
                className="navbar-nav justify-content-between align-items-lg-center"
              >
                <li className="nav-item  mr-2">
                  <NavLink
                    activeClassName=" active"
                    className="nav-link position-relative"
                    to="/UsedCars"
                  >
                    Used Cars<span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink
                    activeClassName=" active"
                    className="nav-link position-relative"
                    to="/NewCars"
                  >
                    New Cars
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink
                    activeClassName=" active"
                    className="nav-link position-relative"
                    to="/AutoStore"
                  >
                    Auto Store
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  <NavLink
                    activeClassName=" active"
                    className="nav-link position-relative"
                    to="/Videos"
                  >
                    Videos
                  </NavLink>
                </li>
                <li className="nav-item mr-3"></li>
                <li className="nav-item mr-3">
                  <NavLink
                    activeClassName=" active"
                    className="nav-link position-relative"
                    to="/Blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item mr-3">
                  {state && state.isAdmin ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Post an Ad
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            activeClassName=" active"
                            className="nav-link position-relative"
                            to="/Advertise"
                          >
                            <i className="fas fa-car mr-2" />
                            Car
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            activeClassName=" active"
                            className="nav-link position-relative"
                            to="/AdvertiseParts"
                          >
                            <i className="fas fa-car mr-2" />
                            Car parts
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <NavLink
                      activeClassName=" active"
                      className="nav-link position-relative"
                      to="/Advertise"
                    >
                      <i className="fas fa-car mr-2" />
                      Post an Ad
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* MAIN NAVBAR ENDS */}
    </header>
  );
};

export default Header;
