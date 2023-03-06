import AddMemes from "./AddMemes";
import { Link } from "react-router-dom";
function Mymemes() {
    return (
        <div>
        <div class="explore mt-6">
        <button
          type="button"
          class="flex h-11  w-full bg-white   hover:bg-gray-200 focus:outline-none text-black text-xl   font-bold shadow-md rounded-full mx-auto   transition-colors duration-300"
        >
          <div class="flex sm:flex-cols-12 gap-2">
            <div class="col-span-1"></div>
            <div class="wrapper">
              <div class="w-8 pb-12">
                <img src="https://img.icons8.com/ios-filled/256/home-page.png" alt ="dd" />
              </div>
            </div>
            <Link to ="/home">
            <div class=" pt-2 pl-4 text-lower"> Home </div>
            </Link>
          </div>
        </button>

        </div>
        <AddMemes/>
        </div>

    )}
export default Mymemes;
