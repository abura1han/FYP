import React from "react";
import { NavLink, Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* FOOTER */}
        <footer id="footer">
          <div className="footer-top text-white py-5">
            <div className=" container">
              <div className="row justify-content-between text-center text-md-left  ">
                {/* FOOTER TOP */}
                <section
                  id="Resources"
                  className="pb-5 pb-md-0col-xl-2 col-lg-2 col-md-2 "
                >
                  <h5 className="text-white pb-5">Resources</h5>
                  <ul className="px-0 text-secondary">
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="#">About PakDrives</NavLink>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="/Linkdvertise">Advertise With Us</NavLink>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="#">How to Pay</NavLink>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="/FAQ">FAQs</NavLink>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="#">Refunds &amp; Returns</NavLink>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="#">Careers</NavLink>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <NavLink to="/ContactUs">Contact Us</NavLink>
                    </li>
                  </ul>
                </section>
                <section
                  id="ProvinceCars"
                  className="pb-5 pb-md-0col-xl-3 col-lg-3 col-md-3 "
                >
                  <h5 className="text-white pb-5">Cars by Province</h5>
                  <ul className="px-0 text-secondary">
                    <li className="list-unstyled text-decoration-none mb-2">
                      <Link to="#">Cars in Punjab</Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <Link to="#">Cars in Sindh</Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <Link to="#">Cars in KPK</Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <Link to="#">Cars in Balochistan</Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <Link to="#">Azad Kashmir</Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2">
                      <Link to="#">Federally Administered Tribal Areas</Link>
                    </li>
                  </ul>
                </section>
                <section
                  id="Contact"
                  className="pb-5 pb-md-0col-xl-3 col-lg-3 col-md-4 "
                >
                  <h5 className="text-white pb-5">Contact</h5>
                  <ul className="px-0 text-secondary">
                    <li className="list-unstyled text-decoration-none mb-2 mb-md-3 mb-lg-2">
                      <Link to="#">
                        <span className="ContactIcons mr-2">
                          <i className="fas fa-car footerIcon " />
                        </span>
                        New York, NY 10012, US
                      </Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2 mb-md-3 mb-lg-2">
                      <Link to="mailto:pakdrives@example.com">
                        <span className="ContactIcons mr-2">
                          <i className="fas fa-envelope footerIcon" />
                        </span>
                        pakdrives@example.com
                      </Link>
                    </li>
                    <li className="list-unstyled text-decoration-none mb-2 mb-md-3 mb-lg-2">
                      <Link to="tel:+01123456789">
                        <span className="ContactIcons mr-2">
                          <i className=" fas fa-phone-alt footerIcon" />
                        </span>
                        +01 1234 567 89
                      </Link>
                    </li>
                  </ul>
                  <form
                    action="somefile.php"
                    method="post"
                    name="myForm"
                    className="row ml-0 mt-md-4 mt-4 no-gutters"
                  >
                    <div className="col-8 col-md-7">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary col-4 col-md-5"
                    >
                      Subscribe
                    </button>
                  </form>
                </section>
                <section
                  id="Follow"
                  className="pb-5 pb-md-0 col-xl-3 col-lg-3 col-md-3 "
                >
                  <h5 className="text-white pb-5 mb-0">Follow Us</h5>
                  <ul className="ml-0 px-0 row justify-content-center justify-content-md-start">
                    <li className="mr-3 mr-md-2 mr-lg-3   list-unstyled text-decoration-none">
                      <Link to="#">
                        <span className="footerSocialIcons">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </Link>
                    </li>
                    <li className="mr-3 mr-md-2 mr-lg-3  list-unstyled text-decoration-none ">
                      <Link to="#">
                        <span className="footerSocialIcons">
                          <i className="fab fa-linkedin-in" />
                        </span>
                      </Link>
                    </li>
                    <li className="mr-3 mr-md-2 mr-lg-3  list-unstyled text-decoration-none">
                      <Link to="#">
                        <span className="footerSocialIcons">
                          <i className="fab fa-twitter" />
                        </span>
                      </Link>
                    </li>
                    <li className="mr-3 mr-md-2 mr-lg-3  list-unstyled text-decoration-none">
                      <Link to="#">
                        <span className="footerSocialIcons">
                          <i className="fab fa-google-plus-g" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <h5 className="position-relative mt-5 mt-md-4 pb-5 mb-0">
                    Donwload App
                  </h5>
                  <div className="row badges justify-content-center justify-content-md-between ml-0">
                    <Link to="#" className="mb-md-3 mb-lg-0 mr-3 mr-md-0">
                      <img
                        src="/images/google-play-badge.png"
                        alt="google play store badge"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        src="/images/app-store-Badge.png"
                        alt="apple app store badge"
                      />
                    </Link>
                  </div>
                </section>
                {/* FOOTER  TOP ENDS */}
              </div>
            </div>
          </div>
          {/* FOOTER - BOTTOM  */}
          <div id="bottom" className="footer-bottom py-3">
            <div className="container">
              <div className="row justify-content-center">
                <p className="my-0">
                  Copyright © 2020-<span>PakistanDrives</span>. All rights
                  reserved.{" "}
                </p>
              </div>
            </div>
          </div>
          <div id="scrolltotop">
            <Link to="#top">
              <i className="fa fa-arrow-circle-up" />
            </Link>
          </div>
        </footer>
        {/* FOOTER ENDS */}
      </div>
    );
  }
}

export default Footer;
