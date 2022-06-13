import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import IonRangeSlider from "react-ion-slider";

const CarSearch = () => {
  const maxPrice = 9999999;
  const [price, setPrice] = useState({
    lower: 0,
    upper: maxPrice,
  });

  const [style, setStyle] = useState("");
  const [type, setType] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carCity, setCarCity] = useState("");
  const [mileage, setMileage] = useState({ start: 0, end: 500000 });
  const [engineCC, setEngineCC] = useState({ lower: 0, upper: 500000 });
  const [exteriorColor, setExteriorColor] = useState("");
  const [sortBy, setSortBy] = useState(-1);
  const [year, setYear] = useState({ start: 2000, end: 2022 });
  const [carFuel, setCarFuel] = useState("")
  const [carTransmission, setCarTransmission] = useState("")
  const [carOwener, setCarOwener] = useState("")
  const [category, setCategory] = useState("");

  const [carList, setCarList] = useState([]);

  const isQuerySearch = useRef(true);

  // Handle car brand selection
  const handleSelectCarBrand = (brand) => {
    if (carBrand.includes(brand)) {
      return setCarBrand(carBrand.filter((b) => b !== brand));
    }

    setCarBrand((prevState) => [...prevState, brand]);
  };

  const handleSelectCarOwener = (owener) => {
    if (carOwener.includes(owener)) {
      return setCarOwener(carOwener.filter((b) => b !== owener));
    }

    setCarOwener((prevState) => [...prevState, owener]);
  };

  // Handle car fuel
  const handleSelectCarFuel = (fuel) => {
    console.log(fuel)
    if (carFuel.includes(fuel)) {
      return setCarFuel(carFuel.filter((b) => b !== fuel));
    }

    setCarFuel((prevState) => [...prevState, fuel]);
  };

  // Handle car transmission
  const handleSelectCarTransmission = (transmission) => {
    if (carTransmission.includes(transmission)) {
      return setCarTransmission(carTransmission.filter((b) => b !== transmission));
    }

    setCarTransmission((prevState) => [...prevState, transmission]);
  };

  // Handle car city selection
  const handleSelectCarCity = (city) => {
    if (carCity.includes(city)) {
      return setCarCity(carCity.filter((c) => c !== city));
    }

    setCarCity((prevState) => [...prevState, city]);
  };

  useEffect(() => {
    if (isQuerySearch.current) {
      const query = window.location.search;

      fetch(`/search${query}`)
        .then((res) => res.json())
        .then(({ success, data }) => {
          if (success) {
            setCarList(data);
          }

          isQuerySearch.current = false;
        });
    }
  }, [isQuerySearch]);

 
  // Fetch filtered cars from server
  useEffect(() => {
    if (!isQuerySearch.current) {
      const backendRequest = () => {
        fetch(`/search?style=${style}&type=${type}&carBrand=${carBrand.toString()}&lower_price=${
          price.lower
        }&upper_price=${price.upper}&registeredIn=${carCity}&year_start=${
          year.start
        }&year_end=${year.end}&mileage_start=${mileage.start}&mileage_end=${
          mileage.end
        }&exteriorColor=${exteriorColor}&sortBy=${sortBy}&transmission=${carTransmission}&fuel=${carFuel}&owener=${carOwener}&upper_engineCC=${engineCC.upper}&lower_engineCC=${engineCC.lower}&category=${category}
        `)
          .then((res) => res.json())
          .then(({ data }) => {
            setCarList(data);
          });
      };

      console.log("Fired...");

      backendRequest();
    }
  }, [
    category,
    engineCC,
    carOwener,
    carFuel,
    carTransmission,
    isQuerySearch,
    carBrand,
    exteriorColor,
    mileage,
    price,
    style,
    type,
    sortBy,
    carCity,
    year,
  ]);

  return (
    <div id="CarSearch">
      <div className="container">
        <div className="row pt-5">
          <div className="filterSec col-3 mr-3 ">
            <div className="bg-white p-3">
              <h4 className="font-weight-bold">Show Results By:</h4>
              <div id="accordion" className="my-3">
                <div className="card  mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <h5 className="text-dark mb-0"> Budget </h5>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse" aria-labelledby="">
                    <div className="card-body">
                      <IonRangeSlider
                        type={"double"}
                        min={999}
                        max={maxPrice}
                        step={100}
                        onFinish={(e) =>
                          setPrice({ lower: e.from, upper: e.to })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="card  mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <h5 className="text-dark mb-0"> City </h5>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="">
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Larkana"
                          id="Larkana"
                          onChange={() => handleSelectCarCity("Larkana")}
                        />
                        <label class="form-check-label" htmlFor="Larkana">
                          Larkana
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Karachi"
                          id="Karachi"
                          onChange={() => handleSelectCarCity("Karachi")}
                        />
                        <label class="form-check-label" htmlFor="Karachi">
                          Karachi
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Lahore"
                          id="Lahore"
                          onChange={() => handleSelectCarCity("Lahore")}
                        />
                        <label class="form-check-label" htmlFor="Lahore">
                          Lahore
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Islamabad"
                          id="Islamabad"
                          onChange={() => handleSelectCarCity("Islamabad")}
                        />
                        <label class="form-check-label" htmlFor="Islamabad">
                          Islamabad
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Peshawar"
                          id="Peshawar"
                          onChange={() => handleSelectCarCity("Peshawar")}
                        />
                        <label class="form-check-label" htmlFor="Peshawar">
                          Peshawar
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Multan"
                          id="Multan"
                          onChange={() => handleSelectCarCity("Multan")}
                        />
                        <label class="form-check-label" htmlFor="Multan">
                          Multan
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Rawalpindi"
                          id="Rawalpindi"
                          onChange={() => handleSelectCarCity("Rawalpindi")}
                        />
                        <label class="form-check-label" htmlFor="Rawalpindi">
                          Rawalpindi
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Hydrabad"
                          id="Hydrabad"
                          onChange={() => handleSelectCarCity("Hydrabad")}
                        />
                        <label class="form-check-label" htmlFor="Hydrabad">
                          Hydrabad
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Murree"
                          id="Murree"
                          onChange={() => handleSelectCarCity("Murree")}
                        />
                        <label class="form-check-label" htmlFor="Murree">
                          Murree
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Sukkur"
                          id="Sukkur"
                          onChange={() => handleSelectCarCity("Sukkur")}
                        />
                        <label class="form-check-label" htmlFor="Sukkur">
                          Sukkur
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Faisalabad"
                          id="Faisalabad"
                          onChange={() => handleSelectCarCity("Faisalabad")}
                        />
                        <label class="form-check-label" htmlFor="Faisalabad">
                          Faisalabad
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Quetta"
                          id="Quetta"
                          onChange={() => handleSelectCarCity("Quetta")}
                        />
                        <label class="form-check-label" htmlFor="Quetta">
                          Quetta
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Gujranwala"
                          id="Gujranwala"
                          onChange={() => handleSelectCarCity("Gujranwala")}
                        />
                        <label class="form-check-label" htmlFor="Gujranwala">
                          Gujranwala
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Sargodha"
                          id="Sargodha"
                          onChange={() => handleSelectCarCity("Sargodha")}
                        />
                        <label class="form-check-label" htmlFor="Sargodha">
                          Sargodha
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Sahiwal"
                          id="Sahiwal"
                          onChange={() => handleSelectCarCity("Sahiwal")}
                        />
                        <label class="form-check-label" htmlFor="Sahiwal">
                          Sahiwal
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Okara"
                          id="Okara"
                          onChange={() => handleSelectCarCity("Okara")}
                        />
                        <label class="form-check-label" htmlFor="Okara">
                          Okara
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="jacobabad"
                          id="jacobabad"
                          onChange={() => handleSelectCarCity("jacobabad")}
                        />
                        <label class="form-check-label" htmlFor="jacobabad">
                          jacobabad
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Kasur"
                          id="Kasur"
                          onChange={() => handleSelectCarCity("Kasur")}
                        />
                        <label class="form-check-label" htmlFor="Kasur">
                          Kasur
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Attock"
                          id="Attock"
                          onChange={() => handleSelectCarCity("Attock")}
                        />
                        <label class="form-check-label" htmlFor="Attock">
                          Attock
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Badin"
                          id="Badin"
                          onChange={() => handleSelectCarCity("Badin")}
                        />
                        <label class="form-check-label" htmlFor="Badin">
                          Badin
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Jhelum"
                          id="Jhelum"
                          onChange={() => handleSelectCarCity("Jhelum")}
                        />
                        <label class="form-check-label" htmlFor="Jhelum">
                          Jhelum
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Kamalia"
                          id="Kamalia"
                          onChange={() => handleSelectCarCity("Kamalia")}
                        />
                        <label class="form-check-label" htmlFor="Kamalia">
                          Kamalia
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Khairpur"
                          id="Khairpur"
                          onChange={() => handleSelectCarCity("Khairpur")}
                        />
                        <label class="form-check-label" htmlFor="Khairpur">
                          Khairpur
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Jamshoro"
                          id="Jamshoro"
                          onChange={() => handleSelectCarCity("Jamshoro")}
                        />
                        <label class="form-check-label" htmlFor="Jamshoro">
                          Jamshoro
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Gwadar"
                          id="Gwadar"
                          onChange={() => handleSelectCarCity("Gwadar")}
                        />
                        <label class="form-check-label" htmlFor="Gwadar">
                          Gwadar
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Mardan"
                          id="Mardan"
                          onChange={() => handleSelectCarCity("Mardan")}
                        />
                        <label class="form-check-label" htmlFor="Mardan">
                          Mardan
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Mithi"
                          id="Mithi"
                          onChange={() => handleSelectCarCity("Mithi")}
                        />
                        <label class="form-check-label" htmlFor="Mithi">
                          Mithi
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <h5 className="text-dark mb-0"> Make </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Toyota"
                          id="Toyota"
                          onChange={() => handleSelectCarBrand("Toyota")}
                        />
                        <label class="form-check-label" htmlFor="Toyota">
                          Toyota
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Suzuki"
                          id="Suzuki"
                          onChange={() => handleSelectCarBrand("Suzuki")}
                        />
                        <label class="form-check-label" htmlFor="Suzuki">
                          Suzuki
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Honda"
                          id="Honda"
                          onChange={() => handleSelectCarBrand("Honda")}
                        />
                        <label class="form-check-label" htmlFor="Honda">
                          Honda
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="KIA"
                          id="KIA"
                          onChange={() => handleSelectCarBrand("KIA")}
                        />
                        <label class="form-check-label" htmlFor="KIA">
                          KIA
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Audi"
                          id="Audi"
                          onChange={() => handleSelectCarBrand("Audi")}
                        />
                        <label class="form-check-label" htmlFor="Audi">
                          Audi
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="BMW"
                          id="BMW"
                          onChange={() => handleSelectCarBrand("BMW")}
                        />
                        <label class="form-check-label" htmlFor="BMW">
                          BMW
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Acura"
                          id="Acura"
                          onChange={() => handleSelectCarBrand("Acura")}
                        />
                        <label class="form-check-label" htmlFor="Acura">
                          Acura
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Alfa"
                          id="Alfa"
                          onChange={() => handleSelectCarBrand("Alfa")}
                        />
                        <label class="form-check-label" htmlFor="Alfa">
                          Alfa
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Bentley"
                          id="Bentley"
                          onChange={() => handleSelectCarBrand("Bentley")}
                        />
                        <label class="form-check-label" htmlFor="Bentley">
                          Bentley
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Chrysler"
                          id="Chrysler"
                          onChange={() => handleSelectCarBrand("Chrysler")}
                        />
                        <label class="form-check-label" htmlFor="Chrysler">
                          Chrysler
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Daihatsu"
                          id="Daihatsu"
                          onChange={() => handleSelectCarBrand("Daihatsu")}
                        />
                        <label class="form-check-label" htmlFor="Daihatsu">
                          Daihatsu
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Ferrari"
                          id="Ferrari"
                          onChange={() => handleSelectCarBrand("Ferrari")}
                        />
                        <label class="form-check-label" htmlFor="Ferrari">
                          Ferrari
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="FIAT"
                          id="FIAT"
                          onChange={() => handleSelectCarBrand("FIAT")}
                        />
                        <label class="form-check-label" htmlFor="FIAT">
                          FIAT
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Ford"
                          id="Ford"
                          onChange={() => handleSelectCarBrand("Ford")}
                        />
                        <label class="form-check-label" htmlFor="Ford">
                          Ford
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Hyundai"
                          id="Hyundai"
                          onChange={() => handleSelectCarBrand("Hyundai")}
                        />
                        <label class="form-check-label" htmlFor="Hyundai">
                          Hyundai
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Mercedes"
                          id="Mercedes"
                          onChange={() => handleSelectCarBrand("Mercedes")}
                        />
                        <label class="form-check-label" htmlFor="Mercedes">
                          Mercedes
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Jaguar"
                          id="Jaguar"
                          onChange={() => handleSelectCarBrand("Jaguar")}
                        />
                        <label class="form-check-label" htmlFor="Jaguar">
                          Jaguar
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Nissan"
                          id="Nissan"
                          onChange={() => handleSelectCarBrand("Nissan")}
                        />
                        <label class="form-check-label" htmlFor="Nissan">
                          Nissan
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Mitsubushi"
                          id="Mitsubushi"
                          onChange={() => handleSelectCarBrand("Mitsubushi")}
                        />
                        <label class="form-check-label" htmlFor="Mitsubushi">
                          Mitsubushi
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Porsche"
                          id="Porsche"
                          onChange={() => handleSelectCarBrand("Porsche")}
                        />
                        <label class="form-check-label" htmlFor="Porsche">
                          Porsche
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Tesla"
                          id="Tesla"
                          onChange={() => handleSelectCarBrand("Tesla")}
                        />
                        <label class="form-check-label" htmlFor="Tesla">
                          Tesla
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Range Rover"
                          id="Range Rover"
                          onChange={() => handleSelectCarBrand("Range Rover")}
                        />
                        <label class="form-check-label" htmlFor="Range Rover">
                          Range Rover
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Volkswagen"
                          id="Volkswagen"
                          onChange={() => handleSelectCarBrand("Volkswagen")}
                        />
                        <label class="form-check-label" htmlFor="Volkswagen">
                          Volkswagen
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Opel"
                          id="Opel"
                          onChange={() => handleSelectCarBrand("Opel")}
                        />
                        <label class="form-check-label" htmlFor="Opel">
                          Opel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        <h5 className="text-dark mb-0"> Model Year </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body">
                      <div className="card-body">
                        <IonRangeSlider
                          type={"double"}
                          min={2000}
                          max={2022}
                          step={1}
                          onFinish={(e) =>
                            setYear({ start: e.from, end: e.to })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        <h5 className="text-dark mb-0"> K/M Driven </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body">
                      <div className="card-body">
                        <IonRangeSlider
                          type={"double"}
                          min={0}
                          max={500000}
                          step={1}
                          onFinish={(e) =>
                            setMileage({ start: e.from, end: e.to })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        <h5 className="text-dark mb-0"> Fuel </h5>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseSix" className="collapse" aria-labelledby="">
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Petrol"
                          id="Petrol"
                          onChange={(e) => handleSelectCarFuel("Petrol")}
                        />
                        <label class="form-check-label" htmlFor="Petrol">
                          Petrol
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="CNG"
                          id="CNG"
                          onChange={(e) => handleSelectCarFuel("CNG")}
                        />
                        <label class="form-check-label" htmlFor="CNG">
                          CNG
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Diesel"
                          id="Diesel"
                           onChange={(e) => handleSelectCarFuel("Diesel")}
                        />
                        <label class="form-check-label" htmlFor="Diesel">
                          Diesel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="true"
                        aria-controls="collapseSeven"
                      >
                        <h5 className="text-dark mb-0"> Category </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body row justify-content-between">
                      <div className="text-center carbox mb-2 col-4  " onClick={() => setCategory("Small")}>
                        <img
                          src="./images/whitecars/smallcar.jpg"
                          alt="small car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Small Cars</p>
                      </div>
                      <div className="text-center carbox mb-2 col-4   " onClick={() => setCategory("Midsize")}>
                        <img
                          src="./images/whitecars/MidsizeCars.jpg"
                          alt="midsize car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Midsize Cars</p>
                      </div>
                      <div className="text-center carbox mb-2 col-4   " onClick={() => setCategory("Large")}>
                        <img
                          src="./images/whitecars/LargeCars.jpg"
                          alt="large car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Large Cars</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4  " onClick={() => setCategory("SUVs")}>
                        <img
                          src="./images/whitecars/SUVs.jpg"
                          alt="SUVs car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">SUVs</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4  " onClick={() => setCategory("Crossovers")}>
                        <img
                          src="./images/whitecars/Crossovers.jpg"
                          alt="Crossovers car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Crossovers</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4  " onClick={() => setCategory("Hybrids")}>
                        <img
                          src="./images/whitecars/Hybrids.jpg"
                          alt="Hybrid car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Hybrids</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4   " onClick={() => setCategory("Trucks")}>
                        <img
                          src="./images/whitecars/Trucks.jpg"
                          alt="truck car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Trucks</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4   " onClick={() => setCategory("Luxury")}>
                        <img
                          src="./images/whitecars/luxury.jpg"
                          alt="Luxury car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Luxury</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4  " onClick={() => setCategory("Sports")}>
                        <img
                          src="./images/whitecars/sportscar.jpg"
                          alt="Sport car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Sports Cars</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4   " onClick={() => setCategory("Convertibiles")}>
                        <img
                          src="./images/whitecars/convertibles.jpg"
                          alt="Convertible car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Convertibiles</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4   " onClick={() => setCategory("Vans")}>
                        <img
                          src="./images/whitecars/vans.jpg"
                          alt="Van car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Vans</p>
                      </div>

                      <div className="text-center carbox mb-2 col-4  " onClick={() => setCategory("Certified")}>
                        <img
                          src="./images/whitecars/Certifiedpreowned.jpg"
                          alt="Certified pre owned car"
                          height="30px"
                          width="60px"
                        />
                        <p className="mb-0 carName">Certified Pre-Own </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseEight"
                        aria-expanded="true"
                        aria-controls="collapseEight"
                      >
                        <h5 className="text-dark mb-0"> Engine CC </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseEight"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body">
                      <div className="card-body">
                        <IonRangeSlider
                          type={"double"}
                          min={0}
                          max={2000}
                          step={50}
                          onFinish={(e) =>
                          setEngineCC({ lower: e.from, upper: e.to })
                        }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseNine"
                        aria-expanded="true"
                        aria-controls="collapseNine"
                      >
                        <h5 className="text-dark mb-0"> Transmission </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseNine"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="manual"
                          id="Manual"
                          onChange={(e) => handleSelectCarTransmission("Manual")}
                        />
                        <label class="form-check-label" htmlFor="Manual">
                          Manual
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="automatic"
                          id="Automatic"
                          onChange={(e) => handleSelectCarTransmission("Automatic")}
                        />
                        <label class="form-check-label" htmlFor="Automatic">
                          Automatic
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTransmission"
                        aria-expanded="true"
                        aria-controls="collapseTransmission"
                      >
                        <h5 className="text-dark mb-0"> Color </h5>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTransmission"
                    className="collapse"
                    aria-labelledby=""
                  >
                    <div className="card-body">
                      <div className="form-group mb-0 ">
                        <label htmlFor="carcolor"></label>
                        <select onChange={e => setExteriorColor(e.target.value)} className="w-full">
                          <option value={'White'}>White</option>
                          <option value={'Black'}>Black</option>
                          <option value={'Gray'}>Gray</option>
                          <option value={'Blue'}>Blue</option>
                          <option value={'Silver'}>Silver</option>
                          <option value={'Green'}>Green</option>
                          <option value={'Yellow'}>Yellow</option>
                          <option value={'Golden'}>Golden</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="">
                    <h5 className="mb-0 ">
                      <button
                        className=" position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTen"
                        aria-expanded="true"
                        aria-controls="collapseTen"
                      >
                        <h5 className="text-dark mb-0"> Owner </h5>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTen" className="collapse" aria-labelledby="">
                    <div className="card-body">
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="First-Owner"
                          id="firstOwner"
                          onChange={() => handleSelectCarOwener("First Owner")}
                        />
                        <label class="form-check-label" htmlFor="firstOwner">
                          First Owner
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Second-Owner"
                          id="secondOwner"
                          onChange={() => handleSelectCarOwener("Second Owner")}
                        />
                        <label class="form-check-label" htmlFor="secondOwner">
                          Second Owner
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resultDiv col-8  ">
            <span className="mr-3 font-weight-bold"> Sort By:</span>
            <select
              class="custom-select w-25"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option selected value={-1}>
                Latest
              </option>
              <option value="1">Old</option>
              {/* <option value="1">Price: High to Low</option>
              <option value="1">Low to High</option> */}
            </select>

            {carList &&
              carList.map(
                (
                  {
                    _id,
                    model,
                    type,
                    phone,
                    images,
                    mileage,
                    year,
                    registeredIn,
                    carBrand,
                    transmission,
                    engineCC,
                    fuel,
                    price
                  },
                  i
                ) => (
                  <Link
                    key={i}
                    to={`/${type === "New" ? "NewCar" : "UsedCar"}/${_id}`}
                    className=""
                  >
                    <div className="mainDiv mb-4 mt-4 row  bg-white p-3">
                      <div className="imgDiv">
                        {images.length >0 && <img
                          className="card-img-top"
                          src={images[0]}
                          alt="Suzukia-specia Car"
                        />}
                      </div>

                      <div className="detailDiv ml-4">
                        <div className="row justify-content-between ml-0">
                          <h4>{model}</h4>
                          <div className="numBox col-5">
                            <i className=" fas fa-phone-alt mr-3"></i>
                            {/*  <span>View Number</span>   if user is Not logged in, dont show number */}
                            <span>{phone}</span>{" "}
                            {/* if user is logged in, show him number */}
                          </div>
                        </div>
                        <h5 className="mt-3">PKR { price && price} Lacs</h5>
                        <p className="text-danger">{registeredIn && registeredIn}</p>
                        <span className="mr-3 text-dark">{year && year}</span>
                        <span className="mr-3 text-dark">{ transmission && transmission}</span>
                        <span className="mr-3 text-dark">{ engineCC && engineCC} cc</span>
                        <span className="mr-3 text-dark">{mileage && mileage} K/M</span>
                        <span className="mr-3 text-dark">{ fuel && fuel}</span>
                        <span className="mr-3 text-dark">{carBrand && carBrand}</span>
                      </div>
                    </div>
                  </Link>
                )
              )}
            {carList && carList.length < 1 && (
              <div className="mt-4">No car found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
