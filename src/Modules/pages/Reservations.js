import React from 'react'; 

import TopDisp from '../common/TopDisp'; 
import Section from '../common/Section'; 
import NavBar from '../common/NavBar'; 
import Footer from '../common/Footer'; 

import { 
    Grid, 
    Typography, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText  
} from '@material-ui/core'; 

import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core'; 
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';

const useStyles = makeStyles(theme => ({
    display: {
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 0), 
            padding: theme.spacing(0,0), 
            height: '450px'
        }, 
        [theme.breakpoints.up('md')] :{
            margin: theme.spacing(6, 0, 0), 
            padding: theme.spacing(5,5,5), 
            height: '550px'
        }, 
    },
    reservation: {
        [theme.breakpoints.down('md')]: {
            height: '100%'
        }, 
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }, 
        width: '100%', 
        border: 'black solid 6px'
    }, 
    rates: {
        backgroundColor: theme.palette.primary.main, 
        textAlign: 'left', 
        padding: theme.spacing(2,4), 
        color: theme.palette.common.white
    }
}));  

/**
 * Rates 2020 
 */
const Rates = [
    'Call Us at (605) 343-4200 for Best Rates, Discounts, and Deals', 
    'Summer Rates (Updated): $77 total For Single Queen and $89 for Double Bed', 
    'Off-season Rates (Updated): $64 total for Single Queen and $76 for Double Bed', 
    'Please note these rates are not set in stone but a general idea!', 
    'Ask us about our weekly rates, suite rates, and groups and stayover discounts'
]

export default function Reservation (props) {
    const classes = useStyles(); 

    return (
        <React.Fragment>
            <CssBaseline /> 

            <Hidden smDown>
                <TopDisp /> 
            </Hidden>
            <NavBar {...props}/> 

            <Grid container direction="row" justify="center" className={classes.display}> 
                <Grid item xs={12} lg={7} className={classes.reservation}>
                    <iframe 
                        src={`https://s3.amazonaws.com/liv-inntopia-share/Widget/horizontal/index.html?sid=815100&supid=655201&stayplay=1&activities=show&events=hide&air=hide&car=hide&alllodging=hide&lodging=show&golf=hide&lifts=hide&tours=hide&biking=show&funpass=hide&equipmentrental=hide&spa=hide&dining=hide&activitiesdest=true&childage=true&xdm_e=https%3A%2F%2Fbigskylodge.com&xdm_c=default8365&xdm_p=1`}
                        width='100%'
                        height='100%'>
                    </iframe>
                </Grid>
                <Grid item xs={12} md={5} className={classes.rates}>
                    <Typography variant='h4' style={{textAlign: 'center'}}>Big Sky Lodge Rates</Typography>
                    <List>
                        {Rates.map((description, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckBoxRoundedIcon /> 
                                </ListItemIcon>
                                <ListItemText primary={description} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid> 

            <Footer /> 
        </React.Fragment> 
    ); 
}