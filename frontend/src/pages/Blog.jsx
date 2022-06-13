import React from "react";
import {Link} from "react-router-dom";

class Blog extends React.Component {
  render() {
    return (
        <div id="blog">
          
  {/* CAR NAVBAR SECTION  */}
  <section id="Carnav">
    <div className="container h-100">
      <div className="row flex-lg-column  align-items-center align-content-center justify-content-center pt-5">
        <h1 className="mb-3">PakDrive Blog</h1>
        <p className="mx-5 text-center">
          Read our posts and get to know everything about cars and related stuff
          and stay up to date!
        </p>
        <form
          action="somefile.php"
          method="post"
          name="myForm"
          className="row col-10 no-gutters flex-sm-row flex-column  align-items-center justify-content-center  p-4 rounded z-index-1000"
        >
          <div className="form-group col-12 col-sm-9 mb-0">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search Blog Posts"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-12 col-sm-3 mt-4 mt-sm-0"
          >
            <i className="fas fa-search mr-2 " />
            Search
          </button>
        </form>
      </div>
    </div>
  </section>
  {/* CAR NAVBAR SECTION ENDS */}
  {/* NEW POSTS */}
  <section id="newposts" className="blogposts my-5 my-sm-0">
    <div className="container">
      <div className="row  justify-content-between flex-column flex-sm-row ">
        <h2 className="text-center py-5 mt-5 position-relative col-12">
          Blog Posts
        </h2>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/petrol.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Massive hike in Petrol prices
                </h5>
              </Link>
              <p className="card-text mb-4">
                Petrol prices are increasing daily. Government is adamant on
                reducing prices. Public is fed up and they have taken the
                decision to get the petrol still on hiked prices instead of
                protesting.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Petrol
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">September 17, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/car.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Overpriced City new model
                </h5>
              </Link>
              <p className="card-text mb-4">
                There is alot of buzz around new model of Honda City but I think
                its quite overpriced.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Price
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Auguest 20, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/valuableMakers.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Top Valuable Car Companies
                </h5>
              </Link>
              <p className="card-text mb-4">
                Lets have a look at how Cars are being made by companies and how
                much comapnies are making through making cars.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Value
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">November 2, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/ford.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">Ford cars</h5>
              </Link>
              <p className="card-text mb-4">
                Why Ford is top car in world despite having 0 sells.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Cars
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">July 5, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/ladies.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Why women are considered better in driving than Men?
                </h5>
              </Link>
              <p className="card-text mb-4">
                Records have proved that women always drives better than men,
                especially when they drift in traffic.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Driving
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">June 19, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/camera.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Camers on front and back of car?
                </h5>
              </Link>
              <p className="card-text mb-4">
                Nowadays, all cars are coming with atleast camera at back, which
                was really needed to avoid accidents while reversing.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Security
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">September 27, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/sherlockCar.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Cars from Sherlock Era still available?
                </h5>
              </Link>
              <p className="card-text mb-4">
                You must have seen this car in BBC Sherlock series. Yes, you can
                still get these cars to drive in London and they run at 200/KM
                speed.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Speed
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">October 6, 2021</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/tesla.jpg"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Elon Musk and Tesla.
                </h5>
              </Link>
              <p className="card-text mb-4">
                Is Tesla coming to Pakistan? last time, Elon Musk said nothing
                in interview about it.. but still we are assuming it for fun.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Rumor
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  News
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Decemeber 18, 2000</small>
            </div>
          </div>
        </div>
        <div className="mb-5 col-12 col-md-6 col-lg-4">
          <div className="card position-relative">
            <Link to="#">
              <img
                className="card-img-top"
                src="./images/blog-pics/toyota.png"
                height="200px"
                alt="Card cap"
              />
            </Link>
            <div className="card-body">
              <Link to="#">
                <h5 className="card-title text-center mb-4">
                  Toyota still the boss in Pakistan?
                </h5>
              </Link>
              <p className="card-text mb-4">
                Toyota claims to be top car making company in Pakistan and their
                car Corolla is pakistan national car. Like, literally everyone
                has a Corolla.
              </p>
              <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                Suggestion
              </span>
              <div className="text-center">
                <Link to="#" className="btn col-12">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">April 1, 2021</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* NEW POSTS ENDS */}



        </div>
    );
  }
}

export default Blog;