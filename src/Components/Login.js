import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
  const navigate = useNavigate();
  let session;
  const [userLogin, setUserLogin] = useState({
    useremail:"",
    userpassword: ""
});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value })
  }
const handleSubmit = () =>{
  const userdata = JSON.parse(localStorage.getItem("useralldetail"));
  for(let i = 0;i<userdata.length; i++){ 
  if (userdata[i].useremail === userLogin.useremail && userdata[i].userpassword === userLogin.userpassword){
    session = userdata[i].useremail;
    navigate('/welcome');
   
  }
  else{
    alert("Invalid Input Details");
  }
}
}

  return (
    <div className="loginboard">
      <div className="loghead"><b>LOGIN HERE</b></div>
      <div className="logmid">
        <form name="login" onSubmit={handleSubmit}>
          <div className="everydiv">
            <label htmlFor="username">Enter Email</label>
            <input type="text" name="useremail" placeholder='Enter Email' id="textbox" value={userLogin.useremail}
                  onChange={handleInput}/>
          </div>
          <div className="everydiv">
            <label htmlFor="userpassword">Enter Password</label>
            <input type="password" name="userpassword" placeholder='Enter Password' id="textbox" value={userLogin.userpassword}
                  onChange={handleInput}/>
          </div>
          <button className="submitlogbtn"><b>SUBMIT</b></button>
        </form>
        <a href="registration"><div className="submitlogbtn"><b>SIGNUP</b></div></a>
      </div>
      
   
    </div>
  )
}

export default Login
