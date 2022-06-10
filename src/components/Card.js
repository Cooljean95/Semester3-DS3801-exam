import React, { Component } from "react";
import "./css/Checkout.css";
import card from "../images/card.png";

//Card payment button

class CardPayment extends Component {
  render() {
    return (
      <>
        <img src={card} class="card" alt="Card" />
      </>
    );
  }
}

export default CardPayment;
