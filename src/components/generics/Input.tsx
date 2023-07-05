import React from 'react'

export default function Input(props) {
    const { url, before,after,placeholder, label , required, textColor } = props
  return (
    <div className=" w-full space-y-2 rounded-lg ">
       {
        label &&  <label htmlFor="" className='ml-1 space-x-0.5 font-normal text-sm text-slate-500'><span className={`${textColor ? " text-white " : " "}`}>{label}</span>{required && <span className=" text-red-500">*</span> }</label>
       }
        <div  className="  flex rounded-l-md">
        {
            before && <div className=" bg-[#e5e2e2] rounded-l-lg text-xs flex items-center justify-center py-2.5 px-3 min-w-[max-content] ">
            {
                url && url
            }
        </div>
        }
        <input  type="text"  className={` py-2.5 border focus:ring-blue-600 focus:outline-blue-500 px-4 placeholder:text-slate-300 w-full  ${before ? " rounded-r-lg" : " rounded-lg  "} `} />
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
