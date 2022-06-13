import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NumericInput from 'react-numeric-input';


const CarPartDetail = () => {
  return (
    <div id="CarPartDetail">
      <div className="row pt-5">
        <div className="col-9">
          <div className=" ">
            <div className="row justify-content-center">
              <Carousel infiniteLoop>
                <div>
                  <img src="./images/Kia-Sportage.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/dummy-car.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/pink-aqua.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/Suzukia-specia.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/pink-aqua.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/Suzukia-specia.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/Suzukia-specia.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
                <div>
                  <img src="./images/Suzukia-specia.png" alt="asdsasda" />

                  <p className="legend">Lightening Spray Can</p>
                </div>
              </Carousel>
            </div>
          </div>

          <div className="CarDetailCard col-6 offset-3 pb-1 ">
            <h2 className="mb-0">Lightening Spray Can</h2> {/*  Title*/}
            <i className="fas fa-map-marker-alt mr-2  "></i>
            <Link to="#" className="city">
              Karachi
            </Link>
            <h4 className=" mt-3 mb-2">PKR 1,500</h4>
            <div>
              <Link className="mb-3" to="#">
                Rahul Gianchandani
              </Link>{" "}
              {/*  Seller Name*/}
            </div>
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
            <h4 className="font-weight-bold mb-3">General Details</h4>
            <div className="row">
              <div className="col-6 details position-relative mb-1">
                <p> Category</p>
              </div>
              <div className="col-6 details position-relative mb-1">
                <Link to="#">Car Parts</Link>
              </div>
            </div>

            <div className="mt-3 remarks">
              <h4 className="font-weight-bold">Seller's Remarks</h4>{" "}
              {/*Ad Description */}
              <p className="mb-0">This Spray can turn your Car into Gold</p>
            </div>
          </div>
        </div>
        <div className="col-3">
         
          <div>
            <Link to="#">
            <NumericInput value={1} size={1} />
              <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPartDetail;
