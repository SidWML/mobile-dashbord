import React from 'react'

export default function Button(props) {
   const { label, bgColor } = props
  return (
    <button className={` px-6 py-2 w-[max-content] ${bgColor}  text-white font-medium text-sm rounded-full`}> {label}</button>
  )
}
