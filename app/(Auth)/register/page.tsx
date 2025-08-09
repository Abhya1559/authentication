"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setError("Please check the credentials");
      }
      router.push("/login");
    } catch (error) {}
  };
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <Link
        href="/"
        className="absolute top-4 left-4 text-red-400 hover:text-red-600"
      >
        Home
      </Link>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex mt-10 flex-col gap-4 border-2 rounded-2xl p-10 bg-gray-800 max-w-md w-full"
      >
        {error && <p>{error}</p>}
        <h1 className="font-bold text-4xl text-center">Register</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-lg">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 rounded-xl p-4 "
            placeholder="Enter your name"
            autoComplete="off"
            required
          />
        </div>

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

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:text-orange-400">
            Login
          </Link>
        </p>

        <button
          type="submit"
          className="border-red-400 cursor-pointer border-2 p-4 rounded-xl font-bold text-lg text-red-400 hover:bg-red-400 hover:text-white transition-colors"
        >
          Register
        </button>

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
