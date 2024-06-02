"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/app/firebase-config";
import Sidebar from "../components/Sidebar";
import { doc, getDoc } from "firebase/firestore";
import withAuth from "@/app/auth_gaurd/withAuth";
const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const id = user.uid;
        
        try {
          const userDoc = await getDoc(doc(db, "admin", id));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [auth.currentUser]);

  return (
    <div className="flex bg-zinc-300">
      <Sidebar />
      <div className="flex-grow p-6">
          {userData ? (
            <div>
              <div>
                <div className="bg-black text-white w-full rounded-full font-bold text-center py-3">Welcome  {userData.name}</div>
                <div className="my-7 text-center font-semibold">You can update soil details and distributor details here</div>
                <div className="text-center">To update your profile click on this button <button className="text-red-600 bg-black rounded-full p-1 font-bold hover:bg-gray-700">Profile</button></div>
              
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
      </div>
    </div>
  );
}

export default withAuth(Home) ;
