import React from "react";

const AboutMePage = () => {
  // Fabricated data
  const name = "Trevor Febias";
  const username = "trevorfebias";
  const bio = "Web developer passionate about React and Tailwind CSS.";
  const location = "Nairobi, Kenya 🇰🇪";
  const website = " https://github.com/febiasm";

  return (
    <div className=" mx-auto p-4">
      <div className="w-full md:w-3/4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center">
            <img
              src="https://ca.slack-edge.com/T0101L740P4-U0490LUH4CA-b96a3bcb4510-512"
              alt="Profile"
              className="rounded-full w-32 mx-auto mb-4"
            />
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="text-gray-500">@{username}.</p>
          </div>
          <div className="w-full md:w-3/4">
            <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-center">
                <h1 className="font-bold text-xl mb-4">About Me</h1>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm"
                >
                  Visit Website
                </a>
              </div>
              <p className="mb-4">{bio}</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-1/2 md:w-1/3">
                  <h2 className="font-bold text-gray-600 mb-2">Location</h2>
                  <p>{location}</p>
                </div>
                <div className="w-1/2 md:w-1/3">
                  <h2 className="font-bold text-gray-600 mb-2">Followers</h2>
                  <p>1,234</p>
                </div>
                <div className="w-1/2 md:w-1/3">
                  <h2 className="font-bold text-gray-600 mb-2">Following</h2>
                  <p>567</p>
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="font-bold text-xl mb-4">Experience</h2>
                    <ul>
                      <li className="mb-2">
                        <h3 className="font-bold">Web Developer</h3>
                        <p className="text-gray-500">Moringa School</p>
                        <p>
                          Responsible for building web applications using React
                          and Tailwind CSS.
                        </p>
                      </li>
                      <li className="mb-2">
                        <h3 className="font-bold">Software Engineer</h3>
                        <p className="text-gray-500">Google Company</p>
                        <p>
                          Developed and maintained software applications using
                          Ruby and Spring Framework.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2
                      className="font-bold text-xl mb-
4"
                    >
                      Skills
                    </h2>
                    <ul>
                      <li className="mb-2">
                        <h3 className="font-bold">React</h3>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div
                              style={{ width: "70%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-2">
                        <h3 className="font-bold">Tailwind CSS</h3>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div
                              style={{ width: "80%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-2">
                        <h3 className="font-bold">JavaScript</h3>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div
                              style={{ width: "90%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-2">
                        <h3 className="font-bold">Ruby</h3>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="font-bold text-xl mb-4">Education</h2>
                    <ul>
                      <li className="mb-2">
                        <h3 className="font-bold">
                          Bachelor's Degree in Computer Science
                        </h3>
                        <p className="text-gray-500">Strathmore University </p>
                        <p>Graduated in 2018 with a 3.9 GPA.</p>
                      </li>
                      <li className="mb-2">
                        <h3 className="font-bold">
                          Master's Degree in Information Technology
                        </h3>
                        <p className="text-gray-500">New York University</p>
                        <p>Graduated in 2021 with a 4.0 GPA.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="font-bold text-xl mb-4">Interests</h2>
                    <ul>
                      <li>Reading books on technology and business</li>
                      <li>Watching documentaries about nature and science</li>
                      <li>Playing basketball and tennis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
