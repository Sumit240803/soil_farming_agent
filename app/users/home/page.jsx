"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import withAuth from "@/app/auth_gaurd/withAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  const handleChange = async () => {
    try {
      await auth.signOut();
      router.replace('/');
      console.log("Sign Out Successfully");
    } catch (error) {
      console.log(error);
    }
  };
   const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;
            if (user) {
                const id = user.uid;
                try {
                    const userDoc = await getDoc(doc(db, "users", id));
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
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      {userData?(<main className="flex-grow flex flex-col justify-center items-center w-full px-4">
        <div className="bg-purple-900 p-6 rounded-lg w-full max-w-md text-center">
          <div className="text-white text-3xl mb-4">Welcome {userData.name}</div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <div className="text-white text-xl">Click here to get Soil Details</div>
              <div className="bg-white text-center w-fit my-2 text-black font-bold px-4 py-2 rounded">
                <Link href={'/users/get-soil'}>Soil Details</Link>
              </div>
            </div>
            <div>
              <div className="text-white text-xl">Click here to get Distributor Details</div>
              <div className="bg-white text-center w-fit my-2 text-black font-bold px-4 py-2 rounded">
                <Link href={'/users/get-distributor'}>Distributor Details</Link>
              </div>
            </div>
            <button onClick={handleChange} className=' rounded-lg bg-green-500 p-2'>LogOut</button>
          </div>
        </div>
      </main>) : <div>Loading...</div>}
      
    </div>
      );
    }
export default withAuth(Home)