import HawaiiPizza from "../images/hawaiipizza.jpg"
import KebabPizza from "../images/kebabpizza.jpg"
import MakeYourOwnPizza from "../images/makeyourown.jpg"
import Pepperoni from "../images/pepperoni.jpg"
import Skinkepizza from "../images/skinkepizza.jpg"
import TacoPizza from "../images/tacopizza.jpg"
import TomatPizza from "../images/tomatpizza.jpg"
import VegetarPizza from "../images/vegetarpizza.jpg"

import PastaBolognese from "../images/pastabolonese.jpg"
import PastaCarbonara from "../images/pastacarbonara.jpg"
import PastaReker from "../images/pastareker.jpg"
import PastaSopp from "../images/pastasopp.jpg"
import PastaSpekeskinke from "../images/pastaspekeskinke.jpg"
import PastaAlFredi from "../images/pastaalfredi.jpg"
import PenneAlVodka from "../images/pennevodka.jpg"
import TiktokPasta from "../images/tiktokpasta.jpg"

import BloodyMary from "../images/bloodymary.jpg"
import Cola from "../images/cola.jpg"
import DrPepper from "../images/drpeppersoda.jpg"
import Julebrus from "../images/julebrus.jpg"
import Milkshake from "../images/milkshake.jpg"
import Solo from "../images/solo.jpg"

//Arraylist to get info about pizza, pasta and drinks, using it in the pizza, pasta, drinks menus. 

const data = {
    pizza: [
        {id: "1", name: "Hawaii", price: 15, info: "Pineapple, ham, tomatosaus",img: HawaiiPizza, topSeller: false, vegetar: false},
        {id: "2", name: "Kebab pizza", price: 16, info: "Kebab meat, hot sauce, jalapenos", img: KebabPizza , topSeller: true, vegetar: false},
        {id: "3", name: "Make your own", price: 17, info: "Add the ingredients you want", img: MakeYourOwnPizza , topSeller: false, vegetar: true},
        {id: "4", name: "Pepperoni", price: 15, info: "Pepperoni, tomatosaus, mozzarella",img: Pepperoni, topSeller: true, vegetar: false},
        {id: "5", name: "Ham", price: 15, info: "Ham, tomatosaus, basilikum", img: Skinkepizza , topSeller: false, vegetar: false},
        {id: "6", name: "Taco pizza", price: 16, info: "Meat with taco taco seasoning", img: TacoPizza , topSeller: true, vegetar: false},
        {id: "7", name: "Tomato", price: 14,info: "Tomatos, basilikum, mozzarella", img: TomatPizza , topSeller: false, vegetar: true},
        {id: "8", name: "Vegetar", price: 12, info: "Tomato, squash, onion", img: VegetarPizza, topSeller: false, vegetar: true}   
    ],

    pasta: [
        {id: "1", name: "Bolognese", price: 15, info: "Tagliatelle, bolognese sauce",img: PastaBolognese, topSeller: true, vegetar: false},
        {id: "2", name: "Carbonara", price: 14, info: "Carbonara sauce, bacon, mozzarella", img: PastaCarbonara, topSeller: false, vegetar: false},
        {id: "3", name: "Shrimps", price: 16, info: "Tagliatelle, shrimps, bacon", img: PastaReker, topSeller: false, vegetar: false},
        {id: "4", name: "Mushroom", price: 13, info: "Tagliatelle, mushroom, spinach",img: PastaSopp, topSeller: false, vegetar: false},
        {id: "5", name: "Pasta Parma", price: 14, info: "Tagliatelle, parma, basilikum", img: PastaSpekeskinke, topSeller: true, vegetar: false},
        {id: "6", name: "Pasta Al Fredi", price: 13, info: "Creamy sauce and mozzarella", img: PastaAlFredi, topSeller: false, vegetar: true},
        {id: "7", name: "Penne Al Vodka", price: 16,info: "Penne, sauce with vodka and paprika", img: PenneAlVodka, topSeller: false, vegetar: true},
        {id: "8", name: "TikTok Pasta", price: 12, info: "Tomatos, cheese, oil, onion", img: TiktokPasta, topSeller: false, vegetar: true} 
    ], 

    drinks: 
    [
        {id: "1", name: "Bloody Mary", price: 9, info: "Hangover? Order this with your pizza!",img: BloodyMary, topSeller: false, hangover: true},
        {id: "2", name: "Cola", price: 3, info: "Coca‑Cola Itself", img: Cola, topSeller: false, hangover: false},
        {id: "3", name: "Dr Pepper", price: 2, info: "a good taste off...pepper, or something", img: DrPepper, topSeller: false, hangover: false},
        {id: "4", name: "Julebrus", price: 3, info: "The best soda in the world",img: Julebrus, topSeller: true, hangover: false},
        {id: "5", name: "Milkshake", price: 5, info: "Chocolate milkshake", img: Milkshake, topSeller: true, hangover: false},
        {id: "6", name: "Solo", price: 3, info: "A good taste off orange", img: Solo, topSeller: true, hangover: false}
    ]
}

export default data;
