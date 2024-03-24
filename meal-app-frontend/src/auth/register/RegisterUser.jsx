import React, { useState } from 'react';
import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import RegisterImg from "../../assets/registerUser.png"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase/config"
import {createUserWithEmailAndPassword} from "firebase/auth";



function RegisterUser() {
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
        if ( password !== cpassword ) {
          toast.error("password unmatch")
        } else {
          createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful");
        navigate("/login")
    })
    .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
  });
      }
    }

    return (
    <>
        <div className="navbar__logo">
            <h3>Food<span>Yoo</span></h3>
        </div>
    <div className="register__user__container">
        <div className="register__user__img">
            <img src={RegisterImg} alt="login.." />
        </div>
        <div className="register__user__form">
            <div className="register__user__info">
                <h5>Register</h5>
            </div>
            <form onSubmit={registerUser} className="form__container">
                <div className="form__input__wrapper">
                    <div className="form__input__cont">
                        <input
                        className="form_input"
                        type="text" name="name"
                        required
                        value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <label className="form__email">Email</label>
                    </div>
                    <div className="form__input__cont">
                        <input
                        className="form_input"
                        type="password" name="name"
                        required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <label  className="form__pass">Create Password</label>
                    </div>
                    <div className="form__input__cont">
                        <input
                        className="form_input"
                        type="password" name="name"
                        required
                        value={cpassword} onChange={(e) => setCPassword(e.target.value)}
                        />
                        <label  className="form__pass">Confirm Password</label>
                    </div>
                    <button type="submit">Register</button>
                </div>
                {/* <div className="space__bar">
                    <div className="border__left"></div>
                        <p>Or</p>
                    <div className="border__right"></div>
                </div> */}
                {/* <div className="register__user__option">
                    <button className="google__login" onClick={signInWithGoogle}>
                        <img src={googleImg} alt="google_img" />
                        <p>use google account</p>
                    </button>
                </div> */}
                <div className="user__register">
                    <p>Already have an account?</p>
                    <p><Link className="register" to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default RegisterUser;