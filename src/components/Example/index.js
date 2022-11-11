import "./index.scss"; 
import Topbar from '../Topbar'; 
import fillerbanner from '../../assets/Images/splashedited.PNG';
import {BasicSelect, BasicSelect2, BasicSelect3, BasicSelect5} from "../dropdown/searchbar/index";
import BasicSelect4 from "../dropdown/searchbar/material";
import  CustomerType  from "../dropdown/profile/index.js";
import ActionAreaCard1, { ActionAreaCard2, ActionAreaCard3 } from "../cards";



const Example = () => {



    return (

        <div className="app">
            <Topbar/>
        
            <div className="Topbanner">
                <img src={fillerbanner} alt = "splashpage"/> 
            </div>

            <div className="searchbar">

                
                <div className="searchsentence">
                    I am a
                </div>

                <BasicSelect/>

                <div className="searchsentence">
                    Looking for
                </div>

                <BasicSelect2/>

                <div className="searchsentence">
                    use plastics such as
                </div>

                <BasicSelect3/>

                <div className="searchsentence">
                    in
                </div>

                <BasicSelect4/>

                <div className="searchsentence">
                    Would you like it in custom?
                </div>

                <BasicSelect5/> 
                
                <button className="button">
                    Search
                </button>
                
                
            </div>
            
            <div className="makeprofile">
                <CustomerType/>

                <div className="products">

                    <ActionAreaCard1/> 
                    <ActionAreaCard2/>
                    <ActionAreaCard3/>
                    
                </div>
            </div>

            <div className="download">
                Want to download the lean Orb for yourself? 
            </div>

            <div className="family">
                how many users are here section
            </div>

            <div className="new_products">
                new product cards probably gonna use cards to describe them
            </div>

        </div>
    )
}


export default Example

