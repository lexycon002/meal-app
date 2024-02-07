import React from 'react'
import ReactDOM from 'react-dom';
import './loader.css';
import loaderImg from '../../assets/loader.png'


function Loader() {
  return ReactDOM.createPortal (
    <div className="loader-container">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader