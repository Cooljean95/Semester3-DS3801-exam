import React from "react";
import Container from "@mui/material/Container";
import "./css/HomeBanner.css";

//Banner. Just a picture on the home page

export default function HomeBanner() {
  return (
    <React.Fragment>
      <Container className="home-banner__container" maxWidth="lg"></Container>
    </React.Fragment>
  );
}
