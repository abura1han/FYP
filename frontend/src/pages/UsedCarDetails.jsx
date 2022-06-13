import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import { UserContext } from "../App";

const UsedCarDetails = () => {
  const { state } = useContext(UserContext);

  const [carDetails, setCarDetails] = useState({});
  const [carId, setCarId] = useState("");
  const [bidding, setBidding] = useState([{}]);
  const [amount, setAmount] = useState("");
  const [isNewBid, setIsNewBid] = useState(false);

  /**
   * Get car details by car id form window.location.pathname
   */
  useEffect(() => {
    setCarId(window.location.pathname.split("/")[2]); // Get car id form location

    // Fetch all car bids
    fetch(`/car/${carId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setCarDetails(data);
      });
  }, [carId]);

  // Fetch car biddings by carId
  useEffect(() => {
    fetch(`/bidding/${carId}`)
      .then((res) => res.json())
      .then(({ data, success }) => {
        setBidding(data);
        console.log(state)
        console.log(data)
        if (data.length < 1) {
          setIsNewBid(true);
        }
        // data?.forEach(e => e.user._id === state._id ? setIsNewBid(false) : setIsNewBid(true));
        for (let i = 0; i < data?.length; i++) {
          if (data[i].user._id === state._id) {
            setIsNewBid(false);
            break;
          } else {
            setIsNewBid(true);
          }
        }
      });
  }, [carId, state]);

  const handleSubmitBid = (e) => {
    e.preventDefault(); // Prevent form submit

      // Bid update
      fetch(`/update-bidding/${carId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setAmount("");
           setBidding(data);
        if (data.length < 1) {
          setIsNewBid(true);
        }
        for (let i = 0; i < data?.length; i++) {
          if (data[i].user._id === state._id) {
            setIsNewBid(false);
            break;
          } else {
            setIsNewBid(true);
          }
        }        });
  };

  return (
    
    <div id="UsedCarDetails">
      <div className="container">
        <div className="row pt-5">
          <div className="col-9">
            <div className=" ">
              <div className="row justify-content-center">
                <Carousel infiniteLoop>
                  {carDetails?.images?.map((image, i) => (
                    <div key={i}>
                      <img src={`/${image}`} alt={image} />

                      <p className="legend">{carDetails?.model}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="CarDetailCard col-9 offset-1 pb-1 ">
        <h2 className="mb-0">
          {carDetails?.year} {carDetails?.carBrand} {carDetails?.model}
        </h2>
        <i className="fas fa-map-marker-alt mr-2  "></i>
        <Link to="#" className="city">
          {carDetails?.registeredIn}
        </Link>
        <h4 className=" mt-3 mb-5">PKR {carDetails?.price} lacs</h4>
        <div className="numBox col-5">
          <i className=" fas fa-phone-alt mr-3"></i>
          {/*  <span>View Number</span>   if user is Not logged in, dont show number */}
          <span>{carDetails.phone}</span>{" "}
          {/* if user is logged in, show him number */}
        </div>

        <div className="col-3 offset-9">
          <i className="fas fa-flag mr-2"></i>
          <Link to="#">Report Ad</Link>
        </div>
        
      </div>

            <div className="CarGeneralCard col-6 offset-3 mt-2 ">
              <h4 className="font-weight-bold mb-3">General Details</h4>
              <div className="row">
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fa fa-calendar-alt"></i>
                    {carDetails?.year}
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fa fa-road"></i>
                    {carDetails?.mileage} Kms
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fa fa-user-alt"></i> { carDetails?.owener}
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fas fa-cog"></i> {carDetails?.transmission}
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fas fa-gas-pump"></i> {carDetails?.fuel}
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fa fa-solid fa-fill-drip"></i>
                    {carDetails?.exteriorColor}
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i className="mr-3 fas fa-closed-captioning"></i>
                    {carDetails?.engineCC}cc
                  </p>
                </div>
                <div className="col-6 details position-relative mb-1">
                  <p>
                    <i class="mr-3 fa-solid fa fa-car-side"></i> {carDetails?.style}
                  </p>
                </div>
              </div>

              <div className="mt-3 remarks">
                <h4 className="font-weight-bold">Seller's Remarks</h4>
                {/*if seller wants to write comment or say something  */}
                {carDetails?.description}
              </div>
            </div>
          </div>
          <div className="col3 bidPlace ">
            <h3>Bidding Place</h3>
            <form onSubmit={handleSubmitBid}>
              <fieldset disabled={!state}>
                <div class="form-group">
                  <label for="bid" class="">
                    Place a bid
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="bid"
                    placeholder="Bid in PKR Lacs"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                </div>
                <button
                  type="submit"
                  class={`btn ${isNewBid ? "btn-primary" : "btn-danger"} mb-2`}
                  disabled={amount ? false : true}
                >
                  {isNewBid ? "Place" : "Update"}!
                </button>
              </fieldset>
            </form>

            <div className=" bidList row justify-content-between mt-3">
              <div>
                <h6 className="mb-4">UserProfile</h6>
                {/* Id of user profile with name, click on it to go see user id*/}
                {bidding &&
                  bidding.map(({user}) => <p>{user?.firstname}</p>)}
              </div>

              <div>
                <h6 className="mb-4">Bid</h6>
                {/* bid done by the user*/}

                {bidding && bidding.map(({ amount }) => <p>{amount} Lacs</p>)}
              </div>
            </div>
            {bidding && bidding.length < 1 && <div>No bidding found</div>}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default UsedCarDetails;
