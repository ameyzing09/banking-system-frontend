import React from 'react'
import './CashWithdraw.css'

function CashWithdraw() {
  return (
    <div className="withForm">
    <div className="withdrawForm">
      <label>Account number</label>
      <input type="text" className="actNo" placeholder="Account Number"/>
      <label>Customer name</label>
      <input type="text" className="cusName" placeholder="Account number"/>
      <label>Amount in words</label>
      <input type="text" className="amtWrd" placeholder="Account number"/>
      <label>Amount in figures</label>
      <input type="text" className="amtFig" placeholder="Account number"/>

      <input type="submit" className="withdrawBtn" value="withdraw"/>
      <input type="submit" className="backBtn" value="back"/>
    </div>
  </div>
)
  }

export default CashWithdraw;