import React from "react";
import { Link } from "react-router-dom";

const CarBudgetFilter = () => {
  return (
    <section id="budget" className="py-5">
      <div className="container">
        <h1 className="text-center position-relative pb-5 text-white">
          Choose your budget
        </h1>
        <div className="row pt-4">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=2500000">
              <p>Used Cars under 2.5 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=5000000">
              <p>Used Cars under 5 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=1000000">
              <p>Used Cars under 1 million</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=10000000">
              <p>Used Cars under 10 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=2000000">
              <p>Used Cars above 2 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=4000000">
              <p>Used Cars above 4 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=10000000">
              <p>Used Cars above 10 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=15000000">
              <p>Used Cars above 15 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=5000000">
              <p>Used Cars between 5 millions to 10 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=15000000">
              <p>Used Cars between 15 millions to 25 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=50000000">
              <p>Used Cars between 50 millions to 80 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=50000000">
              <p>Used Cars between 50 millions to 10 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=5000000">
              <p>Used Cars upto 5 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=10000000">
              <p>Used Cars upto 10 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=20000000">
              <p>Used Cars upto 20 millions</p>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link to="/search?type=Used&lower_price=0&upper_price=35000000">
              <p>Used Cars upto 35 millions</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarBudgetFilter;
