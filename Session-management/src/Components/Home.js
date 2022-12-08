import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <>    <div className='head'>
      <div className="headleft">
        <div className="namesite"><h1><span className="logodesign">S</span>ession <span className="logodesign">M</span>anager</h1></div>
      </div>
      <div className="headright">
        <div className="logsign"><a href="./login" ><p>Login/Signup</p></a></div>
      </div>
    </div>
    </>

  )
}

export default Home
