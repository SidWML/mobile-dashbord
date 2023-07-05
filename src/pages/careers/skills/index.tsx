import Navbar from '@/components/Navbar'
import Skills from '@/components/careers/Skills'
import React from 'react'

export default function index() {
  return (
    <div className=" flex gap-8">
    <div className=" max-w-sm  min-w-sm  bg-[#f3f3f3]">
    <Navbar/>
    <Skills />
   </div>
   <div className=" w-[820px] bg-[#f3f3f3]">
    <Navbar/>
    <Skills tablet/>
   </div>
   </div>
  )
}
