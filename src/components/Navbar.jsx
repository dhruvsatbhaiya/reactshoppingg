import React from 'react'
import './Navbar.css'
import {NavDropdown,Button,FormControl,Container,Nav} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = ({setData,cart}) => {

  

  const navigate=useNavigate()

  return (
    <div>
        {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">Navbar</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a onClick={()=>navigate('/')} classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a onClick={()=>navigate('/products')} classNameName="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li classNameName="nav-item">
          <a onClick={()=>navigate('/about')} classNameName="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li classNameName="nav-item">
          <a onClick={()=>navigate('/contact')} classNameName="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>

</nav> */}

<nav className="py-2 bg-body-tertiary border-bottom">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item"><a onClick={()=>navigate('/')} href="#" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
        <li className="nav-item"><a onClick={()=>navigate('/products')} href="#" className="nav-link link-body-emphasis px-2">Products</a></li>
        <li className="nav-item"><a onClick={()=>navigate('/about')} href="#" className="nav-link link-body-emphasis px-2">About us</a></li>
        <li className="nav-item"><a onClick={()=>navigate('/contact')} href="#" className="nav-link link-body-emphasis px-2">Contact us</a></li>
      </ul>
     <Link to='/cart'><button type="button" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</Link> 
      <ul className="nav">
        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Login</a></li>
        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>



    </div>
  )
}

export default Navbar