import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import MemesDropdown from "./MemesDropdown";
import TrendingCard from "./TrendingCard";
import AddMemes from "./AddMemes";
import { Link } from "react-router-dom";

function Home() {
  const [memes, setMemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("title");

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6405cbc8c0e7653a058343a5")
      .then((response) => response.json())
      .then((data) => setMemes(data.record.memes));
  }, []);



  const searchTypes = [
    { label: "Title", value: "title" },
    { label: "Date", value: "date" },
    // add more search types here
  ];

  const handleSearch = (event) => {
    event.preventDefault();

    // Filter memes by search query and type
    const filteredMemes = memes.filter((meme) => {
      if (searchType === "title") {
        return meme.title.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchType === "date") {
        return meme.date.toLowerCase().includes(searchQuery.toLowerCase());
      }
      // Add more cases for other search types if needed
      return true;
    });

    // Update memes state with filtered memes
    setMemes(filteredMemes);
  };

  return (
    <div className="Homepg">
    <div className="trending text-white">
      <p> Trending today</p>
    </div>

      <div className="flex items-center">
        <div className="center">
          <div className="article-card">
            <div className="content">
              <p className="date">Jan 1, 2023</p>
              <p className="title">The Power of Memes: How a viral meme brought attention to a serious social issue</p>
            </div>
            <img
              src="https://loremflickr.com/g/320/240/paris,girl/all"
              alt="article-cover"
            />
          </div>
        </div>
        <div class="">
          <div class="ml-4 hover:text-black ">
            {" "}
            <div className="article-card">
              <div className="content">
                <p className="date">Jan 1, 2023</p>
                <p className="title">Meme War: Online battles over the funniest memes heat up on social media</p>
              </div>
              <img
                src="https://loremflickr.com/g/320/240/paris"
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
                <p className="date">Jan 1, 2023</p>
                <p className="title">From Meme to Money: How internet memes are being turned into profitable merchandise</p>
              </div>
              <img
                src="https://picsum.photos/200"
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
                <p className="date">Jan 1, 2023</p>
                <p className="title">Meme Magic: Researchers discover how memes can influence public opinion and behavior</p>
              </div>
              <img
                src="https://picsum.photos/200/300"
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
          <div>
            {" "}
            <div class="explore mb-4">
              <button
                type="button"
                class="flex h-11  w-full bg-white   hover:bg-gray-200 focus:outline-none text-black text-xl   font-bold shadow-md rounded-full mx-auto   transition-colors duration-300"
              >
                <div class="flex sm:flex-cols-12 gap-2">
                  <div class="col-span-1"></div>
                  <div class="wrapper">
                    <div class="w-8 pb-12">
                      <img src="https://img.icons8.com/ios-filled/256/hashtag.png" alt ="pic"/>
                    </div>
                  </div>
                  <Link to="/Explore">
                  <div class=" pt-2 pl-4 text-lower"> Explore </div>
                  </Link>
                </div>
              </button>
            </div>
            <div class="explore mb-4">
              <button
                type="button"
                class="flex h-11  w-full bg-white   hover:bg-gray-200 focus:outline-none text-black text-xl   font-bold shadow-md rounded-full mx-auto   transition-colors duration-300"
              >
                <div class="flex sm:flex-cols-12 gap-2">
                  <div class="col-span-1"></div>
                  <div class="wrapper">
                    <div class="w-8 pb-12">
                      <img src="https://img.icons8.com/sf-regular/256/settings.png" alt ="dd" />
                    </div>
                  </div>
                  <Link to ="/Mymemes">
                  <div class=" pt-2 pl-4 text-lower"> Mymemes </div>
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="center articles">
          <div className="popular text-white ">
            <p> Popular posts</p>
          </div>

          <div className="flex items-center">
      {/* add search bar here */}



    </div>
    {/* center column */}
    <AddMemes/>
          {memes.map((meme) => (
            <div key={meme.id}>
              <section className="mt-3 articles">
                <article>
                  <div className="article-wrapper">
                    <div className="article-body">
                      <div className="flex items-center">
                        <img
                          className="w-14 h-14 rounded-full mr-2 "
                          src={meme.image_url}
                          alt={meme.title}
                        />
                        <div class="article-wrapper">
                          <div class="ml-4 hover:text-black ">
                            {" "}
                            @{meme.username}{" "}
                          </div>
                        </div>
                        <div class="article-wrapper">
                          <div class="text-xs ml-20 text-gray-500 ">
                            {" "}
                            <b className="text-sm  ml-2 text-gray-600">title:::</b> {meme.title}{" "}
                          </div>
                        </div>
                      </div>
                      <p>{meme.caption}</p>


                      <div className="flex items-center ">
                      <div class="wrapper">


                        <p className="rounded-full text-sm bg-gray-100  p-2 transition-colors duration-300 hover:bg-gray-200">
                          {" "}

                          {meme.tags[0]}
                        </p>
                        </div>
                        <div class="wrapper">
                        <p className="rounded-full ml-6 text-sm bg-gray-100 p-2 transition-colors duration-300 hover:bg-gray-200">
  {meme.tags[1]}
</p>

                        </div>
                        <div class="wrapper">
                          <p class="rounded-full ml-11 text-sm bg-gray-100  p-2 transition-colors duration-300 hover:bg-gray-200 ">
                            {" "}
                            {meme.tags[2]}
                          </p>
                        </div>
                        <div class="wrapper">
                          <p class="rounded-full text-sm ml-11    p-2 transition-colors duration-300 hover:bg-gray-200  ">
                            {" "}

                          </p>
                        </div>
                        <div class="wrapper">
                          <p class="rounded-full ml-14  text-sm p-2 transition-colors duration-300 hover:bg-gray-300  ">
                            {" "}
                         
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
        <div className="right-column">{/* right column content */}
        <div className="mt-6 flex items-center">
  <form onSubmit={handleSearch} className="relative">
    <div className="flex items-center space-x-4">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 21L15.5 15.5M15.5 15.5C17.1569 14.0464 18 12.1113 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.1113 18 14.0464 17.1569 15.5 15.5Z"
            />
          </svg>
        </span>
        <input
          type="text"
          id="search-query"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search MEME OASIS"
          className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="search-type" className="hidden"><b>Search by</b>:</label>
        <select
          id="search-type"
          value={searchType}
          onChange={(event) => setSearchType(event.target.value)}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-900 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          {searchTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-white hover:bg-grey-600 text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  </form>
</div>

        <TrendingCard/>
        <MemesDropdown/>

        </div>
      </div>
    </div>
  );
}

export default Home;
