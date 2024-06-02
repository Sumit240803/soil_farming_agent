// pages/users/get-soil/page.jsx
"use client"
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase-config';
import withAuth from '@/app/auth_gaurd/withAuth';
const GetSoil = () => {
  const [soils, setSoils] = useState([]);

  useEffect(() => {
    const fetchSoils = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Soil_Data"));
        const soilData = [];
        querySnapshot.forEach((doc) => {
          soilData.push({ id: doc.id, ...doc.data() });
        });
        setSoils(soilData);
      } catch (error) {
        console.error("Error fetching soil data: ", error);
      }
    };

    fetchSoils();
  }, []);
  return (
    <div>
      <h1>Soil Data</h1>
      <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {soils.map((soil) => (
            <li key={soil.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">Soil Type: <span className="font-normal">{soil.soilType}</span></p>
              <p className="mb-1">Soil Uses: <span className="font-normal">{soil.uses}</span></p>
              <p className="mb-1">Crops It Can Grow: <span className="font-normal">{soil.crops}</span></p>
              <p className="mb-1">Required Temperature: <span className="font-normal">{soil.temperature}</span></p>
              <p className="mb-1">Moisture: <span className="font-normal">{soil.moisture}</span></p>
              <p className="mb-1">Nutrients: <span className="font-normal">{soil.nutrients}</span></p>
              <p className="mb-1">Availability: <span className="font-normal">{soil.availability}</span></p>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default withAuth(GetSoil) ;
