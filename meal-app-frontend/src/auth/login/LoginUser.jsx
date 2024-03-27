import React, { useState } from 'react';
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import loginImg from "../../assets/register.png"
import googleImg from "../../assets/google.png";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function LoginUser() {
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        navigate("/homepage")
        toast.success("Login Successfully");
    })
    .catch((error) => {
    setIsLoading(false);
    toast.error("Email or password incorrect");
    });
    }

    // SignIn with Google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("Login successfully")
            navigate("/homepage")
        }).catch((error) => {
            console.error(error);
            toast.error("Failed to sign in with Google. Please try again.");
            // toast.error(error.message)
        });
    }
    return (
    <div className="container">
        <div className="navbar__logo">
            <h3>Food<span>Yoo</span></h3>
        </div>
    <div className="login__user__container">
        <div className="login__user__img">
            <img src={loginImg} alt="login.." />
        </div>
        <div className="login__user__form">
            <div className="login__user__info">
                <h5>Login</h5>
            </div>
            <form onSubmit={loginUser} className="form__container">
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
                        <label  className="form__pass">Password</label>
                    </div>
                    <button type="submit">Login</button>
                </div>
                <div className="forgot__password">
                    <p><Link className="forgot__password__link" to="/passwordreset">Forgot Password?</Link></p> 
                </div>
                <div className="space__bar">
                    <div className="border__left"></div>
                        <p>Or</p>
                    <div className="border__right"></div>
                </div>
                <div className="login__user__option">
                    <button className="google__login" onClick={signInWithGoogle}>
                        <img src={googleImg} alt="google_img" />
                        <p>use google account</p>
                    </button>
                </div>
                <div className="user__register">
                    <p>Don't have an account?</p>
                    <p><Link className="register" to="/">Register</Link></p>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default LoginUser;