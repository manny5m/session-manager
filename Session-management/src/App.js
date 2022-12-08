import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from './Components/Registration';
import Welcome from "./Components/Welcome";
import { Routes , Route } from "react-router-dom";

export default function App() {
  return (
    <>
 <Home />
  <Routes>
    <Route exact path='/' element={<Registration/>}> </Route>
    <Route exact path='/login' element={<Login/>}> </Route>
    <Route exact path='/registration' element={<Registration />}> </Route>
    <Route exact path='/welcome' element={<Welcome />}> </Route>
    
  </Routes>
 
  </>
  );
}
