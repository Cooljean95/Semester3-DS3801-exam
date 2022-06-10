import React, { Component, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import data from "../components/data";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/css/Toppings.css";
import Pizza from "../images/pizza.jpg";

function MakeYourOwn({addItem, listItems}) {

  // List of toppings
  const [toppings, setToppings] = useState(/*The diffrent options*/[
    { name: "Corn", value: false },
    { name: "Paprika", value: false },
    { name: "Onions", value: false },
    { name: "Tomatoes", value: false },
    { name: "Mushrooms", value: false },
    { name: "Meat", value: false },
    { name: "Chicken", value: false },
  ]);


// changed topping boolean value accordingly. 
  const handleOnChange = (position) => {
    const updatedToppingsState = toppings.map((item, index) =>
      index === position
        ? { name: item.name, value: !item.value }
        : { name: item.name, value: item.value }
    );

    setToppings(updatedToppingsState);
  };

  //Adds the item to the cart
  function buttonPizza(pizza){
    addItem({...pizza, toppings})    
  }
// Here, we have a header, and then create a container containing hte pizza image, and toppings list that the customer can choose from.
// We loop through the topping list and create a checkbox for each item. With its corresponding label of course
  return (
    <Container>
      <Header listItems={listItems} />

      <Grid
        container
        mt={4}
        className="ToppingsContainer"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item container justifyContent="center" alignItems="center">
          <Card xs={12} sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="140"
              img
              src={Pizza}
              alt="pizza"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="TitleRow"
              >
                <p>Choose toppings:</p>
                <p>Price: {data.pizza[2].price} kr</p>
              </Typography>
              <Typography variant="body2" >
                Select your pizza topping:
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {toppings.map((item, index) => {
                  const labelId = "checkbox-list-label-@{item.name}";
                  return (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={() => handleOnChange(index)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={item.value}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={index} primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>

              <br />
            </CardContent>
            <CardActions>
              <Link
                to="/checkout"
                className="OrderButton"
              >

                  <Button 
                    size="small"
                    onClick={() => {
                      buttonPizza(data.pizza[2]);
                    }}
                  >
                    To Checkout
                  </Button>
                
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default MakeYourOwn;
