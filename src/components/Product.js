import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import data from "../components/data";
import { Link } from "react-router-dom";
import "../components/css/Pizza.css";

//Makes the pizza menu cards. 
//It also have a filter. You can filter the products based on, for example, top sellers.
//Make your own pizza let you choose toppings, try this pizza!

export default function Product({ addItem, filter }) {

    //Adds the item to the cart
  function buttonPizza(pizza) {
    addItem(pizza);
  }
  //loop through products in the data and  filters through based on filterValue
  return (
    <Container>
      <Grid container flexDirection="row" spacing={3}>
        {data.pizza.map((pizza, index) => {
          let show = false;
          if (filter === "All") {
            show = true;
          } else if (
            filter === "Make Your Own" &&
            pizza.name === "Make your own"
          ) {
            show = true;
          } else if (filter === "TopSeller" && pizza.topSeller) {
            show = true;
          } else if (filter === "Vegetar" && pizza.vegetar) {
            show = true;
          }

          return show ? (
            <Grid item xs={12} md={6} lg={4}>
              <Card xs={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  img
                  src={pizza.img}
                  alt="pizza"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {pizza.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${pizza.price}
                  </Typography>
                  <Typography variant="body2" >
                    {pizza.info}
                  </Typography>
                </CardContent>
                <CardActions>
                  {pizza.name === "Make your own" ? (
                    <Link
                      to="/MakeYourOwn"
                      size="small"
                      className="OrderButton"
                    >
                      <Button variant="contained" size="small">
                        Order
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      onClick={() => {
                        buttonPizza(pizza);
                      }}
                      size="small"
                      variant="contained"
                    >
                      Order
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ) : (
            <></>
          );
        })}
      </Grid>
    </Container>
  );
}
