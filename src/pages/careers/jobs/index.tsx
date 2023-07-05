import Navbar from '@/components/Navbar'
import Jobs from '@/components/careers/Jobs'
import React from 'react'

export default function index() {
  return (
    <div className=" flex w-full gap-8">
    <div className=" max-w-sm  min-w-sm  bg-[#f3f3f3]">
    <Navbar />
    <Jobs />
   </div>
   <div className="  w-[820px] bg-[#f3f3f3]">
    <Navbar />
    <Jobs tablet />
   </div>
   </div>
  )
}
