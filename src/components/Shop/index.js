import './index.scss'
import Topbar from '../Topbar'
import { NavLink } from 'react-router-dom'

const Shop = () => {
    return (
    
      <div className='shop-page'>
        <Topbar/>
        <div className='wrapper'>
          <div className='left'>
            
            <div className='left-text'>
            Buying for an event or for personal use? 
            We'll handle your order
            </div>

            <NavLink exact ="true" activeclassname="active" className="personal-link" to="/personal" style={{textDecoration:"none"}}>
                Personal 
            </NavLink>

          </div>
          <div className='right'>
            <div className='right-text'> 
            Buying for you're business and want to help out? 
            We'll guide you here
            </div>
            <NavLink exact ="true" activeclassname="active" className="business-link" to="/business" style={{textDecoration:"none"}}>
                Business
            </NavLink>

          </div>


        </div>

      </div>
    )
}

export default Shop 