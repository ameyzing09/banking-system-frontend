import React from 'react'

export default function Register() {
  return (
    <div className='register'>

      <label forName="name">Name:</label>
      <input type="text" id="name"></input>
      <br/>

      <label forName="phone">Enter a phone number:</label>
      <input type="tel" id="phone" pattern="[0-9]{4}-[0-9]{4}-[0-9]{2}" required></input>
      <br/>

      <label forName="email">Enter your email:</label>
      <input type="email" id="email"></input>
      <br/> 

      <label forName="dob">Date of Birth:</label>
      <input type="date" id="dob"></input>
      <br/>

      <label>Gender:</label>
      <input type="radio" id="gender" name="gender" value="male"/> Male    
      <input type="radio" id="gender" name="gender" value="female"/> Female 
      <input type="radio" id="gender" name="gender" value="others"/> Others   
      <br/>

      <label forName="occupation">Occupation:</label>
      <input type="text" id="occupation"></input>
      <br/>

      <label>PIN Code:</label>
      <input type="text" pattern="[0-9]{6}" title="Five digit pincode" />
      <br/>

      <label forName="income">Gross Income:</label>
      <select id="income" name="income">
        <option value="1">rgh</option>
        <option value="2">dcfvgh</option>
        <option value="3">sdfgh</option>
        <option value="4">dfg</option>
      </select>
      <br/>

      <label>  Marital Status:</label>
      <input type="radio" id="marital" name="marital" value="married"/> Married    
      <input type="radio" id="marital" name="marital" value="unmarried"/> Unmarried 
      <input type="radio" id="marital" name="marital" value="widow"/> Widow
      <input type="radio" id="marital" name="marital" value="divorced"/> Divorced
      <input type="radio" id="marital" name="marital" value="separated"/> Separated
         
      <br/>

      <button className='registerBtn'>SUBMIT</button>
    </div>
  )
}