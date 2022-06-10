import React, { Component } from "react";
import "./css/Checkout.css";
import vipps from "../images/vippsbutton.png";

//Vipps button

class Vipps extends Component { 
  
    render() {
    return (
      <>
        <img src={vipps} class="vipps" alt="Vipps"/>
      </>
    );
  }
}

export default Vipps;
