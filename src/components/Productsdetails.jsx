import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Productdetails.css'
import { items } from '../assets/Data'
function Productsdetails() {
  const [productt,setProductt]=useState({})
  const [relatedproduct,setRelatedproduct]=useState([])
  
  useEffect(()=>{
    const filterproduct=items.filter((product)=>product.id==id)
    setProductt(filterproduct[0])
    const relatedproductt=items.filter((p)=>p.category===productt.category)
    setRelatedproduct(relatedproductt)
  },[productt.category])

  const {id}=useParams()

  return (
    <div className='imgdetails'>
    <img src={productt.imgSrc}></img>
    <p>{productt.category}</p>
    <p>{productt.description}</p>


<div className='relatedimg'>
  {relatedproduct.map((rel,index)=>{
    return(
      <img src={rel.imgSrc}></img>
    )
  })}
</div>
    </div>
  )
}

export default Productsdetails