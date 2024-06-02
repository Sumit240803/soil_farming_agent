// components/AddDistributorForm.jsx
"use client"
import { useState } from 'react';
import { db } from '@/app/firebase-config';
import { setDoc , doc } from 'firebase/firestore';
import withAuth from '@/app/auth_gaurd/withAuth';
const AddDistributorForm = () => {
  const [formData, setFormData] = useState({
    distributorName: '',
    soilName: '',
    contactNumber: '',
    officeAddress: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setDoc(doc(db , "distributor", formData.distributorName ) , formData);
    // Reset the form after submission
    setFormData({
      distributorName: '',
      soilName: '',
      contactNumber: '',
      officeAddress: '',
      email: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h1 className="text-black text-2xl font-bold mb-6 text-center">Add Distributor</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-black">Distributor Name:</label>
            <input
              type="text"
              name="distributorName"
              value={formData.distributorName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black">Soil Name:</label>
            <input
              type="text"
              name="soilName"
              value={formData.soilName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black">Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black">Office Address:</label>
            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-black">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 rounded-md transition duration-300 hover:bg-green-600 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default withAuth(AddDistributorForm);
