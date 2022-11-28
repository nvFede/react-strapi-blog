import React, { useState } from "react";
import MenuBtn from "./atoms/MenuBtn";
import Menu from "./Menu";

const Navbar = () => {

    const [toogle,SetToggle] = useState(false);




  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-blue-700">Fake</span>Press
            </span>
          
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
           <MenuBtn />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
           <Menu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
