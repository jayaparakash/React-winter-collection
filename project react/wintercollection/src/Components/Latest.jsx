import { Link } from "react-router-dom";
import{ FaRegStar } from "react-icons/fa"
import "../Asserts/style/Latest.css"
// import Footer from "./Footer";
function Latest(){
    return(
        <div>
            <div className="Lat container-fluid">

                <div className="LatPro col-md-7 col-sm-6">
                    <h1>Latest Products</h1>
                </div>
                
                <nav className="navbar navbar-expand-lg bg-body-tertiary col-md-5 col-sm-5">


                     <Link to ='/All' className="nav-link col-md-2 col-sm-1" >All</Link>

                     <Link to ='/New' className="nav-link col-md-2 col-sm-1">New</Link>

                     <Link to ='/Features' className="nav-link col-md-2 col-sm-1">Features</Link>

                     <Link to ='/Offer' className="nav-link col-md-2 col-sm-1">Offer</Link>
               
                          
                 </nav>
                 
            </div>
            <hr style={{width: '80%',	margin: 'revert'}}  />
            

            <div className="Latestimgs container-fluid">

                <div className="Limg1 col-md-4 col-sd-1">
                    <div style={{marginTop: 20,  marginLeft: 10}}>
                        <h5 style={{width: 50, height: 20, borderRadius:10, backgroundColor:'#ff1414', fontSize:15, color:"white" }}>New</h5>
                    </div>

                    <div style={{marginTop: 350, height: 152, backgroundColor: "white" }}>
                        <div style={{height: 60}}>
                           <span ><FaRegStar/></span> 
                           <span><FaRegStar/></span>
                           <span><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                        </div>
                       <h4 style={{fontSize:20, fontFamily:"math", marginBottom:0}}>Green Dress With detail</h4>
                       <h style={{fontSize:17}}>$40.00</h>
                       <span style={{textDecoration:"line-through", margin: 10, color: 'deeppink'}}>$60.00</span>
                       
                       
                    </div>
                </div>

                <div className="Limg2 col-md-4 col-sd-1">
                     <div style={{marginTop: 390, height: 152, backgroundColor: "white" }}>
                     <div style={{height: 60}}>
                           <span ><FaRegStar/></span> 
                           <span><FaRegStar/></span>
                           <span><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                        </div>
                       <h4 style={{fontSize:20, fontFamily:"math", marginBottom:0}}>Green Dress With detail</h4>
                       <h style={{fontSize:17}}>$40.00</h>
                       <span style={{textDecoration:"line-through", margin: 10, color: 'deeppink'}}>$60.00</span>
                    </div>
                </div>

                <div className="Limg3 col-md-4 col-sd-1">
                    <div style={{marginTop: 20,  marginLeft: 10}}>
                        <h5 style={{width: 50, height: 20, borderRadius:10, backgroundColor:'#ff1414', fontSize:15, color:"white" }}>New</h5>
                    </div>

                    <div style={{marginTop: 350, height: 152, backgroundColor: "white" }}>
                    <div style={{height: 60}}>
                           <span ><FaRegStar/></span> 
                           <span><FaRegStar/></span>
                           <span><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                        </div>
                       <h4 style={{fontSize:20, fontFamily:"math", marginBottom:0}}>Green Dress With detail</h4>
                       <h style={{fontSize:17}}>$40.00</h>
                       <span style={{textDecoration:"line-through", margin: 10, color: 'deeppink'}}>$60.00</span>
                    </div>
                </div>    

                <div className="Limg4 col-md-4 col-sd-1">
                     <div style={{marginTop: 390, height: 152, backgroundColor: "white" }}>
                     <div style={{height: 60}}>
                           <span ><FaRegStar/></span> 
                           <span><FaRegStar/></span>
                           <span><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                        </div>
                       <h4 style={{fontSize:20, fontFamily:"math", marginBottom:0}}>Green Dress With detail</h4>
                       <h style={{fontSize:17}}>$40.00</h>
                       <span style={{textDecoration:"line-through", margin: 10, color: 'deeppink'}}>$60.00</span> 
                    </div>
                </div>

                <div className="Limg5 col-md-4 col-sd-1">
                    <div style={{marginTop: 390, height: 152, backgroundColor: "white" }}>
                    <div style={{height: 60}}>
                           <span ><FaRegStar/></span> 
                           <span><FaRegStar/></span>
                           <span><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                        </div>
                       <h4 style={{fontSize:20, fontFamily:"math", marginBottom:0}}>Green Dress With detail</h4>
                       <h style={{fontSize:17}}>$40.00</h>
                       <span style={{textDecoration:"line-through", margin: 10, color: 'deeppink'}}>$60.00</span>
                    </div>
                </div>

                <div className="Limg6 col-md-4 col-sd-1">
                    <div style={{marginTop: 20,  marginLeft: 10}}>
                        <h5 style={{width: 50, height: 20, borderRadius:10, backgroundColor:'#ff1414', fontSize:15, color:"white" }}>New</h5>
                    </div>

                    <div style={{marginTop: 350, height: 152, backgroundColor: "white" }}>
                    <div style={{height: 60}}>
                           <span ><FaRegStar/></span> 
                           <span><FaRegStar/></span>
                           <span><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                           <span style={{color: "silver"}}><FaRegStar/></span>
                        </div>
                       <h4 style={{fontSize:20, fontFamily:"math", marginBottom:0}}>Green Dress With detail</h4>
                       <h style={{fontSize:17}}>$40.00</h>
                       <span style={{textDecoration:"line-through", margin: 10, color: 'deeppink'}}>$60.00</span>
                    </div>
                </div>

            </div>

            <div className="LatBan">
                <div className="Men">

                </div>

                <div className="Text">
                    <h2 style={{fontSize:50, fontFamily:'emoji', fontWeight:'bold'}}>Find The Best Product</h2>
                    <h2 style={{fontSize:50, fontFamily:'emoji', fontWeight:'bold'}}>from Our Shop</h2>

                    <p style={{fontWeight: 400,color:'black'}}>Designers Who are interesten Creating State often.</p>

                    <button style={{borderRadius: 15, width: 130, color: 'white', backgroundColor: 'black', border: 'none', height:30}}>Shop Now</button>
                  
                </div>

                  
                <div className="Shirts">

                </div>
               
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Latest;
