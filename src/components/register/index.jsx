import React from 'react'
import './index.css'

export default function Register() {
  return (
    <div className="register">
      <form method="post">
        <div className="register-form-div">
          <h1>Account Opening</h1>
          <label htmlFor="account-holder-name">Full Name</label>
          <input type="text" id="account-holder-name" placeholder='Enter customer name' />
          <label htmlFor="account-holder-address">Address</label>
          <textarea name="accountHolderAddress" id="account-holder-address" cols="30" rows="10" placeholder='Enter customer address'></textarea>
          <label htmlFor="account-holder-phone">Contact Number</label>
          <input type="number" id="account-holder-phone" placeholder='Enter customer phone number' />
          <label htmlFor="account-holder-dob">Date of Birth</label>
          <input type="date"/>
          <label htmlFor="account-holder-gender">Gender</label>
          <select id="account-holder-gender" name="accountHolderGender">
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHER">OTHER</option>
          </select>
          <label htmlFor="account-holder-type">Account Type</label>
          <select id="account-holder-type" name="accountHolderType">
            <option value="SAVING">SAVING</option>
            <option value="CURRENT">CURRENT</option>
          </select>
          <label htmlFor="account-holder-balance">Balance</label>
          <input id="account-holder-balance" type="number" name="accountHolderBalance" placeholder='Enter customer account balance' defaultValue={0}/>
        </div>
      </form>
    </div>
  )
}