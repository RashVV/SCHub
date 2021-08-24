import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SimpleModal from './Simplemodal';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Santa Claus Hub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
   heroContent: {
    backgroundImage: "url(https://www.portablenorthpole.com/assets-7.1.5-06770f6-20210723083004-3200.1/images/FB1200_630.jpg)",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "100%",
    backgroundRepeat: 'no-repeat',
   /* color: "white" !important,*/
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const styles = { display:"block", marginLeft: "auto", marginRight: "auto" };
const stylesH = { color:"black" };
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
{
   image: "https://i.pinimg.com/originals/57/62/c3/5762c36007983afbd40581dfd8921cd4.jpg",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
{
   image: "https://i.pinimg.com/originals/c5/b0/bd/c5b0bdf3b9f7cd67adb10f3d6b34aa5f.jpg",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
{
   image: "https://i.pinimg.com/originals/cf/cb/5c/cfcb5c19624f007e6615b1cd3c5b9348.png",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
{
   image: "https://i.pinimg.com/originals/4b/9d/ea/4b9dea7b2992e1131ae2ab9b435cb0d6.jpg",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
{
   image: "https://i.pinimg.com/originals/95/c0/31/95c03158f8c88beb2563f203ed491c53.jpg",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
{
   image: "http://cdn.shopify.com/s/files/1/2988/1208/products/11812_1024x1024.jpg?v=1519059085",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
  {
   image: "http://cdn.shopify.com/s/files/1/2988/1208/products/2013264_2_1024x1024.jpg?v=1519059126",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
  {
   image: "http://cdn.shopify.com/s/files/1/2988/1208/products/2017024_1024x1024.jpg?v=1519059067",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
},
  {
   image: "https://i.pinimg.com/originals/5c/d2/fe/5cd2fee181cf8cc1e908927a00003e34.png",
   title: "Letter to Santa Claus",
   description: "This is a media card. You can use this card to prepare your own letter for Santa Claus."
}
];

export default function Album( {image, title, description} )  {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={styles}>
          <img  src="./logoWSKHb_200x200.png" alt='Santa Claus Hub Logo' width="87px" height="87px"></img>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={stylesH} gutterBottom>
              Santa Claus Hub
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" style={stylesH} paragraph>
            You were a good boy or girl during this year. You want to write a letter to Santa Claus. Then our service will help you write a wonderful letter and send it to Santa.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Make Letter and send to Santa
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Share our app with friends
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Letter to Santa Claus
                    </Typography>
                    <Typography>
                      This is a media card. You can use this card to prepare your own letter for Santa Claus.
                    </Typography>
                  </CardContent>
                  <CardActions>
                     <SimpleModal card={card}  />
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Contact
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Santa Claus Hub International Service for You!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}