import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Loader from "./components/loader/Loader";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/Home";




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
          <BrowserRouter>
              <Header/>
              <Navbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
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
