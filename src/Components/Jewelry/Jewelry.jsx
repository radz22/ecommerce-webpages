import React from 'react'
import { images } from '../../constant';
import Carousel from 'react-bootstrap/Carousel';
import './Jewelry.css'



const Jewelry = () => {
  return (
    <div className='fashion__app app__wrapper' style={{background:'#f8f9fa'}}>
  
   <div className='title flex__center '>
        <h1>Jewellery Accessories</h1>
    </div>
   

  <div className='fashion__content flex__center'> 
    <Carousel variant="dark">

      <Carousel.Item>

        <div className='carousels'> 

        <div className='car__row'>

        <h3 className='name'>Jumkas</h3>
        <div className='price'>
            <p><span>Start Price</span> $ 100</p>
        </div>
        <img className='shirt__image'
          src={images.jumkas}
          
        />
       
           <div className='bottoms'>
            <div className='buttons'>Buy Now</div>
            <h2>See More</h2>
           </div>

           </div>

           <div className='car__row'>

        <h3 className='name'>Necklaces</h3>
        <div className='price'>
            <p><span>Start Price</span> $ 100</p>
        </div>
        <img className='shirt__image'
          src={images.neklesh}
          
        />
       
           <div className='bottoms'>
            <div className='buttons'>Buy Now</div>
            <h2>See More</h2>
           </div>

           </div>


           <div className='car__row'>

        <h3 className='name'>Kangans</h3>
        <div className='price'>
            <p><span>Start Price</span> $ 100</p>
        </div>
        <img className='shirt__image'
          src={images.kangan} 
          
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

<h3 className='name'>Jumkas</h3>
<div className='price'>
    <p><span>Start Price</span> $ 100</p>
</div>
<img className='shirt__image'
  src={images.jumkas}
  
/>

   <div className='bottoms'>
    <div className='buttons'>Buy Now</div>
    <h2>See More</h2>
   </div>

   </div>

   <div className='car__row'>

<h3 className='name'>Necklaces</h3>
<div className='price'>
    <p><span>Start Price</span> $ 100</p>
</div>
<img className='shirt__image'
  src={images.neklesh}
  
/>

   <div className='bottoms'>
    <div className='buttons'>Buy Now</div>
    <h2>See More</h2>
   </div>

   </div>


   <div className='car__row'>

<h3 className='name'>Kangans</h3>
<div className='price'>
    <p><span>Start Price</span> $ 100</p>
</div>
<img className='shirt__image'
  src={images.kangan} 
  
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


<div className='loader__main flex__center'>
<div className='loader'>

</div>
</div>


</div>
   )
}

export default Jewelry