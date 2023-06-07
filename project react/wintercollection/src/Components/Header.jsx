import { Link } from "react-router-dom";
import{ FaSistrix } from "react-icons/fa"
import { FaHeart }  from "react-icons/fa"
import { FaCartArrowDown }  from "react-icons/fa"
import logo from "../Asserts/Images/icon/India.jpg"
import logo2 from "../Asserts/Images/logo/AIT-white.jpg"
import '../Asserts/style/Header.css'
import { useState } from "react";
function Header() {

  const [isMoble, setIsMoblie] = useState(false)

  // const setIsMoblies = () =>{
  //   setIsMoblie(!isMoblie)
  // }
return(
    <section>
    <div className="Header">
         <div className="logo col-md-1 col-sm-1" style={{width:'55px'}}>
            <img src={logo} alt="" />
         </div>

         <div className="dropdown logo col-md-1 col-sm-1" style={{width:'80px'}}>
            <select id="DropS">
            <option value = 'IND' style={{background:'black', border:'none',}}>IND</option>
             <option value="USA">USA</option>
             <option value="AUS">AUS</option>
             <option value="ENG">ENG</option>
             </select>
        </div>

        <div className="Num col-md-7 col-sm-3">
            <p>+918431040457</p>
        </div>

        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                 
                
                   <Link to ='/' className="nav-link col-md-4 col-sm-3" style={{color:"white"}} >MyAccount</Link>
                
                   <Link to ='/WishList' className="nav-link col-md-3 col-sm-2" style={{color:"white"}} >WishList</Link>
                
                   <Link to ='/Shopping' className="nav-link col-md-4 col-sm-2" style={{color:"white"}}>Shopping</Link>
                 
                   <Link to ='/Cart' className="nav-link col-md-2 col-sm-1" style={{color:"white"}}>Cart</Link>
                 
                   <Link to ='/Checkout' className="nav-link col-md-1 col-sm-1" style={{color:"white"}}>Checkout</Link>
               

                
            </nav>
        

    </div>

      <div className="Header2" style={{marginTop:15}}>
        


        <div className="img">
                    <img src={logo2}  alt="/" style={{ height:55, marginLeft:10}} />
                </div> 

                <div className="navi2" style= {{ marginLeft:240 ,marginTop: 5 }} >
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link to ='/Home' className="nav-link active" aria-current="page"  style= {{color:'black'}}>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link to ='/Catagori' className="nav-link"  style={{color:'black'}}>Catagori</Link>
                          </li>
                          <li className="nav-item">
                            <Link to ='/Latest' className="nav-link " style={{color:'black'}}>Latest</Link>
                          </li>
                          <li className="nav-item">
                            <Link to ='/Blog' className="nav-link " style={{color:'black'}}>Blog</Link>
                          </li>
                          <li className="nav-item">
                            <Link to ='/pages' className="nav-link " style={{color:'black'}}>pages</Link>
                          </li>
                          <li className="nav-item">
                            <Link to ='/Contact' className="nav-link " style={{color:'black'}}>Contact</Link>
                          </li>
                        </ul>

                    </nav>
                </div>

                        <div className="placeholder1" style={{ border:'1px solid black', borderRadius: 50, height: 40, marginTop: 10,  marginLeft: 60,width: 200, backgroundColor: 'white' }}>

                          <form className="ps1 d-flex" role="search" style= {{borderRadius: 86,   marginTop: 4, marginLeft:5,   width: 157}} >

                            <input className="form-control1 me-2" type="search" placeholder="Search  Products" aria-label="Search" style={{borderRadius: 40, border:'none', width: 155, hegiht:30}}/>
                            <i className="FaSistrix" style= {{ marginTop: 4}}><FaSistrix/></i>                         
                          </form>
                        </div>
                        
                        <div className="foo" style={{marginTop: 10,marginLeft: 15, border:'1px solid #00000085', borderRadius:30, height:40, width:40 }}>
                            <i className="FaHeart" style={{fontSize: 22, marginLeft:8}}> <FaHeart/> </i>
                        </div>

                        <div className="foo2" style={{marginTop: 10,marginLeft: 20, border:'1px solid #00000085', borderRadius:30, height:40, width:40 }}>    
                            <i className="FaCartArrowDown" style={{fontSize: 20, marginLeft: 8}}><FaCartArrowDown/></i>
                        </div>
                        
                        <Link to = "" className="btn btn-secondary disabled" role="button" aria-disabled="true" style= {{marginLeft: 20, height: 40, borderRadius: 20,  width: 100,  backgroundColor: '#004eff', marginTop: 10}}>Sign In</Link>
                       
                        <nav className="navbar" >

                        <ul className= {isMoble ? "nav-links-moblie" : "nav-links"} style={{listStyle:"none", display:'none'}}
                          onClick = {()=>setIsMoblie(false)}  >
                          <li className="nav-item2">
                            <Link to ='' className="Home2 active" aria-current="page"  style= {{color:'black', textDecorationLine:"none"}}>Home</Link>
                          </li>
                          <li className="nav-item2">
                            <Link to ='' className="Catagori2"  style={{color:'black', textDecorationLine:"none"}}>Catagori</Link>
                          </li>
                          <li className="nav-item2">
                            <Link to ='' className="Latest2 " style={{color:'black', textDecorationLine:"none"}}>Latest</Link>
                          </li>
                          <li className="nav-item2">
                            <Link to ='' className="Blog2 " style={{color:'black', textDecorationLine:"none"}}>Blog</Link>
                          </li>
                          <li className="nav-item2">
                            <Link to ='' className="pages2 " style={{color:'black', textDecorationLine:"none"}}>pages</Link>
                          </li>
                          <li className="nav-item2">
                            <Link to ='' className="Contact2 " style={{color:'black', textDecorationLine:"none"}}>Contact</Link>
                          </li>
                        </ul>

                          <div className="container-fluid">
                            <button className="navbar-toggler col-sm-1 " onClick={() => setIsMoblie(!isMoble)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{width:45}} >
                              <span className="navbar-toggler-icon" style={{width:20}}></span>
                              
                            </button>
                          </div>
                        </nav> 

                        
           
    </div> 
    </section>

       
)
}

export default Header;