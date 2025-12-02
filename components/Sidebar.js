"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgProfile, CgLogIn } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Sidebar() {
  const { user, isLoading } = useUser();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          {/* Hamburger Button */}
          <Disclosure.Button className="md:hidden fixed top-1 right-2 pt-1 z-30 bg-gray-700 text-white rounded border-none">
            <GiHamburgerMenu className="h-6 w-4" />
          </Disclosure.Button>

          {/* Sidebar */}
          <Disclosure.Panel
            static
            className={`fixed top-10 left-0 h-full w-60 bg-indigo-300 shadow-xl transform transition-transform duration-300 z-20
              ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
          >
            <div className="flex flex-col gap-4 mt-1 p-6">
              <SidebarItem href="/" icon={<MdOutlineSpaceDashboard />} label="Home" />
              <SidebarItem href="/about" icon={<CgProfile />} label="About" />
              <SidebarItem href="/blog" icon={<FaRegComments />} label="Blog" />
              <SidebarItem href="/socials" icon={<BiMessageSquareDots />} label="Social" />

              {/* Login / Logout Buttons */}
              {!user && !isLoading ? (
                <SidebarItem href="/auth/login" icon={<CgLogIn />} label="Login" />
              ) : (
                <SidebarItem href="/auth/logout" icon={<CgLogIn />} label="Logout" />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function SidebarItem({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-900 text-white"
    >
      <span className="text-3xl">{icon}</span>
      <h3 className="text-sm font-semibold">{label}</h3>
    </a>
  );
}
