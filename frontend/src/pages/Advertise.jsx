import React, { useContext, useEffect, useRef, useState } from "react";
import Config from "../Config.json";
import { UserContext } from "../App";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TITLE = "Advertise | " + Config.SITE_TITLE;
const DESC = "SAMPLE PAGE";
const CANONICAL = Config.SITE_DOMAIN + "/";

/**
 * Car brands list
 */
const carBrands = [
  {
    name: "Acura",
    image: "./images/car-brands-logo/svg/acura-202936.svg",
  },
  {
    name: "Alfa",
    image: "./images/car-brands-logo/svg/alfa-202940.svg",
  },
  {
    name: "KIA",
    image: "./images/car-brands-logo/svg/kia-202823.svg",
  },
  {
    name: "Audi",
    image: "./images/car-brands-logo/svg/audi-Logo.wine.svg",
  },
  {
    name: "Bentley",
    image: "./images/car-brands-logo/svg/bentley-202732.svg",
  },
  {
    name: "BMW",
    image: "./images/car-brands-logo/svg/bmw-202750.svg",
  },
  {
    name: "Castrol",
    image: "./images/car-brands-logo/svg/castrol-202749.svg",
  },
  {
    name: "Chervolet",
    image: "./images/car-brands-logo/svg/chevrolet-202731.svg",
  },
  {
    name: "Chrysler",
    image: "./images/car-brands-logo/svg/chrysler-202747.svg",
  },
  {
    name: "Classic",
    image: "./images/car-brands-logo/svg/classic-202756.svg",
  },
  {
    name: "Club",
    image: "./images/car-brands-logo/svg/club-202758.svg",
  },
  {
    name: "Dacia",
    image: "./images/car-brands-logo/svg/dacia-202754.svg",
  },
  {
    name: "Daihatsu",
    image: "./images/car-brands-logo/svg/daihatsu-202751.svg",
  },
  {
    name: "Dodge",
    image: "./images/car-brands-logo/svg/dodge-202757.svg",
  },
  {
    name: "Ferrari",
    image: "./images/car-brands-logo/svg/ferrari-202760.svg",
  },
  {
    name: "FIAT",
    image: "./images/car-brands-logo/svg/fiat-202773.svg",
  },
  {
    name: "Ford",
    image: "./images/car-brands-logo/svg/ford-202767.svg",
  },
  {
    name: "GMC",
    image: "./images/car-brands-logo/svg/gmc-202768.svg",
  },
  {
    name: "Hendrick",
    image: "./images/car-brands-logo/svg/hendrick-202772.svg",
  },
  {
    name: "Honda",
    image: "./images/car-brands-logo/svg/honda-202798.svg",
  },
  {
    name: "Hummer",
    image: "./images/car-brands-logo/svg/hummer-202795.svg",
  },
  {
    name: "Hyundai",
    image: "./images/car-brands-logo/svg/hyundai-202796.svg",
  },
  {
    name: "Mercedes",
    image: "./images/car-brands-logo/svg/mercedes-202855.svg",
  },
  {
    name: "Jaguar",
    image: "./images/car-brands-logo/svg/jaguar-202813.svg",
  },
  {
    name: "Nissan",
    image: "./images/car-brands-logo/svg/nissan-202859.svg",
  },
  {
    name: "Mitsubushi",
    image: "./images/car-brands-logo/svg/mitsubishi-202851.svg",
  },
  {
    name: "Opel",
    image: "./images/car-brands-logo/svg/opel-202862.svg",
  },
  {
    name: "Peugeot",
    image: "./images/car-brands-logo/svg/peugeot-202868.svg",
  },
  {
    name: "Porsche",
    image: "./images/car-brands-logo/svg/porsche-202878.svg",
  },
  {
    name: "Tesla",
    image: "./images/car-brands-logo/svg/tesla-202912.svg",
  },
  {
    name: "Toyota",
    image: "./images/car-brands-logo/svg/toyota-202914.svg",
  },
  {
    name: "Volkswagen",
    image: "./images/car-brands-logo/svg/volkswagen-202922.svg",
  },
  {
    name: "Range Rover",
    image: "./images/car-brands-logo/svg/rover-202893.svg",
  },
];

