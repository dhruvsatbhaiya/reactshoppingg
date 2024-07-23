import React, { useContext } from 'react'
import './Products.css'
import StoreContext from './storecontext'
import Carditems from './Carditems'

const Products = ({items,cart,setCart}) => {
    // const {items}=useContext(StoreContext)
  return (


     

    <div>
        
    {items.map((item,index)=>{
        return(
        
            <div className='col-lg-3' key={index}>
                <Carditems cart={cart} setCart={setCart} id={item.id} price={item.price} imgSrc={item.imgSrc}  category={item.category}  description={item.description}  />
            </div>
        )
    })}
    </div>
  )
}

export default Products