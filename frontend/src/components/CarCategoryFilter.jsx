import React from "react";
import { Link } from "react-router-dom";

const CarCategoryFilter = () => {
  return (
    <section id="carCategory" className="py-5">
      <div className="container">
        <h1 className="text-center py-5 position-relative">
          Select Car Category
        </h1>
        <div className="row flex-column align-items-center py-5">
          <div className="row flex-column flex-sm-row col-12 justify-content-center">
            <Link to="/search?category=Small">
              <div className="text-center carbox my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/smallcar.jpg"
                  alt="small car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Small Cars</h6>
              </div>
            </Link>
            <Link to="/search?category=Midsize">
              <div className="text-center carbox my-3 my-sm-0  mx-sm-3">
                <img
                  src="./images/whitecars/MidsizeCars.jpg"
                  alt="midsize car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Midsize Cars</h6>
              </div>
            </Link>
            <Link to="/search?category=Large">
              <div className="text-center carbox  my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/LargeCars.jpg"
                  alt="large car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Large Cars</h6>
              </div>
            </Link>
          </div>
          <div className="row flex-column flex-sm-row col-12 justify-content-center m-sm-3">
            <Link to="/search?category=SUVs">
              <div className="text-center carbox my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/SUVs.jpg"
                  alt="SUVs car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">SUVs</h6>
              </div>
            </Link>
            <Link to="/search?category=Crossovers">
              <div className="text-center carbox my-3 my-sm-0 mx-sm-3 ">
                <img
                  src="./images/whitecars/Crossovers.jpg"
                  alt="Crossovers car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Crossovers</h6>
              </div>
            </Link>
            <Link to="/search?category=Hybrids">
              <div className="text-center carbox my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/Hybrids.jpg"
                  alt="Hybrid car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Hybrids</h6>
              </div>
            </Link>
          </div>
          <div className="row flex-column flex-sm-row col-12 justify-content-center mb-sm-3">
            <Link to="/search?category=Trucks">
              <div className="text-center carbox  my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/Trucks.jpg"
                  alt="truck car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Trucks</h6>
              </div>
            </Link>
            <Link to="/search?category=Luxury">
              <div className="text-center carbox my-3 my-sm-0 mx-sm-3 ">
                <img
                  src="./images/whitecars/luxury.jpg"
                  alt="Luxury car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Luxury</h6>
              </div>
            </Link>
            <Link to="/search?category=Sports">
              <div className="text-center carbox my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/sportscar.jpg"
                  alt="Sport car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Sports Cars</h6>
              </div>
            </Link>
          </div>
          <div className="row flex-column flex-sm-row col-12 justify-content-center">
            <Link to="/search?category=Convertibiles">
              <div className="text-center carbox  my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/convertibles.jpg"
                  alt="Convertible car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Convertibiles</h6>
              </div>
            </Link>
            <Link to="/search?category=Vans">
              <div className="text-center carbox my-3 my-sm-0 mx-sm-3 ">
                <img
                  src="./images/whitecars/vans.jpg"
                  alt="Van car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Vans</h6>
              </div>
            </Link>
            <Link to="/search?category=Certified">
              <div className="text-center carbox my-3 my-sm-0 ">
                <img
                  src="./images/whitecars/Certifiedpreowned.jpg"
                  alt="Certified pre owned car"
                  height="50px"
                  width="150px"
                />
                <h6 className="mt-4 py-1 mt-sm-2">Certified Pre-Own </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCategoryFilter;
