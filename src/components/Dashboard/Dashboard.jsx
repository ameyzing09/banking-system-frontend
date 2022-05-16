import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Dashboard.css";

export default function Dashboard() {
  let navigate = useNavigate();
  useEffect(() => {
    console.log('Dashboard component mounted');
    if (localStorage.getItem("userLoggedIn") === null || localStorage.getItem("userLoggedIn") === "false") {
      console.log('In check()')
      navigate("/");
    }
  }, [navigate]);
  const handleLogout = () => {
    if (
      localStorage.getItem("userLoggedIn") &&
      localStorage.getItem("userLoggedIn") === "true"
    ) {
      localStorage.setItem("userLoggedIn", false);
      navigate("/");
    } else {
      console.log("User not logged in");
      alert("User not logged in");
      navigate("/");
    }
  };

  return (
    <div className='dashboard'>
      <Link className='sidebar register bold' to='/accountOpening'>Register</Link>
      <Link className='sidebar delete' to='/delete'>Delete</Link>
      <Link className='sidebar deposit' to='/transaction'>Transaction</Link>
      <Link className='sidebar summary' to='/viewTransaction'>Summary</Link>
      <span className='sidebar logout' onClick={handleLogout}>
        Logout
      </span>
    </div>
  );
}
