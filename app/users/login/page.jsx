"use client"
import { auth } from "@/app/firebase-config"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"
const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin =(e)=>{
        e.preventDefault();
        //const id = auth.currentUser.uid;
        try {
           signInWithEmailAndPassword(auth , email , password).then((user)=>{
            console.log(user);
            router.push(`/users/home`);
          })
          
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="min-h-screen bg-violet-700 flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">User Login</h1>
                <form onSubmit={handleLogin} className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-2 rounded border border-gray-300 bg-gray-100"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-4 rounded border border-gray-300 bg-gray-100"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                    <span className="text-center">Not Registered <Link href={'/users/register'} className="text-red-700 font-bold ">Register Here</Link></span>
                </form>
            </div>
        </div>
  )
}

export default page
