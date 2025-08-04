import Link from "next/link";
import Login from "./(Auth)/Login/page";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
     <Link href="/auth/Login/page" className="font-bold text-8xl">Login</Link>
    </div>
  );
}
