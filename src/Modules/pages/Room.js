//Packages/Libraries
import React from 'react'; 

/**
 * picture Imports 
 */
import Amenities from '../../img/amenities.jpg'; 
import Single from '../../img/singleQueen2.jpg'; 
import Double from '../../img/double2.jpg'; 
import DoubleQueen from '../../img/DoubleQueen.jpg'; 
import Skyline from '../../img/Skyline.jpg'; 
import Triple from '../../img/double.jpg'; 

//MaterialUI components 
import { CssBaseline } from '@material-ui/core'; 
import { Hidden } from '@material-ui/core'; 

//components
import TopDisp from '../common/TopDisp'; 
import NavBar from '../common/NavBar'; 
import Footer from '../common/Footer'; 
import Section from '../common/Section'; 

const roomInfo = [
    {
        flow: 'row', 
        id: 'amenities',
        picture: Amenities, 
        title: 'Amenities',
        content: [
            'Non-Smoking Rooms',
            'Pet Friendly Park and Garden',
            'Scenic Viewing and Picnic Area',
            'Parking at your Door. All One Level',
            'Wireless Internet Access and Dish TV', 
            'Breakfast (Grab & Go) and Outdoor Hot Tub (Unavailable this Season)', 
        ]
    }, 
    {
        flow: 'row-reverse', 
        id: 'single',
        picture: Single, 
        title: 'Single Queen',
        content: [
            'One Single Queen Bed',
            'Garden View',  
            'In-Room Coffee and Fresh Linens',
            'Microwave/Mini-Fridge', 
            'Alarm Clock/Hair Dryer/Iron', 
            'Closet/Storage Area'
        ]
    }, 
    {
        flow: 'row', 
        id: 'double',
        picture: Double, 
        title: 'Sceneric Double',
        content: [
            'Two Double/Full Sized Beds', 
            'City and Mountain View', 
            'In-Room Coffee and Fresh Linens', 
            'Microwave/Mini-Fridge', 
            'Alarm Clock/Hair Dryer/Iron', 
            'Closet/Storage Area'
        ]
    }, 
    {
        flow: 'row-reverse', 
        id: 'skyline',
        picture: DoubleQueen, 
        title: 'Skyline Queens',
        content: [
            '2-4 Queens Beds', 
            'City and Garden Patio View', 
            'In-room Sofa Viewing Area', 
            'In-Room Coffee and Fresh Linens', 
            'Microwave/Mini-Fridge', 
            'Closet/Storage Area and Alarm Clock/Hair Dryer'
        ]
    }, 
    {
        flow:'row', 
        id: 'skylinetriple',
        picture: Triple,
        title: 'Skyline Triple',
        content: [
            '3 Double/Fill Sized Beds in 2 Bedrooms', 
            'City and Mountain View', 
            'In-Room Coffee, 2 TVs and Storage Area', 
            'Microwave/Mini-Fridge', 
            'Alarm Clock/Hair Dryer/Iron',
        ]
    },
    {
        flow:'row-reverse', 
        id: 'skylinesuite',
        picture: Skyline, 
        title: 'Skyline Suite',
        content: [
            'Two BedRoom Suite with Kitchen and Living Area', 
            'One Queen, One King, and Sofa', 
            'Stovetop Kitchen with Fridge and Dishwasher', 
            '3 Tvs and Closet/Storage Area', 
            'In-Room Coffee and Fresh Linens', 
        ]
    }
] 

function Room (props) {
    const roomInfoDisp = roomInfo.map(obj => 
        <Section
            key={obj.id}
            flow={obj.flow}
            id={obj.id}
            img={obj.picture}
            title={obj.title}
            content={obj.content}
        /> 
    ); 

    return (
        <React.Fragment>
            <CssBaseline /> 
            <Hidden smDown>
                <TopDisp /> 
            </Hidden> 
            <NavBar {...props}/> 
                {roomInfoDisp}
            <Footer /> 
        </React.Fragment> 
    ); 
}

export default Room; 