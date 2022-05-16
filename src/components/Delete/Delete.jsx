import React from 'react'
import './Delete.css'

function Delete() {
  return (
    
    <div className="delForm">
    <div className="deleteForm">
      <label>Customer Id</label>
      <input type="text" className="custId" placeholder="Customer ID"/>
      <label>Account number</label>
      <input type="text" className="accNo" placeholder="Account number"/>
      <input type="submit" className="deleteBtn" value="delete"/>
      <input type="submit" className="backBtn" value="back"/>
    </div>
  </div>
)
  }

export default Delete;