import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/LoginPage" || location.pathname === "/signup";

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold leading-none" >
        <div className="flex items-center">
          <img
            className="w-24 h-34 object-cover"
            src="https://www.pngmart.com/files/21/Comedy-Silhoutte-PNG-File.png"
            alt="My "
          />
          <div class="wrapper">
            <div class="bg hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold transition duration-200 hover:text-black text-2xl">
              M e m e Oasis
            </div>
            <div class="fg hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold transition duration-200 hover:text-black text-2xl">
              M e m e Oasis
            </div>
          </div>
        </div>
      </div>

      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center ">
        <li>
          <Link
            className="hidden lg:inline-block lg:ml-auto  py-4 px-7 text-white font-bold transition duration-200 hover:text-black text-2xl"
            to="/contact"
          >
            CONTACT
          </Link>
        </li>
        <li className="text-gray-300"></li>
        <li>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold transition duration-200 hover:text-black text-2xl"
            href="https://vercel.com/dashboard"
          >
            PRODUCTS
          </a>
        </li>
        <li>
          <Link
            className="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold transition duration-200 hover:text-black text-2xl"
            to="/Help"
          >
            HELP
          </Link>
        </li>
        <li className="text-gray-300"></li>
      </ul>
      {isHome ? (
        <>
          <Link
            className="hidden lg:inline-block lg:ml-auto lg:mr-6 py-4 px-7 text-white font-bold transition duration-200 hover:bg-white hover:text-black text-2xl"
            to="/LoginPage"
          >
            LOG IN
          </Link>
          <Link
            className="hidden lg:inline-block py-4 px-2 text-white font-bold transition duration-200 hover:bg-white hover:text-black text-2xl"
            to="/signup"
          >
            GET STARTED
          </Link>
        </>
      ) : (
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-6 py-4 px-7 text-white font-bold transition duration-200 hover:bg-white hover:text-black text-2xl"
          to="/LogoutLoad"
        >
          LOG OUT
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
