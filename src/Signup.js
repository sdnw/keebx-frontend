import React, {useState} from 'react';

function Signup ({setCurrentUser}){
    const [formData,setFormData]= useState({
        name: "",
        password: "",
    })
 
    const[error,setErrors]=useState([])
 
 console.log("error", error)
 const handleChange =(e)=> {
    console.log("name", e.target.name)
    console.log("value", e.target.value)

     setFormData({
         ...formData,
         [e.target.name]: e.target.value
     })
 }
 
 const handleSubmit = (e) => {
     e.preventDefault();
     fetch("/users",{
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
     }).then((res)=>{
         if(res.ok){
             res.json().then((user)=>{
                 console.log(user)
                 setCurrentUser(user)
             });
         }else{
             res.json().then((errors)=>{
                 console.log("signup",errors.errors)
                 setErrors(errors.errors)
             })
         }
     })
 }
     
 
return(
    <div id="login">
        <ul>
            <form>
                <label>Signup
                    <input 
                        type="text" 
                        name="name"
                        placeholder="username"
                        value={formData.user} 
                        onChange={handleChange} 
                    />
                </label>
                <label>Password
                    <input 
                        type="text" 
                        name="password"
                        placeholder="password"
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </label>
            </form>
        </ul>
        <button className="signup-btn"
            onClick={handleSubmit}>
            Sign Up
        </button>
    </div>
    )
}

export default Signup;