import React from 'react'
import { images } from '../../constant';
import Carousel from 'react-bootstrap/Carousel';
import './Gadget.css'


const Gadget = () => {
  return (
    <div className='fashion__app app__wrapper' style={{background:'#f8f9fa'}}>
  
    <div className='title flex__center '>
         <h1>Electronic</h1>
     </div>
    
 
   <div className='fashion__content flex__center'> 
     <Carousel variant="dark">
 
       <Carousel.Item>
 
         <div className='carousels'> 
 
         <div className='car__row'>
 
         <h3 className='name'>Laptop</h3>
         <div className='price'>
             <p><span>Start Price</span> $ 100</p>
         </div>
         <img className='shirt__image'
           src={images.laptop}
           
         />
        
            <div className='bottoms'>
             <div className='buttons'>Buy Now</div>
             <h2>See More</h2>
            </div>
 
            </div>
 
            <div className='car__row'>
 
         <h3 className='name'>Mobile</h3>
         <div className='price'>
             <p><span>Start Price </span> $ 100</p>
         </div>
         <img className='shirt__image'
           src={images.mobile}
           
         />
        
            <div className='bottoms'>
             <div className='buttons'>Buy Now</div>
             <h2>See More</h2>
            </div>
 
            </div>
 
 
            <div className='car__row'>
 
         <h3 className='name'>Computers</h3>
         <div className='price'>
             <p><span>Start Price</span> $ 100</p>
         </div>
         <img className='shirt__image'
           src={images.computer} 
           
         />
        
            <div className='bottoms'>
             <div className='buttons'>Buy Now</div>
             <h2>See More</h2>
            </div>
            </div>
 
            </div>
 
       </Carousel.Item>
 
     
 
 
       <Carousel.Item>
 
       <div className='carousels'> 
 
 <div className='car__row'>

 <h3 className='name'>Laptop</h3>
 <div className='price'>
     <p><span>Start Price</span> $ 100</p>
 </div>
 <img className='shirt__image'
   src={images.laptop}
   
 />

    <div className='bottoms'>
     <div className='buttons'>Buy Now</div>
     <h2>See More</h2>
    </div>

    </div>

    <div className='car__row'>

 <h3 className='name'>Mobile</h3>
 <div className='price'>
     <p><span>Start Price </span> $ 100</p>
 </div>
 <img className='shirt__image'
   src={images.mobile}
   
 />

    <div className='bottoms'>
     <div className='buttons'>Buy Now</div>
     <h2>See More</h2>
    </div>

    </div>


    <div className='car__row'>

 <h3 className='name'>Computers</h3>
 <div className='price'>
     <p><span>Start Price</span> $ 100</p>
 </div>
 <img className='shirt__image'
   src={images.computer} 
   
 />

    <div className='bottoms'>
     <div className='buttons'>Buy Now</div>
     <h2>See More</h2>
    </div>
    </div>

    </div>
 
 </Carousel.Item>
 
 
 
       </Carousel>
 
  
       </div>
 
 
 </div>
  )
}

export default Gadget