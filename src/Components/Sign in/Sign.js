import React from 'react'
import Signbody from './Sign.module.css'
const Sign = () => {
  return (
    <div className={Signbody.line0}>
      <div className={Signbody.line1}>
        <div className={Signbody.line2}>
          <h4>Email Id</h4>
          <input type='text' />
        </div>
        <div className={Signbody.line3}>
          <h4>Password</h4>
          <input type='password' />
        </div>

        <span className={Signbody.line4}>Log-In</span>

      </div>
    </div>
  )
}


export default Sign
