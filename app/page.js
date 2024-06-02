import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-row">
    {/** Left Side */}
      <div className="flex w-1/2 h-screen text-white bg-black justify-center">
      <div className="flex font-semibold text-3xl items-center "> Welcome to Soil Farming Agent</div>  
      </div>

      <div className="flex flex-col items-center justify-center bg-orange-300 w-1/2 space-y-5">
      <div className="bg-white font-semibold text-2xl text-black rounded-full px-3">
        <Link href={'/admin/login'}>Login as Admin</Link>
      </div>  
      <div className="bg-white font-semibold text-2xl text-black rounded-full px-3">
        <Link href={'/users/login'}>Login/Register as Farmer</Link>
      </div>  
      </div>    
   </div>
  /**
    <div className="bg-white min-h-screen flex flex-col">
      <nav className="bg-violet-700 py-4">
        <div className="container mx-auto flex justify-between items-center">
         
          <div className="text-white text-2xl font-bold">
            Soil Farming Agent
          </div>
         
          <div className="text-white">
            <Link href="/admin/register">
              <span className="text-white mr-4 cursor-pointer">Admin</span>
            </Link>
            <Link href="/users/register">
              <span className="text-white cursor-pointer">User</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}>
        <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Soil Farming Agent</h1>
          <p className="text-xl mb-6">Manage soil details and users efficiently with our system</p>
          <div>
            <Link href="/admin/register">
             Admin Register
            </Link>
            <Link href="/users/register">
             User Register
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-violet-700 py-4">
        <div className="container mx-auto text-white text-center">
          &copy; {new Date().getFullYear()} Soil Farming Agent. All rights reserved.
        </div>
      </footer>
      </div>
      */
    );
}
