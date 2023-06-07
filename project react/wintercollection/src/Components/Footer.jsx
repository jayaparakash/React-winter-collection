import footerpic1 from "../Asserts/Images/logo/AIT-white.jpg"
import "../Asserts/style/Footer.css"

import{ FaRegCopyright } from "react-icons/fa"

import{ FaRegHeart } from "react-icons/fa"


import{ FaTwitter } from "react-icons/fa"

import{ FaFacebookF } from "react-icons/fa"

import{ TfiWorld } from "react-icons/tfi"



function Footer() {
    return(
        <div>
        <div className="Footerbox ">
            <div className="fbox1">
                <img src={footerpic1} alt="" />

                <p>63,1st Floor, 16th Main, 8th Cross BTM stage, BTM Layout, Bengaluru, karnataka 560029</p>
            </div>

            <div className="fbox2">
                <h1>Quick Links</h1>
                <p>about</p>
                <p>Offers & Discounts</p>
                <p>Get Coupon</p>
                <p>Contact us</p>
            </div>
            <div className="fbox3">
                <h1>Woman Cloth</h1>
                <p>Fashion Accesssories</p>
                <p>Offers & Discounts</p>
                <p>Man Accesssories</p>
                <p>Rubber made Tays</p>
            </div>
            <div className="fbox4">
                <h1>Support</h1>
                <p>Frequently Asked Questions</p>
                <p>Terms & Conditions</p>
                <p>Privacy policy </p>
                <p>Reprot a Payment Issue</p>
                <p></p>
            </div>
        </div>

        <div className="F2 container-fluid" style={{marginTop:80}} >
            <div className="col-md-10 col-sm-11 col-lg-10"><p>Copyright <FaRegCopyright/> 2022 All right | This template is made with <FaRegHeart style={{color:'blue'}}/> by Mr.Jaya Prakash</p></div>
            <div className="col-md-2 col-sm-1 col-lg-2"  ><FaTwitter/> <FaFacebookF/><TfiWorld/></div>
            
        </div>
        </div>
        
        
    )
}
export default Footer;