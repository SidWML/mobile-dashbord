import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faTruck,
  faBox,
  faUser,
  faArrowUp,
  faArrowDown,
  faEllipsisVertical,
  faSort,
  faEye,
  faEdit,
  faTrash,
  faChevronLeft,
  faChevronRight,
  faChartBar,
  faChartColumn,
  faPen,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Input from "./generics/Input";
import { Popover } from "@headlessui/react";
import Button from "./generics/Button";

export default function Home({ mobile, loggedIn, setLoggedIn }) {
  const [popup, setPopup] = useState();
  const [form, setForm] = useState(false);
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
      id: 1,
      orderID: "855212",
      customer: "Soward",
      orderDate: "28/10/22",
      paymentMethod: "Cash",
      deliveryDate: "02/11/22",
      TotalAmount: "$05.22",
      status: "Paid",
    },
    {
      id: 2,
      orderID: "855213",
      customer: "Kian",
      orderDate: "29/10/22",
      paymentMethod: "Card",
      deliveryDate: "03/11/22",
      TotalAmount: "$17.00",
      status: "Delivered",
    },
    {
      id: 3,
      orderID: "855214",
      customer: "Jennifer",
      orderDate: "28/10/22",
      paymentMethod: "Cash",
      deliveryDate: "02/11/22",
      TotalAmount: "$05.22",
      status: "Pending",
    },
    {
      id: 4,
      orderID: "855215",
      customer: "Benjamin",
      orderDate: "30/10/22",
      paymentMethod: "Cash",
      deliveryDate: "03/11/22",
      TotalAmount: "$12.15",
      status: "Unpaid",
    },
    {
      id: 5,
      orderID: "855213",
      customer: "Kian",
      orderDate: "29/10/22",
      paymentMethod: "Card",
      deliveryDate: "03/11/22",
      TotalAmount: "$17.00",
      status: "Delivered",
    },
    {
      id: 6,
      orderID: "855214",
      customer: "Jennifer",
      orderDate: "28/10/22",
      paymentMethod: "Cash",
      deliveryDate: "02/11/22",
      TotalAmount: "$05.22",
      status: "Pending",
    },
    {
      id: 7,
      orderID: "855215",
      customer: "Benjamin",
      orderDate: "30/10/22",
      paymentMethod: "Cash",
      deliveryDate: "03/11/22",
      TotalAmount: "$12.15",
      status: "Unpaid",
    },
  ];
