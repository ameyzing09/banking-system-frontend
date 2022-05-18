import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import "./Login.css";

export default function Login({
  loginData,
  setLoginData,
  userLoggedIn,
  setUserLoggedIn,
}) {
  let navigate = useNavigate();

  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Login component mounted");
    if (
      localStorage.getItem("userLoggedIn") === null ||
      localStorage.getItem("userLoggedIn") === "false"
    ) {
      console.log("In check()");
      setLoginData({});
    } else {
      navigate("/dashboard");
    }
  }, [setLoginData, navigate]);

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(loginData);
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
          setSnackBarMessage("Invalid username or password");
          setOpen(true);
        }
        if (userLoggedIn && localStorage.getItem("userLoggedIn") === "true") {
          localStorage.setItem("userLoggedIn", userLoggedIn);
          setSnackBarMessage("User already logged in");
          setOpen(true);
          navigate("/dashboard");
        }
      }
    } else {
      console.info("In else statement");
      setSnackBarMessage("Please enter username or password. Something is missing.");
      setOpen(true);
    }
  };
  return (
    <>
      {/* <label htmlFor='loginId'>Login ID</label> */}
      <div className='loginTab'>
        <Snackbar
          open={open}
          message={snackBarMessage}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        />
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
        <input
          type='submit'
          className='loginBtn'
          onClick={handleLoginSubmit}
          value='Login'
        />
      </div>
    </>
  );
}
