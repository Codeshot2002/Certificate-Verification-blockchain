import React, { useState } from "react";
import { Link } from "react-router-dom";
import './homeStyles.css';
import LogOut from "../LogOut/LogOut";
import Navbar from "../NavBar/Navbar";


function Home(props) {


  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="rounded-box">
        <h1>
          <Link to="/login"><button type="button" 
          className="btn btn-outline-info" 
          >Login</button></Link>
        </h1>
        <h1>
          <Link to="/signup"><button type="button" className="btn btn-outline-info">Sign Up</button></Link>
        </h1>
      <h3>{props.name ? `Welcome - ${props.name}` : "Login please"}</h3>
        <LogOut/>
      </div>

    </div>
    </>
  );
}

export default Home;
