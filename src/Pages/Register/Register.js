import React, { useState } from 'react'
import { GrLocal } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  function registerSubmit(e){
    e.preventDefault();
    localStorage.setItem('userName', userName);
    // localStorage.setItem('password', password);
    localStorage.setItem('number', number);
    localStorage.setItem('address', address);
    navigate('/login');
  }

  return (

     <div style={{width:"100%", height:"100%", backgroundColor:"orange"}}>
    <div 
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor:"orange" 
        
       }}
    >
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        
        <h3 className="text-center mb-4">Register</h3>

        <form className="d-flex flex-column gap-3" onSubmit={registerSubmit}>
          
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
            <label className="mb-1">Phone Number</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="Enter Phone Number"
              value={number} 
              name="number"
              onChange={(e)=>setNumber(e.target.value)}
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

          <div className="form-group">
            <label className="mb-1">Address</label>
            <textArea 
              type="text" 
              className="form-control"
              placeholder="Enter Address"
              value={address} 
              name="address"
              cols='30'
              rows='3'
              onChange={(e)=>setAddress(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Register
          </button>

        </form>
      </div>
    </div>
</div>
  )
}

export default Register;
