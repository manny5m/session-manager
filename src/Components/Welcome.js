import React from 'react';
import {useState} from 'react';
import "./home.css";

const Welcome = () => {
  const [data,setData]= useState("");
  const userdata = JSON.parse(localStorage.getItem("useralldetail"));
 
  return (
    <div className="welcomeboard">
    <h1>Welcome</h1>
    <h2>{data}</h2>
   </div>
  )
}

export default Welcome
