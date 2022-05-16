import React, { useState } from 'react'
import axios from 'axios'
import './AccountOpening.css'
import { Link } from 'react-router-dom'

export default function AccountOpening() {
const [input, setInput] = useState({})

const handleChange = event => {
  const { name, value } = event.target
  setInput({ ...input, [name]: value })
}

const handleSubmit = async e => {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:8080/accountOpening', input)
      console.log("Response : ", response.data)
      alert(`Account created successfully and account number is ${response.data.data.accountNumber}`)
      setInput({})
    } catch (err){
      console.error("Error : ", err)
      // console.error("Error in account registration! Something went wrong!!: ", err)
      alert("Something went wrong!!! Please try again later\nServer is unreachable...!!")
      setInput({});
    }
}
  return (
    <div className="register-div">
      <form onSubmit={handleSubmit} method="post">
          <h1 className='register-heading'>Account Opening</h1>
          <label>Full Name</label>
          <input onChange={handleChange} required type="text" name="accountHolderName" id="account-holder-name" placeholder='Enter customer name' />
          <label htmlFor="account-holder-address">Address</label>
          <textarea onChange={handleChange} required name="accountHolderAddress" id="account-holder-address" cols="30" rows="10" placeholder='Enter customer address'></textarea>
          <label htmlFor="account-holder-phone">Contact Number</label>
          <input onChange={handleChange} required type="number" name="accountHolderPhone" id="account-holder-phone" placeholder='Enter customer phone number' />
          <label htmlFor="account-holder-dob">Date of Birth</label>
          <input onChange={handleChange} required name="accountHolderDob" type="date"/>
          <label htmlFor="account-holder-gender">Gender</label>
          <select onChange={handleChange} required id="account-holder-gender" name="accountHolderGender">
            <option value="Choose One" hidden>Choose One</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHER">OTHER</option>
          </select>
          <label htmlFor="account-holder-type">Account Type</label>
          <select onChange={handleChange} required id="account-holder-type" name="accountHolderType">
            <option value="Choose One" hidden>Choose One</option>
            <option value="SAVING">SAVING</option>
            <option value="CURRENT">CURRENT</option>
          </select>
          <label htmlFor="account-holder-balance">Balance</label>
          <input onChange={handleChange} required id="account-holder-balance" type="number" name="accountHolderBalance" placeholder='Enter customer account balance' defaultValue={0}/>
          <input type="submit" className="submitBtn" />
          <Link to='/dashboard'><input type="submit" value="Back" className="backBtn" /></Link>
      </form>
    </div>
  )
}