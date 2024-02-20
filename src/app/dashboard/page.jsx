// ./src/app/dashboard/page.jsx

import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function DashboardPage(){
    const session = await getSession();
    if (!session?.user){
      redirect("/api/auth/login");
    }
    return (
        <div>
            {!!session?.user && (
                <div>
                    {session.user.email} - <a href="/api//auth/logout">LOGOUT</a>
                </div>
            )}
            Page should only be seen when logged in
        </div>
    )
};