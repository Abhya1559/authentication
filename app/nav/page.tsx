export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b space-x-6 border-gray-700 bg-gray-800 text-white max-w-screen mx-auto">
      <div>
        <h1 className="font-bold text-3xl">Hello</h1>
      </div>
      <div>
        <ul className="flex space-x-6 font-medium">
          <li className="cursor-pointer hover:text-red-400">Home</li>
          <li className="cursor-pointer hover:text-red-400">About</li>
          <li className="cursor-pointer hover:text-red-400">Services</li>
          <li className="cursor-pointer hover:text-red-400">Ram</li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="border-2 border-red-400 px-5 py-3 rounded-2xl text-red-400 hover:bg-red-500 hover:text-white hover:border-0 cursor-pointer">
          Login
        </button>
        <button className="border-2 border-green-400 px-5 py-3 rounded-2xl text-green-400 hover:bg-green-500 hover:text-white hover:border-0 cursor-pointer">
          Register
        </button>
      </div>
    </nav>
  );
}
