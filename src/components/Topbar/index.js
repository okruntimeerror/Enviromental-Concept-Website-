import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Images/logo-d.png'

const Topbar = () => (
    <div className='nav-bar'>
        <Link className ='logo' to ='/'>
            <img src={logo} alt="logo"/> 
        </Link>

        <nav>
            <NavLink exact ="true" activeclassname="active" to="/" style={{textDecoration:"none"}}>
                <div>homepage </div>
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="example-link" to="/example" style={{textDecoration:"none"}}>
                <div>example </div>
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="shop-link" to="/shop" style={{textDecoration:"none"}}>
                <div>shop </div>
            </NavLink>
            <NavLink exact ="true" activeclassname="active" classname="carbon-footprint" to="/carbon" style={{textDecoration:"none"}}>
                <div>carbon </div>
            </NavLink>
        </nav>
    </div>

)

export default Topbar 