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
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Pizza from "../images/pizza.jpg";
import Pasta from "../images/pasta.jpg";
import Soda from "../images/soda.jpg";
import Footer from "../components/Footer";
import HomeBanner from "../components/homeBanner"

export default function Home({ listItems }) {
  return (
    <Container /*The diffrent boxes and cards with Pizza, Pasta and Drinks*/>
      <Header listItems={listItems} />
      <HomeBanner /*Header*/ />
      <Grid container spacing={2} mt={4}>
        <Grid /*Layout*/
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          md={4}
        >
          <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
            <Link to="/pizza">
              <CardMedia /*Cards to have an easy wrap on the diffrent objects*/
                component="img"
                height="140"
                img
                src={Pizza}
                alt="pizza"
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" /*Title*/>
                Pizza
              </Typography>
              <Typography variant="body2" /*Information text*/>
                We have 12 different pizzas you can order. Everything is made
                from scratch and the recipe goes back 120 years. We have pizza
                for every taste!
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" href="/pizza"/*Order button*/>
                Order now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          md={4}
        >
          <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
            <Link to="/pasta">
              <CardMedia /*Cards to have an easy wrap on the diffrent objects*/
                component="img"
                height="140"
                img
                src={Pasta}
                alt="pasta"
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" /*Title*/>
                Pasta
              </Typography>
              <Typography variant="body2" /*Information text*/>
                We have 12 different pastas you can order. The recipe is old and
                authentic from our great grandmother from Italy. The most
                popular dish nowadays is Penne Al Vodka!
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" href="/pasta" /*Order button*/>
                Order now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          md={4}
        >
          <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
            <Link to="/drinks">
              <CardMedia /*Cards to have an easy wrap on the diffrent objects*/
                component="img"
                height="140"
                img
                src={Soda}
                alt="soda"
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" /*Title*/>
                Drinks
              </Typography>
              <Typography variant="body2" /*Information text*/>
                Do you need to quench your thirst while eating our delicious
                pizza or pasta? We have plenty of drinks to offer you.
                Everything from Coke Cola to Christmas soda!
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" href="/drinks" /*Order button*/>
                Order now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
