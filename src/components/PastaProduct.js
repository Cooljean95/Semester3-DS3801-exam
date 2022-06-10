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

//Makes the pasta products menu cards
//It also have a filter. You can filter the products based on, for example, top sellers.

export default function PastaProducts({addItem, filter}) {
//Adds item to the cart
  function buttonPasta(pasta){
    addItem(pasta)    
}
  //loop through products in the data and  filters through based on filterValue
  return (
    <Container>
      <Grid container flexDirection="row" spacing={3}>
        {data.pasta.map((pasta) => {
            let show = false;
            if(filter === "All"){
              show = true;
            }
            else if(filter === "TopSeller" && pasta.topSeller){
              show = true;
            }
            else if(filter === "Vegetar" && pasta.vegetar){
              show = true;
            }
             
           return show  ? (
            <Grid item xs={12} md={6} lg={4}>
              <Card xs={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  img
                  src={pasta.img}
                  alt="pasta"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {pasta.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${pasta.price}
                  </Typography>
                  <Typography variant="body2" >
                    {pasta.info}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                  onClick={() => {
                        buttonPasta(pasta);
                        }}variant="contained" size="small">
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
