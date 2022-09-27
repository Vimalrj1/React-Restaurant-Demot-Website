import React from 'react'
import insta from '../Utilities/Img/ins.png'
import fb from '../Utilities/Img/fb.png'
import aboutbody from './about.module.css'

const about = () => {
    return (
        <div className={aboutbody.line}>
            <p>Le Bernardin Restaurant is an Indian online food ordering and delivery platform.
                Founded in July 2014, Le Bernardin Restaurant is based in New York and operates in 500  cities as of September 2021.
                Besides food delivery, Le Bernardin Restaurant also a Restaurant ,
                and a same-day package delivery service called Le Bernardin Restaurant Genie.</p>
            <div className={aboutbody.line1}>
                <img src={insta} alt='insta' />
                <img src={fb} alt='insta' />
            </div>
        </div>
    )
}

export default about
