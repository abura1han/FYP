import React, { useContext, useEffect, useState } from "react";
import {NavLink, Link} from "react-router-dom";





const VideoDetails = () => {

    
  return (
    <div id="VideoDetails">
   
          <div className="container">
            <h1 className="text-center pt-5 mt-5 mt-sm-0 position-relative">
              Video
            </h1>
            <div className="row justify-content-center mx-1 py-5">
              <div
                id="mainvideoBox"
                className="text-center col-12 col-lg-10 px-0"
              >
                <iframe
                  width="100%"
                  height={440}
                  src="https://www.youtube.com/embed/dip_8dmrcaU"
                  className="d-block"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
                <div id="titleBox" className="p-4 ">
                  <h5>
                    TOP 10 CRAZIEST CARS IN THE WORLD | REVIEW BY RAHUL | PAK
                    DRIVE
                    {/* This is Title */}
                  </h5>
                  <p className="mb-0">
                    <span className="font-weight-bold">Published on:</span> 9th
                    Aug, 2021
                    {/* date should be when user posts video  */}
                  </p>
                </div>
              </div>
              <div
                id="moreVideos"
                className="row flex-nowrap col-12 col-lg-10 px-0  mt-5"
              >
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail.jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Street Racing Car Crashes | CRASHdriven
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (1).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Yellow Bumblebee Transformer Toys - Car Toys Kid #2
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (2).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">Top Transformers Cars In Real Life</p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (3).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Toys Learning Name and Sounds Police cars, Fire Truck
                        Toy
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (4).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">Vlad change wheels Nikita toy car</p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (5).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Cars vs Suspension – BeamNG Drive | CrashBoomPunk
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (6).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Tokyo Drift - Teriyaki Boyz (PedroDJDaddy Remix) (Bass
                        Boosted)
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (7).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Dump Truck Transport | Car Videos | MariAndToys
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (8).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Fine Toys Construction Vehicles Looking for underground
                        car
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (9).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">Top 10 Strangest Cars Ever Made</p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (10).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Most Luxurious Vehicles In The World
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (11).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Kids video about Sports Car Race in the City for
                        children
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (12).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        CARS 3 All Movie Clips + Trailer (2017)
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src="./images/car-thumbnails/thumbnail (13).jpg"
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">
                        Dinosaur and Poli cars round track play car toys
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
  

    </div>

    );
};

export default VideoDetails;