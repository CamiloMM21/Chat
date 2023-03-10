import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {

  const userInfo  = useContext(AuthContext)
  console.log(AuthContext)
  const [age, setAge] = useState("30");
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-700 rounded-sm shadow-md overflow-hidden w-[100%] h-[100vh] ">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-48 pt-2 pl-2  ">
          <img
            className="h-48 w-full object-cover border-spacing-y-72 border-8 border-red-100   border-gray-600 cursor-pointer hover:scale-110 transform transition-all duration-200 ease-in-out   "
            src={userInfo.currentUser.photoURL}
            alt="Profile image"
          />
        </div>
        <div className="p-4 ">
          <h1 className="text-3xl font-bold mb-2 text-white">{userInfo.currentUser.displayName}</h1>
          <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
            {userInfo.currentUser.email}
          </div>
          <div className="ml-[680px] max-sm:ml-auto max-md:ml-auto text-gray-200  ">
            <h2 className="text-xl font-bold mb-4 ">Description</h2>
            <textarea
              className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring bg-orange-200 focus:ring-indigo-500 focus:ring-opacity-50 text-black"
              value={description}
              onChange={handleDescriptionChange}
              
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Edad:</h2>
              <p>{age}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-white">
          Productos publicados por
        </h2>
        <p className="text-gray-100 mb-4">@jenifer calderon</p>
        <div className="flex flex-wrap justify-center">
          <div className="bg-yellow-200 w-[200px] p-2 rounded-md mx-2 my-2 hover:bg-yellow-300 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out">
            <img
              className="w-[100%] h-24 object-cover rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Electrodom%C3%A9sticos_de_l%C3%ADnea_blanca_08.JPG/1200px-Electrodom%C3%A9sticos_de_l%C3%ADnea_blanca_08.JPG"
              alt="Tag image"
            />
            <p className="text-slate-600 mt-2 font-bold">Nombre xxx</p>
          </div>
          <div className="bg-green-200 w-[200px] p-2 rounded-md mx-2 my-2 hover:bg-green-300  cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out">
            <img
              className="w-[100%] h-24  object-cover rounded-md"
              src="https://cdn.pixabay.com/photo/2011/04/03/13/35/bread-6047_1280.jpg"
              alt="Tag image"
            />
            <p
              className="text-slate-600 mt-2 font-bold"
            >
              Tag description
            </p>
          </div>
          <div className="bg-blue-200 w-[200px] p-2 rounded-md mx-2 my-2 hover:bg-blue-300  cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out">
            <img
              className="w-[100%] h-24 object-cover rounded-md"
              src="https://cdn.wpsandwatch.com/bundles/whirlpoolkitchenaidmain/images/com-cat-intro/sda/mixer-small.jpg"
              alt="Tag image"
            />
            <p className="text-slate-600 mt-2 font-bold ">Tag description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
