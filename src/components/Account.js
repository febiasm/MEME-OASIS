import { Link } from "react-router-dom";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';


function Account() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handlePictureChange(event) {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      id: uuidv4(),
      name,
      age,
      phone,
      profilePicture,
    };

    // Do something with the user data, e.g. save it to a database

    setName('');
    setAge('');
    setPhone('');
    setProfilePicture(null);
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Display Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} className="w-full border border-gray-400 p-2 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} className="w-full border border-gray-400 p-2 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} className="w-full border border-gray-400 p-2 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="picture" className="block text-gray-700 font-bold mb-2">Profile Picture</label>
          <input type="file" id="picture" onChange={handlePictureChange} accept="image/*" className="w-full border border-gray-400 p-2 rounded-md" />
        </div>
       
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Create Account</button>

      </form>
      {profilePicture && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Your Card</h2>
          <div className="w-64 h-80 border border-gray-400 p-4">
            <img src={profilePicture} alt={name} className="w-full h-64 object-cover rounded-full mb-
2" />
<div className="text-center">
<h3 className="text-lg font-bold">{name}</h3>
<p className="text-sm">{`Age: ${age} | Phone: ${phone}`}</p>

</div>
</div>
</div>
)}
</div>
);
}

ReactDOM.render(<Account />, document.getElementById('root'));

export default Account;
