import React, { useState } from "react";
import account from "./account.svg";

function Signup({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setErrors] = useState([]);

  console.log("error", error);
  const handleChange = (e) => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
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
          console.log("signup", errors.errors);
          setErrors(errors.errors);
        });
      }
    });
  };

  return (
    // <div id="login">
    //     <ul>
    //         <form>
    //             <label>Signup
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     placeholder="username"
    //                     value={formData.user}
    //                     onChange={handleChange}
    //                 />
    //             </label>
    //             <label>Email
    //                 <input
    //                     type="text"
    //                     name="email"
    //                     placeholder="email"
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                 />
    //             </label>
    //             <label>Password
    //                 <input
    //                     type="text"
    //                     name="password"
    //                     placeholder="password"
    //                     value={formData.password}
    //                     onChange={handleChange}
    //                 />
    //             </label>
    //         </form>
    //     </ul>
    //     <button className="signup-btn"
    //         onClick={handleSubmit}>
    //         Sign Up
    //     </button>
    // </div>
    <div className="signUpMainContainer" id="signup">
      <div className="signUpSubContainer">
        <div className="signUpContainer">
          <div className="accountView">
            <img src={account} alt="" />
          </div>
          <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Sign Up</p>
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
                type="text"
                name="email"
                placeholder="Email"
                className="inputStyle"
                value={formData.email}
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
          <div className="signUpBtnView" onClick={handleSubmit}>
            <button className="signUpBtn" onClick={handleSubmit}>
              Sign Up
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
