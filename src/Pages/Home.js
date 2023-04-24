import React from 'react'
import '../Styles/home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='Home'>
        <div className='look'>
            <img src='/images/image1.png'alt='err'/>
        </div>

        <div className='round-img'>
           <div className='collection'>
            <div className='ellipse1'>
                <img src='/images/Ellipse7.png' err/>
            </div>
            <p>Men’s T-Shirts</p>
           </div>

           <div className='collection'>
            <div className='ellipse2'>
                <img src='/images/Ellipse8.png' err/>
            </div>
            <p>Women’s Wear</p>
           </div>

           <div className='collection'>
            <div className='ellipse3'>
                <img src='/images/Ellipse9.png' err/>
            </div>
            <p>Winter Collections</p>
           </div>

           <div className='collection'>
            <div className='ellipse4'>
                <img src='/images/Ellipse10.png' err/>
            </div>
            <p>Hooded T-Shirts</p>
           </div>

           <div className='collection'>
            <div className='ellipse5'>
                <img src='/images/Ellipse11.png' err/>
            </div>
            <p>Polo Neck T-Shirts</p>
           </div>

           <div className='collection'>
            <div className='ellipse6'>
                <img src='/images/Ellipse12.png' err/>
            </div>
            <p>Full Sleeves T-Shirts</p>
           </div>
        </div>

         <div className='deals'>
            
                <div className='collection1'>
                    <img src='/images/image2.png' alt='err'/>
                    <img src='/images/image3.png' alt='err'/>
                </div>
                <div className='collection2'>
                <img src='/images/image4.png' alt='err'/>
                    <img src='/images/image6.png' alt='err'/>
                    <img src='/images/image5.png' alt='err'/>
                </div>
            </div>
            <Product/>
         </div>
         

  )
}

export default Home