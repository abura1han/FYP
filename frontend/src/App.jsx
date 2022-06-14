import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import UsedCars from "./pages/UsedCars";
import UsedCarDetails from "./pages/UsedCarDetails";
import NewCarDetails from "./pages/NewCarDetails";
import NewCars from "./pages/NewCars";
import Videos from "./pages/Videos";
import VideoPost from "./pages/VideoPost";
import VideoDetails from "./pages/VideoDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogDetails from "./pages/BlogDetails";
import AutoStore from "./pages/AutoStore";
import Advertise from "./pages/Advertise";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import AdmProfile from "./pages/AdmProfile";
import Posts from "./pages/Posts";
import Pending from "./pages/Pending";
import Reports from "./pages/Reports";
import Users from "./pages/Users";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import Reset from "./pages/Reset";
import NewPassword from "./pages/NewPassword";
import Cart from "./pages/cart";

import { initialState, reducer } from "./reducer/useReducer";
import {
  NewCarContext,
  UsedCarContext,
  PendingCarContext,
} from "./reducer/carContext";
import AdvertiseParts from "./pages/AdvertiseParts";
import CarPartDetail from "./pages/CarPartDetail";
import CarSearch from "./pages/CarSearch";
import StoreContext from "./reducer/CartContext";

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

//contextAPI
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState([]);
  const [usedCarList, setUsedCarList] = useState([]);
  const [newCarList, setNewCarList] = useState([]);
  const [pendingCarCount, setPendingCarCount] = useState([]);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <StoreContext.Provider value={{ cart, setCart }}>
          <UsedCarContext.Provider value={{ usedCarList, setUsedCarList }}>
            <NewCarContext.Provider value={{ newCarList, setNewCarList }}>
              <PendingCarContext.Provider
                value={{ pendingCarCount, setPendingCarCount }}
              >
                <Router>
                  <Header />
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/checkout-success">
                      <>
                        <h2>
                          Your cart checked out successfull. Check your email
                        </h2>
                      </>
                    </Route>
                    <Route path="/Videos">
                      <Videos />
                    </Route>
                    <Route path="/VideoPost">
                      <VideoPost />
                    </Route>
                    <Route path="/VideoDetails">
                      <VideoDetails />
                    </Route>
                    <Route path="/UsedCar/:carId">
                      <UsedCarDetails />
                    </Route>
                    <Route path="/NewCar/:carId">
                      <NewCarDetails />
                    </Route>
                    <Route path="/Profile">
                      <Profile />
                    </Route>
                    <Route path="/AdmProfile">
                      <AdmProfile />
                    </Route>
                    <Route path="/Users">
                      <Users />
                    </Route>
                    <Route path="/Pending">
                      <Pending />
                    </Route>
                    <Route path="/Posts">
                      <Posts />
                    </Route>
                    <Route path="/Reports">
                      <Reports />
                    </Route>
                    <Route exact path="/UsedCars">
                      <UsedCars />
                    </Route>
                    <Route exact path="/NewCars">
                      <NewCars />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/register">
                      <Register />
                    </Route>
                    <Route path="/logout">
                      <Logout />
                    </Route>

                    <Route path="/FAQ">
                      <FAQ />
                    </Route>
                    <Route path="/Blog">
                      <Blog />
                    </Route>
                    <Route path="/BlogPost">
                      <BlogPost />
                    </Route>
                    <Route path="/BlogDetails">
                      <BlogDetails />
                    </Route>
                    <Route path="/AutoStore">
                      <AutoStore />
                    </Route>
                    <Route path="/CarPartDetails">
                      <CarPartDetail />
                    </Route>
                    <Route path="/Cart">
                      <Cart />
                    </Route>
                    <Route path="/search">
                      <CarSearch />
                    </Route>
                    <Route path="/Advertise">
                      <Advertise />
                    </Route>
                    <Route path="/AdvertiseParts">
                      <AdvertiseParts />
                    </Route>
                    <Route path="/ContactUs">
                      <ContactUs />
                    </Route>
                    <Route exact path="/reset">
                      <Reset />
                    </Route>
                    <Route path="/reset/:token">
                      <NewPassword />
                    </Route>
                    <Route>
                      <Error />
                    </Route>
                  </Switch>
                  <ToastContainer />
                  <Footer />
                </Router>
              </PendingCarContext.Provider>
            </NewCarContext.Provider>
          </UsedCarContext.Provider>
        </StoreContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