const ordersDetails = [
{
  name:"Pending",
  image:"/pending_prev_ui.png",
  count:4
},
{
  name:"Confirmed",
  image:"/confirmed_prev_ui.png",
  count:8
},
{
  name:"Packing",
  image:"/packing_prev_ui.png",
  count:4
},
{
  name:"Delivered",
  image:"/delivered_prev_ui.png",
  count:2
},
]

  const tableHeaders = Object.keys(ordersTable[0]);

  return loggedIn ? (
    <div className=" p-4 flex flex-col gap-5 z-[3] ">
      <div style={{ boxShadow: " rgba(0,0,0,.05) 0 1px 4px" }} className=" w-full flex justify-between items-center  px-3 py-4 bg-white  rounded-lg">
        <div className="">
          <h1 className=" font-semibold text-xl">Welcome Back, Peter</h1>
          <p className=" font-light text-sm text-slate-600">Here is your business statistics.</p>{" "}
        </div>
        <div className={`${mobile ? "w-[20%] " : " w-[10%] "}`}>
          <img src="/avatar-2.png" alt="" className="" />
        </div>
      </div>
      <h1 className=" font-bold text-3xl text-[#a0a0a0]">Business Analytics</h1>
      <div className=" flex w-full justify-between ">
        <input type="date" name="" className="  px-4 py-2  shadow-md rounded-md" id=" " />
        <button className=" px-4 py-2 w-[max-content] ml-auto bg-purple-500 text-white font-medium text-sm rounded-md">
          <FontAwesomeIcon icon={faChartColumn} /> Create report
        </button>
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
                    <FontAwesomeIcon
                      onClick={() => (popup === action.id ? setPopup() : setPopup(action.id))}
                      className="z-[1]"
                      icon={faEllipsisVertical}
                    />
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
      <div className={` grid ${mobile ? "grid-cols-2 " : " grid-cols-4 "}  gap-5 p-2 bg-red-100 bg-opacity-70 rounded-xl `}>
        {ordersDetails.map((orderDetail) => {

          return (
            <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className={`  p-3 bg-white rounded-xl`}>
              <div className=" h-[100px] flex items-center w-full justify-center">
                <img src={orderDetail.image} alt="" className=" w-[80%] " />
              </div>
             <div className=" w-full flex items-center justify-between pt-3">
             <h1 className=" font-medium ">{orderDetail.name}</h1>
             <h1 className="  font-bold text-lg">{orderDetail.count}</h1>
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
        <div className=" w-full flex items-center  py-2 border-b border-dashed justify-between">
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
        <div className=" overflow-x-scroll mt-4">
          <table className=" ">
            <thead className=" ">
              <tr className="grid grid-cols-9 bg-[#f7f5fb] w-[max-content] ">
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
              {ordersTable.map((order, index) => (
                <tr className={` grid grid-cols-9 ${index % 2 ? " bg-[#f5f5f5] " : " "}  text-center w-full`}>
                  {tableHeaders.map((header, index) =>
                    index === ordersTable.length ? (
                      <th className="  py-2 break-words space-x-2 px-4 font-normal text-sm ">
                        <span
                          className={` px-3 py-1 rounded-full  text-xs ${
                            order[header] === "Pending"
                              ? " bg-blue-400 text-white"
                              : order[header] === "Paid"
                              ? " bg-green-800 text-white "
                              : order[header] === "Delivered"
                              ? " bg-orange-500 text-white "
                              : " bg-slate-700 text-white "
                          } `}
                        >
                          {order[header]}
                        </span>
                      </th>
                    ) : (
                      <th className="  py-2 break-words space-x-2 px-4 font-normal text-sm ">
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
                            <Button label="Cancel" bgColor="bg-slate-600" />
                            <Button label="Delete" bgColor="bg-red-500" />
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
  ) : !loggedIn && form === "register" ? (
    <div className={` flex    items-center ${mobile ? " bg-[#2a454e]  py-[60px] px-6 w-[24rem] flex-col justify-center " : " w-[820px] "} h-[100vh]`}>
      <div className={`${mobile ? " hidden " : " w-[50%] "}`}>
        <img src="/login.png" alt="" className="" />
      </div>
      <div className={` ${mobile ? " w-full  " : " w-[50%] bg-[#2a454e]  h-full flex flex-col justify-center px-6 "}   space-y-8`}>
        <div className=" w-full flex items-center justify-center ">
          <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" />
        </div>
        <div className=" space-y-6 ">
          <div className="w-full space-y-3   ">
            <Link
              style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 3px" }}
              className="  rounded-lg  space-x-2 flex font-normal font-roboto items-center justify-center  p-3 border border-yellow-500 text-white  w-full"
              href=""
            >
              <img src="/google.png" alt="" className=" w-[20px] h-[20px]" />
              <span className="">Sign up using Google </span>{" "}
            </Link>
            <Link
              style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 3px" }}
              className="  rounded-lg  space-x-2 flex font-normal font-roboto items-center justify-center  p-3 border border-yellow-500 text-white  w-full"
              href=""
            >
              <img src="/fb.png" alt="" className=" w-[20px] h-[20px]" />
              <span className="">Sign up using Facebook </span>{" "}
            </Link>
          </div>
          <div className=" flex items-center justify-between font-roboto w-full ">
            <div className="w-[45%] h-[0.5px] bg-slate-300" />
            <span className="block text-white text-xs">OR</span>
            <div className="w-[45%] h-[0.5px] bg-slate-300" />
            <hr />
          </div>
          <div className=" space-y-2">
            <div className=" space-y-3">
              <Input label="Full Name" textColor />
              <Input label="Email" textColor />
              <Input textColor label="Password" />
            </div>
            <div className=" font-medium px-1 text-[11px] flex items-center justify-between text-slate-200">
              <button onClick={() => setForm("login")} className="  underline">
                already have an account? Log In{" "}
              </button>
              <button onClick={() => setForm("forget")} className="  underline">
                Forget Password{" "}
              </button>
            </div>
          </div>
          <button
            onClick={() => setLoggedIn(true)}
            className=" text-[#ffc801] uppercase border-[#ffc801] rounded-lg hover:bg-[#ffc801] hover:text-[white] font-medium px-6 py-2 w-full border"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ) : !loggedIn && form === "forget" ? (
    <div
      className={` flex     items-center ${mobile ? " bg-[#2a454e]  py-[60px] px-6 w-[24rem] flex-col justify-center " : " w-[820px] "} h-[100vh]`}
    >
      <div className={`${mobile ? " hidden " : " w-[50%] "}`}>
        <img src="/login.png" alt="" className="" />
      </div>
      <div className={` ${mobile ? " w-full  " : " w-[50%] bg-[#2a454e]  h-full flex flex-col justify-center px-6 "}   space-y-8`}>
        <div className=" w-full flex items-center justify-center ">
          <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" />
        </div>
        <div className=" space-y-6 ">
          <div className=" space-y-2">
            <div className=" space-y-3">
              <Input label="Email" textColor />
            </div>
            {/* <div className=" font-medium px-1 text-[11px] flex items-center justify-between text-slate-200">
            <button onClick={() => setForm("login")} className="  underline">
            already have an account? Log In {" "}
          </button>
              <button onClick={() => setForm("register")} className="  underline">
              don't have an account? Register{" "}
              </button>
            </div> */}
          </div>
          <button
            onClick={() => setLoggedIn(true)}
            className=" text-[#ffc801] uppercase border-[#ffc801] rounded-lg hover:bg-[#ffc801] hover:text-[white] font-medium px-6 py-2 w-full border"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className={` flex   items-center ${mobile ? " bg-[#2a454e]  py-[60px] px-6 w-[24rem] flex-col justify-center " : " w-[820px] "} h-[100vh]`}>
      <div className={`${mobile ? " hidden " : " w-[50%] "}`}>
        <img src="/login.png" alt="" className="" />
      </div>
      <div className={` ${mobile ? " w-full  " : " w-[50%] bg-[#2a454e]  h-full flex flex-col justify-center px-6 "}   space-y-8`}>
        <div className=" w-full flex items-center justify-center ">
          <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" />
        </div>
        <div className=" space-y-6 ">
          <div className="w-full space-y-3   ">
            <Link
              style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 3px" }}
              className="  rounded-lg  space-x-2 flex font-normal font-roboto items-center justify-center  p-3 border border-yellow-500 text-white  w-full"
              href=""
            >
              <img src="/google.png" alt="" className=" w-[20px] h-[20px]" />
              <span className="">Log in using Google </span>{" "}
            </Link>
            <Link
              style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 3px" }}
              className="  rounded-lg  space-x-2 flex font-normal font-roboto items-center justify-center  p-3 border border-yellow-500 text-white  w-full"
              href=""
            >
              <img src="/fb.png" alt="" className=" w-[20px] h-[20px]" />
              <span className="">Log in using Facebook </span>{" "}
            </Link>
          </div>
          <div className=" flex items-center justify-between font-roboto w-full ">
            <div className="w-[45%] h-[0.5px] bg-slate-300" />
            <span className="block text-white text-xs">OR</span>
            <div className="w-[45%] h-[0.5px] bg-slate-300" />
            <hr />
          </div>
          <div className=" space-y-2">
            <div className=" space-y-3">
              <Input label="Email" textColor />
              <Input textColor label="Password" />
            </div>
            <div className=" font-medium px-1 text-[11px] flex items-center justify-between text-slate-200">
              <button onClick={() => setForm("register")} className="  underline">
                don't have an account? Register{" "}
              </button>
              <button onClick={() => setForm("forget")} className="  underline">
                Forget Password{" "}
              </button>
            </div>
          </div>
          <button
            onClick={() => setLoggedIn(true)}
            className=" text-[#ffc801] uppercase border-[#ffc801] rounded-lg hover:bg-[#ffc801] hover:text-[white] font-medium px-6 py-2 w-full border"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
