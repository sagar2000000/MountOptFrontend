
import Header from './components/Header/Header'
import './App.css'

import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import {  Route, Routes } from 'react-router-dom';
import Sunglass from './pages/SunGlass/Sunglass';
import EyeGlass from './pages/EyeGlass/EyeGlass';
import ContactLens from './pages/ContactLens/ContactLens';
import ProductsDetails from './pages/ProductDetails/ProductsDetails';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';

function App() {
  

  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/sunglasses' element={ <Sunglass/>}></Route>
      <Route path='/eyeglasses' element={ <EyeGlass/>}></Route>
      <Route path='/contact-lens' element={ <ContactLens/>}></Route>
      <Route path='/product/:name' element={<ProductsDetails/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/orders' element={<Order/>}></Route>
     
    </Routes>
   
    <Footer/>

     
    </>
  )
}

export default App
