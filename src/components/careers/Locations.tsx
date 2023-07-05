import { inter } from "@/pages";
import { faChevronLeft, faChevronRight, faFilter, faLink, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Input from "../generics/Input";
import Button from "../generics/Button";
import Seo from "../generics/Seo";
import Table from "../generics/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Locations({tablet}) {
  const router = useRouter();
  const path = router.pathname.split("/");
  const [showForm, setshowForm] = useState(false);
  const locationTables = [
    {
      name: "Bangalore",
      state:"Karnataka",
      Country:"India"
    },
    {
      name: "Bangalore",
      state:"Karnataka",
      Country:"India"
    },
    {
      name: "Hyderbad",
      state:"Telangana",
      Country:"India"
    },
    {

      name: "Pune",
      state:"Pune",
      Country:"India"
    },
  ];

  const tableHeaders = Object.keys(locationTables[0]);

  return (
    <div className={`${inter.className} p-4 flex flex-col gap-5 z-[3]`}>
      <div className="flex space-x-2 text-sm  font-medium text-slate-400 ">
        <h1 className="">Home</h1>
        {path.map((item) => (
          <h1 className=" capitalize">
            <span className="">{item}</span> <FontAwesomeIcon className="text-xs" icon={faChevronRight} />{" "}
          </h1>
        ))}
      </div>
      <div className="flex  justify-between items-center">
        <h1 className=" font-bold text-3xl text-[#a0a0a0]">Locations</h1>
        <button onClick={() => setshowForm(!showForm)} className=" font-medium text-sm text-white rounded-full bg-[#a855f7] px-6 py-2">
          Add Location
        </button>
      </div>
      <div className={`${showForm ? " flex flex-col gap-5 " : " hidden "}`}>
      <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className=" w-full space-y-3 px-3 py-4 bg-white  rounded-lg">
        <h1 className=" py-2 border-b border-dashed">Add New Location</h1>
        <Input placeholder="Location name" label="Location Name" required />
        <Input before url={router.pathname} placeholder="url" label="URL" required />
        <p className=" text-xs font-light text-slate-600 text-[11px]">
          ( Added Location can be selected from the dropdown while creating the post )
        </p>
        <div className="flex w-full justify-end">
          <Button bgColor="bg-[#a855f7]" label="save" />
        </div>
      </div>
      <Seo />
      </div>
      <div style={{boxShadow:" rgba(0,0,0,.05) 0 1px 4px"}} className="px-3 space-y-4 py-4 bg-white rounded-lg">
    <div className=" py-2 border-b border-dashed flex items-center justify-between">
    <h1 className="">All Locations</h1>

    <div className=" relative w-[60%] max-w-sm">
    <FontAwesomeIcon className=' absolute top-[50%] text-[#919191] -translate-y-[50%] left-[40px] -translate-x-[30px]' icon={faMagnifyingGlass} />
    <input type="text" className="px-9 py-1.5 w-full  focus:ring-blue-600 focus:outline-blue-500  rounded-full border" />
    </div>
    </div>

      <div className={` ${tablet ? " " : " overflow-x-scroll"}  w-full`}>
        <table className=" w-full ">
          <thead className=" w-full ">
            <tr className={`grid grid-cols-4 ${tablet ? " w-full " : " w-[max-content] "}    bg-[#f2f2f2]  `}>
              <th className="py-2 col-span-1 min-w-[max-content] px-4 flex items-center justify-center ">
                {" "}
                <input className=" w-[15px] h-[15px]" type="checkbox" name="" id="" />{" "}
              </th>
              <th className="  py-2 col-span-1 min-w-[max-content] space-x-2 px-6 text-start   break-word  font-medium text-md text-slate-600">
                <span className="">Title</span>
              </th>
              <th className="  py-2 col-span-1 min-w-[max-content] space-x-2 px-6 text-start  break-word font-medium text-md text-slate-600 flex items-center justify-between">
                <span className="">State</span>
                <FontAwesomeIcon className=" text-sm" icon={faFilter} />
              </th>
              <th className="  py-2 col-span-1 min-w-[max-content] space-x-2 px-6 text-start  break-word font-medium text-md text-slate-600 flex items-center justify-between">
                <span className="">Country</span>
                <FontAwesomeIcon className=" text-sm" icon={faFilter} />
              </th>
            </tr>
          </thead>
          <tbody className=" w-full">
            {locationTables.map((order, index) => (
              <tr className={` grid grid-cols-4 font-normal text-sm   ${index % 2 ? " bg-[#f2f2f7] " : " "}  text-center w-full`}>
                <td className="py-2 px-4 flex col-span-1 col-span-1 min-w-[max-content] items-center justify-center">
                  {" "}
                  <input className=" w-[15px] h-[15px]" type="checkbox" name="" id="" />{" "}
                </td>{" "}
                {
                    tableHeaders.map(header => (
                        <td className=" py-2 break-words col-span-1 min-w-[max-content] space-x-2 flex items-center text-start  px-6   font-normal text-sm ">
                  <span className="">{order[header]}</span>
                </td>
                    ))
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex items-center justify-between py-4">
        <div className=" font-medium text-sm">showing 7 of 35</div>
        <div className=" w-[max-content] flex gap-2 items-center">
                <span className=" text-xs font-medium text-slate-400">Previous</span>
                <span className=" px-2  bg-[#a855f7] rounded-md text-white">1</span>
                <span className=" text-xs font-medium text-slate-900">next</span>
            </div>
      </div>
    </div>
    </div>
  );
}
