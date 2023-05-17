import React from 'react'
import './Footer.css'
import { images } from '../../constant';

const Footer = () => {
  return (
    <div className='footer flex__center'>
      <div className='footer__logo'>
         <img src={images.logo}/>
      </div>

      <div className='footer__input'>
        <input className='mail_bt'type='text' placeholder='Your Email' name='Your Email'/>
        <span id='subscribe'>Subscribe</span>
      </div>  

      <div className='footer__content'>
        <ul className='footer__list'>
          <li>Best Sellers</li>
          <li>Gift Ideas</li>
          <li>New Releases</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
        </ul>
      </div>
      <div className='clone'>
        <h1 className='names'> Created By: <span>Radz Santillan</span></h1>
      </div>
      </div>
  )
}

export default Footer