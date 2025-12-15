import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
    toast.success("LoggedIn to ShopEase")

  }

  return (
    <div style={{width:"100%", height:"100%", backgroundColor:"#03042fff"}}>

  
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

               <div className="d-flex flex-column align-items-center">
              <button
                type="submit"
                className="btn btn-primary btn-sm mt-3 px-4 fw-semibold"
              >
                Login
              </button>

              <p className="text-center small text-muted mt-3 mb-2">
                New here? Create an account below <Link
                to="/register"
              >
                Register
              </Link>
              </p>

              
            </div>

 

        </form>
      </div>
    </div>
      </div>
  )
}

export default Login;
