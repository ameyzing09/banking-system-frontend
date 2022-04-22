import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.setItem("userLoggedIn", false);
        navigate('/login')
      };
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout