import React from 'react'
import './CashDeposit.css'

function CashDeposit() {
  return (
    
  <div className="depForm">
    <div className="depositForm">
      <label>Account number</label>
      <input type="text" className="acNo" placeholder="Account Number"/>
      <label>Customer name</label>
      <input type="text" className="custName" placeholder="Account number"/>
      <label>Amount in words</label>
      <input type="text" className="amtWrds" placeholder="Account number"/>
      <label>Amount in figures</label>
      <input type="text" className="amtFigs" placeholder="Account number"/>

      <input type="submit" className="depositBtn" value="deposit"/>
      <input type="submit" className="backBtn" value="back"/>
    </div>
  </div>
)
  }

export default CashDeposit;