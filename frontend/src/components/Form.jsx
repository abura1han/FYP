import React from "react";

const carBrandList = [
  "Choose Make",
  "Toyota",
  "Suzuki",
  "Honda",
  "KIA",
  "Audi",
  "BMW",
  "Acura",
  "Alfa",
  "Bentley",
  "Chrysler",
  "Daihatsu",
  "Ferrari",
  "FIAT",
  "Ford",
  "Hyundai",
  "Mercedes",
  "Jaguar",
  "Nissan",
  "Mitsubushi",
  "Porsche",
  "Tesla",
  "Range Rover",
  "Volkswagen",
  "Opel",
];

const carCityList = [
  "Select City",
  "Larkana",
  "Karachi",
  "Lahore",
  "Islamabad",
  "Peshawar",
  "Multan",
  "Rawalpindi",
  "Hydrabad",
  "Murree",
  "Sukkur",
  "Faisalabad",
  "Quetta",
  "Gujranwala",
  "Sargodha",
  "Sahiwal",
  "Okara",
  "jacobabad",
  "Kasur",
  "Attock",
  "Badin",
  "Jhelum",
  "Kamalia",
  "Khairpur",
  "Jamshoro",
  "Gwadar",
  "Mardan",
  "Mithi",
];

const Form = () => {
  return (
    <form
      id="dropdowns"
      action="/search"
      name="myForm"
      className="row flex-sm-row flex-column mt-4 align-items-center justify-content-center  p-lg-4 p-3 rounded z-index-1000 "
    >
      <div className="dropdown text-center">
        <select
          className="form-select form-select-lg btn btn-secondary dropdown-toggle py-2  w-100"
          aria-label=".form-select-lg example"
          name="carBrand"
        >
          {carBrandList.map((carBrand, i) => (
            <option key={i} value={i === 0 ? "" : carBrand}>
              {carBrand}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown text-center  mt-4 mt-sm-0 ">
        <select
          className="form-select form-select-lg btn btn-secondary dropdown-toggle py-2  w-100"
          aria-label=".form-select-lg example"
          name="registeredIn"
        >
          {carCityList.map((carCity, i) => (
            <option key={i} value={i === 0 ? "" : carCity}>
              {carCity}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown text-center  mt-4 mt-sm-0 ">
        <select
          className="form-select form-select-lg btn btn-secondary dropdown-toggle py-2"
          aria-label=".form-select-lg example"
          name="lower_price"
        >
          <option value={""}>Lower Price</option>
          <option value="10000">10000</option>
          <option value="1500000">1500000</option>
          <option value="2000000">2000000</option>
          <option value="2500000">2500000</option>
          <option value="3500000">3500000</option>
        </select>
        <select
          className="form-select form-select-lg btn btn-secondary dropdown-toggle py-2"
          aria-label=".form-select-lg example"
          name="upper_price"
        >
          <option value={""}>Higher Price</option>
          <option value="1500000">1500000</option>
          <option value="2000000">2000000</option>
          <option value="2500000">2500000</option>
          <option value="3000000">3000000</option>
          <option value="40000000">40000000</option>
        </select>
      </div>
      <input type="hidden" name="sortBy" value={"-1"} />
      <input type="hidden" name="year_end" value={"2022"} />
      <div id="searchBtn" className="text-center  mt-5 mt-sm-0 mb-0 ">
        <button type="submit">
          <i className="fas fa-search mr-2 " />
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
