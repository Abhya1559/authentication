"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();
  const handleLoginClick = () => {
    setAnimate(true);
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };
  const handleRegister = () => {
    setAnimate(true);
    setTimeout(() => {
      router.push("/register");
    }, 1000);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      {animate && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-500">
          <div className="w-20 h-20 border-8 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <h1 className="font-bold text-6xl bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
        Welcome to the home page
      </h1>
      <div className="flex justify-between items-center gap-10 mt-10">
        <button
          onClick={handleLoginClick}
          className="border-red-400 border-2 cursor-pointer  text-red-400 hover:bg-red-400 hover:text-white  px-8 py-4 font-bold text-xl rounded-xl"
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="border-green-400 border-2 cursor-pointer  text-green-400 hover:bg-green-400 hover:text-white  px-8 py-4 font-bold text-xl rounded-xl"
        >
          Register
        </button>
      </div>
    </div>
  );
}
