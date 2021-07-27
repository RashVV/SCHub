import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';
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
import { Repeat } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*let CardMediaTheme = [
  {"id": 1, url: "https://i.pinimg.com/originals/57/62/c3/5762c36007983afbd40581dfd8921cd4.jpg"},
  {"id": 2, url: "https://i.pinimg.com/originals/c5/b0/bd/c5b0bdf3b9f7cd67adb10f3d6b34aa5f.jpg"}
  {"id": 3, url: "https://i.pinimg.com/originals/cf/cb/5c/cfcb5c19624f007e6615b1cd3c5b9348.png"}
  {id: 4, url: "https://i.pinimg.com/originals/4b/9d/ea/4b9dea7b2992e1131ae2ab9b435cb0d6.jpg"}
  {id: 5, url: "https://i.pinimg.com/originals/95/c0/31/95c03158f8c88beb2563f203ed491c53.jpg"}
  {id: 6, url: "http://cdn.shopify.com/s/files/1/2988/1208/products/11812_1024x1024.jpg?v=1519059085"}
  {id: 7, url: "http://cdn.shopify.com/s/files/1/2988/1208/products/2013264_2_1024x1024.jpg?v=1519059126"}
  {id: 8, url: "http://cdn.shopify.com/s/files/1/2988/1208/products/2017024_1024x1024.jpg?v=1519059067"}
  {id: 9, url: "https://i.pinimg.com/originals/5c/d2/fe/5cd2fee181cf8cc1e908927a00003e34.png"}
];*/

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AcUnitIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Santa Claus Hub
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Santa Claus Hub
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            If you have been a good boy or girl for a year. And you want to write a letter to Santa Claus. Then our service will help you write a wonderful letter and send it to Santa.
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/originals/cf/cb/5c/cfcb5c19624f007e6615b1cd3c5b9348.png"
                    title="Image title"
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
                    <Button size="small" color="primary">
                      Use it
                    </Button>
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
          Santa Claus Hub International Service!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}