import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Pizza from "./pages/Pizza";
import Pasta from "./pages/Pasta";
import Drinks from "./pages/Drinks";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import MakeYourOwn from "./pages/MakeYourOwn";
import Product from "./components/Product";
import PaymentTakeAway from "./pages/PaymentTakeAway";
import { blue, grey, red } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

function App() {

  // This is a empty, but it is used in additem and remove item ass the array that holds all the items when renderd. 
  const [shoppingCart, setShoppingCart] = useState(() => []);
// Compares two arrays
  const equals = (toppingX, toppingItem) =>
  toppingX.length === toppingItem.length &&
  toppingX.every((topping, index) => topping.value === toppingItem[index].value);

  // For both, addItem and subtractItem : 
  // Here we also have a special case, Make Your Own pizza. BEcause if you add more of it, if it has the same toppings, identical pizzas,
  // Then you add in quantity. If they have different toppings then they should each have their cards in the checkout page.
  // Adding / subtracting from one should not affect the other even tho they both are "Make your own". Because they have different toppings,
  // They get treated as non equal

  //This removes the quantety by oppdating the array the same way as add items. 
  const subtractItem = (item) => {
    const exist = shoppingCart.find((x) => x.name === item.name && (item.name==="Make your own" ? equals(x.toppings,item.toppings) : true));
    if (exist.qty === 1) {
      setShoppingCart(shoppingCart.filter((x) => x.name !== item.name ||  
        x.name === item.name && (item.name==="Make your own" ? !equals(x.toppings,item.toppings) : false)));
    }else {
      setShoppingCart(
        shoppingCart.map((x) =>
        x.name === item.name && (item.name==="Make your own" ? equals(x.toppings,item.toppings) : true)
        ? { ...exist, qty: exist.qty - 1 } : x )
      );
    }
  };

// This checks if the item exist, and then updates the array list with the old one, and the new added array and its quantety. 
  const addItem = (item) => {
    const exist = shoppingCart.find((x) =>  x.name === item.name && (item.name==="Make your own" ? equals(x.toppings,item.toppings) : true));
    if (exist) {
      setShoppingCart(
        shoppingCart.map((x) =>
        x.name === item.name && (item.name==="Make your own" ? equals(x.toppings,item.toppings) : true)
          ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }else {
      setShoppingCart([...shoppingCart, { ...item, qty: 1 }]);
    }
  };

  //this is the return section in the function, this is what the fuction delivers to the browser. 
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home listItems={shoppingCart} />}
          ></Route>
          <Route
            exact
            path="/Pizza"
            element={<Pizza addItem={addItem} listItems={shoppingCart} />}
          ></Route>
          <Route
            exact
            path="/Pasta"
            element={<Pasta addItem={addItem} listItems={shoppingCart} />}
          ></Route>         
          <Route
            exact
            path="/Drinks"
            element={<Drinks addItem={addItem} listItems={shoppingCart} />}
          ></Route>
          <Route
            exact
            path="/Checkout"
            element={ <Checkout subtractItem={subtractItem} addItem={addItem} listItems={shoppingCart} />}
            ></Route>
          <Route
            path="/Payment"
            element={<Payment listItems={shoppingCart} />}
          ></Route>
          <Route
            path="/PaymentTakeAway"
            element={<PaymentTakeAway listItems={shoppingCart} />}
          ></Route>
          <Route
            path="/MakeYoureOwn"
            element={<MakeYourOwn addItem={addItem} listItems={shoppingCart} />}
          ></Route>
          <Route
            exact
            path="/MakeYourOwn"
            element={<MakeYourOwn addItem={addItem} listItems={shoppingCart} />}
          ></Route>
          <Route
            path="/MakeYourOwn"
            element={<MakeYourOwn addItem={addItem} listItems={shoppingCart} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
