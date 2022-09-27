import React from 'react'
import Fish from '../Utilities/Img/fish.jpg'
import burger from '../Utilities/Img/burger.jpg'
import pizza from '../Utilities/Img/pizza.jpg'
import variety from '../Utilities/Img/group1.jpg'
import variety1 from '../Utilities/Img/group2.jpg'
import { useState } from 'react'
import Orderbody from './Order.module.css'

const Order = () => {
  const [Count, setCount] = useState(0)
  const incrnum = () => {
    setCount(Count + (+1));
  }
  const decrnum = () => {
    if (Count > 0) {
      setCount(Count - (+1));
    }
  }

  const [Count0, setCount0] = useState(0)
  const incrnum0 = () => {
    setCount0(Count0 + (+1));
  }
  const decrnum0 = () => {
    if (Count0 > 0) {
      setCount0(Count0 - (+1));
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

  const [Count3, setCount3] = useState(0)
  const incrnum3 = () => {
    setCount3(Count3 + (+1));
  }
  const decrnum3 = () => {
    if (Count3 > 0) {
      setCount3(Count3 - (+1));
    }
  }


  return (
    <div>
      <div className={Orderbody.line}>
        <div className={Orderbody.orderover}>
          <img src={Fish} alt='H' className={Orderbody.im} />
          <h4>Fish</h4>
          <div className={Orderbody.rbody03}>
            <span className={Orderbody.rbody3} onClick={incrnum}>+</span>
            <span className={Orderbody.rbody3}>{Count} </span>
            <span className={Orderbody.rbody3} onClick={decrnum}>-</span>
          </div>
          <span className={Orderbody.bookn}>Book Now</span>
        </div>

        <div className={Orderbody.orderover}>
          <img src={burger} alt='H' className={Orderbody.im} />
          <h4>Cheesy Burger</h4>
          <div className={Orderbody.rbody03}>
            <span className={Orderbody.rbody3} onClick={incrnum0}>+</span>
            <span className={Orderbody.rbody3}>{Count0} </span>
            <span className={Orderbody.rbody3} onClick={decrnum0}>-</span>
          </div>
          <span className={Orderbody.bookn}>Book Now</span>
        </div>

        <div className={Orderbody.orderover}>
          <img src={pizza} alt='H' className={Orderbody.im} />
          <h4>Veg-Pizza</h4>
          <div className={Orderbody.rbody03}>
            <span className={Orderbody.rbody3} onClick={incrnum1}>+</span>
            <span className={Orderbody.rbody3}>{Count1} </span>
            <span className={Orderbody.rbody3} onClick={decrnum1}>-</span>
          </div>
          <span className={Orderbody.bookn}>Book Now</span>
        </div>

        <div className={Orderbody.orderover}>
          <img src={variety} alt='H' className={Orderbody.im} />
          <h4>Variety-Rice</h4>
          <div className={Orderbody.rbody03}>
            <span className={Orderbody.rbody3} onClick={incrnum2}>+</span>
            <span className={Orderbody.rbody3}>{Count2} </span>
            <span className={Orderbody.rbody3} onClick={decrnum2}>-</span>
          </div>
          <span className={Orderbody.bookn}>Book Now</span>
        </div>

        <div className={Orderbody.orderover}>
          <img src={variety1} alt='H' className={Orderbody.im} />
          <h4>Variety-Rice2</h4>
          <div className={Orderbody.rbody03}>
            <span className={Orderbody.rbody3} onClick={incrnum3}>+</span>
            <span className={Orderbody.rbody3}>{Count3} </span>
            <span className={Orderbody.rbody3} onClick={decrnum3}>-</span>
          </div>
          <span className={Orderbody.bookn}>Book Now</span>
        </div>
      </div>
    </div>
  )
}

export default Order