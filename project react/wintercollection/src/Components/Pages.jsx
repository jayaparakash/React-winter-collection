import "../Asserts/style/Pages.css"
// import Footer from "../Components/Footer"

import { FaRegWindowRestore }  from "react-icons/fa"
import{FaLock} from"react-icons/fa"
import{GrPowerCycle} from"react-icons/gr"
function Pages(){
    return(
        <div className="Pages" >
            <div className="pag1 container">
               
               <div className="Text">
                <h1>Get Our</h1>
                <h1 className="hline">Latest Offers News</h1>
                <p className="pline">Subscribe news latter</p>
               </div>

            <div className="SecBox">
                <div className="Merg">

                <div className="Pc">  
                    <input className="form-control1 me-2" type="search" placeholder="Your Email here" aria-label="Search" />
                </div>

                <div className="BT"> <button className="Bts">Shop Now</button> </div>
                </div>
            </div>

            </div>

            <div className="pag2 container">

            </div>

            <div className="logtext container">
                <div className="lt1">
                <FaRegWindowRestore style={{fontSize:20, marginTop:20}}/>

                <h5>Free Shipping Method</h5>
                <p style={{width:193}}>aorem ixpsacdolor sit 
                ameasecur adipisicing elitsf
                edasd</p>  
                </div>

                <div className="lt2">
                <FaLock style={{fontSize:20,marginTop:20}}/>
                <h5>Secure Payment System</h5>
                
                <p style={{width:193}}>aorem ixpsacdolor sit
                ameasecur adipisicing elitsf
                edasd</p>  
                </div>

                <div className="lt3">
                <GrPowerCycle style={{fontSize:20,marginTop:20}}/>
                <h5>Secure Payment System</h5>
                <p style={{width:193}}>aorem ixpsacdolor sit
                ameasecur adipisicing elitsf
                edasd</p>  
                </div>

            </div>


            <div className="Pics container-fluid" >
                <div className="Pic1">

                </div>
                <div className="Pic2">

                </div>
                <div className="Pic3">
                    
                </div>
                <div className="Pic4"></div>
                <div className="Pic5"></div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Pages;