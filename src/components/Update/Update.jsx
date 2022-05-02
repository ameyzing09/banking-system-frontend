import React from 'react'
import './Update.css'

function Update() {
  return (
    
    <div className="updForm">
    <div className="updateForm">
      <input type="submit" className="nameBtn" value="name"/>
      <input type="submit" className="addressBtn" value="address"/>
      <input type="submit" className="phnNoBtn" value="phn No"/>
      <label>Customer name</label>
      <input type="text" className="cName" placeholder="new name"/>
      <label>Address</label>
      <input type="text" className="cAddress" placeholder="new address"/>
      <label>Phone number</label>
      <input type="text" className="cPhnNo" placeholder="new phone number"/>
      <input type="submit" className="updateBtn" value="update"/>
      <input type="submit" className="backBtn" value="back"/>
    </div>
  </div>
)
  }

export default Update;