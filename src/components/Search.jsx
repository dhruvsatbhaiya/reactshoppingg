import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { items } from '../assets/Data'
import Products from './Products'

function Search() {
  const {term}=useParams()
  const [filterdata,setFilterdata]=useState([])
  const[filterbycategory,setFilterbycategory]=useState([])
  useEffect(()=>{
  const filterdatat=()=>{
    const element=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
    const element1=items.filter((p)=>p.category.toLowerCase().includes(term.toLowerCase()))

    setFilterdata(element)
    setFilterbycategory(element1)
    console.log(element)
  }

    filterdatat()
  },[term])
  return (<>
    <Products items={filterdata}/>
    <Products items={filterbycategory}/>
    </>
  )
}

export default Search