import React, { useContext, useEffect, useState } from "react";
import {NavLink, Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NewCarContext, PendingCarContext, UsedCarContext } from "../reducer/carContext";


const BlogPost = () => {
    const { pendingCarCount} = useContext(PendingCarContext)


    const owlone = {
        loop: true,
        margin: 20,
        padding: 20,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        dots: false,
        slideBy: 1,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2,
            nav: true
          },
          576: {
            items: 4,
            nav: true
          },
          768: {
            items: 5,
            nav: true
          },
          992: {
            items: 6,
            nav: true,
            loop: true
          },
          1200: {
            items: 6,
            nav: true,
            loop: true
          }
        },
      };
    



  return (
    <div id="AdvertiseParts">
        <div className="row">
        <div className="col-2 sideNav">
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/AdmProfile"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 mt-5 my-4 fa-solid fa-user"></i>Profile
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Users"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-users"></i>Users
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Posts"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-copy"></i>Posts
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Pending"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-bell"></i>Pending
            </h6>
            <span className="pendCount "> { pendingCarCount} </span>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Reports"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-flag"></i>Reports
              <span className="repCount "> </span>
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/AdvertiseParts"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fas fa-car"></i>Ad Parts
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Blogpost"
          >
            <h6 className="text-white ">
          <i class="ml-5 mr-3 my-4 fa-brands fa-blogger"></i>Blog Post
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/VideoPost"
          >
            <h6 className="text-white ">
          <i class="ml-5 mr-2 my-4  fa-solid fa-play"></i>Video Post
            </h6>
          </NavLink>
        </div>
        <div className="col-10 Content">
        <div id="advertisement">
       
  {/* HEADING SECTION  */}
  <div id="headingSection">
    <div className="container pb-5">
      <div className="row flex-column align-items-center class py-5">
        <h3 className="mb-0 position-relative">
          Share your insights
        </h3>
      </div>
    </div>
  </div>
  {/* HEADING SECTION ENDS */}
  {/* CAR INFO SECTION */}
  <div id="carInfosection">
    <div className="container">
      <div id="carinfobox">
        <div id="brandselect" className="py-5">
          <div className="container">
            <div id="carinfoform" className="pb-5">
              <h1 className="text-center py-5  position-relative">
                Blog Details
              </h1>
              <form
                action="somefile.php"
                method="post"
                name="myForm"
                className="row flex-column col-12 col-sm-8 col-md-8 col-lg-6 offset-lg-3 offset-md-2 offset-sm-2"
              >
                  <div className="form-group mt-2">
                  <label htmlFor="Title">Title </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    
                  />
                </div>
                <div className="form-group mt-3">
                            <label htmlFor="Flare">Flare Tag</label>
                            <select
                              type="text"
                              className="form-control"
                              id="Flare"
                              >
                              <option selected>Select Tag</option>
                              <option>Petrol</option>
                              <option>Price</option>
                              <option>Value</option>
                              <option>Cars</option>
                              <option>Driving</option>
                              <option>Security</option>
                              <option>Speed</option>
                              <option>Rumor</option>
                              <option>SUggestion</option>
                            </select>
                          </div>

                <div className="form-group mt-3">
                  <label htmlFor="partDesc">
                    Brief Info
                  </label>
                  <textarea
                    className="form-control"
                    minlength="50" maxlength="190"
                    id="partDesc"
                    rows={3}
                    placeholder="Briefly write topic"
                    defaultValue={""}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="partDesc">
                    Write Post
                  </label>
                  <textarea
                    className="form-control"
                    id="partDesc"
                    rows={8}
                    placeholder="Write your full post"
                    defaultValue={""}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlFile1">Insert Cover Photo</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    multiple=""
                  />
                </div>
              </form>
            </div>
            <div id="PersonalInfo" className="my-5">
              <h1 className="text-center py-5 position-relative">
                Personal Details
              </h1>
              <form
                action="somefile.php"
                method="post"
                name="myForm"
                className="row flex-column py-5 col-12 col-sm-8  col-md-8  col-lg-6 offset-lg-3 offset-md-2 offset-sm-2"
              >
                <div className=" form-group">
                  <label htmlFor="Fname">Seller Full Name</label>
                  <input
                    type="text"
                    id="Fname"
                    className="form-control position-relative"
                    name="firstname"
                    placeholder="Rahul"
                    required=""
                  />
                </div>
                <div className="form-group  mt-4">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phonenumber"
                    placeholder="03xxxxxxxxx"
                    required=""
                  />
                </div>
                <div className="form-group  mt-4">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Rahul_7872@yahoo.com"
                    required=""
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </form>
            </div>
            <div className="submitBtn text-center mt-4">
              <button
                type="submit"
                form="myForm"
                className="btn d-block col-sm-6 col-md-4 offset-sm-3 offset-md-4"
              >
                Submit &amp; Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



        </div>
        </div>
        </div>
    </div>
  );
};

export default BlogPost;