export default function Login() {
  return (
    <div>
      <h1 className="font-bold text-8xl">hello</h1>
      <form
        action=""
        className="flex mt-10 flex-col gap-4 border-2 rounded-2xl p-10 bg-gray-800"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold text-xl">
            Email
          </label>
          <input type="text" className="border-2 rounded-2xl p-4" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            {" "}
            <label htmlFor="" className="font-semibold text-xl">
              Password
            </label>
            <a href="" className="hover:text-orange-400">
              Forgot Password
            </a>
          </div>
          <input type="password" className="border-2 rounded-2xl p-4" />
        </div>
        <button className="bg-blue-500 mt-2 cursor-pointer text-white font-semibold text-xl rounded-2xl p-4 hover:bg-blue-600 transition-colors">
          Submit
        </button>
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="" className="font-semibold hover:text-orange-400">
            register
          </a>
        </p>

        <div>
          <p className="text-gray-400 text-sm">
            By clicking submit, you agree to our{" "}
            <a href="" className="font-semibold hover:text-orange-400">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="" className="font-semibold hover:text-orange-400">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
