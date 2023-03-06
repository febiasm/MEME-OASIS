import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";

function AddMemes() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6400b884c0e7653a05814863/latest")
      .then((response) => response.json())
      .then((data) => setMemes(data.record.memes));
  }, []);

  const handleAddMeme = (event) => {
    event.preventDefault();
    const newMeme = { title, url };
    setMemes([...memes, newMeme]);
    setTitle("");
    setUrl("");
  };

  const handleDeleteMeme = (index) => {
    const newMemes = [...memes];
    newMemes.splice(index, 1);
    setMemes(newMemes);
  };

  return (
    <div className=" mx-auto px-4">

      <h1 className="text-3xl font-bold mt- mb-4 text-white">Add Memes</h1>
      <form onSubmit={handleAddMeme} className="mb-8">
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label htmlFor="title" className="block font-bold mb-2">

            </label>
            <input
              type="text"
              id="title"
              placeholder="Title:"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className="border border-gray-400 p-2 w-full rounded-md"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="url" className="block font-bold mb-2">

            </label>
            <input
              type="url"
              placeholder="Meme url"
              id="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              required
              className="border border-gray-400 p-2 w-full rounded-md"
            />
          </div>
          <div className="ml-2">
            <button
              type="submit"
              className=" mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <h2 className="text-2xl font-bold mb-4 text-white">My Memes</h2>

      {memes.map((meme, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300  relative"
        >

          <button
            className="absolute top-0 right-0 text-gray-600 hover:text-red-500 p-2"
            onClick={() => handleDeleteMeme(index)}
          >
            <b className="text-sm  ml-2 text-gray-800">Delete</b> X
          </button>
          <div className="mt-4 ml-4 flex mb-4 items-center">
        <img
          src="https://loremflickr.com/g/320/240/paris,girl/all"
          alt="Default Profile Picture"
          className="w-14 h-14 rounded-full mr-2"
        />
        <p className="font-bold">@Kingmemer ✪ </p>
        <h3 className=" text-sm  ml-14  text-gray-600"><b className="text-sm  ml-2 text-gray-600">title:::</b>{meme.title}</h3>
      </div>
          <img src={meme.url} alt={meme.title} className="w-full" />
          <div className="px-4 py-2">
            <h3 className="text-xl font-bold mb-2">{meme.title}</h3>
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
      ))}
    </div>
  );
}

export default AddMemes;
