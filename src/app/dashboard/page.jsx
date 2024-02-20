import { getSession } from "@auth0/nextjs-auth0";


export default async function DashboardPage(){
    const session = await getSession();

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