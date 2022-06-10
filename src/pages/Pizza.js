import {
  Button,
  Container,
  Grid
} from "@mui/material";
import React , {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

export default function PizzaMeny({addItem, listItems}) {
    
    const [filterValue, setFilterValue] = useState('All') /*Showing all the pizza*/;

  //Filtervalue will determine what we show in the list. We set its value and Based on that value, 
  // We show items accordingly
  // We then send this value to the child component that then filters when looping through its items
    const buttonClick = (filterVal) => {
      setFilterValue(filterVal) /*Directing the choice*/;
    }

    return (
      <Container /*The top sorting buttons*/>
        <Header listItems={listItems}/>
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            
          </Grid>
  
          <Grid container justifyContent="center" alignItems="center">
  
            <Button
              variant="outlined"
              style={{ color: "black", border: "1px solid", margin: "10px" }}
              onClick={() => buttonClick("All")/*Directs and shows all drink items*/}
            >
              All
            </Button>
            <Button
              variant="outlined"
              style={{ color: "black", border: "1px solid", margin: "10px" }}
              onClick={() => buttonClick("Make Your Own")/*Directs and takes you to
            another page where you put together your own pizza*/}
            >
              Make your own
            </Button>
            <Button
              variant="outlined"
              style={{ color: "black", border: "1px solid", margin: "10px" }}
              onClick={() => buttonClick("TopSeller")/*Directs and shows the Top seller pizza items*/}
            >
              Top sellers
            </Button>
            <Button
              variant="outlined"
              style={{ color: "black", border: "1px solid", margin: "10px" }}
              onClick={() => buttonClick("Vegetar")/*Directs and shows vegetarian pizza items*/}
            >
              Vegetarian
            </Button>
          </Grid>
        </Grid>
  
        <Grid mt={4} container justifyContent="center" alignItems="center"  /*Grid for the items on the page*/>
          <Grid item xs={10}>
            <Product addItem={addItem} filter={filterValue}/>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    );
  }
