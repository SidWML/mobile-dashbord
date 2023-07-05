import { inter } from '@/pages'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../generics/Button'
import Seo from '../generics/Seo'
import Table from '../generics/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../generics/Input'

export default function Skills() {
    const router = useRouter()
    const path = router.pathname.split("/")
    const [showForm, setshowForm] = useState(false);
    const rowData = [
        {
            name:"Python"
        },
        {
            name:"React"
        },
        {
            name:"Next js"
        },
        {
            name:"Redux"
        }
    ]

  return (
    <div className={`${inter.className} p-4 flex flex-col gap-5 z-[3]`}>
    <div className="flex space-x-2  font-medium text-slate-400 ">
        <h1 className="">Home</h1>
        {
            path.map(item => (
                <h1 className=" capitalize"><span className="">{item}</span> <FontAwesomeIcon className='text-xs' icon={faChevronRight} /> </h1>
            ))
        }
    </div>
    <div className="flex  justify-between items-center">
        <h1 className=" font-bold text-3xl text-[#a0a0a0]">Locations</h1>
        <button onClick={() => setshowForm(!showForm)} className=" font-medium text-sm text-white rounded-full bg-[#a855f7] px-6 py-2">
          Add Location
        </button>
      </div>
    <div className={`${showForm ? " flex flex-col gap-5 " : " hidden "}`}>
    <div style={{boxShadow:" rgba(0,0,0,.05) 0 1px 4px"}}  className=" w-full space-y-3 px-3 py-4 bg-white  rounded-lg">
    <h1 className=" py-2 border-b border-dashed">Add New Skill</h1>
        <Input  placeholder="Skill name" label="Skill Name" required />
        <Input before url={router.pathname} placeholder="url" required label="URL" />
        <p className=" text-xs font-light text-slate-600 text-[11px]">( Added Skills can be selected from the dropdown while creating the post )</p>
       <div className="flex w-full justify-end">
       <Button bgColor="bg-[#a855f7]" label="save" />
       </div>
    </div>
    <Seo />
    </div>
    <Table action sectionHeading="All Skills" rowData={rowData} />
   </div>
  )
}
