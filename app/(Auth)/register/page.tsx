import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <form
        action=""
        className="flex mt-10 flex-col gap-4 border-2 rounded-2xl p-10 bg-gray-800 max-wd-md"
      >
        <h1 className="font-bold text-4xl text-center">Register</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-lg">
            Name
          </label>
          <input type="text" className="border-2 rounded-xl p-4 " placeholder="enter your name"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold text-lg">
            Email
          </label>
          <input type="email" className="border-2 rounded-xl p-4 " placeholder="enter your email"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold text-lg">
            Password
          </label>
          <input type="password" className="border-2 rounded-xl p-4 " placeholder="******"/>
        </div>
        <button className="border-red-400 border-2 p-4 rounded-xl font-bold text-lg text-red-400 hover:bg-red-400 hover:text-white cursor-pointer">
          Register
        </button>
        <p className="text-center text-gray-400 text-sm">
          already have an account?{" "}
          <Link href="/login" className="font-semibold hover:text-orange-400">
            Login
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
