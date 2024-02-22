import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Loader from "./components/loader/Loader";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/Home";
import Cart from "./components/mycart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import { ToastContainer } from "react-toastify";


function App() {
  const [appLoading, setAppLoading] = useState(true);
  useEffect(()=> {
    const finishLoading = () => {
      setAppLoading(false);
    };
    setTimeout(finishLoading, 1000);
  },[])
  return (
    <div className="app">
      {appLoading ? <Loader /> : (
        <>
        <ToastContainer />
          <BrowserRouter>
              <Header/>
              <Navbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/checkout" element={<CheckOut/>} />
              <Route path="/mycart" element={<Cart/>} />
            </Routes>
              <Support />
              <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
