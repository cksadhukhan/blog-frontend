import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarComponentProps } from "./navbar.component.props";

export const Navbar: NextPage<NavbarComponentProps> = (
  props: NavbarComponentProps
) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap py-4 pb-5 px-5 lg:px-28">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <p className="text-xl font-bold uppercase tracking-wide">Blog App</p>
        </a>
      </Link>
      <button
        className="inline-flex p-3 rounded lg:hidden  ml-auto hover: outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline hover:underline-offset-8">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline hover:underline-offset-8">
              Articles
            </a>
          </Link>
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline hover:underline-offset-8">
              About us
            </a>
          </Link>
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline hover:underline-offset-8">
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
