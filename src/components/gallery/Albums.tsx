import { inter } from "@/pages";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Input from "../generics/Input";
import ReactSelecct from "../generics/ReactSelecct";
import Seo from "../generics/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronLeft, faChevronRight, faFilter, faLink, faMagnifyingGlass, faPen, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../generics/Button";
import { Popover } from "@headlessui/react";

export default function Albums({ tablet }) {
  const router = useRouter();
  const path = router.pathname.split("/");
  const [showForm, setshowForm] = useState(false);
  const rowData = [
    {
      id: 1,
      name: "tech",
    },
    {
      id: 2,
      name: "food",
    },
    {
      id: 3,
      name: "fashion",
    },
    {
      id: 1,
      name: "design",
    },
  ];

  const options = ["tech", "design", "fashion"];

  const AlbumsTable = [
    {
      title: "DOGS",
      Tags: "Pets,Animals",
      Categories: "Pets,Animals",
      Published: true,
    },
    {
      title: "CATS",
      Tags: "Pets,Animals",
      Categories: "Pets,Animals",
      Published: true,
    },
    {
      title: "SALADS",
      Tags: "Food,Drinks",
      Categories: "Food,Drinks",
      Published: false,
    },
  ];
  const tableHeaders = Object.keys(AlbumsTable[0]);
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
        <h1 className=" font-bold text-3xl text-[#a0a0a0]">Albums</h1>
        <button onClick={() => setshowForm(!showForm)} className=" font-medium text-sm text-white rounded-full bg-[#a855f7] px-6 py-2">
          Add Album
        </button>
      </div>
      <div className={`${showForm ? " flex flex-col gap-5" : " hidden  "}`}>
        <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className=" w-full space-y-3 px-3 py-4 bg-white  rounded-lg">
          <h1 className=" py-2 border-b border-dashed">Add New Album</h1>
          <Input placeholder="Title" label="Title" required />
          <Input before url={router.pathname} placeholder="url" label="URL" required />
          <div className={`${tablet ? " grid grid-cols-3 gap-5 " : " "}`}>
            <ReactSelecct options={options} label="Categories" />
            <ReactSelecct options={options} label="Tag" />
            <ReactSelecct options={options} label="Author" />
          </div>
        </div>
        <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className=" w-full space-y-3 px-3 py-4 bg-white  rounded-lg">
          <h1 className=" py-2 border-b border-dashed">Album Description</h1>
          <div className=" space-y-2">
            <label htmlFor="" className="ml-1 space-x-0.5 font-light text-sm text-slate-500">
              <span className="">Description</span>
            </label>
            <textarea
              name=""
              placeholder="albums description"
              id=""
              className="w-full py-2.5 border focus:ring-blue-600 focus:outline-blue-500 px-4 placeholder:text-slate-300 rounded-lg"
              rows="5"
            ></textarea>
          </div>
        </div>
        <Seo />
        <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className=" w-full space-y-3 px-3 py-4 bg-white  rounded-lg">
          <h1 className=" py-2 border-b border-dashed">Upload Files</h1>
          <input type="file" multiple name="" id="" className="" />

          <div className="flex items-center gap-1.5">
            <input type="checkbox" name="" id="" className="w-[20px] h-[20px]" />
            <label htmlFor="" className="">
              Publish
            </label>
          </div>

          <div className=" w-full flex justify-end gap-2">
            <Button label="Cancel" bgColor="bg-slate-500" />
            <Button label="Save" bgColor="bg-[#a855f7]" />
          </div>
        </div>
      </div>
      <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className="px-3 space-y-4 py-4 bg-white rounded-lg">
        <div className=" py-2 border-b border-dashed flex items-center justify-between">
          <h1 className="">All Albums</h1>

          <div className=" relative w-[60%]">
            <FontAwesomeIcon className=" absolute top-[50%] text-[#919191] -translate-y-[50%] left-[20px]  " icon={faMagnifyingGlass} />
            <input type="text" className="px-10 py-1.5 w-full focus:ring-blue-600 focus:outline-blue-500  rounded-full border" />
          </div>
        </div>
        <div className=" overflow-x-scroll">
          <table className=" ">
            <thead className="">
              <tr className="flex  bg-[#f2f2f2] w-[max-content] ">
                <th className="py-2 px-4 flex items-center justify-center ">
                  {" "}
                  <input className=" w-[15px] h-[15px]" type="checkbox" name="" id="" />{" "}
                </th>
                <th className="  py-2 space-x-2 px-6 text-start  min-w-[150px] max-w-[200px] break-word  font-medium text-md text-slate-600">
                  <span className="">Title</span>
                </th>
                <th className="  py-2 space-x-2 px-6 text-start min-w-[150px] max-w-[200px] break-word font-medium text-md text-slate-600 flex items-center justify-between">
                  <span className="">Tags</span>
                  <FontAwesomeIcon className=" text-sm" icon={faFilter} />
                </th>
                <th className="  py-2 space-x-2 px-6 text-start  min-w-[150px] max-w-[200px] break-word font-medium text-md text-slate-600 flex items-center justify-between">
                  <span className="">Categories</span>
                  <FontAwesomeIcon className=" text-sm" icon={faFilter} />
                </th>
                <th className="  py-2 space-x-2 px-6  text-start min-w-[150px] max-w-[200px] break-word font-medium text-md text-slate-600 flex items-center justify-between">
                  <span className="">Published</span>
                  <FontAwesomeIcon className=" text-sm" icon={faFilter} />
                </th>
                <th className="  py-2 space-x-2 px-6  min-w-[150px] max-w-[200px] break-word font-medium text-md text-slate-600">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className=" w-full">
              {AlbumsTable.map((order, index) => (
                <tr className={` flex w-[max-content] font-normal text-sm   ${index % 2 ? " bg-[#f2f2f7] " : " "}  text-center w-full`}>
                  <td className="py-2 px-4 flex items-center justify-center">
                    {" "}
                    <input className=" w-[15px] h-[15px]" type="checkbox" name="" id="" />{" "}
                  </td>
                  {tableHeaders.map((header, index) =>
                    index === 4 ? (
                      <th className=" py-2 break-words flex items-center text-white text- justify-center space-x-2 px-6 min-w-[150px] max-w-[200px]  font-normal text-sm ">
                        {order[header] === true ? (
                          <div className=" rounded-full  w-[30px] bg-green-500 h-[30px] flex items-center justify-center">
                            {" "}
                            <FontAwesomeIcon icon={faCheck} />{" "}
                          </div>
                        ) : (
                          <div className=" w-[30px] h-[30px] flex rounded-full bg-red-500  items-center justify-center">
                            {" "}
                            <FontAwesomeIcon icon={faX} />{" "}
                          </div>
                        )}
                      </th>
                    ) : (
                      <th className=" py-2 break-words space-x-2 flex items-center text-start  px-6 min-w-[150px] max-w-[200px]  font-normal text-sm ">
                        <span className="">{order[header]}</span>
                      </th>
                    )
                  )}
                  <td className=" py-2 px-6 min-w-[150px] max-w-[200px]  font-normal text-sm justify-center flex items-center gap-2">
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
