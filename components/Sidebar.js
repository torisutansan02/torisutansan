"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile, CgLogIn } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function Sidebar() {
  return (
    <>
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="md:hidden mt-0.5 fixed top-0.5 right-4 peer p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-3 w-3"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-2 w-15 h-screen bg-indigo-300 opacity-90 z-20 fixed top-10 -left-40 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <div className="my-2 border-b border-gray-100 pb-2">

              <a className="flex mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto" href = "/">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-500 group-hover:text-white " />
                <h3 className="text-sm text-white group-hover:text-white font-semibold">
                  Home
                </h3>
              </a>

              <a className="flex mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto" href = "/about">
                <CgProfile className="text-2xl text-gray-500 group-hover:text-white " />
                <h3 className="text-sm text-white group-hover:text-white font-semibold ">
                  About
                </h3>
              </a>

              <a className="flex  mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto" href = "/blog">
                <FaRegComments className="text-2xl text-gray-500 group-hover:text-white " />
                <h3 className="text-sm text-white group-hover:text-white font-semibold ">
                  Blog
                </h3>
              </a>

              <a className="flex  mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto" href = "/socials">
                <BiMessageSquareDots className="text-2xl text-gray-500 group-hover:text-white " />
                <h3 className="text-sm text-white group-hover:text-white font-semibold ">
                  Social
                </h3>
              </a>

              <a className="flex  mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto" href = "/login">
                <CgLogIn className="text-2xl text-gray-500 group-hover:text-white " />
                <h3 className="text-sm text-white group-hover:text-white font-semibold ">
                  Login
                </h3>
              </a>

            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-black group-hover:text-white " />
                <h3 className="text-sm text-black group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-1 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-black group-hover:text-white " />
                <h3 className="text-sm text-black group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            {/*
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-21pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          */}
          </div>
        </div>
      </Disclosure>
    </div>
    </>
  );
}

export default Sidebar;