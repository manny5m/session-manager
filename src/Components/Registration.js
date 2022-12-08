import React from 'react';
import { useState } from 'react';
import "./registration.css";
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [userSignup, setUserSignup] = useState({
    username: "",
    useremail: "",
    usercontact: "",
    usergender: "",
    userhobbies: "",
    usercountry: "",
    userpassword: ""
  });
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignup({ ...userSignup, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let checkmail = localStorage.getItem("useralldetail");
    let details = JSON.parse(checkmail);
    if (userSignup.username === "" || userSignup.useremail === "" || userSignup.usercontact === "" ||
      userSignup.usergender === "" || userSignup.userhobbies === "" || userSignup.usercountry === ""
      || userSignup.userpassword === "") {
      alert("Fill All Fields");
    }
    else if (details === null) {
      setRecords([userSignup]);
      localStorage.setItem("useralldetail", JSON.stringify(records));
    }
    else if (userSignup.username === details.username) {
      alert("Email Already Registered");
    }
    else {
      setRecords([...records, userSignup]);
      localStorage.setItem("useralldetail", JSON.stringify(records));
      navigate('/login');

    }
  }
  return (
    <>
      <div className="signboard">
        <div className="signhead">Signup Here</div>
        <div className="signmid">

          <form name="signup" onSubmit={handleSubmit}>

            <div className="everydiv1">
              <label htmlFor="username">Full Name</label>
              <input type="text" name="username" placeholder='Enter Name' id="textbox" value={userSignup.username}
                onChange={handleInput} />
            </div>
            <div className="everydiv1">
              <label htmlFor="useremail">Email</label>
              <input type="text" name="useremail" placeholder='Enter Email' id="textbox" value={userSignup.useremail}
                onChange={handleInput} />
            </div>
            <div className="everydiv1">
              <label htmlFor="usercontact">Contact</label>
              <input type="text" name="usercontact" placeholder='Enter Contact Nunmber' id="textbox"
                value={userSignup.usercontact} onChange={handleInput} />
            </div>
            <div className="everydiv1">
              <label htmlFor="usergender">Gender</label>
              <div className="separatetable">
                <input type="radio" name="usergender" id="textbox1" value="Male"
                  onChange={handleInput} />
                <label htmlFor="usergender">Male</label>
                <input type="radio" name="usergender" id="textbox1" value="Female"
                  onChange={handleInput} />
                <label htmlFor="usergender">Female</label>
              </div>
            </div>

            <div className="everydiv1">
              <label htmlFor="userhobbies">Hobbies</label>
              <input type="text" name="userhobbies" placeholder='Enter Hobbies' id="textbox" value={userSignup.userhobbies}
                onChange={handleInput} />
            </div>
            <div className="everydiv1">
              <label htmlFor="usercountry">Country</label>
              <select id="textbox"  onChange={handleInput} value={userSignup.usercountry} name="usercountry">
                <option  name="usercountry"
                  value="India">India</option>
                <option value="Nepal" name="usercountry"
                 >Nepal</option>
                <option value="Bangladesh" name="usercountry"
                  >Bangladesh</option>
                <option value="Afghanistan" name="usercountry"
                  >Afghanistan</option>
              </select>
             
            </div>
            <div className="everydiv1">
              <label htmlFor="userpassword">Password</label>
              <input type="password" name="userpassword" id="textbox" placeholder='Enter Password' value={userSignup.userpassword}
                onChange={handleInput} />
            </div>

            <div className="signbtn"> <input type="submit" id="signsubmitbtn" /> </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Registration
