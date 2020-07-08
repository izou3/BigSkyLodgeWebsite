//Packages/Libraries
import React from 'react';
import { Link } from 'react-router-dom';

//MaterialUI components
import {
    Button,
    ButtonBase, 
    Grid, 
    Toolbar, 
    withWidth, 
    Typography, 
    AppBar, 
    BottomNavigation, 
    BottomNavigationAction, 
    IconButton, 
} from "@material-ui/core"; 

import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import PetsIcon from "@material-ui/icons/Pets";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BookIcon from "@material-ui/icons/Book";

//components
import BookingModal from './BookingMod'; 

const useStyles = makeStyles(theme => ({
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
    appBar: {
      [theme.breakpoints.down("md")]: {
        top: "auto",
        bottom: 0
      },
      [theme.breakpoints.up("md")]: {
        position: "sticky",
        top: 0
      }
    },
    bottomBar: {
      position: "sticky",
      top: 0,
      borderBottom: "solid black"
    },
    destopNav: {
      padding: theme.spacing(1, 5, 2),
      textAlign: "center",
      color: theme.palette.common.white,
      "&:hover": {
        zIndex: 1,
        opacity: 0.25
      }
    },
    navLinks: {
      color: theme.palette.common.white, 
      textDecoration: 'none'
    }
  }));

  function NavBar(props) {
    const classes = useStyles();
    const { width } = props;
    const [value, setValue] = React.useState("Home");
    const [bookMod, setBookMod] = React.useState(false); 
  
    const handleChange = (event, newValue) => {
      if (newValue === 'reserve') {
        setBookMod(true); 
      } else {
        setValue(newValue);
        props.history.push(newValue);
      }
    };

    const handleModalOpen = () => {
      setBookMod(true); 
    }

    const handleClose = () => {
      setBookMod(false); 
    }
  
     const navBar = width === "xs" || width === "sm" || width === "md" ? (
        <AppBar className={classes.appBar}>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.bottomBar}
          >
            <BottomNavigationAction
              label='Home'
              value="home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              label="Rooms"
              value="rooms"
              icon={<MeetingRoomIcon />}
            />
            <BottomNavigationAction
              label="Pets"
              value="pet"
              icon={<PetsIcon />}
            />
            <BottomNavigationAction
              label="Attractions"
              value="location"
              icon={<LocationOnIcon />}
            />
            <BottomNavigationAction
              label="Reserve"
              value="reserve"
              icon={<BookIcon />}
            />
          </BottomNavigation>
        </AppBar>
      ) : (
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar style={{ padding: 0 }}>
  
            <Grid container direction="row" style={{width: '75%'}}>
              <Grid xs item className={classes.destopNav}>
                <ButtonBase style={{ width: "100%" }}>
                  <Typography variant="h6">
                    <Link to="/home" className={classes.navLinks}>Home</Link>
                  </Typography>
                </ButtonBase>
              </Grid>
              <Grid xs item className={classes.destopNav}>
                <ButtonBase style={{ width: "100%" }}>
                  <Typography variant="h6">
                    <Link to='/rooms' className={classes.navLinks}>
                      Rooms/Amenities
                    </Link>
                  </Typography>
                </ButtonBase>
              </Grid>
              <Grid xs item className={classes.destopNav}>
                <ButtonBase style={{ width: "100%" }}>
                  <Typography variant="h6">                  
                    <Link to='/pet' className={classes.navLinks}>
                      Pet Policy
                    </Link>
                  </Typography>
                </ButtonBase>
              </Grid>
              <Grid xs item className={classes.destopNav}>
                <ButtonBase style={{ width: "100%" }}>
                  <Typography variant="h6">                  
                    <Link to='/location' className={classes.navLinks}>
                      Attractions
                    </Link>
                  </Typography>
                </ButtonBase>
              </Grid>
            </Grid>
  
            <Grid xs item className={classes.destopNav}>
                <ButtonBase style={{ width: "100%" }}>
                  <Typography variant="h6">                  
                    <Link to='/reservations' className={classes.navLinks}>
                      Reservations
                    </Link>
                  </Typography>
                </ButtonBase>
            </Grid>

            <Grid
              xs item
              className={classes.destopNav}
              style={{ backgroundColor: "#DE1706" }}
              onClick={handleModalOpen}
            >
              <ButtonBase style={{ width: "100%" }}>
                <Typography variant="h6">
                  Book Now
                </Typography>
              </ButtonBase>
            </Grid>

          </Toolbar>
        </AppBar>
      );
  
    return (
      <React.Fragment>
        {navBar}
        <BookingModal open={bookMod} handleClose={handleClose}/> 
      </React.Fragment>
    ); 
  }

  export default withWidth()(NavBar);