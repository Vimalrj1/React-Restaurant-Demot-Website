import React from 'react'
import img1 from '../Utilities/Img/group2.jpg'
import Headercs from './Header.module.css'
 const Header = () => {
  return (
    <div className={Headercs.headercs1}>
        <img src={img1} alt='HeaderImg'/>
    </div>
  )
}

export default Header
