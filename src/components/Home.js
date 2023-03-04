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
    <div className="Homepg">
      <div className="trending">
        <p> Trending today</p>
      </div>
      <div className="flex items-center">
        <div className="center">
          <div className="article-card">
            <div className="content">
              <p className="date">Jan 1, 2022</p>
              <p className="title">Article Title Goes Here</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
              alt="article-cover"
            />
          </div>
        </div>
        <div class="">
          <div class="ml-4 hover:text-black ">
            {" "}
            <div className="article-card">
              <div className="content">
                <p className="date">Jan 1, 2022</p>
                <p className="title">Article Title Goes Here</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                alt="article-cover"
              />
            </div>
          </div>
        </div>
        <div class="">
          <div class="ml-4 hover:text-black ">
            {" "}
            <div className="article-card">
              <div className="content">
                <p className="date">Jan 1, 2022</p>
                <p className="title">Article Title Goes Here</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                alt="article-cover"
              />
            </div>
          </div>
        </div>
        <div class="">
          <div class="ml-4 hover:text-black ">
            {" "}
            <div className="article-card">
              <div className="content">
                <p className="date">Jan 1, 2022</p>
                <p className="title">Article Title Goes Here</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                alt="article-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ....... */}

      <div className="container">
        <div className="left-column">
          {/* left column content */}
          <div> <div class="explore mb-4">
          <button type="button" class="flex max-w-sm w-full bg-white bg-opacity-98 hover:bg-gray-200 focus:outline-none text-black text-2xl uppercase font-bold shadow-md rounded-full mx-auto p-5 transition-colors duration-300">
  <div class="flex sm:flex-cols-12 gap-2">
    <div class="col-span-1"></div>
    <div class="col-span-2 pt-2"># explore</div>
  </div>
</button>




            </div>
            </div>
        </div>
        <div className="articles">
          <div className="popular">
            <p> Popular posts</p>
          </div>
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
                          <p class="tags text-sm ml-4 hover:text-black ">
                            {" "}
                            {meme.tags[1]}
                          </p>
                        </div>
                        <div class="wrapper">
                          <p class="tags text-sm ml-4 hover:text-black ">
                            {" "}
                            {meme.tags[2]}
                          </p>
                        </div>
                        <div class="wrapper">
                          <p class="tags text-sm ml-4 hover:text-black ">
                            {" "}
                            {meme.tags[3]}
                          </p>
                        </div>
                        <div class="wrapper">
                          <p class="tags text-sm ml-4 hover:text-black ">
                            {" "}
                            {meme.tags[4]}
                          </p>
                        </div>
                      </div>

                      <figure>
                        <img src={meme.image_url} alt={meme.title} />
                      </figure>
                      <div className="flex items-center">
                        <p className=" text-sm ml-4 hover:text-black ">
                          <LikeButton />
                        </p>
                        <div class="">
                          <button
                            type="button"
                            class="px-4 py-3   rounded-md text-   focus:ring-4   transform active:scale-y-75 transition-transform flex"
                          >
                            <svg
                              class="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                            <span class="ml-2">save</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          ))}
        </div>
        <div className="right-column">{/* right column content */}</div>
      </div>
    </div>
  );
}

export default Home;
