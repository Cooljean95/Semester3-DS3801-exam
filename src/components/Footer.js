import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

//This is the footer. It contains some info about us and links to the menu

const Footer = () => {
    return (
        <Box>
        <Container>
            <Row>
                <Column>
                    <Heading>About us</Heading>
                    <p style={{fontSize: "13px"}}>
                    This is a pizza 
                    restaurante with over 100 years of experience. 
                    The restaurant is run by a family from Italy 
                    and we belong to Bislett in Oslo</p>
                </Column>
                <Column>
                    <Heading>Contact</Heading>
                    <p style={{fontSize: "13px"}}>0168 Oslo</p>
                    <p style={{fontSize: "13px"}}>Bislett</p>
                    <p style={{fontSize: "13px"}}>+47 34236539</p>
                </Column>
                <Column>
                    <Heading>Menu</Heading>
                    <FooterLink href="/pizza">Pizza</FooterLink>
                    <FooterLink href="/pasta">Pasta</FooterLink>
                    <FooterLink href="/drinks">Drinks</FooterLink>
                </Column>
                <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="https://www.facebook.com">
                    <i>
                        <span style={{marginLeft: "10px"}} aria-label="Facebook"><FacebookIcon /></span>
                    </i>
                </FooterLink>
                <FooterLink href="https://www.instagram.com" alt="Instagram">
                    <i>
                        <span style={{marginLeft: "10px"}} aria-label="Instagram"><InstagramIcon/></span>
                    </i>
                </FooterLink>
                </Column>
            </Row>
        </Container>
        <hr/>
        <div className="hr-row">
            <p className="hr-p" style={{fontSize: "13px", padding: "0"}}>
                &copy;{new Date().getFullYear()} PIZZERIA BELLA | All right reserved | Terms Of Service | Privacy
            </p>
        </div>
    </Box>
  );
};

export default Footer;
