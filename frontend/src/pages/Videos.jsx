import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Videos = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch("/videos", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setVideoList(data.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="videos">
      {/* CAR NAVBAR SECTION  */}
      <section id="Carnav">
        <div className="container h-100">
          <div className="row flex-lg-column  align-items-center align-content-center justify-content-center pt-5">
            <h1 className="mb-3">PakDrive Videos</h1>
            <p className="mx-5 text-center">
              Watch the reviews from experts of market over new cars
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
                  placeholder="Search Videos"
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
      {/* MAIN VIDEO SECTION */}
      <section id="mainVideosec" className="py-5">
        <div className="container">
          <h1 className="text-center pt-5 mt-5 mt-sm-0 position-relative">
            Latest Featured Videos
          </h1>
          <div className="row justify-content-center mx-1 py-5">
            <div
              id="mainvideoBox"
              className="text-center col-12 col-lg-10 px-0"
            >
              <iframe
                width="100%"
                height={440}
                src={videoList[0]?.videoUrl}
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
              {videoList.map((v) => (
                <a href={v?.videoUrl} className="px-2 py-3">
                  <div className="thumbnailBox">
                    <div id="imgBox" className="position-relative">
                      <i className="far fa-play-circle" />
                      <img
                        src={v?.thumbnail[0]}
                        height="100%"
                        width="100%"
                        alt="post malone circles video thumbnail"
                      />
                    </div>
                    <div className="thumbTitle  pt-2">
                      <p className="mb-0">{v?.title}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* MAIN VIDEO SECTION ENDS */}
      {/* OWNER REVIEWS VIDEOS SECTION */}
      <section className="VideoSections bg-white pt-5">
        <div className="container">
          <h1 className="text-center position-relative mb-5">More Videos</h1>
          <div id="moreVideos" className="row mx-1 py-5">
            <Link to="#" className="col-sm-6 col-md-4 mb-5 mb-md-5 mb-lg-0 ">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Street Racing Car Crashes | CRASHdriven
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5 mb-md-0">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Yellow Bumblebee Transformer - Car Toys Kid #2
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5  mb-md-5 mb-lg-0">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">Top Transformers Cars In Real Life</p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5  my-lg-5">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Toys Learning Name and Sounds, Fire Truck Toy
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="#"
              className="col-sm-6 col-md-4 mb-5 mb-md-5 my-lg-5 mb-lg-0"
            >
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">Vlad change wheels Nikita toy car</p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5 my-lg-5">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Cars vs Suspension – BeamNG Drive | CrashBoomPunk
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5 mb-md-5 mb-lg-0">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Tokyo Drift - Teriyaki Boyz (PedroDJDaddy Remix){" "}
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5 mb-md-0">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Dump Truck Transport | Car Videos | MariAndToys
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="col-sm-6 col-md-4 mb-5 mb-md-5 mb-lg-0">
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
                <div className="thumbTitle  p-3">
                  <p className="mb-0">
                    Fine Toys Construction Vehicles Looking for underground car
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* OWNER REVIEWS VIDEOS SECTION ENDS */}
      {/* EXPERT REVIEWS VIDEOS SECTION */}

      {/* EXPERT REVIEWS VIDEOS SECTION ENDS */}
      {/* PAK DRIVE TIPS VIDEOS SECTION */}

      {/* PAK DRIVE TIPS VIDEOS SECTION ENDS */}
      {/* PAK DRIVE WEEKLY VIDEOS SECTION */}

      {/* PAK DRIVE WEEKLY VIDEOS SECTION ENDS */}
      {/* PAK DRIVE AUTO SHOWS VIDEOS SECTION */}

      {/* PAK DRIVE AUTO SHOWS VIDEOS SECTION ENDS */}
      {/* PAK DRIVE STORIES VIDEOS SECTION */}

      {/* PAK DRIVE STORIES VIDEOS SECTION ENDS */}
      {/* PAK DRIVE DAIRIES VIDEOS SECTION */}

      {/* PAK DRIVE DAIRIES VIDEOS SECTION ENDS */}
      {/* FIRST LOOK REVIEWS VIDEOS SECTION */}

      {/* FIRST LOOK REVIEWS VIDEOS SECTION ENDS*/}
      {/* PAK DRIVE AUTO PARTS & ACCESSORIES VIDEOS SECTION */}

      {/* PAK DRIVE AUTO PARTS & ACCESSORIES VIDEOS SECTION ENDS  */}
    </div>
  );
};

export default Videos;
