import {BrowserRouter,Routes, Route } from 'react-router-dom';

import MyAccount from './Components/MyAccount';
import WhishList from './Components/WishList';
import Shopping from './Components/Shopping'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

import Home from './Components/Home'
import Catagori from './Components/Catagori'
import Latest from './Components/Latest'
import Blog from './Components/Blog'
import Pages from './Components/Pages'
import Contact from './Components/Contact'

import Header from './Components/Header';

function Router() {
    return(
        <div>
           <BrowserRouter>
           <Header />
            <Routes>
             <Route exact path = '/MyAccount' element ={<MyAccount/>}></Route>
             <Route exact path = '/WishList' element ={<WhishList/>}></Route>
             <Route exact path = '/Shopping' element ={<Shopping/>}></Route>
             <Route exact path = '/Cart' element ={<Cart/>}></Route>
             <Route exact path = '/Checkout' element ={<Checkout/>}></Route>
             
             <Route exact path = '/Home' element ={<Home/>}></Route>
             <Route exact path = '/Catagori' element ={<Catagori/>}></Route>
             <Route exact path = '/Latest' element ={<Latest/>}></Route>
             <Route exact path = '/Blog' element ={<Blog/>}></Route>
             <Route exact path = '/Pages' element ={<Pages/>}></Route>
             <Route exact path = '/Contact' element ={<Contact/>}></Route>
            </Routes>            
           </BrowserRouter>
        </div>
    )
}

export default Router;