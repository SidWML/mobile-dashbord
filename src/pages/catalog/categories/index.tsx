import Navbar from '@/components/Navbar'
import Categories from '@/components/catalog/Categories'
import React from 'react'

export default function index() {
  return (
    <div className=" m-4 max-w-sm min-w-sm bg-[#f5f5f9]">
        <Navbar />
        <Categories />
    </div>
  )
}
