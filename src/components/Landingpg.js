import React from 'react'
import { Link } from "react-router-dom";
function Landingpg (){
    return (
        <div className="leftColumn grid grid-cols-2 gap-1">
  <div className=" text-white font-bold  text-2xl ">MEMES THAT MATTER MOST
  <div className="text-white font-serif font-bold text-5xl py-9">Your daily dose of memes from The ultimate meme collection.</div>
   <div className='text-white font-serif font-i font-bold text-2xl py-9'>Looking for a daily dose of humor and entertainment?
   Look no further our website is the perfect destination for anyone looking to brighten their day and have a good laugh. Browse through our constantly updated collection,
    share your favorites with friends, and discover new gems that you'll want to come back to again and again. Start exploring now and see what all the hype is about! </div>

    <Link
          class="bg-white text-black py-6 px-8 text-xl"
          to="/signup"
        >
          GET STARTED
        </Link>
</div>
   <div><img src="https://www.pngmart.com/files/11/U-Mad-Bro-Meme-PNG-Transparent-Image.png" alt=" description"/>
   <div><img className="elonPng" src="https://www.pngmart.com/files/21/Elon-Musk-Meme-PNG-File.png" alt=" description"/>
</div>
</div>
</div>




    )
}

export default Landingpg
