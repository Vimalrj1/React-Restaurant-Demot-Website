import React, { useState } from 'react'
import Restbody from './Restbody.module.css'
import twoseat from '../Utilities/Img/new-york-meets-tromso.jpg'
import threeseat from '../Utilities/Img/3seat.jfif'
import sixseat from '../Utilities/Img/4seat.jpg'

function Restpagebody() {


  const [Count, setCount] = useState(0)
  const incrnum = () => {
    setCount(Count + (+1));
  }
  const decrnum = () => {
    if (Count > 0) {
      setCount(Count - (+1));
    }
  }

  const [Count1, setCount1] = useState(0)
  const incrnum1 = () => {
    setCount1(Count1 + (+1));
  }
  const decrnum1 = () => {
    if (Count1 > 0) {
      setCount1(Count1 - (+1));
    }


  }

  const [Count2, setCount2] = useState(0)
  const incrnum2 = () => {
    setCount2(Count2 + (+1));
  }
  const decrnum2 = () => {
    if (Count2 > 0) {
      setCount2(Count2 - (+1));
    }


  }

  return (
    <div className={Restbody.rbody1}>

      <div className={Restbody.rbody2}>
        
        <div className={Restbody.fle}>
          <div className={Restbody.imgs0}>


            <img className={Restbody.imgs1} src={twoseat} alt='Rest img' />

            
              <h4>2 Seats Table</h4>
              <p className={Restbody.poi}>Enjoy the food with your Favorite people on pre - Reserved</p>
              <div className={Restbody.rbody03}>
                <span className={Restbody.rbody3} onClick={incrnum}>+</span>
                <span className={Restbody.rbody3}>{Count} </span>
                <span className={Restbody.rbody3} onClick={decrnum}>-</span>
              </div>
           
<span className={Restbody.bookn}>Book Now</span>
          </div>

          <div className={Restbody.imgs0}>


            <img className={Restbody.imgs1} src={threeseat} alt='Rest img' />

            
            <h4>3 Seats Table</h4>
            <p className={Restbody.poi}>Enjoy the food with your Favorite people on pre - Reserved</p>
              <div className={Restbody.rbody03}>
                <span className={Restbody.rbody3} onClick={incrnum1}>+</span>
                <span className={Restbody.rbody3}>{Count1} </span>
                <span className={Restbody.rbody3} onClick={decrnum1}>-</span>
              </div>
              <span className={Restbody.bookn}>Book Now</span>

          </div>
          <div className={Restbody.imgs0}>


            <img className={Restbody.imgs1} src={sixseat} alt='Rest img' />

            
            <h4>6 Seats Table</h4>
            <p className={Restbody.poi}>Enjoy the food with your Favorite people on pre - Reserved</p>
              <div className={Restbody.rbody03}>
                <span className={Restbody.rbody3} onClick={incrnum2}>+</span>
                <span className={Restbody.rbody3}>{Count2} </span>
                <span className={Restbody.rbody3} onClick={decrnum2}>-</span>
              </div>
              <span className={Restbody.bookn}>Book Now</span>

          </div>
        </div>
      </div>

    </div>

  )
}
export default Restpagebody