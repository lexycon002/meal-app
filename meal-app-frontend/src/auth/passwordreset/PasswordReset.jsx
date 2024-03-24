import React, { useState } from 'react';
import "./passwordreset.css";
import { GiPadlock } from "react-icons/gi";
import PasswordResetImg from "../../assets/passreset.png"
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";


function PasswordReset() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = (e) => {
      e.preventDefault();
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
        .then(() => {
        setIsLoading(false)
        toast.success("Check your mail for a reset link")
    })
    .catch((error)=> {
        setIsLoading(false)
        toast.error(error.message)
    })
  }
  return (
    <div>
        <div className="navbar__logo">
            <h3>Food<span>Yoo</span></h3>
        </div>
      <div className="password__reset__container">
        <div className="password__reset__img">
            <img src={PasswordResetImg} alt="login.." />
        </div>
        <div className="password__reset__form">
          <div className="passkey__icon">
            <GiPadlock className="pass__icon"/>
          </div>
            <div className="password__reset__info">
                <h5>Forgot your password?</h5>
            </div>
            <form onSubmit={resetPassword} className="form__container">
                    <div className="form__input__cont">
                        <input
                        className="form_input"
                        type="text" name="name"
                        required
                        value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <label className="form__email">Email</label>
                    </div>
                    <button type="submit">Reset Password</button>
                <div className="forgot__password">
                  <p>
                    <Link className="forgot__password__link" to="/login">Login</Link>
                  </p>
                  <p>
                    <Link className="forgot__password__link" to="/">Register</Link>
                  </p>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default PasswordReset