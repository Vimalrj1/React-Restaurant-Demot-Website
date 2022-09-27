import React from 'react'
import Headlogo from '../Utilities/recipebook.png'
import Bars from '../Utilities/Img/bars.png'
import Navbarcs from './Navbar.module.css'
import {Link} from "react-router-dom";
    
        
function Navbar  ()  {
    return (
        
        <div className={Navbarcs.Navbar}>
            <div className={Navbarcs.Navbar1}>
                <img src={Headlogo} alt='Headlogo' />
            </div>
            <div className={Navbarcs.Navbar2}>
                <h2>Le Bernardin Restaurant</h2>
            </div>
            {/* <h2 >Sign in</h2> */}
            
            <ul className={Navbarcs.Navbar3}>
               
                <Link to="/" className={Navbarcs.Navbar3}><li>Home</li></Link>
                <Link to="Restaurant" className={Navbarcs.Navbar3}> <li>Reserve Table</li></Link>
                <Link to="Orderonline" className={Navbarcs.Navbar3}> <li>Order Online</li></Link>
                <Link to="About" className={Navbarcs.Navbar3}><li>About</li></Link>
                <Link to="Sign" className={Navbarcs.Navbar3}><li className={Navbarcs.Navbar4}>Sign in</li></Link>
                
                {/* <li>Home</li>
                 <li >Restaurant</li>
                 <li>Order Online</li>
                <li>About</li>
                <li className={Navbarcs.Navbar4}>Sign in</li> */}
            </ul>
            <img src={Bars} alt='Headlogo' className={Navbarcs.bars}/>
        </div>
    )
}

export default Navbar