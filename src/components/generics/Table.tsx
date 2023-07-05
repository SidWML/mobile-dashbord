import { faChevronLeft, faChevronRight, faEdit, faLink, faMagnifyingGlass, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Popover } from "@headlessui/react";
import Button from "./Button";

export default function Table({ rowData, sectionHeading, action }) {
  return (
    <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className="px-3 space-y-4 py-4 bg-white rounded-lg">
      <div className=" py-2 border-b border-dashed flex items-center justify-between">
        <h1 className="">{sectionHeading}</h1>

        <div className=" relative w-[60%]">
          <FontAwesomeIcon
            className=" absolute top-[50%] text-[#919191] -translate-y-[50%] left-[40px] -translate-x-[30px]"
            icon={faMagnifyingGlass}
          />
          <input type="text" className="px-9 py-1.5 w-full focus:ring-blue-600 focus:outline-blue-500  rounded-full border" />
        </div>
      </div>
      <div className="w-full">
        <table className=" w-full  text-start">
          <thead>
            <tr className=" bg-[#f7f5fb]  text-md font-medium text-slate-600  w-full grid grid-cols-7">
              <th className=" col-span-1 flex items-center justify-center">
                {" "}
                <input type="checkbox" name="" id="" />{" "}
              </th>
              <th className=" py-2   text-start col-span-3">Name</th>
              {!action && <th className=" py-2  text-center col-span-3">Action</th>}
            </tr>
          </thead>
          <tbody>
            {rowData.map((data, index) => (
              <tr className={` w-full  font-normal text-sm grid grid-cols-7 ${index % 2 ? " bg-[#f5f5f5] " : " "}`}>
                <td className=" col-span-1 flex items-center justify-center">
                  {" "}
                  <input type="checkbox" name="" id="" />{" "}
                </td>
                <td className=" py-2 col-span-3">{data.name}</td>
                {!action && (
                  <td className=" py-2 text-center col-span-3 justify-center flex items-center gap-2">
                    <Popover className="relative ">
                      <Popover.Button>
                      <span className=" block w-[30px] flex items-center justify-center rounded-lg h-[30px] border text-blue-700 hover:text-white hover:bg-blue-700 border-blue-700">
                      <FontAwesomeIcon icon={faLink} />
                    </span>
                      </Popover.Button>

                      <Popover.Panel
                        style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 15px 4px" }}
                        className="absolute shadow-lg right-0 top-[120%] bg-white rounded-lg w-[max-content] overflow-hidden h-[max-content] z-10"
                      >
                        <div className=" w-full ">
                          <div className="  py-2 px-6 bg-purple-400 text-white gap-3 border-b border-dashed">
                            <div className="">
                              <h1 className=" font-medium text-lg">All Notifications</h1>
                              <p className=" font-normal text-sm text-slate-100">No notifications to show</p>
                            </div>
                          </div>
                          <div className="py-2 px-6 flex flex-col ">0 Notifications</div>
                        </div>
                      </Popover.Panel>
                    </Popover>
                    <Popover className="relative ">
                      <Popover.Button>
                      <span className=" block w-[30px] flex items-center justify-center rounded-lg h-[30px] border text-[#05a29e] hover:text-white hover:bg-[#05a29e] border-[#05a29e]">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                      </Popover.Button>

                      <Popover.Panel
                        style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 15px 4px" }}
                        className="absolute shadow-lg right-0 top-[120%] bg-white rounded-lg w-[max-content] overflow-hidden h-[max-content] z-10"
                      >
                        <div className=" w-full ">
                          <div className="  py-2 px-6 bg-purple-400 text-white gap-3 border-b border-dashed">
                            <div className="">
                              <h1 className=" font-medium text-lg">All Notifications</h1>
                              <p className=" font-normal text-sm text-slate-100">No notifications to show</p>
                            </div>
                          </div>
                          <div className="py-2 px-6 flex flex-col ">0 Notifications</div>
                        </div>
                      </Popover.Panel>
                    </Popover>
                    <Popover className="relative">
                      <Popover.Button>
                      <span className=" block w-[30px] flex items-center justify-center rounded-lg h-[30px] border text-red-500 hover:text-white hover:bg-red-500 border-red-500">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                      </Popover.Button>

                      <Popover.Panel
                        style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 15px 4px" }}
                        className="absolute shadow-lg right-0 top-[120%] bg-white rounded-lg w-[max-content] overflow-hidden h-[max-content] z-10"
                      >
                        <div className=" w-full ">
                          <div className="  py-2 px-6  text-white bg-red-600 bg-opacity-70 gap-3 border-b border-dashed">
                            <div className="">
                              <h1 className=" font-medium text-lg">Are you Sure? </h1>
                              <p className=" font-normal text-sm text-slate-100">you want to delete</p>
                            </div>
                          </div>
                          <div className="py-4 px-6 flex gap-5 ">
                            <Button label="Cancel"  bgColor="bg-slate-600" />
                            <Button label="Delete"  bgColor="bg-red-500" />
                          </div>
                        </div>
                      </Popover.Panel>
                    </Popover>
                    
                    
                    
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex items-center justify-between px-2 ">
        <div className=" font-medium text-sm">showing 4 of 35</div>
        <div className=" w-[max-content] flex gap-2 items-center">
          <span className=" text-xs font-medium text-slate-400">Previous</span>
          <span className=" px-2  bg-[#a855f7] rounded-md text-white">1</span>
          <span className=" text-xs font-medium text-slate-900">next</span>
        </div>
      </div>
    </div>
  );
}
