import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Container, Button } from "@mui/material";
import DrinksProduct from "../components/DrinksProduct";

export default function DrinkMeny({addItem, listItems}) {

  const [filterValue, setFilterValue] = useState('All') /*Showing all the drinks*/;

  //Filtervalue will determine what we show in the list. We set its value and Based on that value, 
  // We show items accordingly
  // We then send this value to the child component that then filters when looping through its items
  const buttonClick = (filterVal) => {
    setFilterValue(filterVal)/*Directing the choice*/;
  }

  return (
    <Container /*The top sorting buttons*/>
      <Header listItems={listItems}/>
      <Grid container justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center">
          <Button
            variant="outlined"
            style={{ color: "black", border: "1px solid", margin: "10px" }}
            onClick={() => buttonClick("All") /*Directs and shows all drink items*/}
          >
            All
          </Button>
          <Button
            variant="outlined"
            style={{ color: "black", border: "1px solid", margin: "10px" }}
            onClick={() => buttonClick("Hangover") /*Directs and shows hangover items*/}
          >
            Hangover
          </Button>
          <Button
            variant="outlined"
            style={{ color: "black", border: "1px solid", margin: "10px" }}
            onClick={() => buttonClick("TopSeller") /*Directs and shows all top seller items*/}
          >
            Top sellers
          </Button>
        </Grid>
      </Grid>

      <Grid mt={4} container justifyContent="center" alignItems="center" /*Grid for the items on the page*/>
        <Grid item xs={10}>
          <DrinksProduct addItem={addItem} filter={filterValue} />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
