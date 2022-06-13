import React, { useContext, useEffect, useLayoutEffect } from "react";
import { NewCarContext } from "../reducer/carContext";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Form from "../components/Form";
import CarBrandsFilter from "../components/CarBrandsFilter";
import CarCategoryFilter from "../components/CarCategoryFilter";
import CarBudgetFilter from "../components/CarBudgetFilter";
import { CarCityFilter } from "../components/CarCityFilter";
import CarYearFilter from "../components/CarYearFilter";

const owlone = {
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  slideBy: 1,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    576: {
      items: 2,
      nav: true,
    },
    768: {
      items: 3,
      nav: true,
    },
    992: {
      items: 4,
      nav: true,
      loop: true,
    },
    1200: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
};
const owltwo = {
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
  slideBy: -1,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    576: {
      items: 2,
      nav: true,
    },
    768: {
      items: 3,
      nav: true,
    },
    992: {
      items: 4,
      nav: true,
      loop: true,
    },
    1200: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
};

const NewCars = () => {
  const { newCarList, setNewCarList } = useContext(NewCarContext);

  useLayoutEffect(() => {
    fetch("/cars?type=New", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setNewCarList((newCarList) => [...newCarList, ...data]);
      });
  }, [setNewCarList]);

  useEffect(() => {
    fetch("/cars?type=New", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setNewCarList((newCarList) => [...newCarList, ...data]);
      });
  }, [setNewCarList]);

  return (
    <div id="newcars">
      <section id="Carnav">
        <div className="container h-100">
          <div className="row flex-lg-column  align-items-center align-content-center justify-content-center pt-5">
            <h1 className="mb-3">Find The Best New Cars Near By You</h1>
            <p className="mx-5 text-center">
              With thousands of new cars, we have just the right one for you
            </p>
            <Form />
          </div>
        </div>
      </section>
      {/* CAR NAVBAR SECTION ENDS */}
      {/* HELPER / RECOMMENDATION SECTION */}
      {/* <section id="helper" className=" py-5">
        <div className="container">
          <div className=" text-center text-sm-left row align-items-center py-5 mt-sm-5 justify-content-between">
            <div className=" col-sm-6 col-md-4 mb-5 mb-sm-0 svgdiv">
              <img
                src="./images/undraw_electric_car_b7hl.svg"
                width="300px"
                alt="car-man  svg"
              />
            </div>
            <div className="col-sm-6 col-md-4 my-5 my-sm-0 logodiv">
              <img
                src="./images/Nav-logo.png"
                height="30px"
                width="100px "
                alt="pak drive logo"
              />{" "}
              <span className="font-weight-bold">Helper</span>
              <h4 className="mt-3">Not Sure, Which car to buy?</h4>
              <p>Let us help you find the dream car</p>
            </div>
            <div className=" col-sm-12 col-md-4 py-5 py-sm-0 mt-5 my-md-0 text-center text-md-right position-relative">
              <i className="d-none d-sm-block fas fa-angle-double-right position-absolute" />
              <i className="d-block d-sm-none fas fa-angle-double-down position-absolute" />{" "}
              <Link to="#" className="bestcarbtn">
                <i className="fas fa-car mr-2" />
                Show me Best Car
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* HELPER / RECOMMENDATION SECTION ENDS */}
      {/* FEATURES NEW CARS */}
      <section id="NewCars" className="">
        <div className="container">
          <div id="featuredNewCars" className="pt-5 py-sm-5">
            <h1 className="text-center position-relative my-5">
              Featured Popular Cars
            </h1>
            <div id="Carslider" className="sliderTwo py-5 mb-5 mb-sm-0">
              <OwlCarousel className="owl-theme px-3 px-sm-0 " {...owlone}>
                {newCarList &&
                  newCarList.map((data, i) => (
                    <div
                      className="card rounded-0 position-relative"
                      style={{ width: "100%" }}
                      key={i}
                    >
                      <Link to={`/NewCar/${data?._id}`}>
                        <img
                          className="card-img-top"
                          src={data?.images[0]}
                          alt={data?.model}
                        />
                      </Link>
                      <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                        Sale
                      </span>
                      <span className="position-absolute used text-white py-1 px-2 rounded">
                        {data?.type}
                      </span>
                      <div className="card-body">
                        <Link to={`/UsedCar/${data?._id}`}>
                          <h5 className="card-text mb-1">{data?.model}</h5>
                        </Link>
                        <div className="row justify-content-between mx-0 mb-2 mb-lg-2 mb-xl-2 mt-2">
                          <span className="text-secondary">
                            <i className="fas fa-map-marker-alt mr-2  " />
                            <Link to="#">Islamabad</Link>
                          </span>
                          <span className="featuredPKR d-inline-block ">
                            PKR {data?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                {newCarList.length < 1 && <div>No post found</div>}
              </OwlCarousel>
              <OwlCarousel className="owl-theme px-3 px-sm-0 mt-5" {...owltwo}>
                {newCarList &&
                  newCarList.map((data, i) => (
                    <div
                      className="card rounded-0 position-relative"
                      style={{ width: "100%" }}
                      key={i}
                    >
                      <Link to={`/NewCar/${data?._id}`}>
                        <img
                          className="card-img-top"
                          src={data?.images[0]}
                          alt={data?.model}
                        />
                      </Link>
                      <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                        Sale
                      </span>
                      <span className="position-absolute used text-white py-1 px-2 rounded">
                        {data?.type}
                      </span>
                      <div className="card-body">
                        <Link to={`/UsedCar/${data?._id}`}>
                          <h5 className="card-text mb-1">{data?.model}</h5>
                        </Link>
                        <div className="row justify-content-between mx-0 mb-2 mb-lg-2 mb-xl-2 mt-2">
                          <span className="text-secondary">
                            <i className="fas fa-map-marker-alt mr-2  " />
                            <Link to="#">Islamabad</Link>
                          </span>
                          <span className="featuredPKR d-inline-block ">
                            PKR {data?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES  CARS ENDS */}
      {/* FEATURES NEW UPCOMING CARS */}
      <section id="NewCars" className="upcoming">
        <div className="container">
          <div id="featuredNewCars" className="pt-5 py-sm-5">
            <h1 className="text-center position-relative my-5">
              Featured Upcoming Cars
            </h1>
            <div id="Carslider" className="sliderTwo py-5 mb-5 mb-sm-0">
              <OwlCarousel className="owl-theme" {...owlone}>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Suzukia-specia.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Suzukia Spacia 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0 mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 1,390,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching August 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/pink-aqua.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Featured
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Aqua 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0 mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,650,500*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching July 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/dummy-car.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Vitz 2016</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Lahore</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,275,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching September 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Kia-Sportage.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">KIA Sportage 2020</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Karachi</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 5,399,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching November 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Suzukia-specia.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Suzukia Spacia 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 1,390,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching August 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/pink-aqua.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Featured
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Aqua 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,650,500*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching December 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/dummy-car.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Vitz 2016</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Lahore</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        2,275,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching July 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Kia-Sportage.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">KIA Sportage 2020</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Karachi</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 5,399,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching October 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Suzukia-specia.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Suzukia Spacia 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 1,390,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching December 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/pink-aqua.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Featured
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Aqua 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,650,500*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching August 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/dummy-car.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Vitz 2016</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Lahore</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,275,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching November 2021*</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative "
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Kia-Sportage.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">KIA Sportage 2020</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Karachi</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 5,399,000*
                      </span>
                    </div>
                    <div className="row text-secondary justify-content-center">
                      <p className="mb-0 ">Launching July 2021*</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES  CARS ENDS */}
      {/* FEATURES NEW LAUNCHED / LATEST CARS */}
      <section id="NewCars" className="latest">
        <div className="container">
          <div id="featuredNewCars" className="pt-5 py-sm-5">
            <h1 className="text-center position-relative my-5">
              Featured Latest Cars
            </h1>
            <div id="Carslider" className="sliderTwo py-5 mb-5 mb-sm-0">
              <OwlCarousel className="owl-theme" {...owlone}>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Suzukia-specia.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Suzukia Spacia 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0 mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 1,390,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/pink-aqua.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Featured
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Aqua 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0 mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,650,500
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/dummy-car.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Vitz 2016</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Lahore</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,275,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Kia-Sportage.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">KIA Sportage 2020</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Karachi</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 5,399,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Suzukia-specia.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Suzukia Spacia 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 1,390,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/pink-aqua.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Featured
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Aqua 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,650,500
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/dummy-car.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Vitz 2016</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Lahore</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        2,275,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Kia-Sportage.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">KIA Sportage 2020</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Karachi</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 5,399,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Suzukia-specia.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Suzukia Spacia 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 1,390,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/pink-aqua.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Featured
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Aqua 2015</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Islamabad</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,650,500
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative"
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/dummy-car.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">Toyota Vitz 2016</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Lahore</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 2,275,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card  rounded-0 position-relative "
                  style={{ width: "100%" }}
                >
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="./images/Kia-Sportage.png"
                      alt="Suzukia-specia Car"
                    />
                  </Link>
                  <span className="position-absolute pkr red text-white py-1  pl-3 pr-4">
                    Sale
                  </span>
                  <span className="position-absolute new text-white py-1 px-2 rounded">
                    New
                  </span>
                  <div className="card-body">
                    <Link to="#">
                      <h5 className="card-text mb-1">KIA Sportage 2020</h5>
                    </Link>
                    <div className="row justify-content-between mx-0  mb-3 mb-lg-3 mb-xl-4 mt-2">
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt mr-2  " />
                        <Link to="#">Karachi</Link>
                      </span>
                      <span className="featuredPKR d-inline-block ">
                        PKR 5,399,000
                      </span>
                    </div>
                    <div className="row justify-content-center">
                      <p className="mb-0">Launched July 2021</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES  CARS ENDS */}
      {/* CAR BRANDS SECTION */}
      <CarBrandsFilter />

      {/* CAR BRANDS SECTION ENDS*/}
      {/* CATEGORY OF CARS */}
      <CarCategoryFilter />
      {/* CATEGORY OF CARS ENDS */}
      {/* BUDGET SECTION */}
      <CarBudgetFilter />
      {/* BUDGET SECTION ENDS */}
      {/* TOP CITIES SECTION */}
      {/* CAR COMPARISION SECTION */}
      <section id="CarCompare" className="py-5">
        <div className="container">
          <h1 className="text-center position-relative mb-5">
            Car Comparisions
          </h1>
          <div className="row py-5 justify-content-between flex-column flex-sm-row ">
            <div className="position-relative col-12 col-sm-6 col-lg-4  my-4">
              <i
                className="fa fa-exchange position-absolute text-white"
                aria-hidden="true"
              />
              <table className="mx-auto">
                <tbody>
                  <tr>
                    <td>
                      <Link to="#">
                        <img
                          src="./images/Toyota-Avanza.png"
                          alt=""
                          className="w-100"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to="#">
                        <img
                          src="./images/Faw-sirius.png"
                          alt=""
                          className="w-100"
                        />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    {/* <td>Toyota Avanza</td> */}
                    <th className="border-bottom-0 border-right-0 py-0 pt-3 pl-3 pl-sm-2 pl-md-3">
                      <Link to="#">Toyota Avanza</Link>
                    </th>
                    {/* <td>Faw Sirius</td> */}
                    <th className="border-bottom-0 border-left-0 py-0 pt-3 pl-3 pl-sm-2 pl-md-3">
                      <Link to="#">Sirius</Link>
                    </th>
                  </tr>
                  <tr>
                    <td className="text-secondary costs pt-0 pb-3 pl-3 pl-sm-2 pl-md-3">
                      PKR 4,326,000
                    </td>
                    <td className="text-secondary costs pt-0 pb-3 pl-3 pl-sm-2 pl-md-3">
                      PKR 1,885,000
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={2}
                      className="text-center border-top-0 VS text-white pb-4"
                    >
                      <Link
                        to="#"
                        className="text-white d-inline-block rounded"
                      >
                        Toyota Avanza VS FAW Sirius
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="position-relative col-12 col-sm-6 col-lg-4 my-4 ">
              <i
                className="fa fa-exchange position-absolute text-white"
                aria-hidden="true"
              />
              <table className="mx-auto">
                <tbody>
                  <tr>
                    <td>
                      <Link to="#">
                        <img
                          src="./images/Toyota-Avanza.png"
                          alt=""
                          className="w-100"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to="#">
                        <img
                          src="./images/Faw-sirius.png"
                          alt=""
                          className="w-100"
                        />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    {/* <td>Toyota Avanza</td> */}
                    <th className="border-bottom-0 border-right-0 py-0 pt-3 pl-3 pl-sm-2 pl-md-3">
                      <Link to="#">Toyota Avanza</Link>
                    </th>
                    {/* <td>Faw Sirius</td> */}
                    <th className="border-bottom-0 border-left-0 py-0 pt-3 pl-3 pl-sm-2 pl-md-3">
                      <Link to="#">Sirius</Link>
                    </th>
                  </tr>
                  <tr>
                    <td className="text-secondary costs pt-0 pb-3 pl-3 pl-sm-2 pl-md-3">
                      PKR 4,326,000
                    </td>
                    <td className="text-secondary costs pt-0 pb-3 pl-3 pl-sm-2 pl-md-3">
                      PKR 1,885,000
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={2}
                      className="text-center border-top-0 VS text-white pb-4"
                    >
                      <Link
                        to="#"
                        className="text-white d-inline-block rounded"
                      >
                        Toyota Avanza VS FAW Sirius
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="position-relative col-12 col-sm-6 col-lg-4 d-sm-none d-lg-block my-4">
              <i
                className="fa fa-exchange position-absolute text-white"
                aria-hidden="true"
              />
              <table className="mx-auto">
                <tbody>
                  <tr>
                    <td>
                      <Link to="#">
                        <img
                          src="./images/Toyota-Avanza.png"
                          alt=""
                          className="w-100"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to="#">
                        <img
                          src="./images/Faw-sirius.png"
                          alt=""
                          className="w-100"
                        />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    {/* <td>Toyota Avanza</td> */}
                    <th className="border-bottom-0 border-right-0 py-0 pt-3 pl-3 pl-sm-2 pl-md-3">
                      <Link to="#">Toyota Avanza</Link>
                    </th>
                    {/* <td>Faw Sirius</td> */}
                    <th className="border-bottom-0 border-left-0 py-0 pt-3 pl-3 pl-sm-2 pl-md-3">
                      <Link to="#">Sirius</Link>
                    </th>
                  </tr>
                  <tr>
                    <td className="text-secondary costs pt-0 pb-3 pl-3 pl-sm-2 pl-md-3">
                      PKR 4,326,000
                    </td>
                    <td className="text-secondary costs pt-0 pb-3 pl-3 pl-sm-2 pl-md-3">
                      PKR 1,885,000
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={2}
                      className="text-center border-top-0 VS text-white pb-4"
                    >
                      <Link
                        to="#"
                        className="text-white d-inline-block rounded"
                      >
                        Toyota Avanza VS FAW Sirius
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* CAR COMPARISION SECTION ENDS */}
      <CarCityFilter />
      {/* TOP CITIES SECTION ENDS */}
      {/* YEAR SECTION  */}
      <CarYearFilter />
      {/* YEAR SECTION ENDS */}
    </div>
  );
};

export default NewCars;
