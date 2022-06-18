import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PendingCarContext } from "../reducer/carContext";

const Reports = () => {
  const { pendingCarCount, setPendingCarCount } = useContext(PendingCarContext);

  const [newCarList, setNewCarList] = useState([]);
  const [usedCarList, setUsedCarList] = useState([]);

  useEffect(() => {
    fetch("/report-cars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newCars = data.data.filter((e) => e.type === "New");
        const usedCars = data.data.filter((e) => e.type === "Used");
        setNewCarList(newCars);
        setUsedCarList(usedCars);
      });
  }, []);

  const handleDeleteCar = (carId) => {
    fetch(`/remove-car?carId=${carId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        if (data.type === "New") {
          setNewCarList(newCarList.filter((car) => car._id !== data._id));
        }
        if (data.type === "Used") {
          setUsedCarList(usedCarList.filter((car) => car._id !== data._id));
        }
      });
  };

  return (
    <div id="Reports">
      <div className="row">
        <div className="col-2 sideNav">
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/admProfile"
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
              <span className="pendCount "> {pendingCarCount} </span>
            </h6>
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
          <ul class="nav nav-tabs my-4" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="NewCar-tab"
                data-toggle="tab"
                href="#NewCar"
                role="tab"
                aria-controls="NewCar"
                aria-selected="true"
              >
                NewCar
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="UsedCar-tab"
                data-toggle="tab"
                href="#UsedCar"
                role="tab"
                aria-controls="UsedCar"
                aria-selected="false"
              >
                UsedCar
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            {newCarList?.map((e) => (
              <>
                <div className="row justify-content-center my-3">
                  <h5 className="text-success mr-5">
                    {" "}
                    <i className=" align-middle fa-solid fa-check"></i>Ignore
                  </h5>
                  <h5
                    className="text-danger"
                    onClick={(_) => handleDeleteCar(e._id)}
                  >
                    {" "}
                    <i className=" align-middle fa-solid fa-xmark"></i>Delete
                  </h5>
                </div>
                <div
                  class="tab-pane fade show active"
                  id="NewCar"
                  role="tabpanel"
                  aria-labelledby="NewCar-tab"
                >
                  <div className="container py-5">
                    <div className="row justify-content-center bg-white p-5 ">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide col-6"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src="./images/pink-aqua.png"
                              alt="asdsasda"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleIndicators"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleIndicators"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      <div className="col-4 offset-1 info">
                        <h2 className="mb-0 font-weight-bold">Kia Sportage</h2>
                        <span className=" stars my-3  rounded">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span className="ml-2 text-dark">14 Reviews</span>
                        </span>
                        <p className="price my-3">PKR {e?.price} Lacs</p>

                        <div className="features mt-4">
                          <p>
                            {" "}
                            <i className="mr-3  car-icons fas fa-cog"></i>{" "}
                            Manual/Automatic
                          </p>
                          <p>
                            {" "}
                            <i className="mr-3  car-icons fas fa-closed-captioning"></i>{" "}
                            1200cc
                          </p>
                          <p>
                            <i class="mr-3 car-icons  fa-solid fa-gauge-high"></i>{" "}
                            18-22 K/M
                          </p>
                          <p>
                            {" "}
                            <i className="mr-3  car-icons fas fa-gas-pump"></i>{" "}
                            Petrol/Gas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {usedCarList?.map((e) => (
              <>
                <div
                  class="tab-pane fade"
                  id="UsedCar"
                  role="tabpanel"
                  aria-labelledby="UsedCar-tab"
                >
                  <div className="container">
                    <div className="row justify-content-center my-3">
                      <h5 className="text-success mr-5">
                        {" "}
                        <i className=" align-middle fa-solid fa-check"></i>
                        Ignore
                      </h5>
                      <h5
                        className="text-danger"
                        onClick={(_) => handleDeleteCar(e._id)}
                      >
                        {" "}
                        <i className=" align-middle fa-solid fa-xmark"></i>
                        Delete
                      </h5>
                    </div>
                    <div className="row pt-5">
                      <div className="col-9">
                        <div className=" ">
                          <div className="row justify-content-center">
                            <Carousel infiniteLoop>
                              <div>
                                <img
                                  src="./images/Kia-Sportage.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/dummy-car.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/pink-aqua.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/Suzukia-specia.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/pink-aqua.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/Suzukia-specia.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/Suzukia-specia.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                              <div>
                                <img
                                  src="./images/Suzukia-specia.png"
                                  alt="asdsasda"
                                />

                                <p className="legend">Toyota Corrola</p>
                              </div>
                            </Carousel>
                          </div>
                        </div>

                        <div className="CarDetailCard col-6 offset-3 pb-1 ">
                          <h2 className="mb-0">2016 Toyota Carolla XLI 1.6</h2>
                          <i className="fas fa-map-marker-alt mr-2  "></i>
                          <Link to="#" className="city">
                            Lahore
                          </Link>
                          <h4 className=" mt-3 mb-5">PKR 25 lacs</h4>
                          <div className="numBox col-5">
                            <i className=" fas fa-phone-alt mr-3"></i>
                            {/*  <span>View Number</span>   if user is Not logged in, dont show number */}
                            <span>03468765433</span>{" "}
                            {/* if user is logged in, show him number */}
                          </div>

                          <div className="col-4 offset-9">
                            <i className="fas fa-flag mr-2"></i>
                            <Link to="#">Report Ad</Link>
                          </div>
                        </div>

                        <div className="CarGeneralCard col-6 offset-3 mt-2 ">
                          <h4 className="font-weight-bold mb-3">
                            General Details
                          </h4>
                          <div className="row">
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fa fa-calendar-alt"></i> 2019
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fa fa-road"></i> 40,000 Kms
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fa fa-user-alt"></i> First
                                Owner
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fas fa-cog"></i> Automatic
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fas fa-gas-pump"></i> Petrol
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fa-solid fa-fill-drip"></i>{" "}
                                Gray
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i className="mr-3 fas fa-closed-captioning"></i>{" "}
                                1200cc
                              </p>
                            </div>
                            <div className="col-6 details position-relative mb-1">
                              <p>
                                {" "}
                                <i class="mr-3 fa-solid fa-car-side"></i> SUV
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 remarks">
                            <h4 className="font-weight-bold">
                              Seller's Remarks
                            </h4>{" "}
                            {/*if seller wants to write comment or say something  */}
                            <p className="mb-0">-2 times accidented </p>
                            <p className="mb-0">-staring is good</p>
                            <p className="mb-0">-mirrors are fine</p>
                            <p className="mb-0">-good car</p>
                            <p className="mb-0">-Contact me fast omg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
