import React from "react";
import Card from "./Card";

import gogin_getstarted from "./img/gogin_getstarted.png";
import home from "./img/home.png";
import addmeme from "./img/addmeme.png";
import mymeme from "./img/mymeme.png";
import searchmeme from "./img/searchmeme.png";
import deletemem from "./img/deletemem.png";
const Help = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mt-8 mb-12">
          How to Use Our App
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card title="Register/Login">
  <img src={gogin_getstarted} alt="Register/Login" className="w-full h-48 object-cover" />
  <p className="mt-4">
    To get started, register a new account or login with your existing one.
  </p>
</Card>

          <Card
            title="View Memes">
             <img src={home} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              Once you're logged in, you'll be taken to the home page where you
              can view all the memes available on our app.
            </p>
          </Card>
          <Card
            title="Add Memes">
             <img src={addmeme} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              To add a new meme, click on the "Add Meme" button and fill in the
              required details.
            </p>
          </Card>
          <Card
            title="My Memes">
            <img src={mymeme} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              To view all the memes you've added, click on the "My Memes" button
              and start adding your favorite ones.
            </p>
          </Card>
          <Card
            title="Search Memes">
            <img src={searchmeme} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              If you're looking for a specific meme, simply use the search bar and
              enter the title of the meme you're looking for.
            </p>
          </Card>
          <Card
            title="Remove Memes">
            <img src={deletemem} alt="View Memes" className="w-full h-48 object-cover" />
            <p className="mt-4">
              If you wish to remove a meme you've added, simply click on the X
              button on the meme you want to delete. Please note that you can only
              update or delete memes that you've added.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
