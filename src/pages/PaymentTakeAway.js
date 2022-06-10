import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

function Payment({listItems}) {
  let location = useLocation();

  // useLocation retrives the object that was transferd with useNavigate.
  //stores the info in this varable, and uses the informastion to desplay in the page. 
  const info = {
    name: location.state.name,  
  };

  return (
    <>
      <Header listItems={listItems}/>
      <Container mt={4} justifyContent="center" alignItems="center">
        <Grid justifyContent="center" alignItems="center">
          <h1>Thank you for your order!</h1>
          <p>{info.name}, you can pick up your food in 30 minutes!</p>
          <p>Thank you for buying at Pizzeria Bella,
          enjoy your meal!</p>
          <br/>
          <NavLink to="/">Forgot something?</NavLink>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Payment;