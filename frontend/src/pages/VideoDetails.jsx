import React, { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import { NavLink, Link, useParams } from "react-router-dom";

const VideoDetails = () => {
  const [videoData, setVideoData] = useState({});

  const { videoId } = useParams();

  useEffect(() => {
    fetch(`/videos/${videoId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.success) {
          throw new Error(data.error);
        }

        setVideoData(data?.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [videoId]);

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
    <div id="VideoDetails">
      <div className="container">
        <h1 className="text-center pt-5 mt-5 mt-sm-0 position-relative">
          Video
        </h1>
        <div className="row justify-content-center mx-1 py-5">
          <div id="mainvideoBox" className="text-center col-12 col-lg-10 px-0">
            <iframe
              width="100%"
              height={440}
              src={videoData?.videoUrl}
              className="d-block"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
            <div id="titleBox" className="p-4 ">
              <h5>
                {VideoDetails?.title}
                {/* This is Title */}
              </h5>
              <p className="mb-0">
                <span className="font-weight-bold">Published on:</span>{" "}
                <Moment format="DD MMMM yy">{VideoDetails?.updatedAt}</Moment>
                {/* date should be when user posts video  */}
              </p>
            </div>
          </div>
          <div
            id="moreVideos"
            className="row flex-nowrap col-12 col-lg-10 px-0  mt-5"
          >
            {videoList?.map((v) => (
              <Link to={`/videoDetails/${v?._id}`} className="px-2 py-3">
                <div className="thumbnailBox">
                  <div id="imgBox" className="position-relative">
                    <i className="far fa-play-circle" />
                    <img
                      src={`/${v.thumbnail.length > 0 ? v.thumbnail[0] : ""}`}
                      height="100%"
                      width="100%"
                      alt="post malone circles video thumbnail"
                    />
                  </div>
                  <div className="thumbTitle  pt-2">
                    <p className="mb-0">{v?.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
