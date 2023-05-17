import React from 'react'
import { images, data } from '../../constant';
import Carousel from 'react-bootstrap/Carousel';
import './Clothes.css'

const Clothes = () => {
  return (
    <div className='fashion__app app__wrapper' style={{background:'#f8f9fa'}}>
  
   <div className='title flex__center '>
        <h1>Man & Woman Fashion</h1>
    </div>
   

  <div className='fashion__content flex__center'> 
    <Carousel variant="dark">

      <Carousel.Item>

        <div className='carousels'> 

        <div className='car__row'>

        <h3 className='name'>Man T -shirt</h3>
        <div className='price'>
            <p><span>Price</span> $ 30</p>
        </div>
        <img className='shirt__image'
          src={images.tshirt}
          
        />
       
           <div className='bottoms'>
            <div className='buttons'>Buy Now</div>
            <h2>See More</h2>
           </div>

           </div>

           <div className='car__row'>

        <h3 className='name'>Man T -shirt</h3>
        <div className='price'>
            <p><span>Price</span> $ 30</p>
        </div>
        <img className='shirt__image'
          src={images.dress}
          
        />
       
           <div className='bottoms'>
            <div className='buttons'>Buy Now</div>
            <h2>See More</h2>
           </div>

           </div>


           <div className='car__row'>

        <h3 className='name'>Man T -shirt</h3>
        <div className='price'>
            <p><span>Price</span> $ 30</p>
        </div>
        <img className='shirt__image'
          src={images.womenclothes} 
          
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

<h3 className='name'>Man T -shirt</h3>
<div className='price'>
    <p><span>Price</span> $ 30</p>
</div>
<img className='shirt__image'
  src={images.tshirt}
  
/>

   <div className='bottoms'>
    <div className='buttons'>Buy Now</div>
    <h2>See More</h2>
   </div>

   </div>

   <div className='car__row'>

<h3 className='name'>Man T -shirt</h3>
<div className='price'>
    <p><span>Price</span> $ 30</p>
</div>
<img  className='shirt__image' 
  src={images.dress}
  
/>

   <div className='bottoms'>
    <div className='buttons'>Buy Now</div>
    <h2>See More</h2>
   </div>

   </div>


   <div className='car__row'>

<h3 className='name'>Man T -shirt</h3>
<div className='price'>
    <p><span>Price</span> $ 30</p>
</div>
<img className='shirt__image' 
  src={images.womenclothes}
  
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

export default Clothes