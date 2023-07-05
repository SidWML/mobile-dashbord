import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faTruck, faBox, faUser, faArrowUp, faArrowDown, faEllipsisVertical, faSort, faEye, faEdit, faTrash, faChevronLeft, faChevronRight, faChartBar, faChartColumn } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home({mobile}) {
  const [popup, setPopup] = useState();

  const actions = [
    {
      id: 1,
      title: "Revenue",
      value: "$12,628",
      icon: <FontAwesomeIcon icon={faDollar} />,
      bgColor: "bg-orange-500",
      analytics: "14.5%",
    },
    {
      id: 2,
      title: "Orders",
      value: "2",
      icon: <FontAwesomeIcon icon={faTruck} />,
      bgColor: "bg-blue-500",
      analytics: "-4.5%",
    },
    {
      id: 3,
      title: "Products",
      value: "560",
      icon: <FontAwesomeIcon icon={faBox} />,
      bgColor: "bg-purple-500",
      analytics: "15%",
    },
    {
      id: 4,
      title: "Customers",
      value: "45",
      icon: <FontAwesomeIcon icon={faUser} />,
      bgColor: "bg-red-500",
      analytics: "1.5%",
    },
  ];

  const cutomers = [
    {
      id: 1,
      name: "Iftikar Ammed",
      price: "$179",
      gmail: "@iftikarahmed",
      image: "https://revel-html.codebasket.xyz/dashboad/assets/images/avatar.png",
      orders: 2,
    },
    {
      id: 2,
      name: "Sadab Khan",
      price: "$179",
      gmail: "@sadabkhan",
      image: "https://revel-html.codebasket.xyz/dashboad/assets/images/avatar-2.png",
      orders: 2,
    },
    {
      id: 3,
      name: "Hoyder Ali",
      price: "$179",
      gmail: "@hoyderali",
      image: "https://revel-html.codebasket.xyz/dashboad/assets/images/avatar-3.png",
      orders: 2,
    },
    {
      id: 4,
      name: "Hardik Ali",
      price: "$179",
      gmail: "@hardikali",
      image: "https://revel-html.codebasket.xyz/dashboad/assets/images/avatar-4.png",
      orders: 2,
    },
    {
      id: 5,
      name: "Alaysa Haly",
      price: "$179",
      gmail: "@alaysahaly",
      image: "https://revel-html.codebasket.xyz/dashboad/assets/images/avatar-5.png",
      orders: 2,
    },
  ];

  const ordersTable = [
    {
        id:1,
        orderID:"855212",
        customer:"Soward",
        orderDate:"28/10/22",
        paymentMethod:"Cash",
        deliveryDate:"02/11/22",
        TotalAmount:"$05.22",
        status:"Paid"

    },
    {
        id:2,
        orderID:"855213",
        customer:"Kian",
        orderDate:"29/10/22",
        paymentMethod:"Card",
        deliveryDate:"03/11/22",
        TotalAmount:"$17.00",
        status:"Delivered"

    },
    {
        id:3,
        orderID:"855214",
        customer:"Jennifer",
        orderDate:"28/10/22",
        paymentMethod:"Cash",
        deliveryDate:"02/11/22",
        TotalAmount:"$05.22",
        status:"Pending"

    },
    {
        id:4,
        orderID:"855215",
        customer:"Benjamin",
        orderDate:"30/10/22",
        paymentMethod:"Cash",
        deliveryDate:"03/11/22",
        TotalAmount:"$12.15",
        status:"Unpaid"

    },
    {
        id:5,
        orderID:"855213",
        customer:"Kian",
        orderDate:"29/10/22",
        paymentMethod:"Card",
        deliveryDate:"03/11/22",
        TotalAmount:"$17.00",
        status:"Delivered"

    },
    {
        id:6,
        orderID:"855214",
        customer:"Jennifer",
        orderDate:"28/10/22",
        paymentMethod:"Cash",
        deliveryDate:"02/11/22",
        TotalAmount:"$05.22",
        status:"Pending"

    },
    {
        id:7,
        orderID:"855215",
        customer:"Benjamin",
        orderDate:"30/10/22",
        paymentMethod:"Cash",
        deliveryDate:"03/11/22",
        TotalAmount:"$12.15",
        status:"Unpaid"

    },
  ]

  const tableHeaders = Object.keys(ordersTable[0])

  return (
    <div className=" p-4 flex flex-col gap-5 z-[3] ">
        <div className=" flex w-full justify-between ">
            <input type="date" name="" className="  px-4 py-2  shadow-md rounded-md" id=" " />
        <button className=" px-4 py-2 w-[max-content] ml-auto bg-purple-500 text-white font-medium text-sm rounded-md"><FontAwesomeIcon icon={faChartColumn} /> Create report</button>
        </div>
        
      <div className={` grid ${mobile ? "grid-cols-2 " : " grid-cols-4 "}  gap-5 p-2 bg-purple-100 bg-opacity-70 rounded-xl `}>
        {actions.map((action) => {
          const number = parseFloat(action.analytics);
          console.log(number);

          return (
            <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className={`  p-3 bg-white rounded-xl`}>
              <div className=" flex flex-col gap-2">
                <div className=" flex items-center justify-between">
                  <div
                    className={`${action.bgColor} text-white flex items-center justify-center w-[40px] text- h-[40px] rounded-md font-medium text-xl `}
                  >
                    {action.icon}
                  </div>
                  <div className={` flex items-center relative justify-center w-[40px] text- h-[40px] rounded-md font-medium text-xl `}>
                    <FontAwesomeIcon onClick={() => (popup === action.id ? setPopup() : setPopup(action.id))} className="z-[1]" icon={faEllipsisVertical} />
                    <div
                      className={` absolute ${
                        action.id === popup ? " block " : " hidden"
                      } min-w-[max-content] right-0 bottom-10  bg-white shadow-md text-sm p-1.5 rounded-md`}
                    >
                      <Link href="">View More</Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1 className=" text-slate-700 font-medium text-lg">{action.title}</h1>
                  <p className=" text-xl font-bold">{action.value}</p>
                  <p className=" font-medium text-sm">
                    {number > 1 ? (
                      <div className="text-green-500 space-x-1">
                        <FontAwesomeIcon icon={faArrowUp} />
                        <span className="">{number}%</span>
                      </div>
                    ) : (
                      <div className="text-red-500 space-x-1">
                        <FontAwesomeIcon icon={faArrowDown} />
                        <span className="">{number}%</span>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className=" p-3 bg-white rounded-xl">
        <img src="/img.png" alt="" className="" />
      </div>
      <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className="p-3 rounded-xl bg-white space-y-6">
        <div className=" w-full flex items-center py-2 border-b justify-between">
          <h1 className=" font-bold text-xl  ">New Customers</h1>
          <div className={` flex items-center relative justify-center w-[40px] text- h-[40px] rounded-md font-medium text-xl `}>
            <FontAwesomeIcon onClick={() => (popup === "customers" ? setPopup() : setPopup("customers"))} icon={faEllipsisVertical} />
            <div
              className={` absolute ${
                popup === "customers" ? " block " : " hidden"
              } min-w-[max-content] right-0 bottom-10  bg-white shadow-md text-sm p-1.5 rounded-md`}
            >
              <Link href="">View More</Link>
            </div>
          </div>
        </div>
        <div className=" w-full">
          {cutomers.map((cutomer) => (
            <div className=" flex justify-between border-b py-2 items-center">
              <div className=" rounded-md overflow-hidden ">
                <img src={cutomer.image} alt="" className="" />
              </div>
              <div className=" w-[35%]">
                <h1 className=" font-medium">{cutomer.name}</h1>
                <p className=" text-[#707070]">{cutomer.gmail}</p>
              </div>
              <div className=" flex space-x-3 text-sm text-slate-500">
                <p className="">{cutomer.orders} Orders</p>
                <p className=" ">{cutomer.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className="p-3 rounded-xl bg-white ">
        <div className=" w-full flex items-center  py-2 border-b justify-between">
          <h1 className=" font-bold text-xl">Recent Orders</h1>
          <div className={` flex items-center relative justify-center w-[40px] text- h-[40px] rounded-md font-medium text-xl `}>
            <FontAwesomeIcon onClick={() => (popup === "customers" ? setPopup() : setPopup("customers"))} icon={faEllipsisVertical} />
            <div
              className={` absolute ${
                popup === "customers" ? " block " : " hidden"
              } min-w-[max-content] right-0 bottom-10  bg-white shadow-md text-sm p-1.5 rounded-md`}
            >
              <Link href="">View More</Link>
            </div>
          </div>
        </div>
        <div className=" overflow-x-scroll">
        <table className=" ">
           <thead className=" ">
           <tr className="grid grid-cols-9 bg-[#f2f2f2] w-[max-content] ">
           <th className="  py-2 space-x-2  col-span-0.5   font-medium text-md text-slate-600">
                <span className="">Sl No</span>
              </th>
              <th className="  py-2 space-x-2  col-span-1   font-medium text-md text-slate-600">
                <span className="">Order Id</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2  col-span-1 font-medium text-md text-slate-600">
                <span className="">Customer</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2 col-span-1  font-medium text-md text-slate-600">
                <span className="">Order Date</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2  col-span-1  font-medium text-md text-slate-600">
                <span className="">Payment Method</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2  col-span-1 font-medium text-md text-slate-600">
                <span className="">Delivery Date</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2 col-span-1  font-medium text-md text-slate-600">
                <span className="">Total Amount</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2 col-span-1 font-medium text-md text-slate-600">
                <span className="">Status</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
              <th className="  py-2 space-x-2  col-span-1  font-medium text-md text-slate-600">
                <span className="">Action</span>
                <FontAwesomeIcon className=" text-sm" icon={faSort} />
              </th>
            </tr>
           </thead>
           <tbody className="">
            {
                ordersTable.map((order, index) => (
                    <tr className={` grid grid-cols-9 ${ index % 2 ? " bg-[#f2f2f7] " : " "  }  text-center w-full`}>
               {
                tableHeaders.map((header, index) => (
                    index === ordersTable.length ? <th className="  py-2 break-words space-x-2 px-4 font-normal text-sm ">
                    <span className={` px-3 py-1 rounded-full  text-xs ${order[header] === "Pending" ? " bg-blue-400 text-white" : order[header] === "Paid" ?  " bg-green-800 text-white " : order[header] === "Delivered" ?  " bg-orange-500 text-white " : " bg-slate-700 text-white "} `}>{order[header]}</span>
                  </th> : <th className="  py-2 break-words space-x-2 px-4 font-normal text-sm ">
                    <span className="">{order[header]}</span>
                  </th>
                ))
               }
               <th className=" w-full col-span-1 flex gap-2 text-slate-400 justify-center py-2 ">
                <FontAwesomeIcon className=" hover:text-black" icon={faEye} />
                <FontAwesomeIcon className=" hover:text-blue-500" icon={faEdit} />
                <FontAwesomeIcon className=" hover:text-red-500" icon={faTrash} />
               </th>
            </tr>
                ))
            }
           </tbody>
        </table>
        </div>
        <div className=" flex items-center justify-between py-4">
            <div className=" font-medium text-sm">
                showing 7 of 35
            </div>
            <div className=" w-[max-content] flex gap-1 items-center">
                <FontAwesomeIcon icon={faChevronLeft} />
                <span className=" px-2  bg-red-500 text-white">1</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
      </div>
    </div>
  );
}
