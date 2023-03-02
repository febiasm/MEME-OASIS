import React from "react";

function Navbar() {
  return (
    <body className="bg-brown">
      <nav className="relative px-4 py-4 flex justify-between items-center ">
        <a className="text-3xl font-bold leading-none" href="#">
        <div className="flex items-center">
  <img className="w-24 h-34 object-cover" src="https://cdn.pixabay.com/photo/2020/10/16/10/01/cupcake-5659069_960_720.png" alt="My Image" />
  <div class="wrapper">
  <div class="bg hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl"> M e m e  Oasis </div>
  <div class="fg hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl"> M e m e  Oasis </div>
</div>
</div>

        </a>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a class="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl" href="#">CONTACT</a></li>
			<li class="text-gray-300">

			</li>
			<li><a class="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl" href="#">PRODUCTS</a></li>

			<li><a class="hidden lg:inline-block lg:ml-auto lg:mr-1 py-4 px-7 text-white font-bold  transition duration-200   hover:text-black text-2xl " href="#">HELP</a></li>
			<li class="text-gray-300">

			</li>
		</ul>
        <a
          class="hidden lg:inline-block lg:ml-auto lg:mr-6 py-4 px-7 text-white font-bold  transition duration-200 hover:bg-white hover:text-black text-2xl"
          href="#"
        >
          LOG IN
        </a>
        <a
          class="hidden lg:inline-block py-4 px-2 text-white font-bold  transition duration-200   hover:bg-white hover:text-black text-2xl"
          href="#"
        >
          GET STARTED
        </a>
      </nav>
    </body>

    // <script>
    // // Burger menus
    // document.addEventListener('DOMContentLoaded', function() {
    //     // open
    //     const burger = document.querySelectorAll('.navbar-burger');
    //     const menu = document.querySelectorAll('.navbar-menu');

    //     if (burger.length && menu.length) {
    //         for (var i = 0; i < burger.length; i++) {
    //             burger[i].addEventListener('click', function() {
    //                 for (var j = 0; j < menu.length; j++) {
    //                     menu[j].classList.toggle('hidden');
    //                 }
    //             });
    //         }
    //     }

    //     // close
    //     const close = document.querySelectorAll('.navbar-close');
    //     const backdrop = document.querySelectorAll('.navbar-backdrop');

    //     if (close.length) {
    //         for (var i = 0; i < close.length; i++) {
    //             close[i].addEventListener('click', function() {
    //                 for (var j = 0; j < menu.length; j++) {
    //                     menu[j].classList.toggle('hidden');
    //                 }
    //             });
    //         }
    //     }

    //     if (backdrop.length) {
    //         for (var i = 0; i < backdrop.length; i++) {
    //             backdrop[i].addEventListener('click', function() {
    //                 for (var j = 0; j < menu.length; j++) {
    //                     menu[j].classList.toggle('hidden');
    //                 }
    //             });
    //         }
    //     }
    // });
    // </script>
  );
}
export default Navbar;
