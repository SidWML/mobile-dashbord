import React from 'react'

export default function Input(props) {
    const { url, before,after,placeholder, label } = props
  return (
    <div className=" w-full space-y-2">
       {
        label &&  <label htmlFor="" className='ml-1 font-medium text-md text-slate-500'>{label}</label>
       }
        <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className=" overflow-hidden flex rounded-l-md">
        {
            before && <div className=" bg-[#f2f2f2] py-2.5 px-2 ">
            {
                url && url
            }
        </div>
        }
        <input  type="text"  placeholder={placeholder} className={` py-2.5 focus:ring-blue-600 focus:outline-blue-500 px-2 w-full  ${before ? " rounded-r-lg" : " rounded-lg  "} `} />
        {
            after && <div className=" bg-[#f5f5f5] py-2.5 px-2 rounded-l-md">
            {
                url && url
            }
        </div>
        }
    </div>
    </div>
  )
}
