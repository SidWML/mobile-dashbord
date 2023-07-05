import Navbar from '@/components/Navbar'
import Posts from '@/components/blogs/Posts'
import React from 'react'

export default function index() {
  return (
   <div className=" flex gap-8">
    <div className=" max-w-sm  min-w-sm  bg-[#f3f3f3]">
    <Navbar />
    <Posts />
   </div>
   <div className=" w-[820px] bg-[#f3f3f3]">
    <Navbar />
    <Posts tablet />
   </div>
   </div>
  )
}
