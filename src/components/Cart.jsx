import React, { useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = ({cart,setCart}) => {
  const [emptytext,setEmptytext]=useState('Welcome to Cart')

 


  const emptycart=()=>{


    setCart([])
    setEmptytext('Cart Empty')
    
  }
  return (
    
    
    <div>
          <h3>{emptytext}</h3>
          {cart.length===0? <Link to='/products'> <button className='btn btn-warning'>Continuing shopping </button> </Link>:<></>}


       {cart.map((item)=>{
     return(
        <div key={item.idd}>
        {console.log(cart)}
                  <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">

      <img key={item.idd} src={item.imgSrcc} className="img-fluid rounded-start" alt=""/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        
        <h5 key={item.idd} className="card-title">{item.titlee}</h5>
        <p key={item.idd} className="card-text">{item.descriptionn}</p>
       <button key={item.idd} className='btn btn-primary '>{item.pricee}</button> 
        <button key={item.idd} className='btn btn-warning'>Buy Now</button>
      </div>
    </div>
  </div>
</div>
        </div>
     )
       })}
             <button className={cart.length===0?'btnn':'btn btn-primary'}>check out</button>

      <button onClick={emptycart} className={cart.length===0?'btnn':'btn btn-danger'}>clear cart</button>
    </div>
  )


}

export default Cart