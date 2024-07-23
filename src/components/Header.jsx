import React, { useState } from 'react'
import './Header.css'
import { items } from '../assets/Data'
import { useLocation, useNavigate } from 'react-router-dom'
const Header = ({setData}) => {
  const navigate=useNavigate()
  const location=useLocation()
  const [searchterm,setSearchterm]=useState('')

   
  const filterbycategory=(category)=>{
       const element=items.filter((p)=>p.category===category)
       setData(element)

  }

  const handlesubmit=(e)=>{
  e.preventDefault()
  navigate(`/search/${searchterm}`)
  setSearchterm('')
  }
  return (
    <div>
          <header className="py-3 mb-4 border-bottom">
    <div className="container d-flex flex-wrap justify-content-center">
      <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span className="fs-4">Electronic Hub</span>
      </a>
      <form onSubmit={handlesubmit} className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input
        value={searchterm}
        onChange={(e)=>setSearchterm(e.target.value)}
        type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>

    {location.pathname=='/products' &&(
        <div className="filter_by">
        <ul className='filter-ul'>
        <a className='filter'>filter-by</a>
        <a onClick={()=>setData(items)} className='filter'>no-filter</a>
        <a onClick={()=>filterbycategory('mobiles')} className='filter'>Mobiles</a>
        <a onClick={()=>filterbycategory('laptops')} className='filter'>Laptop</a>
        <a onClick={()=>filterbycategory('tablets')} className='filter'>Tablets</a>
        <a className='filter'>29999</a>
        </ul>
  </div>
    )}
  
  </header>
    </div>
  )
}

export default Header