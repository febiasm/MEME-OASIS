import React from 'react'
import { Link } from "react-router-dom";
function Landingpg (){
    return (
        <div className="leftColumn  grid grid-cols-2 gap-1">
  <div className=" text-white font-bold  text-2xl ">MEMES THAT MATTER MOST
  <div className="text-white font-serif font-bold text-5xl py-9">Your daily dose of memes from The ultimate meme collection.</div>

    <Link
          class="bg-white mb- text-black py-6 px-8 text-xl"
          to="/signup"
        >
          GET STARTED
        </Link>
</div>
   <div><img src="https://www.pngmart.com/files/11/U-Mad-Bro-Meme-PNG-Transparent-Image.png" alt=" description"/>

</div>
</div>





    )
}

export default Landingpg
