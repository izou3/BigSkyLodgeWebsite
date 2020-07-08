//Packages/Libraries
import React from 'react'; 

//MaterialUI components 
import { Grid, Typography } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core'; 
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

//components
import TopDisp from '../common/TopDisp'; 
import Section from '../common/Section'; 
import NavBar from '../common/NavBar'; 
import Footer from '../common/Footer'; 

/**
 * Pictures
 */
import Rushmoore from '../../img/rushmoore.jpg'; 
import Badlands from '../../img/badlands.jpg'; 
import SkylineDrive from '../../img/skylinedrive.jpg'; 

//API Key 
import { GOOGLE_MAPS_API } from '../../setup/config/env'; 

/**
 * Attraction Array
 */

const Attractions = [
    {
        flow: 'row', 
        id: 'mountrushmoore',
        picture: Rushmoore, 
        title: 'Mount Rushmoore',
        content: [
            '20 Miles Away and a 30 Minute Scenic Drive Through The Black Hills',
            'The Sculptures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln are immortalized and forever awed at by thousands of visitors every year.',
            `For More Information on Hours and Sites visit: https://www.nps.gov/moru/index.htm`
        ]
    }, 
    {
        flow: 'row', 
        id: 'skylinedrive',
        picture: SkylineDrive, 
        title: 'Skyline Drive/Dinosaur Park',
        content: [
            'Right down the street from our lodge. Indulge in the best road of Rapid City',
            'Take the mile road ending at Dinosaur Park with trails and parking spots along the drive',
            'Experience the Wonderous view of the Black Hills on one and Rapid City on the Other'
        ]
    }, 
    {
        flow: 'row', 
        id: 'badlands',
        picture: Badlands, 
        title: 'Badlands National Park',
        content: [
            'An hour drive away from the Gorgeous Badlands National Park',
            'The parks consists of 244,000 acres of sharply eroded buttes, pinnacles and spires blended with the largest, protected mixed grass prairie in the United States.',
            `For More Information on Hours and Sites visit: https://www.nps.gov/badl/index.htm`
        ]
    }, 
]

const useStyles = makeStyles(theme => ({
    display: {
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 0), 
            padding: theme.spacing(0,0), 
            height: '800px'
        }, 
        [theme.breakpoints.up('md')] :{
            margin: theme.spacing(6, 0, 0), 
            padding: theme.spacing(5,5,5), 
            height: '400px'
        }, 
    },
    map: {
        [theme.breakpoints.down('md')]: {
            height: '100%'
        }, 
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }, 
        width: '100%', 
        border: 'black solid 6px'
    }, 
    attractions: {
        backgroundColor: theme.palette.primary.main, 
        textAlign: 'left', 
        padding: theme.spacing(2,4), 
        color: theme.palette.common.white
    }
}));  

function Location (props) {
    const classes = useStyles(); 

    return (
        <React.Fragment>
            <CssBaseline /> 

            <Hidden smDown>
                <TopDisp /> 
            </Hidden>

            <NavBar {...props}/> 
            <Grid container direction='row' className={classes.display}>
                <Grid item xs={12} lg={6}>
                    <iframe className={classes.map}
                        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API}&q=place_id:ChIJS8hfkXRDfYcRmIi7hsYGEuc`}>
                    </iframe>
                </Grid>
                <Grid item xs={12} lg={6} className={classes.attractions}>
                    <Typography variant='h4'>Big Sky Lodge</Typography>
                    <Divider style={{ backgroundColor: 'white', margin:"0.5em" }}/> 
                    <Typography component='p' variant='h5'>A skyline drive, an adventurous hike, or a walk with the pet, we are minutes away from the busy streets of downtown, a 20-min drive from Mount Rushmore and a view of the Badlands right outside your door!</Typography>
                </Grid>
            </Grid>
            {
                Attractions.map(obj => (
                    <Section
                        key={obj.id}
                        flow={obj.flow}
                        id={obj.id}
                        img={obj.picture}
                        title={obj.title}
                        content={obj.content}
                    /> 
                ))
            }
            <Footer /> 
        </React.Fragment> 
    ); 
}

export default Location; 