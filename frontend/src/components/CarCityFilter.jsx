import React from "react";
import { Link } from "react-router-dom";

export const CarCityFilter = () => {
  return (
    <section id="Cities" className="py-5">
      <div className="container">
        <h1 className="text-center position-relative mb-5">
          Used Cars In Top Cities
        </h1>
        <div className="row align-items-center justify-content-between flex-sm-row flex-column py-4">
          <Link to="/search?registeredIn=Karachi" className="text-secondary">
            <div className="border bg-white py-2 my-3">
              <figure className="my-1 mx-5 px-5 mx-sm-4 px-sm-4 mx-lg-3 px-lg-2  mx-xl-4  px-xl-3 ">
                <img src="./images/Karachi-icon.png" alt="Lahore City Icon" />
                <figcaption className="text-center mt-2">Karachi</figcaption>
              </figure>
            </div>
          </Link>
          <Link to="/search?registeredIn=Lahore" className="text-secondary">
            <div className="border bg-white py-2 my-3 ">
              <figure className="my-1 mx-5 px-5 mx-sm-4 px-sm-4 mx-lg-3 px-lg-2  mx-xl-4  px-xl-3 ">
                <img src="./images/Lahore-icon.png" alt="Karachi City Icon" />
                <figcaption className="text-center mt-2">Lahore</figcaption>
              </figure>
            </div>
          </Link>
          <Link to="/search?registeredIn=Faislabad" className="text-secondary">
            <div className="border bg-white py-2 my-3  my-sm-5 my-md-3">
              <figure className="my-1 mx-5 px-5 mx-sm-4 px-sm-4 mx-lg-3 px-lg-2  mx-xl-4  px-xl-3 ">
                <img
                  src="./images/Faislabad-icon.png"
                  alt="Faislabad City Icon"
                />
                <figcaption className="text-center mt-2">Faislabad</figcaption>
              </figure>
            </div>
          </Link>
          <Link to="/search?registeredIn=Islamabad" className="text-secondary">
            <div className="border bg-white py-2 my-3  my-sm-5 my-md-3">
              <figure className="my-1 mx-5 px-5 mx-sm-4 px-sm-4 mx-lg-3 px-lg-2  mx-xl-4  px-xl-3 ">
                <img
                  src="./images/Islamabad-icon.png"
                  alt="Islamabad City Icon"
                />
                <figcaption className="text-center mt-2">Islamabad</figcaption>
              </figure>
            </div>
          </Link>
          <Link to="/search?registeredIn=Multan" className="text-secondary">
            <div className="border bg-white py-2 my-3 ">
              <figure className="my-1 mx-5 px-5 mx-sm-4 px-sm-4 mx-lg-3 px-lg-2  mx-xl-4  px-xl-3 ">
                <img src="./images/Multan-icon.png" alt="Multan City Icon" />
                <figcaption className="text-center mt-2">Multan</figcaption>
              </figure>
            </div>
          </Link>
          <Link to="/search?registeredIn=Peshawar" className="text-secondary">
            <div className="border bg-white py-2 my-3">
              <figure className="my-1 mx-5 px-5 mx-sm-4 px-sm-4 mx-lg-3 px-lg-2  mx-xl-4  px-xl-3 ">
                <img
                  src="./images/Peshawar-icon.png"
                  alt="Peshawar City Icon"
                />
                <figcaption className="text-center mt-2">Peshawar</figcaption>
              </figure>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
