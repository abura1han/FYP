import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import CartContext from "../reducer/CartContext";

const AutoStore = () => {
  const { cart, setCart } = useContext(CartContext);
  const [carPartsList, setCarPartsList] = useState([]);

  // Fetch all carparts
  useEffect(() => {
    fetch(`/car-parts`, {})
      .then((res) => res.json())
      .then(({ success, data }) => {
        setCarPartsList(data);
      });
  }, []);

  console.log(cart);

  return (
    <div id="autostore">
      {/* CAR NAVBAR SECTION  */}
      <section id="Carnav">
        <div className="container h-100">
          <div className="row flex-lg-column  align-items-center align-content-center justify-content-center pt-5">
            <h1 className="mb-3">Search parts for your car</h1>
            <p className="mx-5 text-center">
              With thousands of new and used car parts, we have just the right
              one for you
            </p>
            <Form />
          </div>
        </div>
      </section>
      {/* CAR NAVBAR SECTION ENDS */}
      <div id="MainStore" className="pt-5 ">
        <div className="container py-5 ">
          <div className="row">
            <aside id="menuPortion" className="  col-sm-6  col-lg-3 mt-5">
              <div>
                <h4 className="my-3">Categories</h4>
                <div className="">
                  <li id="" className="mb-3 position-relative">
                    <Link to="#" className="main-menu d-block">
                      Sale Products
                    </Link>
                  </li>

                  <li className="mb-3 position-relative">
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Car Accessories
                    </Link>
                  </li>
                  <li className="mb-3 position-relative">
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Car Care
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Oil &amp; Additives
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Car Care Pro
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Car Filter
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Car Electronics
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      LED Lights
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Car Parts
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      4×4 SUV items
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Tyre &amp; Wheels
                    </Link>
                  </li>
                  <li
                    className="mb-3 position-relative"
                    aria-haspopup="true"
                    role="button"
                  >
                    <Link to="#" className="main-menu d-block" data-depth={0}>
                      <i className="fas fa-angle-right" />
                      Tools
                    </Link>
                  </li>
                  <li className="mb-3 position-relative">
                    <Link to="#" data-depth={0} className="main-menu d-block">
                      <i className="fas fa-angle-right" />
                      Batteries
                    </Link>
                  </li>
                </div>
              </div>
            </aside>
            <div id="partsPortion" className="col-md-12 col-lg-9 mt-5">
              <h3 className="my-3 text-center">
                Car Accessories and Spare Parts in Pakistan
              </h3>
              <section id="LatestParts">
                <div className="header-bg position-relative row align-items-center justify-content-center mx-0">
                  <h3 className="text-center text-white">CAR PARTS</h3>
                </div>
                <div className="cotainer">
                  <div className="partsbox mx-0 row">
                    {carPartsList.map(({ _id, title, price, images }, i) => (
                      <div
                        className="col-sm-4 col-md-3 py-4 mx-5 mx-sm-0"
                        key={i}
                      >
                        <div className="card position-relative">
                          <Link to="#">
                            <img
                              className="card-img-top"
                              src={images[0]}
                              height="150px"
                              alt="Card cap"
                            />
                          </Link>
                          <div className="card-body">
                            <Link to="#">
                              <h5 className="card-title text-center mb-1">
                                {title}
                              </h5>
                              <h6 className="card-title text-center ">
                                Rs {price}
                              </h6>
                            </Link>
                            <p className="card-text " />
                            <div className="text-center ">
                              <button
                                onClick={() =>
                                  cart.find((c) => c._id === _id)
                                    ? setCart((prev) =>
                                        prev.filter((e) => e._id !== _id)
                                      )
                                    : setCart((prev) => [
                                        ...prev,
                                        { _id, title, price, images },
                                      ])
                                }
                                className="mr-2"
                              >
                                <i
                                  className={`fas fa ${
                                    cart.find((c) => c._id === _id)
                                      ? "fa-times"
                                      : "fa-shopping-cart"
                                  }`}
                                />
                              </button>
                              <button className="">
                                <i className="fas fa-eye" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {carPartsList.length < 1 && (
                      <div className="mt-3">No car parts found</div>
                    )}
                  </div>
                </div>
              </section>
              {/* <section id="LatestKits" className="pt-5">
                <div className="header-bg position-relative row align-items-center justify-content-center mx-0">
                  <h3 className="text-center text-white">LATEST CAR KITS</h3>
                </div>
                <div className="cotainer">
                  <div className="partsbox mx-0 row">
                    <div className="col-sm-4 col-md-3 py-4 mx-5 mx-sm-0">
                      <div className="card position-relative">
                        <Link to="#">
                          <img
                            className="card-img-top"
                            src="./images/blog-pics/petrol.jpg"
                            height="150px"
                            alt="Card cap"
                          />
                        </Link>
                        <div className="card-body">
                          <Link to="#">
                            <h5 className="card-title text-center mb-1">
                              Bumper
                            </h5>
                            <h6 className="card-title text-center ">
                              Rs 25,000
                            </h6>
                          </Link>
                          <p className="card-text " />
                          <div className="text-center ">
                            <Link to="#" className="mr-2">
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <Link to="#" className="">
                              <i className="fas fa-eye" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="LatestEngine" className="pt-5">
                <div className="header-bg position-relative row align-items-center justify-content-center mx-0">
                  <h3 className="text-center text-white">
                    LATEST ENGINE PARTS
                  </h3>
                </div>
                <div className="cotainer">
                  <div className="partsbox mx-0 row">
                    <div className="col-sm-4 col-md-3 py-4 mx-5 mx-sm-0">
                      <div className="card position-relative">
                        <Link to="#">
                          <img
                            className="card-img-top"
                            src="./images/blog-pics/petrol.jpg"
                            height="150px"
                            alt="Card cap"
                          />
                        </Link>
                        <div className="card-body">
                          <Link to="#">
                            <h5 className="card-title text-center mb-1">
                              Bumper
                            </h5>
                            <h6 className="card-title text-center ">
                              Rs 25,000
                            </h6>
                          </Link>
                          <p className="card-text " />
                          <div className="text-center ">
                            <Link to="#" className="mr-2">
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <Link to="#" className="">
                              <i className="fas fa-eye" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="LatestSellers" className="pt-5">
                <div className="header-bg position-relative row align-items-center justify-content-center mx-0">
                  <h3 className="text-center text-white">HOT SELLERS</h3>
                </div>
                <div className="cotainer">
                  <div className="partsbox mx-0 row">
                    <div className="col-sm-4 col-md-3 py-4 mx-5 mx-sm-0">
                      <div className="card position-relative">
                        <Link to="#">
                          <img
                            className="card-img-top"
                            src="./images/blog-pics/petrol.jpg"
                            height="150px"
                            alt="Card cap"
                          />
                        </Link>
                        <div className="card-body">
                          <Link to="#">
                            <h5 className="card-title text-center mb-1">
                              Bumper
                            </h5>
                            <h6 className="card-title text-center ">
                              Rs 25,000
                            </h6>
                          </Link>
                          <p className="card-text " />
                          <div className="text-center ">
                            <Link to="#" className="mr-2">
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <Link to="#" className="">
                              <i className="fas fa-eye" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AutoStore;
