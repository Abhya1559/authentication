import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
     {/* <Login /> */}
      <h1 className="font-bold text-6xl bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 bg-clip-text text-transparent">Welcome to the home page</h1>
      <div className="flex justify-between items-center gap-10 mt-10">
        <Link href="/login" className="border-red-400 border-2  text-red-400 hover:bg-red-400 hover:text-white  px-8 py-4 font-bold text-xl rounded-xl">Login</Link>
        <Link href="/register" className="border-green-400 border-2  text-green-400 hover:bg-green-400 hover:text-white  px-8 py-4 font-bold text-xl rounded-xl">Register</Link>
      </div>
    </div>
  );
}
