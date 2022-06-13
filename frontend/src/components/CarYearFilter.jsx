import React from "react";
import { Link } from "react-router-dom";

const CarYearFilter = () => {
  return (
    <section id="years" className="py-5">
      <div className="container">
        <h1 className="text-center position-relative pb-5">
          Choose Models by Years
        </h1>
        <div className="row pt-5 text-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2021&year_end=2021">
              <p>2021 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2020&year_end=2020">
              <p>2020 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2019&year_end=2019">
              <p>2019 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2018&year_end=2018">
              <p>2018 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2017&year_end=2017">
              <p>2017 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2016&year_end=2016">
              <p>2016 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2015&year_end=2015">
              <p>2015 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2014&year_end=2014">
              <p>2014 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2013&year_end=2013">
              <p>2013 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2012&year_end=2012">
              <p>2012 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2011&year_end=2011">
              <p>2011 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2010&year_end=2010">
              <p>2010 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2009&year_end=2009">
              <p>2009 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2008&year_end=2008">
              <p>2008 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2007&year_end=2007">
              <p>2007 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2006&year_end=2006">
              <p>2006 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2005&year_end=2005">
              <p>2005 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2004&year_end=2004">
              <p>2004 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2003&year_end=2003">
              <p>2003 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2002&year_end=2002">
              <p>2002 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2001&year_end=2001">
              <p>2001 Models</p>
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <Link to="/search?year_start=2000&year_end=2000">
              <p>2000 Models</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarYearFilter;
