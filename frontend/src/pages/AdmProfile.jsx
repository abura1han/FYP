import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NewCarContext, PendingCarContext, UsedCarContext } from "../reducer/carContext";

const AdmProfile = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [updateUserData, setUpdateUserData] = useState({});
  const { usedCarList} = useContext(UsedCarContext)
  const { newCarList } = useContext(NewCarContext)
  const { pendingCarCount} = useContext(PendingCarContext)
  

  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", {
        //fetch returns promises, accepted or rejected
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include", //sharing cookies data from frontend to backend
      });

      const data = await res.json(); //received full user info name:value from req.rootuser from auth.js
      setUserData(data);
      setUpdateUserData(data);

      if (!res.status === 200) {
        const error = new Error("res.error");
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login"); //if user not authenticating, redirecting to login from PROFILE page
    }
  };

  console.log(usedCarList)
  console.log(newCarList)

  //cant use async function inside useEffect

  useEffect(() => {
    callProfilePage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handle upload image
   */
  function handleUploadImage(e) {
    // Prevent page reload while submitting the form
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", e.target.profilePic.files[0]);

    fetch("/upload-profile-pic", {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((res) => res.json())
      .then(({ success, statusCode, data }) => {
        // If error occurred an show alert
        if (!success) {
          return alert(`An error occurred with statusCode ${statusCode}`);
        }

        // Update user data state
        setUserData({ ...userData, profilePic: data.profilePic });
      });
  }

  /**
   * Update profile
   */
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    fetch("/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: userData._id,
        ...updateUserData,
      }),
    })
      .then((res) => res.json())
      .then(({ success, data }) => {
        setUserData(data);
        alert("Profile updated successfully");
      });
  };

  return (
    <div id="AdmProfile">
      <div className="row">
        <div className="col-2 sideNav">
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/AdmProfile"
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
            </h6>
            <span className="pendCount "> { pendingCarCount} </span>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Reports"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-flag"></i>Reports
              <span className="repCount "> </span>
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
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/VideoPost"
          >
            <h6 className="text-white ">
          <i class="ml-5 mr-2 my-4  fa-solid fa-play"></i>Video Post
            </h6>
          </NavLink>
        </div>
        <div className="col-10 Content">
          <div id="profilePG" className=" d-flex align-items-center">
            <div className="container ">
              <div className="row justify-content-center ">
                <div className=" row col-12 col-lg-8 mainBox shadow p-3 mb-5 bg-white rounded">
                  <h1 className="text-center mb-4 ">Information</h1>
                  <div className="col-3 pl-0 ml-auto mb-2">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fa fa-solid fa-pen mr-1 align-middle"></i> Edit
                      Details
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Update Profile
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <label htmlFor="Fname">Profile picture</label>
                            <div>
                              {userData.profilePic ? (
                                <img
                                  src={userData.profilePic}
                                  alt=""
                                  className="img-fluid"
                                />
                              ) : (
                                "No profile pic seted"
                              )}
                            </div>
                            <form
                              className="mt-3"
                              enctype="multipart/form-data"
                              onSubmit={handleUploadImage}
                            >
                              <div className="input-group mb-3">
                                <div class="input-group">
                                  <input
                                    type="file"
                                    name="profilePic"
                                    class="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                    accept="image/x-png,image/jpeg"
                                    required
                                  />
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="submit"
                                    id="inputGroupFileAddon04"
                                  >
                                    Upload
                                  </button>
                                </div>
                              </div>
                            </form>
                            <form onSubmit={handleUpdateProfile}>
                              <label htmlFor="Fname">First Name</label>
                              <input
                                type="text"
                                id="Fname"
                                className="form-control"
                                name="firstname"
                                placeholder="Rahul"
                                value={updateUserData.firstname}
                                onChange={(e) =>
                                  setUpdateUserData({
                                    ...updateUserData,
                                    firstname: e.target.value,
                                  })
                                }
                              />
                              <label htmlFor="Lname">Last Name</label>
                              <input
                                type="text"
                                id="Lname"
                                className="form-control"
                                name="lastname"
                                placeholder="Gianchandani"
                                value={updateUserData.lastname}
                                onChange={(e) =>
                                  setUpdateUserData({
                                    ...updateUserData,
                                    lastname: e.target.value,
                                  })
                                }
                              />
                              <div className="form-check ">
                                <input
                                  className="form-check-input "
                                  type="radio"
                                  name="gender"
                                  id="male"
                                  value="male"
                                  checked={updateUserData.gender === "male"}
                                  onChange={(e) =>
                                    setUpdateUserData({
                                      ...updateUserData,
                                      gender: e.target.value,
                                    })
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="male"
                                >
                                  Male
                                </label>
                              </div>

                              <div className="form-check ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="female"
                                  value="female"
                                  checked={updateUserData.gender === "female"}
                                  onChange={(e) =>
                                    setUpdateUserData({
                                      ...updateUserData,
                                      gender: e.target.value,
                                    })
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="female"
                                >
                                  Female
                                </label>
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  aria-describedby="emailHelp"
                                  value={updateUserData.email}
                                  onChange={(e) =>
                                    setUpdateUserData({
                                      ...updateUserData,
                                      email: e.target.value,
                                    })
                                  }
                                  placeholder="Rahul_7872@yahoo.com"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="phone"
                                  id="phone"
                                  value={updateUserData.phone}
                                  onChange={(e) =>
                                    setUpdateUserData({
                                      ...updateUserData,
                                      phone: e.target.value,
                                    })
                                  }
                                  placeholder="03xx-xxxxxx"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 py-3 mb-4">
                    <div className="col-4 p-0 imgSec">
                      <div id="imgBox">
                        {userData?.profilePic ? (
                          <img
                            src={userData.profilePic}
                            height="100%"
                            width="100%"
                            alt="profile"
                          />
                        ) : (
                          <div>Profile picture not seted</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-8 infoBox">
                    <div className="row ml-2 ">
                      <div className="col-4">
                        <h6 className="mb-3">User ID</h6>
                        <h6 className="mb-3">First Name</h6>
                        <h6 className="mb-3">Last Name</h6>
                        <h6 className="mb-3">Gender</h6>
                        <h6 className="mb-3">Email</h6>
                        <h6 className="mb-3">Phone</h6>
                      </div>
                      <div className="col-4 ml-5 text-primary">
                        <h6 className="mb-3">{userData._id}</h6>
                        <h6 className="mb-3">{userData.firstname}</h6>
                        <h6 className="mb-3">{userData.lastname}</h6>
                        <h6 className="mb-3">{userData.gender}</h6>
                        <h6 className="mb-3">{userData.email}</h6>
                        <h6 className="mb-3">{userData.phone}</h6>
                      </div>
                    </div>
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

export default AdmProfile;