const Advertise = () => {
  const [carBrand, setCarBrand] = useState("");
  const [type, setType] = useState("Used");
  const [year, setYear] = useState("2021");
  const [model, setModel] = useState("City");
  const [style, setStyle] = useState("G");
  const [registeredIn, setRegisteredIn] = useState("Un-Registered");
  const [exteriorColor, setExteriorColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [engineCC, setEngineCC] = useState("");
  const [owener, setOwenter] = useState("");
  const [category, setCategory] = useState("");

  const imageElement = useRef();

  const { state } = useContext(UserContext);

  // Coursel
  const owlone = {
    loop: true,
    margin: 20,
    padding: 20,
    nav: true,
    autoplay: false,
    autoplayTimeout: 4000,
    dots: false,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      576: {
        items: 4,
        nav: true,
      },
      768: {
        items: 5,
        nav: true,
      },
      992: {
        items: 6,
        nav: true,
        loop: true,
      },
      1200: {
        items: 6,
        nav: true,
        loop: true,
      },
    },
  };

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
    if (!isSubmit) {
      return;
    }

    if (!carBrand) {
      alert("Please select your car brand");
      return setIsSubmit(false);
    }
    if (!fuel) {
      alert("Please select your car fuel");
      return setIsSubmit(false);
    }
    if (!transmission) {
      alert("Please select your car transmission");
      return setIsSubmit(false);
    }
    if (!engineCC) {
      alert("Please select your car engineCC");
      return setIsSubmit(false);
    }

    if (!owener) {
      alert("Please select your car owener");
      return setIsSubmit(false);
    }
    if (!exteriorColor) {
      alert("Please select your car color");
      return setIsSubmit(false);
    }
    if (!category) {
      alert("Please select your car category");
      return setIsSubmit(false);
    }

    if (!mileage) {
      alert("Please fill out the filed Mileage");
      return setIsSubmit(false);
    }
    if (!price) {
      alert("Please fill out the filed price");
      return setIsSubmit(false);
    }
    if (!image) {
      alert("Please fill out the filed image");
      return setIsSubmit(false);
    }
    if (!description) {
      alert("Please fill out the filed description");
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

        fetch("/create-ad", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            carBrand,
            type,
            fuel,
            category,
            engineCC,
            transmission,
            owener,
            year,
            model,
            style,
            registeredIn,
            exteriorColor,
            mileage,
            price,
            description,
            images: data,
            name,
            phone,
            email,
          }),
        })
          .then((res) => res.json())
          .then(({ success, error, message, data }) => {
            console.log(data);
            if (!success) {
              alert(error);
              return;
            }

            alert(message);
            window.location.reload();
          });
      });

    // Set isSubmit false
    setIsSubmit(false);
  }, [
    category,
    engineCC,
    fuel,
    owener,
    transmission,
    carBrand,
    type,
    description,
    email,
    image,
    exteriorColor,
    isSubmit,
    mileage,
    model,
    name,
    phone,
    price,
    registeredIn,
    style,
    year,
  ]);

  return (
    <div id="advertisement">
      <Helmet>
        <title>{TITLE}</title>
        <link rel="conanoical" href={CANONICAL} />
        <meta name="description" content={DESC} />
        <meta name="theme-color" content={Config.THEME_COLOR} />
      </Helmet>
      {/* HEADING SECTION  */}
      <div id="headingSection">
        <div className="container pb-5">
          <div className="row flex-column align-items-center class py-5">
            <h3 className="mb-0 position-relative">
              Sell your Car With few simple N easy steps!
            </h3>
            <p>And it doesn't cost a penny!</p>
            <div className="row col-12 col-lg-8 justify-content-sm-between justify-content-md-around mt-4 fewsteps">
              <p>
                <i className="fas fa-car mr-2 fewstepsIcons" />
                Fill In Car Info
              </p>
              <p>
                <i className="far fa-images mr-2 fewstepsIcons" />
                Upload Car Images
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
                <h1 className="text-center pb-5 position-relative">
                  Let's select your car brand
                </h1>
                <OwlCarousel
                  className="owl-theme mt-5 position-relative"
                  {...owlone}
                >
                  {/* Showing car brands list */}
                  {carBrands.map(({ name, image }, index) => (
                    <Link
                      to="#/"
                      key={index}
                      data-brandid={index}
                      onClick={() => setCarBrand(name)}
                      className={`d-block ${
                        name === carBrand && "brand-selected"
                      }`}
                    >
                      <div className="brandimgbox text-center pt-3 ">
                        <div className="imgholder">
                          <img
                            src={image}
                            alt="Acura brand logo"
                            className="h-100 w-100"
                          />
                        </div>
                        <p className="mt-2 pb-2">{name}</p>
                      </div>
                    </Link>
                  ))}
                </OwlCarousel>
                <div id="carinfoform" className="pb-5">
                  <h1 className="text-center py-5  position-relative">
                    Enter Details
                  </h1>
                  <form
                    action="somefile.php"
                    method="post"
                    name="myForm"
                    className="row flex-column col-12 col-sm-8 col-md-8 col-lg-6 offset-lg-3 offset-md-2 offset-sm-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Type</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                      >
                        <option selected>Select Type</option>
                        <option value={"Used"}>Used</option>
                        <option value={"New"}>New</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Fuel</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setFuel(e.target.value)}
                        value={fuel}
                      >
                        <option selected>Select Fuel</option>
                        <option value={"Petrol"}>Petrol</option>
                        <option value={"CNG"}>CNG</option>
                        <option value={"Diesel"}>Diesel</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">
                        Car Category
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        <option selected>Select Car Category</option>
                        <option value={"Small"}>Small</option>
                        <option value={"Midsize"}>Midsize</option>
                        <option value={"Large"}>Large</option>
                        <option value={"SUVs"}>SUVs</option>
                        <option value={"Crossovers"}>Crossovers</option>
                        <option value={"Hybrids"}>Hybrids</option>
                        <option value={"Trucks"}>Trucks</option>
                        <option value={"Luxury"}>Luxury</option>
                        <option value={"Sports"}>Sports</option>
                        <option value={"Convertibles"}>Convertibles</option>
                        <option value={"Vans Cars"}>Vans Cars</option>
                        <option value={"Certified Preown"}>
                          Certified Preown
                        </option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">
                        Engine CC
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setEngineCC(e.target.value)}
                        value={engineCC}
                      >
                        <option selected>Select Engine CC</option>
                        <option value={"650"}>650</option>
                        <option value={"800"}>800</option>
                        <option value={"1000"}>1000</option>
                        <option value={"1500"}>1500</option>
                        <option value={"1800"}>1800</option>
                        <option value={"2500"}>2500</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">
                        Transmission
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setTransmission(e.target.value)}
                        value={transmission}
                      >
                        <option selected>Select Transmission</option>
                        <option value={"Manual"}>Manual</option>
                        <option value={"Automatic"}>Automatic</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Color</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setExteriorColor(e.target.value)}
                        value={exteriorColor}
                      >
                        <option selected>Select Color</option>
                        <option value={"White"}>White</option>
                        <option value={"Black"}>Black</option>
                        <option value={"Gray"}>Gray</option>
                        <option value={"Blue"}>Blue</option>
                        <option value={"Yellow"}>Yellow</option>
                        <option value={"Green"}>Green</option>
                        <option value={"Silver"}>Silver</option>
                        <option value={"Golden"}>Golden</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Owner</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setOwenter(e.target.value)}
                        value={owener}
                      >
                        <option selected>Select Owner</option>
                        <option value={"First Owner"}>First Owner</option>
                        <option value={"Second Owner"}>Second Owner</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Year</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                      >
                        <option selected>Select Year</option>
                        <option value={"2021"}>2021</option>
                        <option value={"2020"}>2020</option>
                        <option value={"2019"}>2019</option>
                        <option value={"2018"}>2018</option>
                        <option value={"2017"}>2017</option>
                        <option value={"2016"}>2016</option>
                        <option value={"2015"}>2015</option>
                        <option value={"2014"}>2014</option>
                        <option value={"2013"}>2013</option>
                        <option value={"2012"}>2012</option>
                        <option value={"2011"}>2011</option>
                        <option value={"2010"}>2010</option>
                        <option value={"2009"}>2009</option>
                        <option value={"2008"}>2008</option>
                        <option value={"2007"}>2007</option>
                        <option value={"2006"}>2006</option>
                        <option value={"2005"}>2005</option>
                        <option value={"2004"}>2004</option>
                        <option value={"2003"}>2003</option>
                        <option value={"2002"}>2002</option>
                        <option value={"2001"}>2001</option>
                        <option value={"2000"}>2000</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Model</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setModel(e.target.value)}
                        value={model}
                      >
                        <option selected>Select Model</option>
                        <option value={"City"}>City</option>
                        <option value={"Civic"}>Civic</option>
                        <option value={"Vezel"}>Vezel</option>
                        <option value={"N Wgn"}>N Wgn</option>
                        <option value={"Accord Tourer"}>Accord Tourer</option>
                        <option value={"Acty"}>Acty</option>
                        <option value={"Acura"}>Acura</option>
                        <option value={"Airwave"}>Airwave</option>
                        <option value={"Beat"}>Beat</option>
                        <option value={"BR-V"}>BR-V</option>
                        <option value={"Civic Hybrid"}>Civic Hybrid</option>
                        <option value={"CR-V"}>CR-V</option>
                        <option value={"Ferio"}>Ferio</option>
                        <option value={"Fit"}>Fit</option>
                        <option value={"Freed"}>Freed</option>
                        <option value={"Grace Hybrid"}>Grace Hybrid</option>
                        <option value={"HR-V"}>HR-V</option>
                        <option value={"Insight"}>Insight</option>
                        <option value={"Inspire"}>Inspire</option>
                        <option value={"Jade"}>Jade</option>
                        <option value={"Jazz"}>Jazz</option>
                        <option value={"Z"}>Z</option>
                        <option value={"Vamos"}>Vamos</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Style</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setStyle(e.target.value)}
                        value={style}
                      >
                        <option selected>Select Style</option>
                        <option value={"G"}>G</option>
                        <option value={"G L Package"}>G L Package</option>
                        <option value={"G A Package"}>G A Package</option>
                        <option value={"G Turbo"}>G Turbo</option>
                        <option value={"X"}>X</option>
                        <option value={"L"}>L</option>
                        <option value={"L VS"}>L VS</option>
                        <option value={"X Limited"}>X Limited</option>
                        <option value={"XLi VVTi"}>XLi VVTi</option>
                        <option value={"GLi Automatic 1.3 VVTi"}>
                          GLi Automatic 1.3 VVTi
                        </option>
                        <option value={"Altis Grande CVT-i 1.8"}>
                          Altis Grande CVT-i 1.8
                        </option>
                        <option value={"Altis Grande 1.8"}>
                          Altis Grande 1.8
                        </option>
                        <option value={"Altis 1.8"}>Altis 1.8</option>
                        <option value={"GLi 1.3 VVTI"}>GLi 1.3 VVTI</option>
                        <option value={"Altis X 1.8"}>Altis X 1.8</option>
                        <option value={"Altis X CVT-i 1.8"}>
                          Altis X CVT-i 1.8
                        </option>
                        <option value={"X Urban"}>X Urban</option>
                        <option value={"X Urban Solid"}>X Urban Solid</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">
                        Province
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                      >
                        <option selected>Select Province</option>
                        <option value={"Sindh"}>Sindh</option>
                        <option value={"Punjab"}>Punjab</option>
                        <option value={"Balochistan"}>Balochistan</option>
                        <option value={"KPK"}>KPK</option>
                        <option value={"Azad Kashmir"}>Azad Kashmir</option>
                        <option value={"Federally Administered Tribal Areas"}>
                          Federally Administered Tribal Areas
                        </option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">
                        Registered In
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setRegisteredIn(e.target.value)}
                        value={registeredIn}
                      >
                        <option
                          value={"Un-Registered"}
                          className="font-weight-bold"
                        >
                          Un-Registered
                        </option>
                        <option value={"Karachi"}>Karachi</option>
                        <option value={"Hydrabad"}>Hydrabad</option>
                        <option value={"Islamabad"}>Islamabad</option>
                        <option value={"Larkana"}>Larkana</option>
                        <option value={"Lahore"}>Lahore</option>
                        <option value={"Faislabad"}>Faislabad</option>
                        <option value={"Multan"}>Multan</option>
                        <option value={"Rawalpindi"}>Rawalpindi</option>
                        <option value={"Sukkur"}>Sukkur</option>
                        <option value={"Shikarpur"}>Shikarpur</option>
                        <option value={"Thar"}>Thar</option>
                        <option value={"Peshawar"}>Peshawar</option>
                        <option value={"Allahabad"}>Allahabad</option>
                        <option value={"Amangarh"}>Amangarh</option>
                        <option value={"Arifwala"}>Arifwala</option>
                        <option value={"Attock"}>Attock</option>
                        <option value={"Badin"}>Badin</option>
                        <option value={"Chiniot"}>Chiniot</option>
                        <option value={"Chitral"}>Chitral</option>
                        <option value={"Dadu"}>Dadu</option>
                      </select>
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="mileage">Mileage (KM)</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mileage"
                        placeholder="100,000 (KM)"
                        required
                        onChange={(e) => setMileage(e.target.value)}
                        value={mileage}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="price">Price (Rs.)</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="25,000,000"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlTextarea1">
                        Ad Description
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextare1"
                        rows={4}
                        placeholder="original paint, first-hand car, bumper to bumper geniune, 3 sratches, colorful rims"
                        required
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
                        required
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
                        required
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
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <small id="emailHelp" className="form-text text-muted">
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
      <div id="trade" className="py-5">
        <div className="container py-5">
          <h1 className="pb-5 text-center position-relative">
            How Pak Drive Store Works?
          </h1>
          <div className="row text-center mt-5">
            <div className="col-md-4">
              <span className="nums h4">1</span>
              <h5 className="mt-4 ">Check Valuation</h5>
              <p className="mb-3 mb-md-5">
                {" "}
                Enter car details and get best price instantly
              </p>
              <img
                src="./images/undraw_business_deal_cpi9.svg"
                alt="business deal"
                width="200px"
              />
            </div>
            <div className="col-md-4 my-5 my-md-0">
              <span className="nums h4">2</span>
              <h5 className="mt-4 ">Fine-Tune Your Value</h5>
              <p className="mb-3 mb-md-5">
                Tell us about features like color and mileage, and see
                immediately how they affect your car’s value.
              </p>
              <img
                src="./images/undraw_city_driver_re_0x5e.svg"
                alt="girl with car "
                width="200px"
              />
            </div>
            <div className="col-md-4 my-5 my-md-0">
              <span className="nums h4">3</span>
              <h5 className="mt-4 ">Get Your True Cash Offer™</h5>
              <p className="mb-3 mb-md-5">
                Ready to sell or trade? Get an offer from a local dealer today.
              </p>
              <img
                src="./images/undraw_Profile_data_re_v81r.svg"
                alt="boy with datacard "
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
      {/* TRADE WORK SECTION ENDS */}
      {/* SELL REASON SECTION */}
      <div id="sellReason" className="py-5">
        <div className="container mb-5">
          <h1 className="mb-1 text-center position-relative mt-5">
            Why Sell to Pak Drive Store?
          </h1>
          <p className="text-center mb-3 mb-sm-4 mb-md-5">
            Sell your car in one visit, Get Instant payment &amp; With Total
            Transparency
          </p>
          <div className="row text-center pt-5">
            <div className=" col-sm-6 col-md-3">
              <i className="sellIcons mb-4 fas fa-shopping-cart" />
              <h2 className="font-weight-bold mb-0">5,000+</h2>
              <p>Cars Bought</p>
            </div>
            <div className=" col-sm-6 col-md-3 mt-5 mt-sm-0">
              <i className="sellIcons mb-4 fas fa-hospital-user" />
              <h2 className="font-weight-bold mb-0">500+</h2>
              <p>Dealers Network</p>
            </div>
            <div className=" col-sm-6 col-md-3 mt-5  mt-md-0">
              <i className="sellIcons mb-4 fab fa-sellsy" />
              {/* <i class="fas fa-clipboard-check"></i> */}
              <h2 className="font-weight-bold mb-0">2,000+</h2>
              <p>Cars Sold</p>
            </div>
            <div className=" col-sm-6 col-md-3 mt-5  mt-md-0">
              <i className="sellIcons mb-4 fas fa-globe" />
              <h2 className="font-weight-bold mb-0">10+</h2>
              <p>Servicable locations</p>
            </div>
          </div>
        </div>
      </div>
      {/* SELL REASON SECTION ENDS */}
      {/* CUSTOMERS REVIEWS SECTION */}
      {/* <div id="pubReviews">
  <h1>1,000+ Happy Customers and Counting!</h1>
  <div>

  </div>
</div> */}
      {/* CUSTOMERS REVIEWS SECTION ENDS */}
    </div>
  );
};

export default Advertise;
