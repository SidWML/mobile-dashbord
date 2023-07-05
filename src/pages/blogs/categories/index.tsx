import Navbar from '@/components/Navbar'
import Categories from '@/components/blogs/Categories'
import React from 'react'

export default function index() {
  return (
   <div className=" flex w-full gap-8">
    <div className=" max-w-sm  min-w-sm  bg-[#f3f3f3]">
    <Navbar />
    <Categories />
   </div>
   <div className="  w-[820px] bg-[#f3f3f3]">
    <Navbar />
    <Categories />
   </div>
   </div>
  )
}