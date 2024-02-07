import React, { useState, useEffect } from 'react'
import './discount.css';
import barger from '../../assets/barger.png'


function Discount() {

    const [time, setTime] = useState({
    days: 365,
    hours: 18,
    minutes: 14,
    seconds: 18,
  });

    useEffect(() => {
    const interval = setInterval(() => {
      // Updating timer values
        setTime((prevTime) => {
        const newTime = { ...prevTime };
    if (newTime.seconds > 0) {
        newTime.seconds -= 1;
    } else {
        newTime.seconds = 59;
    if (newTime.minutes > 0) {
        newTime.minutes -= 1;
    } else {
        newTime.minutes = 59;
        if (newTime.hours > 0) {
        newTime.hours -= 1;
    } else {
        newTime.hours = 23; // Reset hours and decrement days
        if (newTime.days > 0) {
            newTime.days -= 1;
        }
        }
    }
    }
    // Add leading zero to seconds when below 10
    newTime.seconds = newTime.seconds.toString().padStart(2, '0');
    // Add leading zero to minutes when below 10
    newTime.minutes = newTime.minutes.toString().padStart(2, '0');
    // Add leading zero to hour when below 10
    newTime.hours = newTime.hours.toString().padStart(2, '0');

    return newTime;
});
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="discount__container">
        <div className="discount__wrapper">
                <h2>Special discount for all food products</h2>
                <p className="discount__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt alias totam voluptate iusto vitae
                    provident cupiditate odit dignissimos aspernatur iure.
                </p>
            <div className="discount__items">
                <div className="discount__timer">
                    <div className="days  cont_time">
                        <p className="days">{time.days}  :</p>
                        <span>Days</span>
                    </div>
                    <div className="hours  cont_time">
                        <p className="hours">{time.hours}  :</p>
                        <span>Hours</span>
                    </div>
                    <div className="minutes  cont_time">
                        <p className="minutes">{time.minutes}  :</p>
                        <span>Minutes</span>
                    </div>
                    <div className="seconds  cont_time">
                        <p className="seconds">{time.seconds} </p>
                        <span>Seconds</span>
                    </div>
                </div>
                <span className="btn">
                    <button>order now</button>
                </span>
            </div>
        </div>
        <div className="discount__right__cont">
            <img src={barger} alt="barger__img" />
        </div>
    </div>
  )
}

export default Discount