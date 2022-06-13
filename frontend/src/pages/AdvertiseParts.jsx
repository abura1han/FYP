import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "owl.carousel/dist/assets/owl.theme.default.css";
import { UserContext } from "../App";
import { PendingCarContext } from "../reducer/carContext";

const AdvertiseParts = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSbuCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);


  const { pendingCarCount} = useContext(PendingCarContext)

  // Image element reference
  const imageElement = useRef();
  
  const { state } = useContext(UserContext);

  console.log(title, city, category, subCategory, price);

  // Get logged in user data and set as default data.
  useEffect(() => {
    if (state) {
      setName(state.firstname + " " + state.lastname);
      setPhone(state.phone);
      setEmail(state.email);
    }
  }, [state]);

  /**
   * Handle insert image
   */
  useEffect(() => {
    imageElement.current.addEventListener("change", (e) => {
      const formData = new FormData();
      for (let i of imageElement.current.files) {
        formData.append("file-upload", i);
      }
      console.log(formData.get("file-upload"));
      setImage(formData);
    });
  }, []);

  /**
   * Handle create ad
   */
  useEffect(() => {
    // If form not submitted then return
    if (!isSubmit) {
      return;
    }

    // Form data validation
    if (!title) {
      alert("Please fill up the title field");
      return setIsSubmit(false);
    }
    if (!city) {
      alert("Please fill up the city field");
      return setIsSubmit(false);
    }
    if (!category) {
      alert("Please fill up the category field");
      return setIsSubmit(false);
    }
    // if (!subCategory) {
    //   alert("Please fill up the subCategory field");
    //   return setIsSubmit(false);
    // }
    if (!price) {
      alert("Please fill up the price field");
      return setIsSubmit(false);
    }
    if (!description) {
      alert("Please fill up the description field");
      return setIsSubmit(false);
    }
    if (!image) {
      alert("Please upload your car parts images");
      return setIsSubmit(false);
    }

    // Upload image
    fetch("/file-upload", {
      method: "POST",
      body: image,
    })
      .then((res) => res.json())
      .then(({ success, error, data }) => {
        if (!success) {
          alert(`${error}`);
          return;
        }

        fetch("/add-car-parts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title,
            city,
            category,
            // subCategory,
            price,
            description,
            images: data,
            name,
            phone,
            email,
          }),
        })
          .then((res) => res.json())
          .then(({ success, error, data }) => {
            console.log(data);
            if (!success) {
              alert(error);
              return;
            }

            alert(data);
            window.location.reload();
          });
      });

    // Set isSubmit false
    setIsSubmit(false);
  }, [
    isSubmit,
    category,
    city,
    description,
    email,
    image,
    name,
    phone,
    price,
    // subCategory,
    title,
  ]);

  return (
    <div id="AdvertiseParts">
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
          <div id="advertisement">
            {/* HEADING SECTION  */}
            <div id="headingSection">
              <div className="container pb-5">
                <div className="row flex-column align-items-center class py-5">
                  <h3 className="mb-0 position-relative">
                    Sell your Car Parts With few simple N easy steps!
                  </h3>
                  <p>And it doesn't cost a penny!</p>
                  <div className="row col-12 col-lg-8 justify-content-sm-between justify-content-md-around mt-4 fewsteps">
                    <p>
                      <i className="fas fa-car mr-2 fewstepsIcons" />
                      Fill In Car-Part info
                    </p>
                    <p>
                      <i className="far fa-images mr-2 fewstepsIcons" />
                      Upload Part Images
                    </p>
                    <p>
                      <i className="fas fa-tags mr-2 fewstepsIcons" />
                      Enter Demand Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADING SECTION ENDS */}
            {/* CAR INFO SECTION */}
            <div id="carInfosection">
              <div className="container">
                <div id="carinfobox">
                  <div id="brandselect" className="py-5">
                    <div className="container">
                      <div id="carinfoform" className="pb-5">
                        <h1 className="text-center py-5  position-relative">
                          Enter Details
                        </h1>
                        <form
                          action="somefile.php"
                          method="post"
                          name="myForm"
                          className="row flex-column col-12 col-sm-8 col-md-8 col-lg-6 offset-lg-3 offset-md-2 offset-sm-2"
                        >
                          <div className="form-group mt-2">
                            <label htmlFor="Title">Title </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Title"
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlSelect1">
                              City
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                              required=""
                              onChange={(e) => setCity(e.target.value)}
                              value={city}
                            >
                              <option>Karachi</option>
                              <option>Hydrabad</option>
                              <option>Islamabad</option>
                              <option>Larkana</option>
                              <option>Lahore</option>
                              <option>Faislabad</option>
                              <option>Multan</option>
                              <option>Rawalpindi</option>
                              <option>Sukkur</option>
                              <option>Shikarpur</option>
                              <option>Thar</option>
                              <option>Peshawar</option>
                              <option>Allahabad</option>
                              <option>Amangarh</option>
                              <option>Arifwala</option>
                              <option>Attock</option>
                              <option>Badin</option>
                              <option>Chiniot</option>
                              <option>Chitral</option>
                              <option>Dadu</option>
                            </select>
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="partCategory">Category</label>
                            <select
                              type="text"
                              className="form-control"
                              id="partCategory"
                              placeholder="Car Filter, Car Parts, Tools, LED Lights"
                              onChange={(e) => setCategory(e.target.value)}
                              value={category}
                              >
                              <option>Car Accessories</option>
                              <option>Car Care</option>
                              <option>Oil &nbsp; Additives</option>
                              <option>Car Care Pro</option>
                              <option>Car Filter</option>
                              <option>Car Electronics</option>
                              <option>LED Lights</option>
                              <option>Car Parts</option>
                              <option>4x4 SUV items</option>
                              <option>Tyre &nbsp; Wheels</option>
                              <option>Tools</option>
                              <option>Batteries</option>
                            </select>
                          </div>
                          {/* <div className="form-group mt-3">
                            <label htmlFor="partSubCategory">
                              Sub Category
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="partSubCategory"
                              placeholder="Cameras, LED Tail Lights, Mud Flap"
                              onChange={(e) => setSbuCategory(e.target.value)}
                              value={subCategory}
                            />
                          </div> */}

                          <div className="form-group mt-3">
                            <label htmlFor="price">Price (Rs.)</label>
                            <input
                              type="text"
                              className="form-control"
                              id="price"
                              placeholder="Price"
                              onChange={(e) => setPrice(e.target.value)}
                              value={price}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="partDesc">
                              Car Part Description
                            </label>
                            <textarea
                              className="form-control"
                              id="partDesc"
                              rows={4}
                              placeholder="Rims, Mirrors, Spray etc"
                              defaultValue={""}
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlFile1">
                              Insert Images
                            </label>
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              multiple
                              required
                              ref={imageElement}
                            />
                          </div>
                        </form>
                      </div>
                      <div id="PersonalInfo" className="my-5">
                        <h1 className="text-center py-5 position-relative">
                          Personal Details
                        </h1>
                        <form
                          action="somefile.php"
                          method="post"
                          name="myForm"
                          className="row flex-column py-5 col-12 col-sm-8  col-md-8  col-lg-6 offset-lg-3 offset-md-2 offset-sm-2"
                        >
                          <div className=" form-group">
                            <label htmlFor="Fname">Seller Full Name</label>
                            <input
                              type="text"
                              id="Fname"
                              className="form-control position-relative"
                              name="firstname"
                              placeholder="Rahul"
                              required=""
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                          </div>
                          <div className="form-group  mt-4">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phonenumber"
                              placeholder="03xxxxxxxxx"
                              required=""
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                            />
                          </div>
                          <div className="form-group  mt-4">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Rahul_7872@yahoo.com"
                              required=""
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                            <small
                              id="emailHelp"
                              className="form-text text-muted"
                            >
                              We'll never share your email with anyone else.
                            </small>
                          </div>
                        </form>
                      </div>
                      <div className="submitBtn text-center mt-4">
                        <button
                          type="submit"
                          form="myForm"
                          className="btn d-block col-sm-6 col-md-4 offset-sm-3 offset-md-4"
                          onClick={() => setIsSubmit(true)}
                        >
                          Submit &amp; Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CAR INFO SECTION  ENDS*/}
            {/* TRADE WORK SECTION */}

            {/* TRADE WORK SECTION ENDS */}
            {/* SELL REASON SECTION */}

            {/* SELL REASON SECTION ENDS */}
            {/* CUSTOMERS REVIEWS SECTION */}
            {/* <div id="pubReviews">
  <h1>1,000+ Happy Customers and Counting!</h1>
  <div>

  </div>
</div> */}
            {/* CUSTOMERS REVIEWS SECTION ENDS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseParts;
