import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "owl.carousel/dist/assets/owl.theme.default.css";
import { PendingCarContext } from "../reducer/carContext";

const VideoPost = () => {
  const { pendingCarCount } = useContext(PendingCarContext);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const imageElement = useRef();

  useEffect(() => {
    imageElement.current.addEventListener("change", (e) => {
      const formData = new FormData();
      for (let i of imageElement.current.files) {
        formData.append("file-upload", i);
      }
      console.log(formData.get("file-upload"));
      setImage(formData);
    });
  }, []);

  const handleFormSubmit = () => {
    // Upload image
    fetch("/file-upload", {
      method: "POST",
      body: image,
    })
      .then((res) => res.json())
      .then(({ success, error, data }) => {
        if (!success) {
          alert(`${error}`);
          return;
        }

        fetch("/video", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            videoUrl: url,
            phone,
            email,
            title,
            name,
            thumbnail: data,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Video added successfully");
            setTitle("");
            setName("");
            setUrl("");
            setPhone("");
            setEmail("");
            imageElement.current = null;
          });
      });
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
            <span className="pendCount "> {pendingCarCount} </span>
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
                  <h3 className="mb-0 position-relative">Share Reviews</h3>
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
                          Video Details
                        </h1>
                        <form
                          action="somefile.php"
                          method="post"
                          name="myForm"
                          className="row flex-column col-12 col-sm-8 col-md-8 col-lg-6 offset-lg-3 offset-md-2 offset-sm-2"
                        >
                          <div className="form-group mt-2">
                            <label htmlFor="Title">Video Title </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Title"
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                            />
                          </div>

                          <div className="form-group mt-2">
                            {/* This url should be put in iframe src on videos page */}
                            <label for="vidUrl">Put Youtube Video Url</label>
                            <input
                              type="url"
                              id="vidUrl"
                              className="form-control"
                              name="url"
                              onChange={(e) => setUrl(e.target.value)}
                              value={url}
                            />
                          </div>

                          <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlFile1">
                              Upload Thumbnail
                            </label>
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              multiple=""
                              ref={imageElement}
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
                              onChange={(e) => setName(e.target.value)}
                              value={name}
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
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
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
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                            <small
                              id="emailHelp"
                              className="form-text text-muted"
                            >
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
                          onClick={handleFormSubmit}
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

export default VideoPost;
