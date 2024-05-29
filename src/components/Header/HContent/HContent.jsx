import React from 'react'

import logo from '../../../assets/Images/logo.svg'
import Button from '../../Button/Button'

function HContent() {
  return (
    <div className='hContent'>
        <img className='logo' src={logo} alt="Logo"  />
        <div>
            <div className="users">
                <div className="user" title='Mehedi'>
                    <img src="https://ca.slack-edge.com/TLP9J64R5-U026AQEH5DH-edca2894294a-512" alt="" />
                    <span></span>
                </div>
            </div>
        </div>
        <div>
           <Button name={'Login'}></Button>
        </div>
    </div>
  )
}

export default HContent