import React from 'react'
import Resbuilds from '../Utilities/Img/Resbuild.jpg'
import Resbuild1 from '../Utilities/Img/Resbuild1.jpg'
import Bodycs from './Body.module.css'
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className={Bodycs.body1}>
      <div className={Bodycs.body15}>
        <diV className={Bodycs.body2}>
          <img src={Resbuilds} alt='Resbuild' className={Bodycs.body3} />
          <p className={Bodycs.body4}>Restaurant </p>
          <p className={Bodycs.body5}>Find your Hotel with an immersive food experience and the most WondeFul taste,
            including things you won't find anywhere else.</p>
          <Link to="/Restaurant" className={Bodycs.body5}><span className={Bodycs.body6}>Browse Restaurant</span></Link>
        </diV>
        <diV className={Bodycs.body2}>
          <img src={Resbuild1} alt='Resbuild' className={Bodycs.body3} />
          <p className={Bodycs.body4}>Order Food</p>
          <p className={Bodycs.body5}>Find your Food On Online with  most WondefulTaste and Faster Delivery to your Home,
            Explore More you won't find anywhere else.</p>
          <span className={Bodycs.body6}>Order Online</span>
        </diV>
      </div>

    </div>
  )
}


export default Body
