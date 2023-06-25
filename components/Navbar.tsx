"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/types";
import { v4 as getKey } from "uuid";
import Logochanger from "./Logochanger";

function Navbar() {
  const pathname: string = usePathname();

  return (
    <nav
      data-aos="fade-down"
      className={
        "bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      }
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logochanger />
        <div className="flex gap-3 sm:gap-6 items-center md:order-2">
          <Link
            href={"/signin"}
            type="button"
            className="dark:text-white hover:text-white transition-colors hover:bg-blue-700  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </Link>
          <Link
            href={"/signup"}
            type="button"
            className="text-white transition-colors bg-blue-700 hover:bg-blue-800 hover:text-white  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-700 dark:hover:bg-blue-700/80 dark:focus:ring-blue-800"
          >
            Sign up
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          L
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map(({ id, title, href }: NavLinkType) => (
              <li key={getKey()}>
                <Link
                  href={href}
                  className={`${
                    href === pathname
                      ? "text-blue-700 dark:text-blue-500"
                      : "dark:text-white"
                  } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
