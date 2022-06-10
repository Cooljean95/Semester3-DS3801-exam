import { Card, CardHeader, CardContent, Typography, IconButton } from "@mui/material";
import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';


//Makes the cards at checkout. List up image, price, info, name. 
//The toppings code is the same, but for "Make your own" pizza.

function ItemCard({ addItem, listItem, toppings, subtractItem}){

    return(
        <>
        <Card style={{maxHeight: 145, maxWidth: 520, display: "flex", margin: 10}}>
            <CardHeader />
                <img src={listItem.img} alt={listItem.name} style={{maxHeight: 100, maxWidth: 120, display: "inline", borderRadius: "50%", padding: 10}}   />
            <CardContent>
                <Typography gutterBottom>
                  <h3 style={{display: "inline"}}>{listItem.name} x {listItem.qty}</h3>
                  <IconButton  onClick={ () => {addItem(listItem)}} aria-label={"Add" + listItem.name} ><ControlPointIcon/></IconButton>
                  <IconButton  onClick={() => {subtractItem(listItem)}} aria-label={"subtract" + listItem.name} ><RemoveIcon /></IconButton>
                </Typography>
                <Typography variant="body2">
                    { toppings === undefined ? 
                        (
                            <>
                                <h4 style={{margin: 0}}>${listItem.price}</h4>
                                <p style={{display: "inline"}}>{listItem.info}</p>
                            </>
                        )
                    : 
                        (
                            <>
                                <h4 style={{margin: 0}}>${listItem.price}</h4>
                                <h4 style={{margin: 0}}>Your chosen toppings:</h4>
                                {toppings.map( (topping) => {
                                    
                                    return topping.value ? (
                                        <p style={{display: "inline"}}>{topping.name}, </p>
                                    )
                                    : 
                                    <>
                                    </>
                                })}
                            </>
                        )
                    }
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default ItemCard;