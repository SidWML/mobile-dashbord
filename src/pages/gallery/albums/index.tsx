import Navbar from '@/components/Navbar'
import Albums from '@/components/gallery/Albums'
import React from 'react'

export default function index() {
  return (
    <div className=" flex gap-8">
        <div className="  max-w-sm  min-w-sm  bg-[#f3f3f3]">
        <Navbar />
        <Albums />
    </div>
    <div className=" w-[820px] bg-[#f3f3f3]">
        <Navbar />
        <Albums tablet />
    </div>
    </div>
  )
}
