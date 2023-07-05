import React, { useState } from 'react'

export default function ReactSelecct(props) {
    const { label, options, required } = props
  
  
    return (
      <div className=" w-full space-y-2">
       {
        label &&  <label htmlFor="" className='ml-1 space-x-0.5 font-light text-sm text-slate-500'><span className="">{label}</span>{required && <span className=" text-red-500">*</span> }</label>
       }
        <select name="" id="" className='w-full focus:ring-blue-600 focus:outline-blue-500 px-4  py-2.5 border rounded-lg'>
            {
                options.map(option => (
                    <option style={{padding:"10px 16px "}} className=' px-4 py-2.5'>{option}</option>
                ))
            }
        </select>
      </div>
    );
  };