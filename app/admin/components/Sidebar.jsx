// /admin/components/Sidebar.jsx
"use client";
import Link from 'next/link';
import { auth } from '@/app/firebase-config';
import { useRouter } from "next/navigation";

const Sidebar = () => {
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

  return (
    <div className="bg-violet-500 h-screen w-48 px-6 py-3 mr-3">
      <ul className='space-y-11 text-white font-semibold mt-7'>
        <li>
          <Link href={`/admin/add-soil`} className='rounded-lg bg-black p-2'>
            Add Soil Info
          </Link>
        </li>
        <li>
          <Link href={`/admin/add-distributor`} className='  rounded-lg bg-black p-2'>
            Add Distributor
          </Link>
        </li>
        <li>
          <button onClick={handleChange} className=' rounded-lg bg-green-500 p-2'>LogOut</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
