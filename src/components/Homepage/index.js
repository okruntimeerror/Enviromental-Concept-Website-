import { Outlet, NavLink } from "react-router-dom";
import Topbar from "../Topbar"
import frontpage1 from '../../assets/Images/frontpage.jpg'
import './index.scss';


const Home = () => {
    return (
        <div className="App">
            <Topbar/> 
            <div className="page">
                
                <div className="splitleft">
                    <p>
                        Sustainable products
                    </p>

                    <text>
                        To Go
                    </text>
                    
                    <text2>
                        Packaging
                    </text2>

                    <p3>
                        Compostable Food Containers, Utencils and plates 
                    </p3>

                    <NavLink exact ="true" activeclassname="active" className="shop-link" to="/shop" style={{textDecoration:"none"}}>
                         <div2 >Shop now! </div2>
                    </NavLink>

                </div>

                <div className="splitright">
                    <img src={frontpage1} alt="frontpage1"/>
                </div>

                <div className="stage2"> 
                    Trusted By Our Community Composters.
                    <br/>
                    <br/>
                    They Turn Our Products Into Healthy Soil.

                </div>

                <div className="splitleft">
                    testing
                </div>
                <div className="splitright">
                    testing
                </div>

                
            <Outlet/>
            

            </div>

        </div>
    )
}

export default Home 
