import Link from 'next/link'
import {BsTwitter,BsFacebook,BsInstagram,BsLinkedin, BsTiktok, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <div id="footer">
        <div>
            <h4>Useful Links</h4>
            <a href="#">Home</a>
            <a href="#">About US</a>
            <a href="#">Services</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
        <div>
            <h4>Services</h4>
            <a href="">Web Design</a>
            <a href="">Web Development</a>
            <a href="">Product Manegement</a>
            <a href="">Marketing</a>
            <a href="">Graphic Design</a>
        </div>
        <div>
            <h4>SIGN UP FOR ALPHALETE NEWSLETTER</h4>
            <div className='sub-input'>
                <input type="text" placeholder='Your Email Address'/>
                <button style={{borderRadius: '10px'}} className='button'>SIGN UP</button>
            </div>
            <div className='icons'>
                <BsInstagram className='footerIcon'/> 
                <BsTiktok className='footerIcon' /> 
                <BsTwitter className='footerIcon'/> 
                <BsFacebook className='footerIcon'/> 
                <BsYoutube className='footerIcon'/>
            </div>
        </div>
        
    </div>
    <aside className='copyRight'>
        <h6>© 2024 | Alphalete Athletics LLC | All Rights Reserved</h6>
        <h6 style={{margin: '10px 0'}}> LEARN MORE | DREAM MORE | BE MORE</h6>
        <span><p>PRIVACY POLICY</p> | <p>TERMS OF SERVICE</p> | <p>SITEMAP</p> | <p>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</p></span>
    </aside>
    </>
  )
}

export default Footer
