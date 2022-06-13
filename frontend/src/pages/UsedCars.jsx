import React, { useContext, useEffect, useLayoutEffect } from "react";
import { UsedCarContext } from "../reducer/carContext";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import CarBrandsFilter from "../components/CarBrandsFilter";
import { CarCityFilter } from "../components/CarCityFilter";
import CarBudgetFilter from "../components/CarBudgetFilter";
import CarYearFilter from "../components/CarYearFilter";
import CarCategoryFilter from "../components/CarCategoryFilter";

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

function UsedCars() {
  const { usedCarList, setUsedCarList } = useContext(UsedCarContext);

  // If page load directly
  useLayoutEffect(() => {
    fetch("/cars?type=Used", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setUsedCarList((carList) => [...carList, ...data]);
      });
  }, [setUsedCarList]);

  // If page change by clicking
  useEffect(() => {
    fetch("/cars?type=Used", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setUsedCarList((carList) => [...carList, ...data]);
      });
  }, [setUsedCarList]);

  return (
    <div id="usedcars">
      {/* CAR NAVBAR SECTION  */}
      <section id="Carnav">
        <div className="container h-100">
          <div className="row flex-lg-column  align-items-center align-content-center justify-content-center pt-5">
            <h1 className="mb-3">Find The Best Used Cars Near By You</h1>
            <p className="mx-5 text-center">
              With thousands of used cars, we have just the right one for you
            </p>
            <Form />
          </div>
        </div>
      </section>
      {/* CAR NAVBAR SECTION ENDS */}
      {/* NEW CARS SECTION */}
      <section id="threeSteps" className="py-5">
        <div className="container">
          <div className="row align-items-center py-5 mt-sm-5 text-center">
            <div className="col-sm-4 col-md-3">
              <i className="fas fa-bullhorn mb-3" />
              <h4>Free Ad</h4>
              <p>
                Post your car’s ad for free in less than a minute and gain
                ultimate exposure.
              </p>
            </div>
            <div className="col-sm-4 col-md-3 mt-5 mt-sm-0 ">
              <i className="far fa-handshake mb-3" />
              <h4>Right Offer</h4>
              <p>
                The offer is a fair market rate and isn’t being made up
                somewhere else within the transaction.
              </p>
            </div>
            <div className="col-sm-4 col-md-3 mt-5 mt-sm-0">
              <i className="fas fa-car-side mb-3" />
              <h4>Bring Any Car</h4>
              <p>
                We take the good, bad and the ugly, no matter the make, model,
                condition or mileage.
              </p>
            </div>
            <div className="col-sm-12 mt-5 my-md-0 col-md-3 advbtn">
              <Link to="./advertise">
                <i className="fas fa-car mr-2" />
                Post Your Ad
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* NEW CARS SECTION ENDS */}
      {/* FEATURES USED CARS */}
      <section id="UsedCars">
        <div className="container">
          <div id="featuredUsedCars" className="pt-5 py-sm-5">
            <h1 className="text-center position-relative my-5">
              Featured Used Cars for Sale
            </h1>
            <div id="Carslider" className="sliderThree py-5 mb-5">
              <OwlCarousel
                className="owlone owl-carousel owl-theme px-3 px-sm-0"
                {...owlone}
              >
                {/* Dynamic car list */}
                {usedCarList &&
                  usedCarList.map((data, i) => (
                    <div
                      className="card rounded-0 position-relative"
                      style={{ width: "100%" }}
                      key={i}
                    >
                      <Link to={`/UsedCar/${data?._id}`}>
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
                        <Link to="#">
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
                {usedCarList.length < 1 && <div>No post found</div>}
              </OwlCarousel>
              <OwlCarousel
                className="owltwo owl-carousel owl-theme px-3 px-sm-0 mt-5"
                {...owltwo}
              >
                {usedCarList &&
                  usedCarList.map((data, i) => (
                    <div
                      className="card rounded-0 position-relative"
                      style={{ width: "100%" }}
                      key={i}
                    >
                      <Link to={`/UsedCar/${data?._id}`}>
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
                        <Link to="#">
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
      {/* FEATURES USED CARS ENDS */}
      {/* CATEGORY OF CARS */}
      <CarCategoryFilter />

      {/* CATEGORY OF CARS ENDS */}
      {/* CAR BRANDS SECTION */}
      <CarBrandsFilter />

      {/* CAR BRANDS SECTION ENDS*/}
      {/* BUDGET SECTION */}
      <CarBudgetFilter />
      {/* BUDGET SECTION ENDS */}
      {/* TOP CITIES SECTION */}
      <CarCityFilter />

      {/* TOP CITIES SECTION ENDS */}
      {/* YEAR SECTION  */}
      <CarYearFilter />

      {/* YEAR SECTION ENDS */}
    </div>
  );
}

export default UsedCars;
