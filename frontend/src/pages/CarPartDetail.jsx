import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NumericInput from "react-numeric-input";
import CartContext from "../reducer/CartContext";

const CarPartDetail = () => {
  const { cart, setCart } = useContext(CartContext);
  const [carData, setCarData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { carId } = useParams();

  /**
   * Fetch data from backend
   */
  useEffect(() => {
    fetch(`/car-parts/${carId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.success) {
          throw new Error(data.error);
        }

        setCarData(data?.data);
      })
      .catch((err) => alert(err.message));
  }, [carId]);

  /**
   * Handle add to cart
   */
  const handleAddToCart = () => {
    const newItems = Array(quantity).fill({
      _id: carData?._id,
      title: carData?.title,
      price: carData?.price,
    });
    setCart((p) => [...p, ...newItems]);
  };

  return (
    <div id="CarPartDetail">
      <div className="row pt-5">
        <div className="col-9">
          <div className=" ">
            <div className="row justify-content-center">
              <Carousel infiniteLoop>
                {carData?.images?.map((image, i) => (
                  <div key={i}>
                    <img src={image} alt="asdsasda" />
                    <p className="legend">{carData?.title}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="CarDetailCard col-6 offset-3 pb-1 ">
            <h2 className="mb-0">{carData?.title}</h2> {/*  Title*/}
            <i className="fas fa-map-marker-alt mr-2  "></i>
            <Link to="#" className="city">
              {carData?.city}
            </Link>
            <h4 className=" mt-3 mb-2">PKR {carData?.price}</h4>
            <div>
              <Link className="mb-3" to="#">
                {carData?.name}
              </Link>{" "}
              {/*  Seller Name*/}
            </div>
            <div className="numBox col-5">
              <i className=" fas fa-phone-alt mr-3"></i>
              {/*  <span>View Number</span>   if user is Not logged in, dont show number */}
              <span>{carData?.phone}</span>{" "}
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
                <Link to="#">{carData?.category}</Link>
              </div>
            </div>

            <div className="mt-3 remarks">
              <h4 className="font-weight-bold">Seller's Remarks</h4>{" "}
              {/*Ad Description */}
              <p className="mb-0">{carData?.description}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <Link to="#">
              <NumericInput
                value={quantity}
                size={10}
                onChange={(e) => setQuantity(e)}
              />
              <button onClick={handleAddToCart}>
                {" "}
                <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPartDetail;
