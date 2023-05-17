import React from 'react'
import { images } from '../../constant';
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';


const Header = () => {

   const [toggleMenu, setToggleMenu] = useState(0)





  return (
    <div className='header app__wrapper section__padding ' style={{ backgroundImage: `url(${images.banner})`}} >
    <div className='header__logo flex__center'>
     <img src={images.logo}/>
    </div>

    <div className='header__carts'>
    <ul>
      <AiOutlineShoppingCart style={{fontSize:'25px', color:'#fff'}}/>
      <span>Cart</span>
      
      <img src={images.user}/>
      <span>Cart</span>

    </ul>
   </div>


  <div className='header__bottom'> 

  <div className='header__hambuger'>
      <GiHamburgerMenu  className='overlay__open' style={{fontSize:'50px', color:'#fff'}} onClick={() => setToggleMenu (true)}/>
 
     {toggleMenu && ( 

      <div className='close'> 
      <div className='header__smaller  slide-left '>
       <AiOutlineClose  className='overlay__close' style={{fontSize:'26px' ,color:'#fff'}} onClick={() => setToggleMenu(false)}/>
       <ul className='navbar__list'>
        <li>Best Sellers</li>
        <li>Gift Ideas</li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Customer Servic</li>
     </ul>
      </div>
      </div>
        )}
    </div>

    <div className='header__dropdown'>
    <DropdownButton id="dropdown-basic-button" title="All Category">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>

  <div className='header__main'> 

    <div className='header__input'>
         <input className='form-control' type='text' placeholder='Search this blog'></input>

         <div className='searchbar'> 
         <AiOutlineSearch className='header__btn' style={{fontSize:'30px', color:'red'}}/>
         </div>
    </div>
    </div>

    <div className='header__dropdown-flag'>
    
    <DropdownButton id="dropdown-basic-button" title="English">
   
    <div className='uk'> 
     <img src={images.uk}/>
     </div>
   <div className='drop1'>  
   <img src={images.france}/>
 <Dropdown.Item href="#/action-1">French</Dropdown.Item>
 
  </div>
  </DropdownButton>

    </div>

   <div className='header__cart'>
    <ul>
      <AiOutlineShoppingCart style={{fontSize:'25px', color:'#fff'}}/>
      <span>Cart</span>
      
      <img src={images.user}/>
      <span>Cart</span>

    </ul>
   </div>


   
    </div>


 <div className='removes'> 
    <div className='slides flex__center'>
<Carousel>

  <Carousel.Item>
  <div className='carousel__content'> 
      <h3>Get Start</h3>
      <h3>Your favorite shoping</h3>
      <div className='button'> 
      <button className='btn'>Buy Now</button>
      </div>
      
      </div>
  </Carousel.Item>


  <Carousel.Item>
  
  <div className='carousel__content'> 
      <h3>Get Start</h3>
      <h3>Your favorite shoping</h3>
 
      <div className='button'> 
      <button className='btn'>Buy Now</button>
      </div>
      </div>
  </Carousel.Item>

  <Carousel.Item>
     <div className='carousel__content'> 
      <h3>Get Start</h3>
      <h3>Your favorite shoping</h3>
      
      <div className='button'> 
     <button className='btn'>Buy Now</button>
      </div>

      </div>
  </Carousel.Item>
</Carousel>
</div>
</div>



  </div>
  )
}

export default Header