//Packages/Libraries
import React, { Component } from 'react';
import TopDisplay from '../../img/outsideday.jpg'; 
import RightDisp from '../../img/bsl2.jpg'; 

//MaterialUI components
import {
    CardMedia, 
    Grid, 
    Typography, 
    GridListTileBar,
    Hidden 
} from "@material-ui/core"; 

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    mainDisplay: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0, 0, 0),
      [theme.breakpoints.down("lg")]: {
        height: '450px'
      }, 
      [theme.breakpoints.up("xl")]: {
        height: "950px"
      },
    },
    overlay: {
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        bottom: "13em", 
        width: '92%', 
        height: '120px'
      },
      [theme.breakpoints.up("md")]: {
        bottom: "20rem", 
        height: "210px",
        width: '40%',
      },
      marginLeft: 'auto', 
      marginRight: 'auto', 
      color: "white", 
      textAlign: 'center',
    },
    MainPost: {
      height: "100%",
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }, 
      [theme.breakpoints.up('md')]: {
        width: '50%'
      }
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem'
      }, 
      fontStyle: 'italic', 
      fontSize:'5rem', 
      textAlign: 'center'
    }, 
    subtitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
      }, 
      fontSize: '2rem', 
      fontStyle: 'bold'
    }
  }));

  function TopDisp() {
    const classes = useStyles();
  
    return (
        <Grid container component="main" className={classes.mainDisplay}>
            <Hidden smDown>
              <CardMedia
                component="img"
                alt="Front View"
                image={TopDisplay}
                title="Garden View"
                className={classes.MainPost}
              />
            </Hidden>
            <CardMedia
              component="img"
              alt="City View"
              image={RightDisp}
              title="City View"
              className={classes.MainPost}
            />

            <GridListTileBar 
              className={classes.overlay} 
              title={<Typography className={classes.title}>Big Sky Lodge</Typography>}
              subtitle={<Typography className={classes.subtitle}>The 100 Mile View</Typography>}
            />
        </Grid>
    ); 
  }

  export default TopDisp;