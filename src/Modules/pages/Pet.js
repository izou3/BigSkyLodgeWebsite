//Packages/Libraries
import React from 'react'; 

//MaterialUI components 
import { CssBaseline, Hidden} from '@material-ui/core'; 

//components
import TopDisp from '../common/TopDisp'; 
import NavBar from '../common/NavBar'; 
import Footer from '../common/Footer'; 
import Section from '../common/Section'; 

//Images 
import PetImage from '../../img/pet.jpg'; 

function Pet (props) {

    return (
        <React.Fragment>
            <CssBaseline />
            <Hidden smDown>
                <TopDisp /> 
            </Hidden>
            <NavBar {...props}/> 
            <Section
                flow='row'
                id='policy'
                title='Dog Policy'
                img={PetImage}
                content={[
                    'Please declare your dog(s) when making your reservation. We only have limited pet rooms', 
                    'We only accept small to medium sized dogs and we do charge an additional pet fee of $15-$20 per pet per night depending on the room as well as a $50 pet deposit.', 
                    'Hotel management has sole discretion to ask a pet owner to find other accommodations if they deem the pet to be dangerous, harmful, or disruptive to other hotel guests.', 
                    'The hotel may charge a guest if services are required for excessive cleaning or if damages are incurred as a result of the guest’s pet.'

                ]}
            /> 
            <Footer /> 
        </React.Fragment> 
    ); 
}

export default Pet; 