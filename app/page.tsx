import { cookies } from "next/headers";
import HomeClient from "./HomeClient";
export default async function Home() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  return <HomeClient isLoggedIn={!!token} />;
}
