// ./src/app/page.jsx

import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  if (session?.user){
    redirect("/dashboard");
  }

  return (<a href="/api/auth/login">Login</a>);

}