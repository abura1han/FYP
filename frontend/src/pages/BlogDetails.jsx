import React, { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import { NavLink, Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState({});

  const { blogId } = useParams();

  useEffect(() => {
    fetch(`/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogData(data?.data);
      });
  }, [blogId]);

  return (
    <div id="BlogDetails">
      <div className="container">
        <h2 class="text-center my-4 position-relative col-12">Blog</h2>
        <div className="coverPhoto mt-5">
          {blogData?.images?.map((i) => (
            <img src={"/" + i} alt="" className="w-75"></img>
          ))}
        </div>
        <div className="flareTag my-3 mx-0 row align-items-center">
          <span class="text-white rounded px-2 ">{blogData?.flareTag}</span>
          <span className="ml-2 font-weight-bold">
            {" "}
            - <Moment format="MMMM DD yy">{blogData?.updatedAt}</Moment>
          </span>{" "}
          {/* Date when blog is posted */}
        </div>

        <h2 className="my-4">{blogData?.title}</h2>

        <p>{blogData?.content}</p>

        <hr />
        <div className="poster row mx-0 ">
          {blogData.createdBy?.profilePic ? (
            <img
              src={"/" + blogData?.createdBy?.profilePic}
              alt=""
              width={90}
              height={90}
            />
          ) : null}
          <h5 className="ml-3 mt-2">
            {blogData.createdBy?.firstname} {blogData.createdBy?.lastname}
          </h5>

          {/* we get name and profile pic of user who posts blog */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default BlogDetails;
