import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contactus from './components/Contactus'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Productsdetails from './components/Productsdetails'
import { items } from './assets/Data'
import Search from './components/Search'
import Cart from './components/Cart'
function App() {
const [data,setData]=useState([...items])
const [cart,setCart]=useState([])
  return (
    <>
     <BrowserRouter>
<Navbar cart={cart} />
<Header setData={setData}/>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/products' element={<Products cart={cart} setCart={setCart}  items={data}/>}  ></Route>
      <Route path='/contact' element={<Contactus/>} ></Route>
      <Route path='/product/:id' element={<Productsdetails/>} ></Route>
      <Route path='/search/:term' element={<Search/>}></Route>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
     </Routes>
     </BrowserRouter>
      </>
  )
}

export default App
