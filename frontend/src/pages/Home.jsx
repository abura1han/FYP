import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Config from "../Config.json";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NewCarContext, UsedCarContext } from "../reducer/carContext";
import Form from "../components/Form";
import { CarCityFilter } from "../components/CarCityFilter";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "Create a React App from an HTML Website";
const CANONICAL = Config.SITE_DOMAIN + "/";

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

function Home() {
  const { usedCarList, setUsedCarList } = useContext(UsedCarContext);
  const { newCarList, setNewCarList } = useContext(NewCarContext);
  const [popularCarList, setPopularCarList] = useState([]);

  // Fetch all popular list
  useEffect(() => {
    fetch("/popular-cars")
      .then((res) => res.json())
      .then(({ success, data }) => {
        setPopularCarList(data);
        console.log(data);
      });
  }, []);

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
    <div>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="conanoical" to={CANONICAL} />
        <meta name="description" content={DESC} />
        <meta name="theme-color" content={Config.THEME_COLOR} />
      </Helmet>
      <section id="Carnav">
        <div className="container h-100">
          <div className="row flex-lg-column  align-items-center h-100  align-content-center justify-content-center">
            <h1 className="mb-3">Find The Best Cars Near By You</h1>
            <p className="mx-5 text-center">
              With thousands of cars, we have just the right one for you
            </p>
            <Form />
          </div>
        </div>
      </section>
      {/* CAR NAVBAR SECTION ENDS */}
      {/* NEW CARS SECTION */}
      <section id="NewCars" className="pb-5">
        {/* CAR CARDS SLIDER / CROUSEL */}
        <div id="Carslider" className="mb-3">
          <div className="container">
            {/* Popular car list */}
            <OwlCarousel
              className="owl-carousel owl-theme px-3 px-sm-0"
              {...owlone}
            >
              {popularCarList.map(
                ({
                  _id,
                  type,
                  images,
                  price,
                  model,
                  year,
                  updatedAt,
                  registeredIn,
                }) => (
                  <div
                    className="card border-0 rounded-0 position-relative"
                    style={{ width: "100%" }}
                  >
                    <Link
                      to={`/${type === "New" ? "NewCar" : "UsedCar"}/${_id}`}
                    >
                      <img
                        className="card-img-top"
                        src={images[0]}
                        alt="Suzukia-specia Car"
                        
                      />
                    </Link>
                    <span className="position-absolute pkr text-white py-1 py-lg-2 px-3">
                      PKR {price}
                    </span>
                    <span className="position-absolute used text-white py-1 px-2 rounded">
                      {type}
                    </span>
                    <span className="position-absolute stars py-1 px-2 rounded">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <div className="card-body">
                      <Link to="#">
                        <h5 className="card-text mb-1">
                          {model} {year}
                        </h5>
                      </Link>
                      <span className="text-secondary">
                        <i className="fas fa-map-marker-alt text-secondary mr-1" />
                        <Link to="#">{registeredIn}</Link>
                      </span>
                      <span className="text-secondary">
                        <i className="far fa-clock ml-2 ml-md-1 mr-1 text-secondary" />
                        <Moment fromNow>{updatedAt}</Moment>
                      </span>
                    </div>
                  </div>
                )
              )}
            </OwlCarousel>
          </div>
        </div>

        {/* CAR CARDS CROUSEL ENDS */}
        {/* ADVERTISEMENT */}
        <div id="advertisee">
          <div className="container h-100">
            <div className="row  text-white align-items-center  h-100 py-4 py-sm-5 py-md-0">
              <div className="col-md-6 col-12 pb-5 pb-md-0">
                <h1 className="col-md-8 px-0 mb-3 text-center text-md-left">
                  {" "}
                  Post Your Ad on Pakistan Drives
                </h1>
                <ul className="mx-0 px-0 mt-4">
                  <li className=" px-0 py-1 ml-0">
                    <i className="fas fa-check-circle mr-3 " />
                    Post your Ad for Free in 3 Easy Steps
                  </li>
                  <li className=" px-0 py-1 ml-0">
                    <i className="fas fa-check-circle mr-3 " />
                    Get Genuine offers from Verified Buyers
                  </li>
                  <li className=" px-0 py-1 ml-0">
                    <i className="fas fa-check-circle mr-3 " />
                    Sell your car Fast at the Best Price
                  </li>
                  <li className=" px-0  mt-5 mt-sm-4 ml-0 text-center text-md-left">
                    <Link className="#" to="#">
                      <i className="fas fa-car mr-2" />
                      Post Your Ad
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-12 px-0 d-block text-right h-100 pt-5 pt-md-0">
                <img
                  src="./images/Worker.png"
                  height="439px"
                  width="100%"
                  alt="Working on station"
                  
                />
              </div>
            </div>
          </div>
        </div>
        {/* ADVERTISEMENT ENDS */}
        {/* FEATURES NEW CARS */}
        <div id="featuredNewCars" className="py-5">
          <div className="container">
            <h1 className="text-center position-relative my-5">
              Featured New Cars
            </h1>
            <div id="Carslider" className="sliderTwo py-5 mb-5 mb-sm-0">
              <OwlCarousel
                className="owl-carousel owl-theme px-3 px-sm-0"
                {...owlone}
              >
                {newCarList &&
                  newCarList.map((data, i) => (
                    <div
                      className="card rounded-0 position-relative"
                      style={{ width: "100%" }}
                      key={i}
                    >
                      <Link to={`/NewCar/${data._id}`}>
                        <img
                          className="card-img-top"
                          src={data?.images[0]}
                          alt="Suzukia-specia Car"
                          
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
                {newCarList.length < 1 && <div>No post found</div>}
              </OwlCarousel>
            </div>
          </div>
        </div>
        {/* FEATURES NEW CARS ENDS */}
      </section>
      {/* NEW CARS SECTION ENDS */}
      {/* FEATURES USED CARS */}
      <section id="UsedCars">
        <div className="container">
          <div id="featuredUsedCars" className="py-5">
            <h1 className="text-center position-relative my-5">
              Featured Used Cars for Sale
            </h1>
            <div id="Carslider" className="sliderThree py-5 mb-5">
              <OwlCarousel
                className="owl-carousel owl-theme px-3 px-sm-0"
                {...owlone}
              >
                {usedCarList &&
                  usedCarList.map((data, i) => (
                    <div
                      className="card rounded-0 position-relative"
                      style={{ width: "100%" }}
                      key={i}
                    >
                      <Link to={`/UsedCar/${data._id}`}>
                        <img
                          className="card-img-top"
                          src={data?.images[0]}
                          alt="Suzukia-specia Car"
                          
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
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES USED CARS ENDS */}
      {/* TOP CITIES SECTION */}
      <CarCityFilter />
      {/* TOP CITIES SECTION ENDS */}
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
    </div>
  );
}

export default Home;
