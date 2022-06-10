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
import data from "./data";

//This is the products that contains drinks. You can sort out drinks based on, for example, top sellers

export default function DrinksProducts({addItem, filter}) {
  //Adds the item to the cart
  function buttonDrink(drinks){
    addItem(drinks)    
  }
  //loop through products in the data and  filters through based on filterValue
  return (
    <Container>
      <Grid container flexDirection="row" spacing={3}>
        {data.drinks.map((drinks, index) => {
          let show = false;
          if(filter === "All"){
            show = true;
          }
          else if(filter === "TopSeller" && drinks.topSeller){
            show = true;
          }
          else if(filter === "Hangover" && drinks.hangover){
            show = true;
          }
          return show ?  (
            <Grid item xs={12} md={6} lg={4}>
              <Card xs={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  img
                  src={drinks.img}
                  alt="pasta"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {drinks.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${drinks.price}
                  </Typography>
                  <Typography variant="body2" >
                    {drinks.info}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                  onClick={() => {
                    buttonDrink(drinks);
                    }}
                  variant="contained" size="small">
                    Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
          : 
          (<></>)
        })}
      </Grid>
    </Container>
  );
}
