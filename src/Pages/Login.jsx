import axios from "axios";
import React from "react";
import { useState} from "react";
import { login, register } from "../Requests/AuthRequests";
import { useNavigate } from "react-router-dom";
import { authAction } from "../Store/Slice/authSlice";
import { useDispatch } from "react-redux";

import "./Login.css";
import user_icon from "../assets/LoginIcon/user.png";
import password_icon from "../assets/LoginIcon/password.jpg";
import email_icon from "../assets/LoginIcon/email.jpg";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const LoginHandler = async (event) => {
    setIsPending(true);
    event.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const res = await login(data);
      dispatch(authAction.setAuth({...res.data}))
      navigate('/Blog')
    } catch (err) {
      console.log(err)
      window.alert(err.response.data.message);
    }
  };

  const SignupHandler = (event) => {
    setIsPending(true)
    event.preventDefault();
    const data = {
      username,
      password,
      email,
    };
    window.location.reload()
  };

  return (
    <div className="container">
      <div className="grid justify-items-center grid-cols-3 ml-auto mr-auto">
        <span
          className={isSignup ? "text" : "text gray"}
          onClick={() => setIsSignup(true)}
        >
          {" "}
          Sign Up{" "}
        </span>
        <span className="text">| </span>
        <span
          className={isSignup ? "text gray" : "text"}
          onClick={() => setIsSignup(false)}
        >
          Login{" "}
        </span>
      </div>
      <div className="inputs">
        <div className="input" p>
          <img src={user_icon} alt=""></img>
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        {isSignup ? (
          <div className="input">
            <img src={email_icon} alt=""></img>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
        ) : (
          <div></div>
        )}
        <div className="input">
          <img src={password_icon} alt=""></img>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
      </div>
      <form
        className="submit-container"
        onSubmit={isSignup ? SignupHandler : LoginHandler}
      >
        {!isPending ? (
          <button className="submit">{isSignup ? "Sign Up" : "Login"}</button>
        ) : (
          <div className="submit-gray">{isSignup ? "Sign Up" : "Login"}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
