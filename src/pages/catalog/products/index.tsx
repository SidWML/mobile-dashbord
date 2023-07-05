import Navbar from '@/components/Navbar'
import Products from '@/components/catalog/Products'
import React from 'react'

export default function index() {
  return (
    <div className=" flex w-full gap-8">
    <div className=" max-w-sm  min-w-sm  bg-[#f3f3f3]">
    <Navbar />
    <Products mobile />
   </div>
   <div className="  w-[820px] bg-[#f3f3f3]">
    <Navbar />
    <Products  />
   </div>
   </div>
  )
}
