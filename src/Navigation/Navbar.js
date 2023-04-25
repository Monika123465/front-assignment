import React from 'react'
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='navbar-up'>
        <p className='text'>Welcome to Our Store Hiscraves</p>
        <div className='call'  >
        <img  src='/images/Vector.png' alt='error'/>
        
        <p>Call us:1234567890</p>
        </div>
        </div>
        <div className='navbar-down'>
            <div className='image'>
                <img src='/images/Vector1.png' alt='err'/>
            </div>
            <div className='logo'>
                <h6>
                Logo Here
                </h6>
            </div>
            <div className='img-list'>
           <div> <img src='/images/Vector2.png' alt='error'/></div>
           <div><img src='/images/Vector3.png' alt='err'/></div>
           <div><img src='/images/Vector4.png' alt='err'/></div>
           <div><img src='/images/Vector5.png' alt='err'/></div>
            </div>
    </div>
    </>
  )
}

export default Navbar