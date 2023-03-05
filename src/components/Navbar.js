import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <body className="Navbar">
      <nav className="relative px-4 py-4 flex justify-between items-center ">
        <Link className="text-3xl font-bold leading-none" to="/">
          <div className="flex items-center">
            <img
              className="w-24 h-34 object-cover"
              src="https://www.pngmart.com/files/21/Comedy-Silhoutte-PNG-File.png"
              alt="My "
            />
            <div class="wrapper">
              <div class="bg hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl">
                M e m e Oasis
              </div>
              <div class="fg hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl">
                M e m e Oasis
              </div>
            </div>
          </div>
        </Link>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link
              class="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
          <li class="text-gray-300"></li>
          <li>
            <Link
              class="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl"
              to="#"
            >
              PRODUCTS
            </Link>
          </li>

          <li>
            <Link
              class="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl "
              to="#"
            >
              HELP
            </Link>
          </li>
          <li class="text-gray-300"></li>
        </ul>
        <Link
          class="hidden lg:inline-block lg:ml-auto lg:mr-6 py-4 px-7 text-white font-bold  transition duration-200 hover:bg-white hover:text-black text-2xl"
          to="/LoginPage"
        >
          LOG IN
        </Link>
        <Link
          class="hidden lg:inline-block py-4 px-2 text-white font-bold  transition duration-200   hover:bg-white hover:text-black text-2xl"
          to="/signup"
        >
          GET STARTED
        </Link>
      </nav>
    </body>
  );
}

export default Navbar;
