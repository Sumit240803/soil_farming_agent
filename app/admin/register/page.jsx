"use client"
import { auth, db } from "@/app/firebase-config"
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setDoc, doc } from "firebase/firestore";
import ReactModal from "react-modal";

const AdminSign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password).then((users) => {
                console.log(users);
                sendEmailVerification(auth.currentUser).then(() => {
                    setIsOpen(true);
                }).then(() => {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            const id = user.uid;
                            console.log(id)
                            setDoc(doc(db, "admin", id), {
                                name: "Admin",
                                email: email,
                                state: '',
                                country: '',
                                phoneNum: '',
                                address: ''
                            })
                        }
                    })
                }).then(() => { router.push("/admin/login") })
            })
        } catch (error) {
            console.log("Some error occurred", error);
        }
    }

    return (
        <div className="min-h-screen bg-violet-700 flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Admin Signup</h1>
                <form onSubmit={handleSubmit} className="mb-4">
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
                        Sign Up
                    </button>
                </form>
                <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} contentLabel="Email Verification" className="modal">
                    <div className="modal-content p-6 rounded-lg border border-gray-300 bg-white">
                        <h2 className="bg-blue-500 text-white font-bold py-2 mb-4 rounded-t-lg text-center">Email Verification</h2>
                        <p>Email verification link sent. Click on the link to complete the signup.</p>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </ReactModal>
            </div>
        </div>
    );
};

export default AdminSign;
