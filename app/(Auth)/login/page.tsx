"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.message || "Something went wrong");
      return;
    }
    router.refresh()
    router.push("/")
 
  };
  return (
    <div className="flex justify-center items-center min-h-screen  text-white">
      <Link
        rel="stylesheet"
        href="/"
        className="absolute top-4 left-4 text-blue-500 hover:text-blue-700 ml-2"
      >
        Home
      </Link>

      <form
        onSubmit={handleSubmit}
        action=""
        className="flex mt-10 flex-col gap-4 border-2 rounded-2xl p-10 bg-gray-800 w-full max-w-md"
      >
        <h1 className="font-bold text-4xl text-center">Login</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-xl p-4 "
            placeholder="Enter your email"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold text-lg">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-xl p-4 "
            placeholder="******"
            autoComplete="new-password"
            required
          />
        </div>

        <button
          type="submit"
          className="border-blue-500 border-2 mt-2 cursor-pointer text-blue-500 font-semibold text-lg rounded-2xl p-4 hover:bg-blue-600 hover:text-white transition-colors"
        >
          Submit
        </button>

        <p className="text-center text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold hover:text-orange-400"
          >
            Register
          </Link>
        </p>

        <p className="text-gray-400 text-xs mt-4">
          By clicking submit, you agree to our{" "}
          <a href="#" className="font-semibold hover:text-orange-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-semibold hover:text-orange-400">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}
