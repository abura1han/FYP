import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PendingCarContext } from "../reducer/carContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
   const { pendingCarCount} = useContext(PendingCarContext)

  /**
   * Fetch all users
   */
  useEffect(() => {
    fetch("/users", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ success, error, data }) => {
        if (!success) {
          alert(error.msg);
        }
        setUsers(data.users);
        setAdminUsers(data.adminUsers);
      });
  }, []);

  const deleteUser = (userId) => {
    fetch(`/delete-user?userId=${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ success, error, data }) => {
        if (!success) {
          return alert(error.msg);
        }

        // Remove deleted user from user list array
        if (data.isAdmin) {
          setAdminUsers(adminUsers.filter((user) => user._id !== data._id));
        } else {
          setUsers(adminUsers.filter((user) => user._id !== data._id));
        }
      });
  };

  return (
    <div id="Users">
      <div className="row">
        <div className="col-2 sideNav">
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/admProfile"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 mt-5 my-4 fa-solid fa-user"></i>Profile
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Users"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-users"></i>Users
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Posts"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-copy"></i>Posts
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Pending"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-bell"></i>Pending
              <span className="pendCount "> { pendingCarCount} </span>
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Reports"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-flag"></i>Reports
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/AdvertiseParts"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fas fa-car"></i>Ad Parts
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Blogpost"
          >
            <h6 className="text-white ">
          <i class="ml-5 mr-3 my-4 fa-brands fa-blogger"></i>Blog Post
            </h6>
          </NavLink>
        </div>
        <div className="col-10 Content">
          <ul className="nav nav-tabs my-4" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="users-tab"
                data-toggle="tab"
                href="#users"
                role="tab"
                aria-controls="users"
                aria-selected="true"
              >
                Users
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="admin-tab"
                data-toggle="tab"
                href="#admin"
                role="tab"
                aria-controls="admin"
                aria-selected="false"
              >
                Admins
              </a>
            </li>

            <div className="search-container text-right ml-auto">
              <form>
                <input type="text" placeholder="Search Members" name="search" />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="users"
              role="tabpanel"
              aria-labelledby="users-tab"
            >
              <div className="container">
                <div className="row justify-content-between mx-0">
                  <div className="profilePics d-flex flex-column">
                    <h5 className="mb-4">Photo</h5>
                    {users.map(({ profilePic }, i) => (
                      <img
                        className="mb-4"
                        src={profilePic}
                        alt=""
                        key={i}
                      ></img>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">UserName</h5>
                    {users.map(({ firstname, lastname }, i) => (
                      <h6 className="mb-4" key={i}>
                        {firstname} {lastname}
                      </h6>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">Mobile</h5>
                    {users.map(({ phone }, i) => (
                      <h6 className="mb-4" key={i}>
                        {phone}
                      </h6>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">Email</h5>
                    {users.map(({ email }, i) => (
                      <h6 className="mb-4" key={i}>
                        {email}
                      </h6>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">Operation</h5>
                    {users.map(({ _id }, i) => (
                      <div className="mb-4 text-center" key={i}>
                      
                        <button className="btn p-0" onClick={() => deleteUser(_id)}>
                          <i className="fa-solid mr-4 fa fa-trash  align-top"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="admin"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div className="container">
                <div className="row justify-content-between mx-0">
                  <div className="profilePics d-flex flex-column">
                    <h5 className="mb-4">Photo</h5>

                    {adminUsers.map(({ profilePic }, i) => (
                      <img
                        className="mb-4"
                        src={profilePic}
                        alt=""
                        key={i}
                      ></img>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">UserName</h5>
                    {adminUsers.map(({ firstname, lastname }, i) => (
                      <h6 className="mb-4" key={i}>
                        {firstname} {lastname}
                      </h6>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">Mobile</h5>
                    {adminUsers.map(({ phone }, i) => (
                      <h6 className="mb-4" key={i}>
                        {phone}
                      </h6>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">Email</h5>
                    {adminUsers.map(({ email }, i) => (
                      <h6 className="mb-4" key={i}>
                        {email}
                      </h6>
                    ))}
                  </div>
                  <div>
                    <h5 className="mb-4">Operation</h5>
                    {adminUsers.map(({ _id }, i) => (
                      <div className="mb-4" key={i}>
                      
                        <button className="btn" onClick={() => deleteUser(_id)}>
                          <i className="fa-solid mr-4 fa fa-trash"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
