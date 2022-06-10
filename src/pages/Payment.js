import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

function Payment({listItems}) {
  let location = useLocation();

  // useLocation retrieves the object that was transferd with useNavigate.
  //stores the info in this varable, and uses the information to display in the page. 
  const info = {
    name: location.state.name,
    adresse: location.state.adresse,
    number: location.state.number,
    zipCode: location.state.zipCode,
    city: location.state.city,
  };

  return (
    <>
      <Header listItems={listItems}/>
      <Container mt={4} justifyContent="center" alignItems="center">
        <Grid justifyContent="center" alignItems="center">
          <h1>Thank you for your order!</h1>
          <p>Your food will be ready in 30 minutes and delivered to you!</p>
          <p>Thank you for buying at Pizzeria Bella,
          enjoy your meal!</p>
          <div>
            <h1>This Food is for:</h1>
            <h3>Name: {info.name}</h3>
            <h3>Number: {info.number}</h3>
            <br/>
            <h1>Your food will be delivered to this address!</h1>
            <h3>Adress: {info.adresse}, City: {info.city}</h3>
            <h3>zipCode: {info.zipCode}</h3>
          </div>

          <NavLink to="/">Forgot something?</NavLink>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Payment;
