import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({
  loginData,
  setLoginData,
  userLoggedIn,
  setUserLoggedIn,
}) {
  let navigate = useNavigate();
  
  useEffect(() => {
    console.log("Login component mounted");
    if (
      localStorage.getItem("userLoggedIn") === null ||
      localStorage.getItem("userLoggedIn") === "false"
    ) {
      setLoginData({});
    } else {
      navigate("/dashboard");
    }
  }, [setLoginData, navigate]);


  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async () => {
    if (loginData) {
      try {
        console.info("loginData", loginData);
        const loginResponse = await axios.post(
          "http://localhost:8080/login",
          loginData
        );
        console.info(loginResponse);
        if (
          loginResponse.data.userLoggedIn &&
          loginResponse.data.code === 200
        ) {
          console.info("In if statement");
          setUserLoggedIn(loginResponse.data.userLoggedIn);
          localStorage.setItem("userLoggedIn", loginResponse.data.userLoggedIn);
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("Error in login : ", err.code);
        if (err.code === 401) {
          alert("Invalid username or password");
        }
        if (userLoggedIn && localStorage.getItem("userLoggedIn") === "true") {
          localStorage.setItem("userLoggedIn", userLoggedIn);
          alert("User already logged in");
          navigate("/dashboard");
        }
      }
    } else {
      console.info("In else statement");
      alert("Please enter username or password. Something is missing.");
    }
  };
  return (
    <div className='loginTab'>
      {/* <label htmlFor='loginId'>Login ID</label> */}
      <input
        onChange={handleLoginInputChange}
        name='username'
        placeholder='Enter your login ID'
        id='loginId'
        type='text'
        required
      />
      {/* <label htmlFor='passwordTag'>Password</label> */}
      <input
        onChange={handleLoginInputChange}
        name='password'
        placeholder='Enter your password'
        id='passwordTag'
        type='password'
        required
      />
      <button className='loginBtn' onClick={handleLoginSubmit}>
        Login
      </button>
    </div>
  );
}
