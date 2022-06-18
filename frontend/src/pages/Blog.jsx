import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogpostList, setBlogPostList] = useState([]);

  useEffect(() => {
    fetch("/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogPostList(data?.data);
      });
  }, []);

  return (
    <div id="blog">
      {/* CAR NAVBAR SECTION  */}
      <section id="Carnav">
        <div className="container h-100">
          <div className="row flex-lg-column  align-items-center align-content-center justify-content-center pt-5">
            <h1 className="mb-3">PakDrive Blog</h1>
            <p className="mx-5 text-center">
              Read our posts and get to know everything about cars and related
              stuff and stay up to date!
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
            {blogpostList?.map((e) => (
              <div className="mb-5 col-12 col-md-6 col-lg-4">
                <div className="card position-relative">
                  <Link to={`/BlogDetails/${e?._id}`}>
                    <img
                      className="card-img-top"
                      src={e?.images[0]}
                      height="200px"
                      alt="Card cap"
                    />
                  </Link>
                  <div className="card-body">
                    <Link to={`/BlogDetails/${e?._id}`}>
                      <h5 className="card-title text-center mb-4">
                        {e?.title}
                      </h5>
                    </Link>
                    <p className="card-text mb-4">{e?.content}</p>
                    <span className="position-absolute news-tag py-1 px-3 text-white rounded">
                      {e?.flareTag}
                    </span>
                    <div className="text-center">
                      <Link
                        to={`/BlogDetails/${e?._id}`}
                        className="btn col-12"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      <Moment format="MMMM DD yy">{e?.updatedAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEW POSTS ENDS */}
    </div>
  );
};

export default Blog;
