import { inter } from '@/pages'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'
import Input from '../generics/Input'

export default function Categories() {
    const router = useRouter()
    const path = router.pathname.split("/")
  return (
   <div className={`${inter.className} p-4 flex flex-col gap-5 z-[3]`}>
    <div className="flex space-x-2  font-medium text-slate-600 ">
        <h1 className="">Home</h1>
        {
            path.map(item => (
                <h1 className=" capitalize"><span className="">{item}</span> <FontAwesomeIcon icon={faChevronRight} /> </h1>
            ))
        }
    </div>
    <div className=" w-full space-y-3">
        <Input  placeholder="Category name" />
        <Input before url={router.pathname} placeholder="url" />
       
    </div>
   </div>
  )
}
