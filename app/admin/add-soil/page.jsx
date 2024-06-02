"use client"
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/app/firebase-config';
import withAuth from '@/app/auth_gaurd/withAuth';
const AddSoilForm = () => {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    soilType: '',
    uses: '',
    crops: '',
    temperature: '',
    moisture: '',
    nutrients: '',
    availability: '',
  });

  // Event handler to update state when form inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, such as saving it to a database
    console.log(formData);
    setDoc(doc(db, "Soil_Data", formData.soilType), formData)
    // Reset the form after submission
    setFormData({
      soilType: '',
      uses: '',
      crops: '',
      temperature: '',
      moisture: '',
      nutrients: '',
      availability: '',
    });
  };

  return (
    <div className="min-h-screen bg-violet-700 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h1 className="text-black text-2xl font-bold mb-6 text-center">Add Soil Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-black">Soil Type:</label>
            <input type="text" name="soilType" value={formData.soilType} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="text-black">Uses:</label>
            <textarea name="uses" value={formData.uses} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none"></textarea>
          </div>
          <div className="mb-4">
            <label className="text-black">Crops it can grow:</label>
            <input type="text" name="crops" value={formData.crops} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="text-black">Temperature:</label>
            <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="text-black">Moisture:</label>
            <input type="text" name="moisture" value={formData.moisture} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="text-black">Nutrients:</label>
            <input type="text" name="nutrients" value={formData.nutrients} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="text-black">Availability:</label>
            <input type="text" name="availability" value={formData.availability} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 rounded-md transition duration-300 hover:bg-orange-600 focus:outline-none">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default withAuth(AddSoilForm);
