import Logo from '../../assets/Images/logo-d.png'
import { Link, NavLink } from 'react-router-dom'
import  './index.scss' 

const Topbar = () => (
    <div classname = 'nav-bar'>

        <Link className='Logo' to ='/'> 
            <img src= {Logo} alt ="Logo" /> 
        </Link>

        <div className='choices'> 
            <NavLink exact='true' activeclassname='active' to='/'>
                <div classname='option'> we out here</div>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/'>
                <div classname='option'> we out here</div>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/'>
                <div classname='option'> we out here</div>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/'>
                <div classname='option'> we out here</div>
            </NavLink>

        </div>
        

    </div>
)

export default Topbar