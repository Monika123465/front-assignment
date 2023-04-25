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

            <div className='diamond-discount'>
          <div className='diamond'>
          <img src='/images/diamond.png' alt='err' />
            <h1>Hurry Up!</h1>
            <h1>85% OFF</h1>
            <h3>sale</h3>
            <button>SHOP NOW</button>
          </div>
          <div className='discount'>
            <img src='/images/discount.png' alt='err' />
            <h1>Hurry Up!</h1>
            <h1>75% OFF</h1>
            <h3>sale</h3>
            <button>SHOP NOW</button>
          </div>
            </div>

            <div className='service'>
                <div className='quality'>
                    <img src='/images/Vector19.png' alt='err'/>
                    <p>7 Days Return</p>
                </div>
                <div className='quality'>
                    <img src='/images/Vector20.png' alt='err'/>
                    <p>Quality Products</p>
                </div>
                <div className='quality'>
                    <img src='/images/Vector21.png' alt='err'/>
                    <p>Safe Payment</p>
                </div>
                <div className='quality'>
                    <img src='/images/Vector22.png' alt='err'/>
                    <p>24x7 Helpline</p>
                </div>
            </div>

            <div className='offer'>
                <div className='subscribe'>
                  <div><h1>Subscribe to get updates on exciting offer & deals</h1></div>  
                    <input type='text' placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
            </div>

         </div>
         

  )
}

export default Home