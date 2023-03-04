import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";

function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6400b884c0e7653a05814863/latest")
      .then((response) => response.json())
      .then((data) => setMemes(data.record.memes));
  }, []);

  return (
    <div className="container">
      <div className="left-column">
        {/* left column content */}
      </div>
      <div className="articles">
        {memes.map((meme) => (
          <div key={meme.id}>
           <section className="articles">
            <article>
              <div className="article-wrapper">
                <div className="article-body">
                  <div className="flex items-center">
                    <img
                      className="icon w-24 h-34 object-cover "
                      src={meme.image_url}
                      alt={meme.title}
                    />
                    <div class="wrapper">
                      <div class="ml-4 hover:text-black ">
                        {" "}
                        @ {meme.username}{" "}
                      </div>
                    </div>
                  </div>
                  <p>{meme.caption}</p>
                  <div className="flex items-center">
                    <p className="tags text-sm ml-4 hover:text-black ">
                      {" "}
                      {meme.tags[0]}
                    </p>
                    <div class="wrapper">
                      <p class="tags text-sm ml-4 hover:text-black "> {meme.tags[1]}</p>
                    </div>
                    <div class="wrapper">
                      <p class="tags text-sm ml-4 hover:text-black "> {meme.tags[2]}</p>
                    </div>
                    <div class="wrapper">
                      <p class="tags text-sm ml-4 hover:text-black "> {meme.tags[3]}</p>
                    </div>
                    <div class="wrapper">
                      <p class="tags text-sm ml-4 hover:text-black "> {meme.tags[4]}</p>
                    </div>
                  </div>

                  <figure>
                    <img src={meme.image_url} alt={meme.title} />
                  </figure>
                  <div className="flex items-center">
                    <p className=" text-sm ml-4 hover:text-black ">
                    <LikeButton/>

                    </p>
                    <div class="">
                      <p class=" text-sm ml-4 hover:text-black "> xx</p>
                    </div>

                  </div>
                </div>
              </div>
            </article>
          </section>
          </div>
        ))}
      </div>
      <div className="right-column">
        {/* right column content */}
      </div>
    </div>
  );
}

export default Home;
