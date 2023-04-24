import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <footer>
        
            <div className='footer'>
                <div className='footer-up'>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five
                        centuries....</p>
                    <div className='social-media' >
                        <div>
                            <img src='/images/Vector6.png' alt='err'/>
                        </div>
                        <div>
                            <img src='/images/Vector7.png' alt='err'/>
                        </div>
                        <div>
                            <img src='/images/Vector8.png' alt='err'/>
                        </div>
                        <div>
                            <img src='/images/Vector9.png' alt='err'/>
                        </div>
                        <div>
                            <img src='/images/Vector10.png' alt='err'/>
                        </div>
                    </div>

                </div>
                <div className='footer-mid'>
                    <h3>ONLINE SHOPPING</h3>
                    <p>Men's T-shirts</p>
                    <p>Women's Wear</p>
                    <p>Winter Collection</p>
                    <p>Hooded T-shirts</p>
                    <p>Streetwear Collections</p>
                </div>
                <div className='footer-mid'>
                    <h3>CUSTOMER POLICIES</h3>
                    <p>About Us</p>
                    <p> Terms & Conditions</p>
                    <p>shipping & Returns Policy</p>
                    <p>Cancellation & Refund Policy</p>
                    <p>Contact Us</p>
                </div>
                <div className='store'>
                    <h3 className='information'>STORE INFORMATION</h3>
                    <div>
                        <img src='/images/Vector13.png' alt='err' />
                        <p>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. </p>
                    </div>
                    <div>
                        <img  src='/images/Vector14.png' alt='err'/>
                        <p>Call Us:1234567890 </p>
                    </div>
                    <div>
                        <img  src='/images/Vector15.png' alt='err'/>
                        <p>Email Us:info@yourmail.com </p>
                    </div>
                </div>

            </div>
            <div className='end'>
                <p>©2022-23 Powered By dummy team</p>
            </div>
        </footer>
    )
}

export default Footer