import { inter } from "@/pages";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Input from "../generics/Input";
import { useRouter } from "next/router";
import Button from "../generics/Button";
import Table from "../generics/Table";
import Seo from "../generics/Seo";
import ReactSelecct from "../generics/ReactSelecct";

export default function Categories() {
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
  const options = ['tech', 'design', 'fashion'];

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
      <h1 className=" font-bold text-3xl text-[#a0a0a0]">Categories</h1>
      <button onClick={() => setshowForm(!showForm)} className=" font-medium text-sm text-white rounded-full bg-[#a855f7] px-6 py-2">
        Add Category
      </button>
    </div>

    <div className={` flex-col gap-5 ${showForm ? " flex " : " hidden  "}`}>
      <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className=" w-full space-y-3 px-3 py-4 bg-white  rounded-lg">
        <h1 className=" py-2 border-b border-dashed">Add New Category</h1>
        <Input placeholder="Category name" label="Category Name" required />
        <Input before url={router.pathname} placeholder="url" label="URL" required />
        <ReactSelecct options={options} label="Parent" />
        <ReactSelecct options={options} label="Attribute set" />
        <div className="flex w-full justify-end">
          <Button bgColor="bg-[#a855f7]" label="save" />
        </div>
      </div>
      <Seo />
    </div>

    <Table sectionHeading="All Categories" rowData={rowData} />
  </div>
  )
}
