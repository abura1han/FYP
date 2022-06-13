import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const NewCarDetails = () => {
  const [carDetails, setCarDetails] = useState({});

  /**
   * Get car details by car id form window.location.pathname
   */
  useEffect(() => {
    const carId = window.location.pathname.split("/")[2];

    fetch(`/car/${carId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        setCarDetails(data);
      });
  }, []);

  return (
    <div id="NewCarDetails">
      <div className="container py-5">
        <div className="row justify-content-center bg-white p-5 ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide col-6"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {carDetails?.images?.map((image, i) => (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={i}
                  className="active"
                ></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {carDetails?.images?.map((image, i) => (
                <div key={i} className={`carousel-item ${i === 0 && "active"}`}>
                  <img
                    className="d-block w-100"
                    src={`/${image}`}
                    alt="asdsasda"
                  />
                </div>
              ))}
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
            <h2 className="mb-0 font-weight-bold">{carDetails?.carBrand}</h2>
            <span className=" stars my-3  rounded">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <span className="ml-2 text-dark">14 Reviews</span>
            </span>
            <p className="price my-3">PKR {carDetails?.price} Lacs</p>

            <div className="features mt-4">
              <p>
                {" "}
                <i className="mr-3  car-icons fas fa-cog"></i> { carDetails?.transmission}
              </p>
              <p>
                {" "}
                <i className="mr-3  car-icons fas fa-closed-captioning"></i>{" "}
                { carDetails?.engineCC}cc
              </p>
              <p>
                <i class="mr-3 car-icons  fa-solid fa-gauge-high"></i>{" "}
                {carDetails?.mileage} K/M
              </p>
              <p>
                {" "}
                <i className="mr-3  car-icons fas fa-gas-pump"></i> { carDetails?.fuel}
              </p>
            </div>
            <div className="col-6 offset-9">
                <i className="fas fa-flag mr-2"></i>
                <Link to="#">Report Ad</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCarDetails;
