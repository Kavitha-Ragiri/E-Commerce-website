import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function loginSubmit(e){
    e.preventDefault();
    console.log("UserName:", userName);
    console.log("Password:", password);
    navigate('/');
    localStorage.setItem('isLoggedIn', 'true');
    toast.success("You are Successfully LoggedIn to ShopEase")

  }

  return (
    <div style={{width:"100%", height:"100%", backgroundColor:"orange"}}>

  
    <div 
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", }}
    >
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        
        <h3 className="text-center mb-4">Login</h3>

        <form className="d-flex flex-column gap-3" onSubmit={loginSubmit}>
          
          <div className="form-group">
            <label className="mb-1">Username</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="Enter username"
              value={userName} 
              name="username"
              onChange={(e)=>setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="mb-1">Password</label>
            <input 
              type="password" 
              className="form-control"
              placeholder="Enter password"
              value={password} 
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Login
          </button>

        </form>
      </div>
    </div>
      </div>
  )
}

export default Login;
