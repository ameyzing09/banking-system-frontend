import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AccountOpening from "./components/AccountOpening/AccountOpening";
import ViewTransaction from "./components/ViewTransaction/ViewTransaction";

function App() {
  const [loginData, setLoginData] = useState({
      accountHolderName: "",
      accountHolderAddress: "",
      accountHolderPhone: "",
      accountHolderDob: "",
      accountHolderGender: "",
      accountHolderType: "",
      accountHolderBalance: 0
  });
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
               <Login
                  loginData={loginData}
                  setLoginData={setLoginData}
                  userLoggedIn={userLoggedIn}
                  setUserLoggedIn={setUserLoggedIn}
               />
              // <ViewTransaction/>
            }
          />
          <Route path='dashboard' element={<Dashboard />} exact/>
          <Route path='accountOpening' element={<AccountOpening />} exact/>
          <Route path='viewTransaction' element={<ViewTransaction />} exact/>
          {/* <Route path='*' element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
