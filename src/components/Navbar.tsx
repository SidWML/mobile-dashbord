import { inter } from "@/pages";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBlog,
  faBriefcase,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faGear,
  faHome,
  faImages,
  faList,
  faRightToBracket,
  faUsers,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({ loggedIn, setLoggedIn }) {
  const [sidebar, setsidebar] = useState(false);
  const [subCategories, setsubCategories] = useState(0);

  const modules = [
    {
      id: 1,
      name: "Dashboard",
      icon: <FontAwesomeIcon icon={faHome} />,
      href: "/",
    },
    {
      id: 2,
      name: "Catalog",
      href: "",
      icon: <FontAwesomeIcon icon={faList} />,
      subLinks: [
        {
          id: 1,
          name: "Categories",
          href: "/catalog/categories",
        },
        {
          id: 2,
          name: "Collections",
          href: "",
        },
        {
          id: 3,
          name: "Products",
          href: "",
        },
        {
          id: 4,
          name: "Brands",
          href: "",
        },
        {
          id: 5,
          name: "Attributes",
          href: "",
        },
        {
          id: 6,
          name: "Variants",
          href: "",
        },
      ],
    },
    {
      id: 3,
      name: "Blog",
      href: "",
      icon: <FontAwesomeIcon icon={faBlog} />,
      subLinks: [
        {
          id: 1,
          name: "Categories",
          href: "/blogs/categories",
        },
        {
          id: 2,
          name: "Posts",
          href: "/blogs/posts",
        },
        {
          id: 3,
          name: "Tags",
          href: "/blogs/tags",
        },
      ],
    },
    {
      id: 4,
      name: "Gallery",
      href: "",
      icon: <FontAwesomeIcon icon={faImages} />,
      subLinks: [
        {
          id: 1,
          name: "Categories",
          href: "/gallery/categories",
        },
        {
          id: 2,
          name: "Albums",
          href: "/gallery/albums",
        },
        {
          id: 3,
          name: "Tags",
          href: "/gallery/tags",
        },
      ],
    },
    {
      id: 5,
      name: "Careers",
      href: "",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      subLinks: [
        {
          id: 1,
          name: "Jobs",
          href: "/careers/jobs",
        },
        {
          id: 2,
          name: "Locations",
          href: "/careers/locations",
        },
        {
          id: 3,
          name: "Skills",
          href: "/careers/skills",
        },
        {
          id: 4,
          name: "Tags",
          href: "/careers/types",
        },
      ],
    },
    {
      id: 5,
      name: "Users and Roles",
      href: "",
      icon: <FontAwesomeIcon icon={faUsers} />,
      subLinks: [
        {
          id: 1,
          name: "Users",
          href: "",
        },
        {
          id: 2,
          name: "Roles",
          href: "",
        },
      ],
    },
  ];

  return (
    <div className={` ${inter.style} max-w-sm md:max-w-[820px] relative `}>
      <div style={{ boxShadow: " 0 0 .375rem .25rem rgba(161,172,184,.15)" }} className="  bg-white rounded-lg ">
        <div className=" py-3 px-4 flex items-center justify-between space-x-3">
          <FontAwesomeIcon
            onClick={() => setsidebar(!sidebar)}
            className="text-3xl relative text-[#3f3f3f] font-medium"
            icon={sidebar ? faX : faBars}
          />
          <Link href="/" className=" md:block hidden ">
            <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" />
          </Link>
          <div className=" space-x-4 flex items-center">
            <Popover className="relative w-full">
              <Popover.Button>
                <div className=" relative">
                  <FontAwesomeIcon className="  text-[black] text-2xl " icon={faBell} />
                  <span className="w-[20px] flex items-center justify-center absolute -translate-y-[5%] -right-[50%] -translate-x-[4%] -top-[25%] h-[20px] font-medium text-white text-[8px] rounded-full  bg-green-500">
                    5
                  </span>
                </div>
              </Popover.Button>

              <Popover.Panel
                style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 15px 4px" }}
                className="absolute shadow-lg right-0 top-[120%] bg-white rounded-lg w-[max-content] overflow-hidden h-[max-content] z-10"
              >
                <div className=" w-full ">
                  <div className="  py-2 px-6 bg-slate-400 text-white gap-3 border-b border-dashed">
                    <div className="">
                      <h1 className=" font-medium text-lg">All Notifications</h1>
                      <p className=" font-normal text-sm text-slate-100">No notifications to show</p>
                    </div>
                  </div>
                  <div className="py-2 px-6 flex flex-col ">0 Notifications</div>
                </div>
              </Popover.Panel>
            </Popover>

            <Popover className="relative w-full">
              <Popover.Button className=" w-[40px] h-[40px] flex items-center justify-center rounded-full bg-slate-200">A</Popover.Button>

              <Popover.Panel
                style={{ boxShadow: "rgba(0,0,0,0.3) 0px 1px 15px 4px" }}
                className="absolute shadow-lg right-0 top-[120%] bg-white rounded-lg w-[max-content] overflow-hidden h-[max-content] z-10"
              >
                <div className="grid grid-cols-1 ">
                  <div className=" flex py-2 px-4  items-center bg-slate-400 text-white gap-3 border-b border-dashed">
                    <div className=" rounded-full overflow-hidden w-[40px] h-[40px]">
                      <img src="/avatar-3.png" alt="" className="" />
                    </div>
                    <div className="">
                      <h1 className=" font-medium text-lg">Admin</h1>
                      <p className=" font-normal text-sm text-slate-100">admin@gmail.com</p>
                    </div>
                  </div>
                  <div className="py-2 px-4 flex flex-col ">
                    <Link className="py-2  space-x-2" href="">
                      {" "}
                      <FontAwesomeIcon icon={faGear} /> <span className="">Settings</span>
                    </Link>
                    <div onClick={() => setLoggedIn(false)} className="py-2 cursor-pointer space-x-2" >
                      {" "}
                      <FontAwesomeIcon  icon={faRightToBracket} /> <span className="">Logout</span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "-3px 0 5px 0 #555" }}
        className={`  z-[989]  transition-all ease-linear duration-300 bottom-0  absolute top-0 w-[100%] bg-black bg-opacity-20 ${
          sidebar ? " translate-x-0 h-[100vh] opacity-100" : " translate-x-[-120%] h-[0px] opacity-0 overflow-hidden  "
        }`}
      >
        <div className=" w-[90%] bg-white h-full relative p-5 ">
          <div onClick={() => setsidebar(false)} className=" absolute p-1 bg-white rounded-full right-[-15px] ">
            <div className=" h-[30px] w-[30px]  rounded-full flex items-center justify-center bg-purple-500 text-white">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
          <div className="  ">
            <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" />
          </div>
          <div className="w-full flex gap-2 h-[90%] overflow-y-scroll flex-col py-[30px] px-2">
            {modules.map((module, index) => (
              <div className="">
                {index === 0 ? (
                  <Link
                    className={` cursor-pointer flex items-center font-medium space-x-2  px-4   py-3 ${
                      subCategories === 0 ? " bg-purple-200 rounded-xl text-purple-500 " : " border-b border-[#f1f1f1] "
                    }`}
                    href={module.href}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faHome} /> <span className="">{module.name}</span>{" "}
                  </Link>
                ) : (
                  <div
                    onClick={() => (index === subCategories ? setsubCategories() : setsubCategories(index))}
                    className={` cursor-pointer flex items-center font-medium justify-between  px-4   py-3 ${
                      index === subCategories ? " bg-purple-200 rounded-xl text-purple-500 " : " border-b border-[#f1f1f1] "
                    }`}
                  >
                    <div className=" space-x-2">
                      {module.icon}
                      <span className="">{module.name}</span>
                    </div>
                    {module.subLinks && module.subLinks.length && (
                      <FontAwesomeIcon
                        className={` duration-300 ease-linear ${index === subCategories ? " rotate-180 " : " rotate-0 "}`}
                        icon={faChevronDown}
                      />
                    )}
                  </div>
                )}
                <div
                  className={` w-full overflow-hidden flex flex-col transition-height duration-300 ease-linear bg-[#f5f5f5] pl-6 ${
                    index === subCategories ? " h-[max-content] " : " h-[0px] "
                  }`}
                >
                  {module.subLinks &&
                    module.subLinks.map((sublink) => (
                      <Link href={sublink.href} className=" px-4 rounded-xl py-3">
                        {sublink.name}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
