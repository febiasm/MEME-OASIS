import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(163);

  function handleLike() {
    setCount(count + 1);
  }

  return (
    <div>
       <div className="flex items-center">
      <button className ="w-7 h-34 mt-5" onClick={handleLike}><img src="https://www.pngmart.com/files/10/Facebook-Like-PNG-Free-Download.png" alt="pic"/></button>
      <p>{count} Likes</p>
    </div>
    </div>
  );
}

export default LikeButton;
