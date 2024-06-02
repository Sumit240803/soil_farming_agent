// pages/users/get-soil/page.jsx
"use client"
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase-config';
import withAuth from '@/app/auth_gaurd/withAuth';
const GetSoil = () => {
  const [distributor, setDistributor] = useState([]);

  useEffect(() => {
    const fetchDistributor = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "distributor"));
        const distData = [];
        querySnapshot.forEach((doc) => {
          distData.push({ id: doc.id, ...doc.data() });
        });
        setDistributor(distData);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDistributor();
  }, []);
  return (
    <div className="bg-pink-500 min-h-screen flex flex-col justify-center items-center">
      {distributor ? (
        <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10">
          {distributor.map((dist) => (
            <li key={dist.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">
                Name: <span className="font-normal">{dist.distributorName}</span>
              </p>
              <p className="mb-1">
                Soil: <span className="font-normal">{dist.soilName}</span>
              </p>
              <p className="mb-1">
                Contact Number: <span className="font-normal">{dist.contactNumber}</span>
              </p>
              <p className="mb-1">
                Office Address: <span className="font-normal">{dist.officeAddress}</span>
              </p>
              <p className="mb-1">
                Email: <span className="font-normal">{dist.email}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-white text-2xl">Loading...</div>
      )}
    </div>
  );
};

export default withAuth(GetSoil);
