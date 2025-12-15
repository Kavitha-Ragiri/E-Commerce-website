import React, { useState } from 'react'
import { GrLocal } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  function registerSubmit(e) {
  e.preventDefault();

  const userData = {
    fullName,
    userName,
    password,
    email,
    number,
    address,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  navigate("/login");
}


  return (

     <div style={{ width: "100%", minHeight: "100vh" , padding:"5px"}}>
  <div
    className="container d-flex justify-content-center pt-10"
    style={{
      paddingTop: "100px", paddingBottom: "40px"
    }}
  >
    <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
      
      <h3 className="text-center mb-2">Register</h3>

      <form className="d-flex flex-column gap-3" onSubmit={registerSubmit}>
        
        {/* Full Name */}
        <div className="form-group">
          <label className="mb-1">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="mb-1">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label className="mb-1">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label className="mb-1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label className="mb-1">Address</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-2">
          Register
        </button>
        <p>Already have an account? <Link to={"/login"}>Login Here</Link></p>
      </form>
    </div>
  </div>
</div>

  )
}

export default Register;
