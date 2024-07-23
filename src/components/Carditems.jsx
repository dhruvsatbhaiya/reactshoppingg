import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Carditems({id,category,description,price,imgSrc,cart,setCart}) {

 const addtocart=(idd,categoryy,descriptionn,pricee,imgSrcc)=>{
  const obj={
    idd,categoryy,descriptionn,pricee,imgSrcc
  }
  setCart([...cart,obj])
  console.log(cart)

 }

  return (
   


    <div>


        <div key={id} className="col-lg-4">
        <div className="card" style={{width: '18rem'}}>
          <Link to={`/product/${id}`}>
    <img src={imgSrc} className="card-img-top" alt="..."/>
    </Link>
    <div className="card-body">
      <h5 className="card-title">{category}</h5>
      <p className="card-text">{description}</p>
      <button className='btn btn-primary'>$ {price}</button>
      <button onClick={()=>addtocart(id,category,description,price,imgSrc)} className='btn btn-warning'>Add to Cart</button>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
  
  </div>
  )
}

export default Carditems