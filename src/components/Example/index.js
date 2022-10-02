import "./index.scss"; 
import Topbar from '../Topbar'; 
import fillerbanner from '../../assets/Images/fillerbanner.jpg';
import BasicSelect from "../dropdown";
import BasicSelect2 from "../dropdown/index2";
import BasicSelect3 from "../dropdown/index3";
import BasicSelect4 from "../dropdown/index4";
import BasicSelect5 from "../dropdown/index5";



const Example = () => {



    return (

        <div className="app">
            <Topbar/>
        
            <div className="topbanner">
                <img src={fillerbanner} alt = "Topbanner"/> 
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
                    
                
                
            </div>
        </div>
    )
}


export default Example

