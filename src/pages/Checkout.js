import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  Grid,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Vipps from "../components/Vipps";
import ItemCard from "../components/ItemCard";
import "../components/css/Checkout.css";

function Checkout({ listItems, addItem, subtractItem }) {

/*useNavigate takes the user to the registerd page, it also brings an object with informasion to the payment page */ 
  let navigate = useNavigate();

/*useState is the main value and it sets the state variable that can be updated by setState*/
  const [name, setName] = useState();
  const [adresse, setAdresse] = useState();
  const [city, setCity] = useState();
  const [delivery, setDelivery] = useState();
  const [zipCode, setZipCode] = useState();
  const [number, setNumber] = useState();
  const [nameError, setNameError] = useState(false);
  const [adressError, setAdresseError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [zipCodeError, setZipCodeErorr] = useState(false);
  const [cityError, setCityError] = useState(false);

/* This question acts like an if statment, if name is true then setnameError to be false, which means that there's no need of an error,
   the ":" is the else part, if name is false then there needs to be an error */
  function submitAdress(e) {
    name ? setNameError(false) : setNameError(true)
    adresse ? setAdresseError(false) : setAdresseError(true)
    number ? setNumberError(false) : setNumberError(true)
    zipCode ? setZipCodeErorr(false) : setZipCodeErorr(true)
    city ? setCityError(false) : setCityError(true)


    if (delivery == "Delivery") {      /*This if checks if the delivery state is the same as this string */
      e.preventDefault();              //Stops the button from activating until all the requierments are met.
      
      if (name && adresse && number && city && zipCode) {     /*This if takes checks if the valus are true and then operates the code underneath. */
        setCityError(false);                                   /*Sets the error to be false, there's no need off an error */
        setZipCodeErorr(false);
        setNumberError(false);
        setNameError(false);
        setAdresseError(false);

        const contactInfo = {    /*Takes in the values and makes an object*/
          name: name,
          adresse: adresse,
          number: number,
          zipCode: zipCode,
          city: city,
        };

        navigate("/Payment", { state: contactInfo });  /*Sends the customer to the payment page, with the object*/
      }
    }else {                /*else is if the delivery is take away*/
      e.preventDefault();
      setCityError(false);  /*Here it sets error fails on everything except name, beacuse only name is needed when pick up.*/
      setZipCodeErorr(false);
      setNumberError(false);
      setAdresseError(false);

      if(name){
      setNameError(false);
    
      const contactInfo = {
        name: name,
      }

      navigate("/PaymentTakeAway", { state: contactInfo });
      }
    }
  }

/*This function submits the total price, it loops through the items, multiplies the price of the item with how many and then
adds on the variable price */
  function updatePrice() {
    let price = 0;

    listItems.map((item) => {
      price += item.price * item.qty;
    });

    return price;
  }

  return (
    <Container maxWidth="xl">
      <Header listItems={listItems} /> 
      <form noValidate autoComplete='off'  onSubmit={submitAdress}>
        <Grid container mt={4} spacing={1}>
          <Grid Text-align="center" padding="1rem" item xs={12} md={6} lg={6}>
            <div>
              <h1>Items</h1>
            </div>
            <div>
              {listItems.map((listItem) => { // loops trough our array list off items that has been added to the cart. 
                return (   
                  <Grid item xs={12}>
                    <ItemCard   
                      listItem={listItem}
                      subtractItem={subtractItem}
                      addItem={addItem}
                      toppings={listItem.toppings}
                    />
                  </Grid>
                );
              })}
            </div>
            <div> 
              <h1>Subtotal: ${updatePrice()} </h1>  {/*runs the update price function, and submits the total price*/}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} padding="1rem">
            <div>
              <h1>Payment</h1>
              <RadioGroup
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)} /*Radio gives options and it retreives the options value*/
              >
                <FormControlLabel
                  control={<Radio />}
                  label="Free Delivery"
                  value="Delivery"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Take away"
                  value="TakeAway"
                />
              </RadioGroup>
              <TextField
                onChange={(e) => setName(e.target.value)}
                fullWidth
                style={{ marginBottom: 20 }}
                label="Name"
                required //makes it required to have an input in the text field on the webpage
                error = {nameError} // Gives the text field an error colour, when required is not fulfilled. 
              />
              <TextField
                onChange={(e) => setAdresse(e.target.value)}
                style={{ marginBottom: 20 }}
                label="Address"
                fullWidth
                required
                error = {adressError}
              />
              <TextField
                onChange={(e) => setNumber(e.target.value)}
                style={{ marginBottom: 20 }}
                label="Phone number"
                fullWidth
                required
                error = {numberError}
              />
              <TextField
                onChange={(e) => setCity(e.target.value)}
                label="City"
                required
                style={{ marginBottom: 20 }}
                error = {cityError}
              />
              <TextField
                onChange={(e) => setZipCode(e.target.value)}
                label="Zip code"
                required
                style={{ marginBottom: 20 }}
                error = {zipCodeError}
              />
              <h2>Choose a payment method</h2>
              <Grid container>
                <Button
                  className="vipps__button"
                  type="submit"
                  color="secondary"
                  size="large"
                  variant="text"
                >
                  <Vipps alt="Vipps" />
                </Button>
                <Button
                  className="card__button"
                  size="large"
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  <CreditCardIcon fontSize="large" alt="Card" />
                </Button>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </form>
      <Footer />
    </Container>
  );
}

export default Checkout;
