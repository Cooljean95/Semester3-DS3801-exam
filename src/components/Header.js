import React, { useState } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/Header.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Bellalogo from "../images/bellalogo.png"

//This is the header. It contains links to menu and checkout. 
//It is also responsive. The toggle code is for checking how big the screen is, and then sets a hamburgermenu if it is small

function Header({listItems})  {

  function updateQty() {
    let qty = 0;

    listItems.map((item) => {
      qty +=  item.qty;
    });

    return qty;
  }

  const [toggle, setToggle] = useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: "red"
    },
  }));

  return (
    <header>
      <div aria-label="menu" className="menu" onClick={() => setToggle(!toggle)}>
        <img src={Menu} alt="menu" width="20" />
      </div>
      <div className="logo">
        <h1>
        <NavLink to="/"><img src={Bellalogo} alt="Logo to Pizzeria Bella"/></NavLink>
        </h1>
      </div>
      <nav aria-label="menu">
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pizza">Pizza</NavLink>
          </li>
          <li>
            <NavLink to="/pasta">Pasta</NavLink>
          </li>
          <li>
            <NavLink to="/drinks">Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
          <li className="close" onClick={() => setToggle(!toggle)}>
            <img src={Close} alt="close" width="20" />
          </li>
        </ul>

        <Link
          to="/checkout"
          className="OrderButton"
        >
          <IconButton aria-label="cart"  >
            <StyledBadge badgeContent={updateQty()} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
