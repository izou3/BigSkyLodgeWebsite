//Packages/Libraries
import React from 'react';
import { Link } from 'react-router-dom'; 

/**
 * Image Imports 
 */
import ScenricDouble from '../../img/double.jpg';
import SingleQueen from '../../img/singleQueen.jpg'; 
import SkylineSuites from '../../img/suites.jpg'; 
import MainDisplay from '../../img/sunsetflag.jpg'; 
import SkyLogo from '../../img/Logo.jpg'; 

/**
 * MaterialUI Imports 
*/
import {
  Button, 
  ButtonBase, 
  CardMedia, 
  CssBaseline, 
  Grid, 
  withWidth, 
  Typography, 
  Card, 
  CardContent, 
  CardHeader, 
  GridListTileBar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"; 

//Components 
import TopDisp from '../common/TopDisp'; 
import NavBar from '../common/NavBar'; 
import Footer from '../common/Footer'; 
import BookingMod from '../common/BookingMod'; 

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    textAlign: "center"
  },
  contentMain: {
    margin: theme.spacing(0, 0, 3),
    backgroundColor: theme.palette.primary.main, 
  },
  contentPara: {
    margin: "auto",
    padding: theme.spacing(5, 5, 5),
    justifyContent: "center",
    textAlign: "left",
    color: theme.palette.common.white, 
  },
  overlay: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      bottom: "8em"
    },
    [theme.breakpoints.up("md")]: {
      bottom: "7em"
    },
    color: "white",
    height: "100px",
    fontStyle: "italic"
  },
  MainPost: {
    marginTop: 'auto'
  },
  bookNow: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 7, 7)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 20, 5)
    }
  },
  bookButton: {
    margin: "1em",
    padding: theme.spacing(2, 7, 2)
  },
  imageDisp: {
    marginTop: "1em",
    height: '100%', 
    "&:hover": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.65
      },
      "& $imageButton": {
        border: "4px solid black",
        color: theme.palette.common.black
      }
    }
  },
  imageBackdrop: {
    opacity: 1,
    transition: theme.transitions.create("opacity"), 
    [theme.breakpoints.up('xl')]: {
      height: '500px'
    }, 
    height: '300px', 
  },
  imageButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
  }, 
  roomDisp: {
    width: "100%", 
    [theme.breakpoints.up('xl')]: {
      height: '500px'
    }, 
    height: '300px', 
    marginTop: theme.spacing(2,0,0), 

  }, 
  logo: {
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: '1.5em',  
    [theme.breakpoints.down('sm')]: {
      height: '40%', 
      width: '40%'
    },
    height: '20%', 
    width: '20%'
  }
}));

function Home(props) {
  const classes = useStyles();
  const [bookMod, setBookMod] = React.useState(false); 

  const handleRoomClick = (event) => {
      console.log(event.target.title); 
      event.preventDefault(); 
      window.location.href = `/rooms#${event.target.title}`;
  }; 

  const handleModalOpen = () => {
    setBookMod(true); 
  }

  const handleClose = () => {
    setBookMod(false); 
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <TopDisp /> 
      <NavBar  {...props}/> 
      <BookingMod open={bookMod} handleClose={handleClose}/> 
      <Grid container className={classes.content}>
        <Grid item xs={12} className={classes.MainPost}>
          <CardMedia
            component="img"
            className={classes.logo}
            image={SkyLogo}
            title='Big SKy Logo'
          />
          <Card elevation={0} className={classes.bookNow}>
            <CardHeader title=
              {
              <Typography variant='h4'>
                  "In the City But In The Pines Overlooking Rapid City on Picturesque Skyline Drive."
              </Typography>
              } 
            />
            <CardContent>
              <Typography variant="h6">
                A Lodge in the Black Hills with the 100 Mile View, We're Mom and Pop Owned since You Were Born. 
                Clean Comfy Rooms and Screne Spacious Environment, We Will do Everything to Ensure your Safe and Relaxing Enjoyment!
                Just Shoot Us A Call and We'll Get You Started!!
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.bookButton}
                onClick={handleModalOpen}
                value='hello'
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid container direction="row" className={classes.contentMain}>
          <Grid item xs={12} lg={5}>
            <CardMedia
              component="img"
              alt="Picture of Room"
              image={MainDisplay}
              title="Room"
            />
          </Grid>

          <Grid item xs={12} lg={7} className={classes.contentPara}>
            <Typography variant="h3" style={{marginBottom: '1em'}}>The Best View of Rapid City</Typography>
            <Typography variant="h5">
            Located on picturesque Skyline Drive, Big Sky Lodge faces a friendly pet park on one side and a 100-mile panoramic view on the other. A mom-and-pop style lodge, we offer clean, rustic, and affordable rooms in the quiet mountain pines above the city with easy and open parking right outside your door. 
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.roomDisp}> 
          <Grid item xs={12} lg={4}>
            <ButtonBase 
              focusRipple 
              component='button'
              className={classes.imageDisp} 
              onClick={handleRoomClick}
            >
              <span>
                <CardMedia
                  component="img"
                  alt="Picture of Room"
                  image={SkylineSuites}
                  title="skyline"
                  className={classes.imageBackdrop}
                />
              </span>
              <GridListTileBar 
                  title={<Typography variant="h4">Skyline Suites</Typography>}
                  subtitle={<Typography variant='body'>Multi-bed Rooms and Suites</Typography>}
              /> 
            </ButtonBase>
          </Grid>

        <Grid item xs={12} lg={4}>
          <ButtonBase 
            focusRipple
            component='button'
            className={classes.imageDisp}
            onClick={handleRoomClick}
          >
            <span>
              <CardMedia
                component="img"
                alt="Picture of Room"
                image={ScenricDouble}
                title="double"
                className={classes.imageBackdrop}
              />
            </span>
            <GridListTileBar 
                title={<Typography variant="h4">Scenric Double</Typography>}
                subtitle={<Typography variant='body'>Two Double Beds and City View</Typography>}
            /> 
          </ButtonBase>
        </Grid>

        <Grid item xs={12} lg={4}>
            <ButtonBase 
              focusRipple
              component='button'
              className={classes.imageDisp}
              onClick={handleRoomClick}
            >
              <span>
                <CardMedia
                  component="img"
                  alt="Picture of Room"
                  image={SingleQueen}
                  title="single"
                  className={classes.imageBackdrop}
                />
              </span>
              <GridListTileBar 
                  title={<Typography variant="h4">Single Queen</Typography>}
                  subtitle={<Typography variant='body'>Single Queen Bed and Garden View</Typography>}
              /> 
            </ButtonBase>
          </Grid>

        </Grid> 

        <Footer /> 
      </Grid>
    </React.Fragment>
  );
}

Home.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  return { whatever: 'stuff' };
};

export default withWidth()(Home);
