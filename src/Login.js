import React, { useState } from 'react';
import './login.css'
import account from './account.svg'

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [setErrors] = useState([]);

  const handleChange = (e) => {
    console.log("name", e.target.name)
    console.log("value", e.target.value)

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
          // setErrors(errors.errors);
        });
      }
    });
  };

  console.log(formData)
  return (
    //     <div id="login">
    //       <ul>
    //           <form>
    //             <label>Login
    //               <input 
    //                 type="text" 
    //                 name="name"
    //                 placeholder="username"
    //                 value={formData.name} 
    //                 onChange={handleChange} 
    //               />
    //             </label>
    //             <label>Password
    //               <input 
    //                 type="text" 
    //                 name="password"
    //                 placeholder="password"
    //                 value={formData.password} 
    //                 onChange={handleChange} 
    //               />
    //             </label>
    //           </form>
    //       </ul>
    //       <button className="login-btn"
    //           onClick={handleSubmit}>
    //           Login
    //       </button>
    // </div>
    <div className="loginMainContainer" id='login'>
      <div className="loginSubContainer">
        <div className="loginContainer">
          <div className="accountView">
            <img src={account} alt="" />
          </div>
          <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Sign In</p>
          <form>

            <div className="inputView">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="inputStyle"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="inputView">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputStyle"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="loginBtnView" onClick={handleSubmit}>
            <button className="loginBtn" onClick={handleSubmit}>Login</button>
          </div>
          <div className="rememberView">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ margin: 0, marginRight: 5, cursor: "pointer" }}
              />
              <p style={{ margin: 0 }}>Remember Me</p>
            </div>
            <p style={{ margin: 0 }}>Forgot Password</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;