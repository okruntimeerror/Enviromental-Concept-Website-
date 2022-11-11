import { Outlet, NavLink } from "react-router-dom";
import frontpage1 from '../../assets/Images/frontpage.jpg'
import compost from '../../assets/Images/frontpage2.jpg'
import Topbar from "../Topbar";
import './index.scss';


const Home = () => {
    return (
        <div className="App">
            <Topbar/>
            <div className="page">
                <div className="row">
                    <div className="splitleft">
                        <div className="text-container-left">
                            <p className="leading-sub">
                                Sustainable products
                            </p>

                            <text className="homepage">
                                To Go Packaging
                            </text>

                            <p3 className="sub">
                                Compostable Food Containers, Utencils and plates 
                            </p3>

                            <NavLink exact ="true" activeclassname="active" className="shop-link-local" to="/shop" style={{textDecoration:"none"}}>
                             Shop Now!
                            </NavLink>

                        </div>
                    </div>

                    <div className="splitright">
                        <img src={frontpage1} alt="frontpage1"/>
                    </div>
                </div>

                <div className="stage-3"> 
                    <div className="stage-3-text">
                        <div>Trusted By Our Community Composters.</div>

                        <div>They Turn Our Products Into Healthy Soil.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="splitleft">
                        <div className="flex-container">
                            <div className="homepage">
                                Kickstart Your Own Composts
                            </div>
                        </div>
                    </div>
                    <div className="splitright">
                        <img src={compost} alt="frontpage2.jpg"/>
                    </div>
                </div>
            <Outlet/>
            

            </div>

        </div>
    )
}

export default Home